import 'dart:async';
import '../models/user_model.dart';

abstract class AuthService {
  Future<UserModel?> get currentUser;
  Stream<UserModel?> get authStateChanges;
  Future<UserModel?> signIn(String email, String password);
  Future<UserModel?> signUp(String email, String password, {String? displayName});
  Future<void> signOut();
  Future<void> resetPassword(String email);
  Future<bool> get isAuthenticated;
}

class AuthServiceException implements Exception {
  final String message;
  final String? code;
  
  AuthServiceException(this.message, {this.code});
  
  @override
  String toString() => 'AuthServiceException: $message';
}
