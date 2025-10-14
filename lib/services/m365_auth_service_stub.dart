class M365Config {
  static const String tenantId = '';
  static const String clientId = '';
  static const List<String> scopes = <String>[];
  static String get authority => '';
  static String get redirectUri => '';
}

class M365AuthService {
  M365AuthService._();
  static final M365AuthService instance = M365AuthService._();

  Future<void> ensureSignedIn() async {
    throw UnsupportedError('MSAL dostępny tylko w kompilacji web.');
  }

  Future<String> getAccessToken() async {
    throw UnsupportedError('MSAL dostępny tylko w kompilacji web.');
  }

  Future<void> signOut() async {}
}
