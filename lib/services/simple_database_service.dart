import 'database_service.dart';

class SimpleInMemoryDatabaseService implements DatabaseService {
  static SimpleInMemoryDatabaseService? _instance;
  static SimpleInMemoryDatabaseService get instance => _instance ??= SimpleInMemoryDatabaseService._();
  
  SimpleInMemoryDatabaseService._();

  // In-memory storage
  final List<Map<String, dynamic>> _protocols = [];
  final List<Map<String, dynamic>> _reminders = [];
  final List<Map<String, dynamic>> _users = [];
  int _nextId = 1;

  @override
  Future<void> initialize() async {
    // Initialize with some default data
    _initializeDefaultData();
  }

  @override
  Future<void> close() async {
    // Nothing to close for in-memory storage
  }

  void _initializeDefaultData() {
    // Add some sample data for testing
    _users.add({
      'id': '1',
      'email': 'admin@example.com',
      'name': 'Administrator',
      'role': 'admin',
      'createdAt': DateTime.now().millisecondsSinceEpoch,
      'isActive': true,
    });

    _protocols.add({
      'id': '1',
      'clientName': 'Przykładowy Klient',
      'deviceType': 'Klimatyzator',
      'deviceModel': 'Samsung AR12',
      'serialNumber': 'SAM123456',
      'issueDescription': 'Brak chłodzenia',
      'status': 'W trakcie',
      'createdAt': DateTime.now().millisecondsSinceEpoch,
      'updatedAt': DateTime.now().millisecondsSinceEpoch,
    });

    _reminders.add({
      'id': '1',
      'title': 'Przegląd klimatyzacji',
      'description': 'Coroczny przegląd u klienta ABC',
      'dueDate': DateTime.now().add(const Duration(days: 30)).millisecondsSinceEpoch,
      'createdAt': DateTime.now().millisecondsSinceEpoch,
      'completed': false,
    });
  }

  String _generateId() {
    return (_nextId++).toString();
  }

  // Protokoły
  @override
  Future<String> saveProtocol(Map<String, dynamic> protocol) async {
    final id = _generateId();
    final protocolData = {
      ...protocol,
      'id': id,
      'createdAt': protocol['createdAt'] ?? DateTime.now().millisecondsSinceEpoch,
      'updatedAt': DateTime.now().millisecondsSinceEpoch,
    };
    _protocols.add(protocolData);
    return id;
  }

  @override
  Future<Map<String, dynamic>?> getProtocol(String id) async {
    try {
      return _protocols.firstWhere((p) => p['id'] == id);
    } catch (e) {
      return null;
    }
  }

  @override
  Future<List<Map<String, dynamic>>> getAllProtocols() async {
    // Sort by creation date, newest first
    final sorted = List<Map<String, dynamic>>.from(_protocols);
    sorted.sort((a, b) {
      final aTime = a['createdAt'] as int? ?? 0;
      final bTime = b['createdAt'] as int? ?? 0;
      return bTime.compareTo(aTime);
    });
    return sorted;
  }

  @override
  Future<void> updateProtocol(String id, Map<String, dynamic> updates) async {
    final index = _protocols.indexWhere((p) => p['id'] == id);
    if (index != -1) {
      _protocols[index] = {
        ..._protocols[index],
        ...updates,
        'updatedAt': DateTime.now().millisecondsSinceEpoch,
      };
    } else {
      throw DatabaseException('Protokół o ID $id nie został znaleziony');
    }
  }

  @override
  Future<void> deleteProtocol(String id) async {
    final initialLength = _protocols.length;
    _protocols.removeWhere((p) => p['id'] == id);
    if (_protocols.length == initialLength) {
    }
  }

  // Przypomnienia
  @override
  Future<String> saveReminder(Map<String, dynamic> reminder) async {
    final id = _generateId();
    final reminderData = {
      ...reminder,
      'id': id,
      'createdAt': reminder['createdAt'] ?? DateTime.now().millisecondsSinceEpoch,
    };
    _reminders.add(reminderData);
    return id;
  }

  @override
  Future<List<Map<String, dynamic>>> getAllReminders() async {
    // Sort by due date
    final sorted = List<Map<String, dynamic>>.from(_reminders);
    sorted.sort((a, b) {
      final aTime = a['dueDate'] as int? ?? 0;
      final bTime = b['dueDate'] as int? ?? 0;
      return aTime.compareTo(bTime);
    });
    return sorted;
  }

  @override
  Future<void> updateReminder(String id, Map<String, dynamic> updates) async {
    final index = _reminders.indexWhere((r) => r['id'] == id);
    if (index != -1) {
      _reminders[index] = {
        ..._reminders[index],
        ...updates,
      };
    } else {
      throw DatabaseException('Przypomnienie o ID $id nie zostało znalezione');
    }
  }

