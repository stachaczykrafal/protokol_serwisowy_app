import 'auth_service.dart';
import 'simple_auth_service.dart';
import '../models/user_model.dart';
import 'package:flutter/foundation.dart';

class UniversalAuthService implements AuthService {
  static UniversalAuthService? _instance;
  static UniversalAuthService get instance => _instance ??= UniversalAuthService._();
  
  UniversalAuthService._();
  
  // Smart platform detection - Only Desktop uses Simple Auth (no Firebase on Windows)
  static bool get useSimpleAuth {
    if (kIsWeb) return false; // Web używa Firebase (gdy dostępny)
    if (defaultTargetPlatform == TargetPlatform.android) return false; // Android używa Firebase
    if (defaultTargetPlatform == TargetPlatform.iOS) return false; // iOS używa Firebase
    return true; // Desktop (Windows/Linux/macOS) używa Simple
  }
  
  late final AuthService _implementation = _getImplementation();
  
  static AuthService _getImplementation() {
    // Na razie tylko Simple Auth (offline mode)
    return SimpleAuthService.instance;
  }

  @override
  Future<UserModel?> get currentUser => _implementation.currentUser;

  @override
  Stream<UserModel?> get authStateChanges => _implementation.authStateChanges;

  @override
  Future<UserModel?> signIn(String email, String password) => _implementation.signIn(email, password);

  @override
  Future<UserModel?> signUp(String email, String password, {String? displayName}) => _implementation.signUp(email, password, displayName: displayName);

  @override
  Future<void> signOut() => _implementation.signOut();

  @override
  Future<void> resetPassword(String email) => _implementation.resetPassword(email);

  @override
  Future<bool> get isAuthenticated => _implementation.isAuthenticated;

  // Utility methods
  bool get isUsingFirebase => false; // Na razie wyłączone
  bool get isUsingSimpleAuth => true; // Na razie zawsze Simple
  
  String get implementationType => 'Simple Local (Offline Mode)';
  
  String get platformInfo {
    if (kIsWeb) return 'Web (Offline Mode)';
    if (defaultTargetPlatform == TargetPlatform.android) return 'Android (Offline Mode)';
    if (defaultTargetPlatform == TargetPlatform.iOS) return 'iOS (Offline Mode)';
    if (defaultTargetPlatform == TargetPlatform.windows) return 'Windows (Offline Mode)';
    if (defaultTargetPlatform == TargetPlatform.linux) return 'Linux (Offline Mode)';
    if (defaultTargetPlatform == TargetPlatform.macOS) return 'macOS (Offline Mode)';
    return 'Unknown Platform (Offline Mode)';
  }

  // Backward compatibility methods for old UI code
  Future<bool> get isLoggedIn async => await isAuthenticated;

  Future<String?> get currentUserId async {
    final user = await currentUser;
    return user?.id;
  }

  Future<String?> get currentUserEmail async {
    final user = await currentUser;
    return user?.email;
  }

  // Legacy methods for compatibility with old login screen
  Future<bool> login(String email, String password) async {
    final user = await signIn(email, password);
    return user != null;
  }

  Future<void> logout() async {
    await signOut();
  }
}
