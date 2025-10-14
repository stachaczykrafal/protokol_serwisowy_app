import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import '../services/m365_graph_service.dart';

class HistoryScreen extends StatefulWidget {
  const HistoryScreen({super.key});

  @override
  State<HistoryScreen> createState() => _HistoryScreenState();
}

class _HistoryScreenState extends State<HistoryScreen> {
  final TextEditingController _searchController = TextEditingController();
  List<Map<String, dynamic>> _items = [];
  List<Map<String, dynamic>> _filtered = [];
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _searchController.addListener(_applyFilter);
    _load();
  }

  Future<void> _load() async {
    setState(() => _loading = true);
    final messenger = ScaffoldMessenger.of(context);
    try {
      final list = await M365GraphService().listProtocols();
      _items = list;
      _applyFilter();
    } catch (e) {
      if (mounted) {
        messenger.showSnackBar(
          SnackBar(content: Text('Błąd listowania: $e')),
        );
      }
    } finally {
      if (mounted) setState(() => _loading = false);
    }
  }

  void _applyFilter() {
    final q = _searchController.text.trim().toLowerCase();
    _filtered = q.isEmpty
        ? List<Map<String, dynamic>>.from(_items)
        : _items
            .where((p) => (p['name'] as String? ?? '').toLowerCase().contains(q))
            .toList();
    if (mounted) setState(() {});
  }

  @override
  void dispose() {
    _searchController.removeListener(_applyFilter);
    _searchController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Protokoły (M365)'),
        actions: [
          IconButton(onPressed: _load, icon: const Icon(Icons.refresh)),
          IconButton(
            onPressed: () => Navigator.of(context).popUntil((r) => r.isFirst),
            icon: const Icon(Icons.home),
          ),
        ],
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16),
            child: TextField(
              controller: _searchController,
              decoration: InputDecoration(
                hintText: 'Szukaj po nazwie pliku...',
                prefixIcon: const Icon(Icons.search),
                border: const OutlineInputBorder(),
                suffixIcon: _searchController.text.isEmpty
                    ? null
                    : IconButton(
                        tooltip: 'Wyczyść',
                        icon: const Icon(Icons.clear),
                        onPressed: () {
                          _searchController.clear();
                          _applyFilter();
                        },
                      ),
              ),
            ),
          ),
          Expanded(
            child: _loading
                ? const Center(child: CircularProgressIndicator())
                : _filtered.isEmpty
                    ? Center(
                        child: Text(
                          'Brak plików',
                          style: Theme.of(context).textTheme.titleMedium,
                        ),
                      )
                    : RefreshIndicator(
                        onRefresh: _load,
                        child: ListView.builder(
                          physics: const AlwaysScrollableScrollPhysics(),
                          padding: const EdgeInsets.symmetric(horizontal: 16),
                          itemCount: _filtered.length,
                          itemBuilder: (c, i) {
                            final it = _filtered[i];
                            final name = it['name'] as String? ?? 'plik.pdf';
                            final url = it['webUrl'] as String?;
                            return Card(
                              margin: const EdgeInsets.only(bottom: 8),
                              child: ListTile(
                                title: Text(name, maxLines: 1, overflow: TextOverflow.ellipsis),
                                subtitle: Text(url ?? '', maxLines: 1, overflow: TextOverflow.ellipsis),
                                trailing: const Icon(Icons.open_in_new, size: 18),
                                onTap: url == null
                                    ? null
                                    : () async {
                                        final uri = Uri.parse(url);
                                        final messenger = ScaffoldMessenger.of(context);
                                        if (await canLaunchUrl(uri)) {
                                          await launchUrl(
                                            uri,
                                            mode: LaunchMode.externalApplication,
                                          );
                                        } else {
                                          messenger.showSnackBar(
                                            const SnackBar(content: Text('Nie można otworzyć linku')),
                                          );
                                        }
                                      },
                                onLongPress: url == null
                                    ? null
                                    : () {
                                        // ...existing code... (np. skopiuj link do schowka, jeśli używasz clipboard)
                                      },
                              ),
                            );
                          },
                        ),
                      ),
          ),
        ],
      ),
    );
  }
}