  @override
  Future<void> deleteReminder(String id) async {
    final initialLength = _reminders.length;
    _reminders.removeWhere((r) => r['id'] == id);
    if (_reminders.length == initialLength) {
      throw DatabaseException('Przypomnienie o ID $id nie zostało znalezione');
    }
  }

  // Użytkownicy
  @override
  Future<String> saveUser(Map<String, dynamic> user) async {
    final id = user['id'] ?? _generateId();
    final userData = {
      ...user,
      'id': id,
      'createdAt': user['createdAt'] ?? DateTime.now().millisecondsSinceEpoch,
    };
    _users.add(userData);
    return id;
  }

  @override
  Future<Map<String, dynamic>?> getUser(String id) async {
    try {
      return _users.firstWhere((u) => u['id'] == id);
    } catch (e) {
      return null;
    }
  }

  @override
  Future<List<Map<String, dynamic>>> getAllUsers() async {
    // Sort by creation date, newest first
    final sorted = List<Map<String, dynamic>>.from(_users);
    sorted.sort((a, b) {
      final aTime = a['createdAt'] as int? ?? 0;
      final bTime = b['createdAt'] as int? ?? 0;
      return bTime.compareTo(aTime);
    });
    return sorted;
  }

  @override
  Future<void> updateUser(String id, Map<String, dynamic> updates) async {
    final index = _users.indexWhere((u) => u['id'] == id);
    if (index != -1) {
      _users[index] = {
        ..._users[index],
        ...updates,
      };
    } else {
      throw DatabaseException('Użytkownik o ID $id nie został znaleziony');
    }
  }

  @override
  Future<void> deleteUser(String id) async {
    final initialLength = _reminders.length;
    _users.removeWhere((u) => u['id'] == id);
    if (_reminders.length == initialLength) {
      throw DatabaseException('Użytkownik o ID $id nie został znaleziony');
    }
  }

  // Wyszukiwanie
  @override
  Future<List<Map<String, dynamic>>> searchProtocols(String query) async {
    final lowerQuery = query.toLowerCase();
    return _protocols.where((protocol) {
      final clientName = (protocol['clientName'] as String? ?? '').toLowerCase();
      final deviceType = (protocol['deviceType'] as String? ?? '').toLowerCase();
      final deviceModel = (protocol['deviceModel'] as String? ?? '').toLowerCase();
      final serialNumber = (protocol['serialNumber'] as String? ?? '').toLowerCase();
      final issueDescription = (protocol['issueDescription'] as String? ?? '').toLowerCase();
      
      return clientName.contains(lowerQuery) ||
             deviceType.contains(lowerQuery) ||
             deviceModel.contains(lowerQuery) ||
             serialNumber.contains(lowerQuery) ||
             issueDescription.contains(lowerQuery);
    }).toList();
  }

  @override
  Future<List<Map<String, dynamic>>> getProtocolsByStatus(String status) async {
    return _protocols.where((protocol) => protocol['status'] == status).toList();
  }

  @override
  Future<List<Map<String, dynamic>>> getProtocolsByDateRange(DateTime start, DateTime end) async {
    final startMs = start.millisecondsSinceEpoch;
    final endMs = end.millisecondsSinceEpoch;
    
    return _protocols.where((protocol) {
      final createdAt = protocol['createdAt'] as int? ?? 0;
      return createdAt >= startMs && createdAt <= endMs;
    }).toList();
  }

  // Utility methods
  int get protocolCount => _protocols.length;
  int get reminderCount => _reminders.length;
  int get userCount => _users.length;
  
  void clearAllData() {
    _protocols.clear();
    _reminders.clear();
    _users.clear();
    _nextId = 1;
    _initializeDefaultData();
  }
  
  Map<String, dynamic> getStatistics() {
    final now = DateTime.now();
    final today = DateTime(now.year, now.month, now.day);
    final todayMs = today.millisecondsSinceEpoch;
    final tomorrowMs = today.add(const Duration(days: 1)).millisecondsSinceEpoch;
    
    final todayProtocols = _protocols.where((p) {
      final createdAt = p['createdAt'] as int? ?? 0;
      return createdAt >= todayMs && createdAt < tomorrowMs;
    }).length;
    
    final pendingReminders = _reminders.where((r) {
      final dueDate = r['dueDate'] as int? ?? 0;
      final completed = r['completed'] as bool? ?? false;
      return dueDate <= now.millisecondsSinceEpoch && !completed;
    }).length;
    
    return {
      'totalProtocols': _protocols.length,
      'todayProtocols': todayProtocols,
      'totalReminders': _reminders.length,
      'pendingReminders': pendingReminders,
      'activeUsers': _users.where((u) => u['isActive'] == true).length,
      'lastUpdated': DateTime.now().millisecondsSinceEpoch,
    };
  }
}

