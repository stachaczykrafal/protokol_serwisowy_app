@Deprecated('Migracja na Microsoft 365 (Graph) – plik nieużywany.')
class ProtocolRepository {
  Future<void> save(Map<String, dynamic> data) async {
    throw UnimplementedError('Użyj M365GraphService zamiast Firebase.');
  }

  Future<List<Map<String, dynamic>>> list() async {
    throw UnimplementedError('Użyj M365GraphService zamiast Firebase.');
  }
}

// Usunięto Firebase. Plik nie jest już używany.
