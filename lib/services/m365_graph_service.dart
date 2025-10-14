import 'dart:convert';
import 'dart:typed_data';
import 'package:http/http.dart' as http;
import 'm365_auth_service.dart';

class M365DriveConfig {
  // Uzupełnij tylko gdy chcesz zapisywać do biblioteki SharePoint (rekomendowane dla zespołu):
  // Jak pobrać:
  // 1) siteId: Graph Explorer -> GET /v1.0/sites?search={nazwa_witryny} -> wybierz id
  //    lub: GET /v1.0/sites/{hostname}:/sites/{sciezka}: -> pole id
  // 2) driveId: GET /v1.0/sites/{siteId}/drives -> wybierz bibliotekę (np. Dokumenty)
  static const String? siteId = null;   // <--- TU (dla OneDrive zostaw null)
  static const String? driveId = null;  // <--- TU (dla OneDrive zostaw null)

  // Główny folder na protokoły
  static const String rootFolder = 'Protokoly';
}

class M365GraphService {
  final _auth = M365AuthService.instance;
  static const String _graph = 'https://graph.microsoft.com/v1.0';

  Future<Uri> _contentUploadUri(String pathWithinRoot) async {
    if (M365DriveConfig.siteId != null && M365DriveConfig.driveId != null) {
      return Uri.parse('$_graph/sites/${M365DriveConfig.siteId}/drives/${M365DriveConfig.driveId}/root:/$pathWithinRoot:/content');
    }
    return Uri.parse('$_graph/me/drive/root:/$pathWithinRoot:/content');
  }

  Future<Uri> _childrenUri(String folderWithinRoot) async {
    if (M365DriveConfig.siteId != null && M365DriveConfig.driveId != null) {
      return Uri.parse('$_graph/sites/${M365DriveConfig.siteId}/drives/${M365DriveConfig.driveId}/root:/$folderWithinRoot:/children');
    }
    return Uri.parse('$_graph/me/drive/root:/$folderWithinRoot:/children');
  }

  Future<void> uploadProtocolPdf({
    required Uint8List bytes,
    required String path, // np. 'Protokoly/2025/KLIENT/X-123.pdf'
    Map<String, String>? metadata, // działa dla SharePoint (listItem fields)
    String conflictBehavior = 'rename',
  }) async {
    final token = await _auth.getAccessToken();
    final uri = await _contentUploadUri(path);
    final res = await http.put(
      uri.replace(queryParameters: {'@microsoft.graph.conflictBehavior': conflictBehavior}),
      headers: {'Authorization': 'Bearer $token', 'Content-Type': 'application/pdf'},
      body: bytes,
    );
    if (res.statusCode >= 300) {
      throw Exception('Upload failed: ${res.statusCode} ${res.body}');
    }

    if (metadata != null && M365DriveConfig.siteId != null && M365DriveConfig.driveId != null) {
      final driveItem = json.decode(res.body) as Map<String, dynamic>;
      final itemId = driveItem['id'] as String?;
      if (itemId != null) {
        final patchUri = Uri.parse('$_graph/sites/${M365DriveConfig.siteId}/drives/${M365DriveConfig.driveId}/items/$itemId/listItem/fields');
        final patchRes = await http.patch(
          patchUri,
          headers: {'Authorization': 'Bearer $token', 'Content-Type': 'application/json'},
          body: json.encode(metadata),
        );
        if (patchRes.statusCode >= 300) {
          throw Exception('Set metadata failed: ${patchRes.statusCode} ${patchRes.body}');
        }
      }
    }
  }

  Future<List<Map<String, dynamic>>> listProtocols({String folder = M365DriveConfig.rootFolder}) async {
    final token = await _auth.getAccessToken();
    final uri = await _childrenUri(folder);
    final res = await http.get(uri, headers: {'Authorization': 'Bearer $token'});
    if (res.statusCode >= 300) {
      throw Exception('List failed: ${res.statusCode} ${res.body}');
    }
    final data = json.decode(res.body) as Map<String, dynamic>;
    final List items = (data['value'] as List?) ?? [];
    return items.cast<Map<String, dynamic>>();
  }
}
