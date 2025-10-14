// ignore_for_file: avoid_web_libraries_in_flutter, deprecated_member_use
import 'dart:async';
import 'dart:html' as html;
import 'package:msal_js/msal_js.dart' as msal;
import 'dart:convert' as convert;
import 'dart:typed_data';
import 'dart:js_util' as js_util;

class M365Config {
  // Pozwala nadpisać podczas build:
  // flutter build web --dart-define=M365_TENANT_ID=xxxx --dart-define=M365_CLIENT_ID=yyyy
  static const String tenantId = String.fromEnvironment(
    'M365_TENANT_ID',
    // Przywrócono poprawny GUID tenanta
    defaultValue: '4d6f1a92-7238-45ba-8f35-a8278259662c',
  );
  static const String clientId = String.fromEnvironment(
    'M365_CLIENT_ID',
    defaultValue: 'd2d5f6e0-734b-4016-b590-8af18cabbae4',
  );
  static const List<String> scopes = <String>[
    'User.Read',
    'Files.ReadWrite.All',
    'Sites.ReadWrite.All',
    'offline_access',
    'openid',
    'profile',
  ];
  static String get authority => 'https://login.microsoftonline.com/$tenantId';
  static String get redirectUri => html.window.location.origin;
}

class M365AuthService {
  M365AuthService._();
  static final M365AuthService instance = M365AuthService._();

  static bool get isEmbeddedInIframe => html.window.top != html.window.self;

  late final msal.PublicClientApplication _pca = msal.PublicClientApplication(
    msal.Configuration()
      ..auth = (msal.BrowserAuthOptions()
        ..clientId = M365Config.clientId
        ..authority = M365Config.authority
        ..redirectUri = M365Config.redirectUri
        ..navigateToLoginRequestUrl = true)
      ..cache = (msal.CacheOptions()
        ..cacheLocation = msal.BrowserCacheLocation.localStorage
        ..storeAuthStateInCookie = false)
      // Osadzanie w SharePoint (iframe) – jeśli wspiera wersja msal_js:
      ..system = (msal.BrowserSystemOptions()
        ..allowRedirectInIframe = true),
  );

  msal.AccountInfo? _account;

  bool get isSignedIn => _account != null;

  Future<void> _processRedirectIfNeeded() async {
    // handleRedirectPromise is not available in the current msal_js version; accounts will be loaded from cache.
  }

  Future<void> ensureSignedIn() async {
    // Obsłuż ewentualny powrót z loginRedirect
    await _processRedirectIfNeeded();

    // Jeśli już mamy konto – nic dalej
    if (_account != null) return;

    final accounts = _pca.getAllAccounts();
    if (accounts.isNotEmpty) {
      _account = accounts.first;
      return;
    }

    // Najpierw spróbuj silent z „most recent account” (brak -> przejdź dalej)
    try {
      final silentAcc = accounts.isNotEmpty ? accounts.first : null;
      if (silentAcc != null) {
        await _pca.acquireTokenSilent(msal.SilentRequest()
          ..account = silentAcc
          ..scopes = M365Config.scopes);
        _account = silentAcc;
        return;
      }
    } catch (_) {
      // przejdź do interakcji
    }

    // W iframe preferuj redirect (popup bywa blokowany)
    final preferRedirect = isEmbeddedInIframe;

    if (preferRedirect) {
      try {
        await _pca.loginRedirect(msal.RedirectRequest()..scopes = M365Config.scopes);
        return;
      } catch (_) {
        // jeśli redirect nie powiedzie się, spróbuj dalej popup
      }
    }

    // Popup + fallback do redirect
    try {
      await _pca.loginPopup(msal.PopupRequest()..scopes = M365Config.scopes);
      final accs = _pca.getAllAccounts();
      if (accs.isNotEmpty) _account = accs.first;
    } catch (e) {
      await _pca.loginRedirect(msal.RedirectRequest()..scopes = M365Config.scopes);
    }
  }

