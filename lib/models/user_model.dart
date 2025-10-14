class UserModel {
  final String id;
  final String email;
  final String? displayName;
  final String? photoUrl;
  final String role; // 'technician', 'admin', 'manager'
  final String? phoneNumber;
  final String? companyName;
  final DateTime createdAt;
  final DateTime? lastLoginAt;
  final bool isActive;
  final Map<String, dynamic> preferences;
  final List<String> permissions;

  UserModel({
    required this.id,
    required this.email,
    this.displayName,
    this.photoUrl,
    this.role = 'technician',
    this.phoneNumber,
    this.companyName,
    required this.createdAt,
    this.lastLoginAt,
    this.isActive = true,
    this.preferences = const {},
    this.permissions = const [],
  });

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'email': email,
      'displayName': displayName,
      'photoUrl': photoUrl,
      'role': role,
      'phoneNumber': phoneNumber,
      'companyName': companyName,
      'createdAt': createdAt.millisecondsSinceEpoch,
      'lastLoginAt': lastLoginAt?.millisecondsSinceEpoch,
      'isActive': isActive,
      'preferences': preferences,
      'permissions': permissions,
    };
  }

  factory UserModel.fromMap(Map<String, dynamic> map) {
    return UserModel(
      id: map['id'] ?? '',
      email: map['email'] ?? '',
      displayName: map['displayName'],
      photoUrl: map['photoUrl'],
      role: map['role'] ?? 'technician',
      phoneNumber: map['phoneNumber'],
      companyName: map['companyName'],
      createdAt: DateTime.fromMillisecondsSinceEpoch(map['createdAt'] ?? 0),
      lastLoginAt: map['lastLoginAt'] != null 
          ? DateTime.fromMillisecondsSinceEpoch(map['lastLoginAt']) 
          : null,
      isActive: map['isActive'] ?? true,
      preferences: Map<String, dynamic>.from(map['preferences'] ?? {}),
      permissions: List<String>.from(map['permissions'] ?? []),
    );
  }

  UserModel copyWith({
    String? id,
    String? email,
    String? displayName,
    String? photoUrl,
    String? role,
    String? phoneNumber,
    String? companyName,
    DateTime? createdAt,
    DateTime? lastLoginAt,
    bool? isActive,
    Map<String, dynamic>? preferences,
    List<String>? permissions,
  }) {
    return UserModel(
      id: id ?? this.id,
      email: email ?? this.email,
      displayName: displayName ?? this.displayName,
      photoUrl: photoUrl ?? this.photoUrl,
      role: role ?? this.role,
      phoneNumber: phoneNumber ?? this.phoneNumber,
      companyName: companyName ?? this.companyName,
      createdAt: createdAt ?? this.createdAt,
      lastLoginAt: lastLoginAt ?? this.lastLoginAt,
      isActive: isActive ?? this.isActive,
      preferences: preferences ?? this.preferences,
      permissions: permissions ?? this.permissions,
    );
  }

  bool get isAdmin => role == 'admin';
  bool get isManager => role == 'manager';
  bool get isTechnician => role == 'technician';
  
  bool hasPermission(String permission) {
    return permissions.contains(permission) || isAdmin;
  }

  String get initials {
    if (displayName != null && displayName!.isNotEmpty) {
      final names = displayName!.trim().split(' ');
      if (names.length >= 2) {
        return '${names[0][0]}${names[1][0]}'.toUpperCase();
      } else {
        return names[0][0].toUpperCase();
      }
    }
    return email[0].toUpperCase();
  }

  @override
  String toString() {
    return 'UserModel(id: $id, email: $email, displayName: $displayName, role: $role)';
  }
}
