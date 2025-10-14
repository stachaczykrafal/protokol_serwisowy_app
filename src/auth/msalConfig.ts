import { Configuration, PopupRequest, PublicClientApplication, InteractionRequiredAuthError } from '@azure/msal-browser';

// Aplikacja działa wyłącznie jako SPA (web w SharePoint)
export const WEB_ONLY = true;

export const msalConfig: Configuration = {
  auth: {
    clientId: 'd2d5f6e0-734b-4016-b590-8af18cabbae4',
    authority: 'https://login.microsoftonline.com/4d6f1a92-7238-45ba-8f35-a8278259662c',
    redirectUri: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
    navigateToLoginRequestUrl: true
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false
  },
  system: {
    allowRedirectInIframe: true // istotne dla osadzenia jako web part (iframe)
  }
};

export const graphScopes = [
  'openid',
  'profile',
  'offline_access',
  'User.Read',
  // Ujednolicone – pełny dostęp jak w Flutter:
  'Files.ReadWrite.All',
  'Sites.ReadWrite.All'
  // (Opcjonalnie dodaj 'Sites.Read.All' jeśli naprawdę potrzebne – zwykle nadmiarowe przy ReadWrite.All)
];

export const loginRequest: PopupRequest = { scopes: graphScopes };

let _pca: PublicClientApplication | null = null;
export function getPca() {
  if (!_pca) _pca = new PublicClientApplication(msalConfig);
  return _pca;
}

export async function processRedirect() {
  try {
    const result = await getPca().handleRedirectPromise();
    if (result?.account) {
      return result.account;
    }
  } catch {
    /* ignore */
  }
  return null;
}

export async function ensureMsalLogin(scopes = graphScopes) {
  const pca = getPca();
  const redirectAcc = await processRedirect();
  if (redirectAcc) return redirectAcc;

  let account = pca.getAllAccounts()[0];
  if (account) {
    // próbujemy silent
    try {
      await pca.acquireTokenSilent({ account, scopes });
      return account;
    } catch {
      // kontynuuj do interakcji
    }
  }
  // popup -> fallback redirect
  try {
    const r = await pca.loginPopup({ scopes });
    account = r.account!;
    return account;
  } catch (e: any) {
    if (
      e instanceof InteractionRequiredAuthError ||
      String(e?.errorMessage || e).includes('popup') ||
      String(e?.message || e).includes('frame')
    ) {
      await pca.loginRedirect({ scopes });
      return; // powrót po redirect
    }
    throw e;
  }
}

export async function acquireToken(scopes = graphScopes) {
  const pca = getPca();
  await ensureMsalLogin(scopes);
  const account = pca.getAllAccounts()[0];
  if (!account) throw new Error('Brak konta po logowaniu.');
  try {
    const silent = await pca.acquireTokenSilent({ account, scopes });
    return silent.accessToken;
  } catch {
    try {
      const pop = await pca.acquireTokenPopup({ account, scopes });
      return pop.accessToken;
    } catch {
      await pca.acquireTokenRedirect({ account, scopes });
      throw new Error('Redirect rozpoczęty – ponów po powrocie.');
    }
  }
}
