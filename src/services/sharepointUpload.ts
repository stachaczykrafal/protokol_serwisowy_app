import { PublicClientApplication, AccountInfo, InteractionRequiredAuthError } from '@azure/msal-browser';
import { msalConfig, loginRequest } from '../auth/msalConfig';

// Wartości z Twoich zrzutów ekranu (Entra ID):
export const AAD = {
  tenantId: '4d6f1a92-7238-45ba-8f35-a8278259662c', // ujednolicone z konfiguracją Flutter
  authority: 'https://login.microsoftonline.com/4d6f1a92-7238-45ba-8f35-a8278259662c',
  oauth2: {
    authorizeV2: 'https://login.microsoftonline.com/4d6f1a92-7238-45ba-8f35-a8278259662c/oauth2/v2.0/authorize',
    tokenV2: 'https://login.microsoftonline.com/4d6f1a92-7238-45ba-8f35-a8278259662c/oauth2/v2.0/token'
  },
  // Identyfikator aplikacji (klienta) z widoku "Protokoły"
  clientId: 'd2d5f6e0-734b-4016-b590-8af18cabbae4',
  // Punkt końcowy Graph
  graphBase: 'https://graph.microsoft.com',
  // Z "Uwidocznij interfejs API" (Application ID URI) – informacyjnie
  appIdUri: 'api://d2d5f6e0-734b-4016-b590-8af18cabbae4'
};

// Domyślne parametry SharePoint z podanego adresu:
// https://klimatimeco.sharepoint.com/sites/Klimatimecosp.zo.o/Protokoly/Forms/AllItems.aspx
export const DEFAULT_SP = {
  hostname: 'klimatimeco.sharepoint.com',
  sitePath: 'sites/Klimatimecosp.zo.o',
  libraryName: 'Protokoly',
  defaultFolderPath: '' // opcjonalnie ustaw np. '2025-09' albo 'Protokoły'
};

// Pomocnik do tworzenia UploadOptions z domyślnymi wartościami.
export function makeUploadOptions(partial: {
  filename: string;
  file: Blob;
  folderPath?: string;
  metadata?: Record<string, any>;
  hostname?: string;
  sitePath?: string;
  libraryName?: string;
}) {
  return {
    hostname: partial.hostname ?? DEFAULT_SP.hostname,
    sitePath: partial.sitePath ?? DEFAULT_SP.sitePath,
    libraryName: partial.libraryName ?? DEFAULT_SP.libraryName,
    folderPath: partial.folderPath ?? DEFAULT_SP.defaultFolderPath,
    filename: partial.filename,
    file: partial.file,
    metadata: partial.metadata
  };
}

let pca: PublicClientApplication | null = null;
let account: AccountInfo | null = null;

function getPca() {
  if (!pca) pca = new PublicClientApplication(msalConfig);
  return pca;
}

async function processRedirectOnce() {
  try {
    const p = getPca();
    const result = await p.handleRedirectPromise();
    if (result?.account) account = result.account;
  } catch {
    /* ignore */
  }
}
let _redirectProcessed = false;

export async function ensureLogin(): Promise<void> {
  if (!_redirectProcessed) {
    _redirectProcessed = true;
    await processRedirectOnce();
  }
  const inst = getPca();
  if (account) return;

  const existing = inst.getAllAccounts();
  if (existing.length) {
    account = existing[0];
    try {
      await inst.acquireTokenSilent({ account, scopes: loginRequest.scopes });
      return;
    } catch {
      // continue
    }
  }

  const inIframe = window.self !== window.top;

  try {
    const resp = await inst.loginPopup(loginRequest);
    account = resp.account!;
  } catch (e: any) {
    if (
      inIframe ||
      e instanceof InteractionRequiredAuthError ||
      String(e?.message || e).includes('popup') ||
      String(e?.errorMessage || '').includes('blocked')
    ) {
      await inst.loginRedirect(loginRequest);
      return; // dalsza logika po powrocie
    }
    throw e;
  }
}

async function getToken(scopes = loginRequest.scopes): Promise<string> {
  await ensureLogin();
  const inst = getPca();
  if (!account) {
    const accs = inst.getAllAccounts();
    if (accs.length) account = accs[0];
  }
  if (!account) throw new Error('Brak konta (nie ukończono logowania).');

  try {
    const resp = await inst.acquireTokenSilent({ account, scopes });
    return resp.accessToken;
  } catch {
    try {
      const resp = await inst.acquireTokenPopup({ account, scopes });
      return resp.accessToken;
    } catch {
      await inst.acquireTokenRedirect({ account, scopes });
      throw new Error('Redirect token flow – ponów żądanie po powrocie.');
    }
  }
}

