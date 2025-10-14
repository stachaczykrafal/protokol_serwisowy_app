import 'dart:async';
import '../models/user_model.dart';
import '../config/auth_config.dart';
import 'auth_service.dart';

class SimpleAuthService implements AuthService {
  static SimpleAuthService? _instance;
  static SimpleAuthService get instance => _instance ??= SimpleAuthService._();
  
  SimpleAuthService._();
  
  UserModel? _currentUser;
  final StreamController<UserModel?> _authStateController = 
      StreamController<UserModel?>.broadcast();

  @override
  Future<UserModel?> get currentUser async {
    return _currentUser;
  }

  @override
  Stream<UserModel?> get authStateChanges => _authStateController.stream;

  @override
  Future<UserModel?> signIn(String email, String password) async {
    // Prosty auth - sprawdź domyślne dane
    if (email == AuthConfig.defaultUsername && password == AuthConfig.defaultPassword) {
      _currentUser = UserModel(
        id: '1',
        email: email,
        displayName: 'Administrator',
        role: 'admin',
        createdAt: DateTime.now(),
        lastLoginAt: DateTime.now(),
        permissions: AuthConfig.getPermissionsForRole('admin'),
      );
      
      _authStateController.add(_currentUser);
      return _currentUser;
    }
    
    // Dodatkowi użytkownicy dla testów
    final testUsers = {
      'technik': 'haslo123',
      'manager': 'manager123',
    };
    
    if (testUsers.containsKey(email) && testUsers[email] == password) {
      final role = email == 'manager' ? 'manager' : 'technician';
      _currentUser = UserModel(
        id: DateTime.now().millisecondsSinceEpoch.toString(),
        email: email,
        displayName: email == 'manager' ? 'Menedżer' : 'Technik',
        role: role,
        createdAt: DateTime.now(),
        lastLoginAt: DateTime.now(),
        permissions: AuthConfig.getPermissionsForRole(role),
      );
      
      _authStateController.add(_currentUser);
      return _currentUser;
    }
    
    throw AuthServiceException('Nieprawidłowy email lub hasło');
  }

  @override
  Future<UserModel?> signUp(String email, String password, {String? displayName}) async {
    // W prostej implementacji nie tworzymy nowych użytkowników
    throw AuthServiceException('Tworzenie nowych kont nie jest dostępne w trybie prostym');
  }

  @override
  Future<void> signOut() async {
    _currentUser = null;
    _authStateController.add(null);
  }

  @override
  Future<void> resetPassword(String email) async {
    // W prostej implementacji nie resetujemy haseł
    throw AuthServiceException('Reset hasła nie jest dostępny w trybie prostym. Skontaktuj się z administratorem.');
  }

  @override
  Future<bool> get isAuthenticated async {
    return _currentUser != null && _currentUser!.isActive;
  }
}



