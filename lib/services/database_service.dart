abstract class DatabaseService {
  Future<void> initialize();
  Future<void> close();
  
  // Protokoły
  Future<String> saveProtocol(Map<String, dynamic> protocol);
  Future<Map<String, dynamic>?> getProtocol(String id);
  Future<List<Map<String, dynamic>>> getAllProtocols();
  Future<void> updateProtocol(String id, Map<String, dynamic> updates);
  Future<void> deleteProtocol(String id);
  
  // Przypomnienia
  Future<String> saveReminder(Map<String, dynamic> reminder);
  Future<List<Map<String, dynamic>>> getAllReminders();
  Future<void> updateReminder(String id, Map<String, dynamic> updates);
  Future<void> deleteReminder(String id);
  
  // Użytkownicy
  Future<String> saveUser(Map<String, dynamic> user);
  Future<Map<String, dynamic>?> getUser(String id);
  Future<List<Map<String, dynamic>>> getAllUsers();
  Future<void> updateUser(String id, Map<String, dynamic> updates);
  Future<void> deleteUser(String id);
  
  // Wyszukiwanie
  Future<List<Map<String, dynamic>>> searchProtocols(String query);
  Future<List<Map<String, dynamic>>> getProtocolsByStatus(String status);
  Future<List<Map<String, dynamic>>> getProtocolsByDateRange(DateTime start, DateTime end);
}

class DatabaseException implements Exception {
  final String message;
  final String? code;
  
  DatabaseException(this.message, {this.code});
  
  @override
  String toString() => 'DatabaseException: $message';
}