async function getSiteId(accessToken: string, hostname: string, sitePath: string): Promise<string> {
  const suff = sitePath ? `:/${sitePath}` : '';
  const url = `${AAD.graphBase}/v1.0/sites/${hostname}${suff}`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${accessToken}` } });
  if (!res.ok) throw new Error(`Failed to resolve site: ${res.status} ${await res.text()}`);
  const data = await res.json();
  return data.id;
}

async function getDriveId(accessToken: string, siteId: string, driveName: string): Promise<string> {
  const res = await fetch(`${AAD.graphBase}/v1.0/sites/${siteId}/drives`, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  if (!res.ok) throw new Error(`Failed to list drives: ${res.status} ${await res.text()}`);
  const data = await res.json();
  const drives = (data.value as any[]);
  const drive = drives.find(d => d.name === driveName);
  if (!drive) {
    const available = drives.map(d => d.name).join(', ');
    throw new Error(`Drive (library) not found: ${driveName}. Available: ${available}`);
  }
  return drive.id;
}

async function ensureFolderPath(accessToken: string, driveId: string, folderPath?: string): Promise<{ parentId: string; fullPath: string; }> {
  const clean = (folderPath || '').replace(/^\/+|\/+$/g, '');
  if (!clean) return { parentId: 'root', fullPath: '' };

  const segments = clean.split('/').filter(Boolean);
  let parentId = 'root';
  let currentPath = '';

  for (const segment of segments) {
    currentPath = currentPath ? `${currentPath}/${segment}` : segment;

    // Try read existing
    let itemRes = await fetch(`${AAD.graphBase}/v1.0/drives/${driveId}/root:/${encodeURI(currentPath)}`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    if (itemRes.status === 404) {
      // Create folder under parentId
      const createUrl = parentId === 'root'
        ? `${AAD.graphBase}/v1.0/drives/${driveId}/root/children`
        : `${AAD.graphBase}/v1.0/drives/${driveId}/items/${parentId}/children`;
      const createRes = await fetch(createUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: segment,
          folder: {},
          '@microsoft.graph.conflictBehavior': 'replace'
        })
      });
      if (!createRes.ok) throw new Error(`Failed to create folder '${segment}': ${createRes.status} ${await createRes.text()}`);
      const created = await createRes.json();
      parentId = created.id;
    } else if (itemRes.ok) {
      const item = await itemRes.json();
      parentId = item.id;
      // if item is not a folder, error
      if (!item.folder) throw new Error(`Path segment '${segment}' exists and is not a folder`);
    } else {
      throw new Error(`Failed to get folder '${currentPath}': ${itemRes.status} ${await itemRes.text()}`);
    }
  }

  return { parentId, fullPath: clean };
}

async function simpleUpload(accessToken: string, driveId: string, folderPath: string, filename: string, file: Blob) {
  const path = folderPath ? `${folderPath}/${filename}` : filename;
  const url = `${AAD.graphBase}/v1.0/drives/${driveId}/root:/${encodeURI(path)}:/content`;
  const res = await fetch(url, { method: 'PUT', headers: { Authorization: `Bearer ${accessToken}` }, body: file });
  if (!res.ok) throw new Error(`Upload failed: ${res.status} ${await res.text()}`);
  return res.json();
}

async function chunkedUpload(accessToken: string, driveId: string, folderPath: string, filename: string, file: Blob) {
  const path = folderPath ? `${folderPath}/${filename}` : filename;
  const sessionRes = await fetch(`${AAD.graphBase}/v1.0/drives/${driveId}/root:/${encodeURI(path)}:/createUploadSession`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ item: { '@microsoft.graph.conflictBehavior': 'replace', name: filename } })
  });
  if (!sessionRes.ok) throw new Error(`Create upload session failed: ${sessionRes.status} ${await sessionRes.text()}`);
  const { uploadUrl } = await sessionRes.json();

  const chunkSize = 5 * 1024 * 1024; // 5 MB
  const total = file.size;
  let start = 0;
  let lastResp: any = null;

  while (start < total) {
    const end = Math.min(start + chunkSize, total);
    const chunk = file.slice(start, end);
    const res = await fetch(uploadUrl, {
      method: 'PUT',
      headers: {
        'Content-Length': String(chunk.size),
        'Content-Range': `bytes ${start}-${end - 1}/${total}`
      },
      body: chunk
    });
    if (!(res.status === 202 || res.status === 201 || res.status === 200)) {
      throw new Error(`Chunk upload failed: ${res.status} ${await res.text()}`);
    }
    // 202 -> in-progress, 201/200 -> completed with DriveItem
    lastResp = await res.json().catch(() => null);
    start = end;
  }

  return lastResp; // DriveItem
}

export type UploadOptions = {
  hostname: string;      // np. contoso.sharepoint.com
  sitePath?: string;     // np. 'sites/DzialSerwisu'
  libraryName: string;   // np. 'Documents' / 'Dokumenty'
  folderPath?: string;   // np. 'Protokoły/2025-09'
  filename: string;      // np. 'Protokol-1234.pdf'
  file: Blob;            // PDF blob
  metadata?: Record<string, any>;
};

export async function uploadProtocolPdf(opts: UploadOptions): Promise<{ webUrl: string; itemId: string; }> {
  const token = await getToken();
  const siteId = await getSiteId(token, opts.hostname, opts.sitePath || '');
  const driveId = await getDriveId(token, siteId, opts.libraryName);
  const { fullPath } = await ensureFolderPath(token, driveId, opts.folderPath);

  const useChunked = opts.file.size > 4 * 1024 * 1024;
  const item = useChunked
    ? await chunkedUpload(token, driveId, fullPath, opts.filename, opts.file)
    : await simpleUpload(token, driveId, fullPath, opts.filename, opts.file);

  if (opts.metadata && item?.id) {
    await fetch(`${AAD.graphBase}/v1.0/drives/${driveId}/items/${item.id}/listItem/fields`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(opts.metadata)
    });
  }

  return { webUrl: item.webUrl, itemId: item.id };
}

// Szybkie użycie – domyślne wartości z DEFAULT_SP.
// Przykład: await uploadProtocolPdfDefault(pdfBlob, `Protokol-${nr}.pdf`, { folderPath: '2025-09', metadata: { NumerZlecenia: nr } });
export async function uploadProtocolPdfDefault(
  file: Blob,
  filename: string,
  opts?: {
    folderPath?: string;
    metadata?: Record<string, any>;
    hostname?: string;
    sitePath?: string;
    libraryName?: string;
  }
) {
  const upOpts = makeUploadOptions({
    filename,
    file,
    folderPath: opts?.folderPath,
    metadata: opts?.metadata,
    hostname: opts?.hostname,
    sitePath: opts?.sitePath,
    libraryName: opts?.libraryName
  });
  return uploadProtocolPdf(upOpts);
}

// Szybki test konfiguracji – zwraca siteId oraz listę bibliotek (drives) wraz z nazwami.
export async function testSharePointAccess(): Promise<{
  siteId: string;
  drives: { id: string; name: string; webUrl?: string }[];
  defaultDrive?: { id: string; name: string; webUrl?: string };
}> {
  const token = await getToken();
  const siteId = await getSiteId(token, DEFAULT_SP.hostname, DEFAULT_SP.sitePath);
  const res = await fetch(`${AAD.graphBase}/v1.0/sites/${siteId}/drives`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(`Failed to list drives: ${res.status} ${await res.text()}`);
  const data = await res.json();
  const drives = (data.value as any[]).map(d => ({ id: d.id, name: d.name, webUrl: d.webUrl }));
  const def = drives.find(d => d.name === DEFAULT_SP.libraryName);
  return { siteId, drives, defaultDrive: def };
}

// Uruchom raz po starcie aplikacji – zaloguje i sprawdzi dostęp do SharePoint.
export async function ensureM365Ready() {
  await ensureLogin();
  try {
    const info = await testSharePointAccess();
    // Możesz zalogować info.siteId oraz listę bibliotek do konsoli dla diagnostyki
    return info;
  } catch (e) {
    throw e;
  }
}

// === P E W N Y   G L O B A L N Y   E K S P O R T ===
declare global { interface Window { SPUP?: any; } }

function attachGlobal(reason: string) {
  if (typeof window === 'undefined') return;
  const api = {
    AAD,
    DEFAULT_SP,
    ensureLogin,
    ensureM365Ready,
    uploadProtocolPdf,
    uploadProtocolPdfDefault,
    makeUploadOptions,
    testSharePointAccess,
    rebind: () => attachGlobal('manual')
  };
  window.SPUP = { ...(window.SPUP || {}), ...api, __attachedAt: new Date().toISOString(), __reason: reason };
  // Diagnostyka w konsoli
  if (!('__silent' in window.SPUP)) {
    console.info('[SPUP] attached (reason=' + reason + ')', window.SPUP);
  }
}

// Automatyczne przypięcie (DOM gotowy lub natychmiast jeśli już)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => attachGlobal('domcontentloaded'));
} else {
  attachGlobal('immediate');
}

// Obsługa ręcznego prze-przypięcia (np. po dynamicznym doładowaniu innych skryptów)
window.addEventListener('SPUP:rebind', () => attachGlobal('event:rebind'));

// Minimalny side‑effect aby uniknąć eliminacji przez tree-shaking
void AAD, void DEFAULT_SP;
