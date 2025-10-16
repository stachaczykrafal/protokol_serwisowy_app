// ignore_for_file: avoid_web_libraries_in_flutter, deprecated_member_use
import 'dart:js' as js;
import 'dart:typed_data';

/// Funkcja do uploadu PDF protokołu do SharePoint.
/// Wywołuje JavaScript funkcję window.SPUP.uploadProtocolPdfDefault.
/// Wymaga, aby msal-sharepoint.js był załadowany w index.html.
Future<void> uploadProtocolPdfDefaultBytes({
  required Uint8List pdfBytes,
  required String filename,
  String? folderPath,
  Map<String, String>? metadata,
}) async {
  final blob = js.JsObject(js.context['Blob'], [js.JsArray.from(pdfBytes), js.JsObject.jsify({'type': 'application/pdf'})]);
  
  final opts = <String, dynamic>{
    'folderPath': folderPath ?? '',
    'metadata': metadata ?? {},
  };
  
  // Wywołaj JS funkcję
  final result = await js.context.callMethod('SPUP.uploadProtocolPdfDefault', [blob, filename, js.JsObject.jsify(opts)]);
  
  // Opcjonalnie: loguj wynik (np. webUrl)
  print('Upload result: $result');
}