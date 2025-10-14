import '../services/universal_database_service.dart';

class HistoryService {
  static final UniversalDatabaseService _databaseService = UniversalDatabaseService();

  static Future<void> initialize() async {
    await _databaseService.initialize();
  }

  static Future<List<Map<String, dynamic>>> getProtocols() async {
    try {
      return await _databaseService.getAllProtocols();
    } catch (e) {
      // Log and return empty list
      return [];
    }
  }

  static Future<void> saveProtocol(Map<String, dynamic> protocol) async {
    try {
      await _databaseService.saveProtocol(protocol);
    } catch (e) {
      rethrow;
    }
  }

  static Future<void> deleteProtocol(String id) async {
    try {
      await _databaseService.deleteProtocol(id);
    } catch (e) {
      rethrow;
    }
  }

  static Future<Map<String, dynamic>?> getProtocolById(String id) async {
    try {
      return await _databaseService.getProtocol(id);
    } catch (e) {
      return null;
    }
  }
}
