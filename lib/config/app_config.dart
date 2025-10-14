import 'package:flutter/foundation.dart';

class AppConfig {
  // Domyślne dane logowania tylko w trybie debug/profile.
  static String? get devUsername => kReleaseMode ? null : 'admin';
  static String? get devPassword => kReleaseMode ? null : 'admin123';

  // Flaga: czy pokazywać podpowiedź z danymi logowania w UI
  static bool get showLoginHint => !kReleaseMode;
}