  Future<String> getAccessToken() async {
    await ensureSignedIn();
    if (_account == null) {
      throw StateError('Brak zalogowanego konta po próbie logowania.');
    }
    try {
      final result = await _pca.acquireTokenSilent(msal.SilentRequest()
        ..account = _account!
        ..scopes = M365Config.scopes);
      return result.accessToken;
    } catch (_) {
      try {
        final result = await _pca.acquireTokenPopup(
          msal.PopupRequest()..scopes = M365Config.scopes,
        );
        return result.accessToken;
      } catch (_) {
        // Ostateczny fallback – redirect (np. iframe)
        await _pca.acquireTokenRedirect(
          msal.RedirectRequest()..scopes = M365Config.scopes,
        );
        // Po powrocie token będzie dostępny silent – na razie zwracamy Future, które się nie zakończy
        // Caller powinien ponowić wywołanie po redirect.
        throw StateError('Redirect flow initiated – ponów żądanie po powrocie.');
      }
    }
  }

  Future<void> signOut() async {
    final acc = _account;
    if (acc != null) {
      await _pca.logoutPopup(msal.EndSessionPopupRequest()..account = acc);
    }
    _account = null;
  }
}

class _SPDefaults {
  static const hostname = 'klimatimeco.sharepoint.com';
  static const sitePath = 'sites/Klimatimecosp.zo.o';
  static const libraryName = 'Protokoly'; // nazwa biblioteki dokumentów
}

/// Uploader do SharePoint (Graph API) używający tokenu z M365AuthService.
class SharePointUploader {
  SharePointUploader._();

  static const _graph = 'https://graph.microsoft.com/v1.0';

  // Dodano: poprawne kodowanie segmentów ścieżki (nie kodujemy "/")
  static String _encodePathSegments(String path) {
    return path
        .split('/')
        .where((s) => s.trim().isNotEmpty)
        .map(Uri.encodeComponent)
        .join('/');
  }

  static Future<html.HttpRequest> _http(String method, String url, String token,
      {Map<String, String>? headers, dynamic body, String? responseType}) {
    final req = html.HttpRequest();
    req
      ..open(method, url)
      ..setRequestHeader('Authorization', 'Bearer $token');
    (headers ?? const {}).forEach(req.setRequestHeader);
    if (responseType != null) req.responseType = responseType;
    final c = Completer<html.HttpRequest>();
    req.onLoad.listen((_) => c.complete(req));
    req.onError.listen((_) => c.completeError(StateError('HTTP error $method $url')));
    req.send(body);
    return c.future;
  }

  static Future<String> _resolveSiteId(String token, String hostname, String sitePath) async {
    final suffix = sitePath.isNotEmpty ? ':/$sitePath' : '';
    final url = '$_graph/sites/$hostname$suffix';
    final res = await _http('GET', url, token, responseType: 'json');
    final resStatus = res.status ?? 0;
    if (resStatus != 200) {
      throw StateError('Resolve site failed: $resStatus ${res.responseText}');
    }
    return (res.response as Object?) is Map ? (res.response as Map)['id'] as String : convert.jsonDecode(res.responseText!)['id'];
  }
  static Future<String> _getDriveId(String token, String siteId, String driveName) async {
    final url = '$_graph/sites/$siteId/drives';
    final res = await _http('GET', url, token, responseType: 'json');
    final resStatus = res.status ?? 0;
    if (resStatus != 200) {
      throw StateError('List drives failed: $resStatus ${res.responseText}');
    }
    final data = (res.response as Object?) is Map ? res.response as Map : convert.jsonDecode(res.responseText!);
    final List vals = data['value'] as List? ?? const [];
    final drive = vals.cast<Map>().firstWhere(
      (d) => (d['name'] as String?) == driveName,
      orElse: () => {},
    );
    if (drive.isEmpty) {
      final available = vals.map((d) => (d as Map)['name']).join(', ');
      throw StateError("Drive '$driveName' not found. Available: $available");
    }
    return drive['id'] as String;
  }
  static Future<Map<String, String>> _ensureFolderPath(String token, String driveId, String? folderPath) async {
    final clean = (folderPath ?? '').replaceAll(RegExp(r'^/+|/+$'), '');
    if (clean.isEmpty) return {'parentId': 'root', 'fullPath': ''};

    final segments = clean.split('/').where((s) => s.trim().isNotEmpty);
    String parentId = 'root';
    String currentPath = '';

    for (final seg in segments) {
      currentPath = currentPath.isEmpty ? seg : '$currentPath/$seg';
      final encPath = _encodePathSegments(currentPath);
      // GET istniejącego folderu: root:/<path>  (bez końcowego ":")
      final getUrl = '$_graph/drives/$driveId/root:/$encPath';
      final getRes = await _http('GET', getUrl, token);
      final getStatus = getRes.status ?? 0;
      if (getStatus == 404) {
        // utwórz folder pod parentId
        final createUrl = parentId == 'root'
            ? '$_graph/drives/$driveId/root/children'
            : '$_graph/drives/$driveId/items/$parentId/children';
        final body = convert.jsonEncode({
          'name': seg,
          'folder': {},
          '@microsoft.graph.conflictBehavior': 'replace',
        });
        final createRes = await _http('POST', createUrl, token,
            headers: {'Content-Type': 'application/json'}, body: body, responseType: 'json');
        final createStatus = createRes.status ?? 0;
        if (createStatus < 200 || createStatus >= 300) {
          throw StateError("Create folder '$seg' failed: $createStatus ${createRes.responseText}");
        }
        final created = (createRes.response as Object?) is Map ? createRes.response as Map : convert.jsonDecode(createRes.responseText!);
        parentId = created['id'] as String;
      } else if (getStatus >= 200 && getStatus < 300) {
        final item = convert.jsonDecode(getRes.responseText!);
        if ((item as Map)['folder'] == null) {
          throw StateError("Path segment '$seg' exists and is not a folder");
        }
        parentId = item['id'] as String;
      } else {
        throw StateError("Get folder '$currentPath' failed: $getStatus ${getRes.responseText}");
      }
    }

    return {'parentId': parentId, 'fullPath': clean};
  }

