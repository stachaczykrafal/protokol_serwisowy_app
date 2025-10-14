import 'database_service.dart';
import 'simple_database_service.dart';

class UniversalDatabaseService implements DatabaseService {
  late final DatabaseService _service;
  bool _isCloudMode = false;

  UniversalDatabaseService() {
    // Zrezygnowano z Firebase – zawsze używamy lokalnej implementacji in-memory.
    _service = SimpleInMemoryDatabaseService.instance;
    _isCloudMode = false;
  }

  bool get isCloudMode => _isCloudMode;

  @override
  Future<void> initialize() async {
    await _service.initialize();
  }

  @override
  Future<void> close() => _service.close();

  // Protocol methods
  @override
  Future<String> saveProtocol(Map<String, dynamic> protocol) async {
    // Add sync metadata
    protocol['createdAt'] = DateTime.now().toIso8601String();
    protocol['updatedAt'] = DateTime.now().toIso8601String();
    protocol['syncStatus'] = _isCloudMode ? 'synced' : 'pending_sync';

    final id = await _service.saveProtocol(protocol);
    return id;
  }

  @override
  Future<Map<String, dynamic>?> getProtocol(String id) async {
    return await _service.getProtocol(id);
  }

  @override
  Future<List<Map<String, dynamic>>> getAllProtocols() async {
    final protocols = await _service.getAllProtocols();
    return protocols;
  }

  @override
  Future<void> updateProtocol(String id, Map<String, dynamic> updates) async {
    updates['updatedAt'] = DateTime.now().toIso8601String();
    updates['syncStatus'] = _isCloudMode ? 'synced' : 'pending_sync';
    await _service.updateProtocol(id, updates);
  }

  @override
  Future<void> deleteProtocol(String id) async {
    await _service.deleteProtocol(id);
  }

  // Reminder methods
  @override
  Future<String> saveReminder(Map<String, dynamic> reminder) async {
    reminder['createdAt'] = DateTime.now().toIso8601String();
    reminder['updatedAt'] = DateTime.now().toIso8601String();
    reminder['syncStatus'] = _isCloudMode ? 'synced' : 'pending_sync';
    final id = await _service.saveReminder(reminder);
    return id;
  }

  @override
  Future<List<Map<String, dynamic>>> getAllReminders() async {
    final reminders = await _service.getAllReminders();
    return reminders;
  }

  @override
  Future<void> updateReminder(String id, Map<String, dynamic> updates) async {
    updates['updatedAt'] = DateTime.now().toIso8601String();
    updates['syncStatus'] = _isCloudMode ? 'synced' : 'pending_sync';
    await _service.updateReminder(id, updates);
  }

  @override
  Future<void> deleteReminder(String id) => _service.deleteReminder(id);

  // User methods
  @override
  Future<String> saveUser(Map<String, dynamic> user) async {
    return await _service.saveUser(user);
  }

  @override
  Future<Map<String, dynamic>?> getUser(String id) => _service.getUser(id);

  @override
  Future<List<Map<String, dynamic>>> getAllUsers() => _service.getAllUsers();

  @override
  Future<void> updateUser(String id, Map<String, dynamic> updates) => _service.updateUser(id, updates);

  @override
  Future<void> deleteUser(String id) => _service.deleteUser(id);

  // Additional methods for protocols by date range and status
  @override
  Future<List<Map<String, dynamic>>> getProtocolsByDateRange(DateTime start, DateTime end) =>
      _service.getProtocolsByDateRange(start, end);

  @override
  Future<List<Map<String, dynamic>>> searchProtocols(String query) =>
      _service.searchProtocols(query);

  @override
  Future<List<Map<String, dynamic>>> getProtocolsByStatus(String status) =>
      _service.getProtocolsByStatus(status);

  // CONVENIENCE METHODS for new functionality
  Future<String> createProtocol(Map<String, dynamic> data) async {
    return await saveProtocol(data);
  }

  Future<String> createReminder(Map<String, dynamic> data) async {
    return await saveReminder(data);
  }

  Future<String> createUser(Map<String, dynamic> data) async {
    return await saveUser(data);
  }

  Future<String> createReminderForProtocol(String protocolId, Map<String, dynamic> reminderData) async {
    reminderData['protocolId'] = protocolId;
    reminderData['type'] = 'service_reminder';
    return await createReminder(reminderData);
  }
}
