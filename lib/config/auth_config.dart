class AuthConfig {
  static const bool useFirebaseAuth = false; // Zmień na true dla Firebase
  static const bool useSimpleAuth = true;    // Prosty auth lokalny
  
  // Ustawienia lokalnego auth
  static const String defaultUsername = 'admin';
  static const String defaultPassword = 'admin123';
  static const int sessionTimeoutMinutes = 480; // 8 godzin
  
  // Firebase konfiguracja (gdy useFirebaseAuth = true)
  static const bool enableEmailAuth = true;
  static const bool enableGoogleAuth = false;
  static const bool enableAppleAuth = false;
  
  // Ustawienia sesji
  static const String tokenKey = 'auth_token';
  static const String userKey = 'current_user';
  static const String lastLoginKey = 'last_login';
  
  // Uprawnienia domyślne
  static const List<String> adminPermissions = [
    'create_protocol',
    'edit_protocol',
    'delete_protocol',
    'view_all_protocols',
    'manage_users',
    'export_data',
    'sync_cloud',
  ];
  
  static const List<String> technicianPermissions = [
    'create_protocol',
    'edit_protocol',
    'view_own_protocols',
    'export_own_data',
  ];
  
  static const List<String> managerPermissions = [
    'create_protocol',
    'edit_protocol',
    'delete_protocol',
    'view_all_protocols',
    'export_data',
    'sync_cloud',
  ];
  
  static List<String> getPermissionsForRole(String role) {
    switch (role.toLowerCase()) {
      case 'admin':
        return adminPermissions;
      case 'manager':
        return managerPermissions;
      case 'technician':
      default:
        return technicianPermissions;
    }
  }
  
  static bool isValidRole(String role) {
    return ['admin', 'manager', 'technician'].contains(role.toLowerCase());
  }
}