  static Future<Map> _simpleUpload(String token, String driveId, String folderPath, String filename, Uint8List bytes) async {
    final path = folderPath.isEmpty ? filename : '$folderPath/$filename';
    final encPath = _encodePathSegments(path);
    // Upload pliku: root:/<path>:/content  (wymaga ":" przed "/content")
    final url = '$_graph/drives/$driveId/root:/$encPath:/content';
    final res = await _http('PUT', url, token, body: bytes);
    final uploadStatus = res.status ?? 0;
    if (uploadStatus < 200 || uploadStatus >= 300) {
      throw StateError('Upload failed: $uploadStatus ${res.responseText}');
    }
    return convert.jsonDecode(res.responseText!);
  }

  static Future<Map> _chunkedUpload(String token, String driveId, String folderPath, String filename, Uint8List bytes) async {
    final path = folderPath.isEmpty ? filename : '$folderPath/$filename';
    final encPath = _encodePathSegments(path);
    // Sesja uploadu: root:/<path>:/createUploadSession
    final url = '$_graph/drives/$driveId/root:/$encPath:/createUploadSession';
    final sessRes = await _http('POST', url, token,
        headers: {'Content-Type': 'application/json'},
        body: convert.jsonEncode({
          'item': {
            '@microsoft.graph.conflictBehavior': 'replace',
            'name': filename,
          }
        }),
        responseType: 'json');
    final sessStatus = sessRes.status ?? 0;
    if (sessStatus < 200 || sessStatus >= 300) {
      throw StateError('Create upload session failed: $sessStatus ${sessRes.responseText}');
    }
    final session = (sessRes.response as Object?) is Map ? sessRes.response as Map : convert.jsonDecode(sessRes.responseText!);
    final uploadUrl = session['uploadUrl'] as String;

    const chunkSize = 5 * 1024 * 1024; // 5 MB
    int start = 0;
    Map last = {};
    while (start < bytes.length) {
      final end = (start + chunkSize < bytes.length) ? start + chunkSize : bytes.length;
      final slice = bytes.sublist(start, end);
      final res = await html.HttpRequest.request(
        uploadUrl,
        method: 'PUT',
        requestHeaders: {
          'Content-Type': 'application/octet-stream',
          'Content-Range': 'bytes $start-${end - 1}/${bytes.length}',
        },
        sendData: slice,
      );
      final st = res.status ?? 0;
      if (!(st == 202 || st == 201 || st == 200)) {
        throw StateError('Chunk upload failed: $st ${res.responseText}');
      }
      if ((res.responseText ?? '').isNotEmpty) {
        last = convert.jsonDecode(res.responseText!);
      }
      start = end;
    }
    return last;
  }
  /// Wgraj PDF do domyślnej biblioteki “Protokoly” w witrynie sites/Klimatimecosp.zo.o
  static Future<Map<String, String>> uploadPdfToDefault({
    required Uint8List pdfBytes,
    required String filename,
    String? folderPath, // np. '2025-10' albo 'Zlecenia/12345'
    Map<String, dynamic>? metadata,
  }) async {
    // 1) Token
    final token = await M365AuthService.instance.getAccessToken();
    // 2) Site i drive
    final siteId = await _resolveSiteId(token, _SPDefaults.hostname, _SPDefaults.sitePath);
    final driveId = await _getDriveId(token, siteId, _SPDefaults.libraryName);
    // 3) Folder
    final folder = await _ensureFolderPath(token, driveId, folderPath);
    final fullPath = folder['fullPath'] ?? '';
    // 4) Upload
    final useChunked = pdfBytes.length > 4 * 1024 * 1024;
    final item = useChunked
        ? await _chunkedUpload(token, driveId, fullPath, filename, pdfBytes)
        : await _simpleUpload(token, driveId, fullPath, filename, pdfBytes);
    // 5) Metadane (opcjonalnie)
    if (metadata != null && item['id'] != null) {
      final url = '$_graph/drives/$driveId/items/${item['id']}/listItem/fields';
      final patch = await _http('PATCH', url, token,
          headers: {'Content-Type': 'application/json'}, body: convert.jsonEncode(metadata));
      final patchStatus = patch.status ?? 0;
      if (patchStatus < 200 || patchStatus >= 300) {
        // nie przerywamy – tylko informacyjnie
        html.window.console.warn('Metadata update failed: $patchStatus ${patch.responseText}');
      }
    }
    return {
      'itemId': '${item['id']}',
      'webUrl': '${item['webUrl']}',
    };
  }
}

/// Prosty wrapper do użycia w Twoim handlerze "Generuj i zapisz".
Future<Map<String, String>> uploadProtocolPdfDefaultBytes({
  required Uint8List pdfBytes,
  required String filename,
  String? folderPath,
  Map<String, dynamic>? metadata,
}) {
  return SharePointUploader.uploadPdfToDefault(
    pdfBytes: pdfBytes,
    filename: filename,
    folderPath: folderPath,
    metadata: metadata,
  );
}

// ==== Mostek do konsoli dla szybkiego testu (opcjonalnie) ====
// Użycie w konsoli (na domenie Azure):
//   spupUploadPdfBase64('<BASE64_PDF>', 'Protokol-Test.pdf', '2025-10')
// Zwróci URL wgranej pozycji albo wyrzuci błąd w konsoli.
void attachSpupDartBridge() {
  try {
    js_util.setProperty(
      html.window,
      'spupUploadPdfBase64',
      js_util.allowInterop((String base64, String filename, [String? folder]) async {
        try {
          final bytes = convert.base64Decode(base64);
          final res = await SharePointUploader.uploadPdfToDefault(
            pdfBytes: bytes,
            filename: filename,
            folderPath: folder,
          );
          html.window.console.info('Uploaded: ${convert.jsonEncode(res)}');
          return res['webUrl'];
        } catch (e) {
          html.window.console.error('Upload error: $e');
          rethrow;
        }
      }),
    );
  } catch (e) {
    html.window.console.error('attachSpupDartBridge setup error: $e');
  }
}
// Automatyczne podpięcie mostka (bez wpływu na aplikację)
void autoAttachSpupBridge() {
  // spróbuj od razu
  attachSpupDartBridge();
  // i przy załadowaniu DOM
  html.document.addEventListener('DOMContentLoaded', (_) => attachSpupDartBridge());
}

// Wywołanie inicjujące (zapobiega tree-shaking)
// ignore: unused_local_variable
final spupInit = autoAttachSpupBridge();