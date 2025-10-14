import 'package:flutter/material.dart';
import 'new_protocol_screen.dart';
import 'new_commissioning_protocol_screen.dart';
import 'history_screen.dart';
import 'offers_screen.dart';
import 'calendar_screen.dart';
import '../widgets/connection_status_icon.dart';

class DashboardScreen extends StatefulWidget {
  const DashboardScreen({super.key});

  @override
  State<DashboardScreen> createState() => _DashboardScreenState();
}

class _DashboardScreenState extends State<DashboardScreen> {
  int _index = 0;
  bool _isOffice = false;

  @override
  void initState() {
    super.initState();
    _loadRole();
  }

  Future<void> _loadRole() async {
    setState(() {
      _isOffice = true; // prosty gating – można rozszerzyć o isOffice flag
    });
  }

  List<_TabDef> get _tabs {
    final base = <_TabDef>[
      _TabDef('Serwis', Icons.build, const NewProtocolScreen()),
      _TabDef('Uruch.', Icons.play_arrow, const NewCommissioningProtocolScreen()),
      _TabDef('Kalendarz', Icons.event, const CalendarScreen()),
      _TabDef('Historia', Icons.history, const HistoryScreen()),
    ];
    if (_isOffice) {
      base.add(_TabDef('Oferty', Icons.folder_shared, const OffersScreen()));
    }
    return base;
  }

  @override
  Widget build(BuildContext context) {
    final tabs = _tabs;
    final body = tabs[_index].child;
    final isWide = MediaQuery.of(context).size.width >= 900;

    final navItems = [
      for (int i = 0; i < tabs.length; i++)
        NavigationDestination(icon: Icon(tabs[i].icon), label: tabs[i].label)
    ];

    return Scaffold(
      appBar: AppBar(
        title: Text(tabs[_index].label),
        actions: const [ConnectionStatusIcon(), SizedBox(width: 12)],
      ),
      body: Row(
        children: [
          if (isWide)
            NavigationRail(
              selectedIndex: _index,
              onDestinationSelected: (i) => setState(() => _index = i),
              labelType: NavigationRailLabelType.all,
              destinations: [
                for (final t in tabs)
                  NavigationRailDestination(
                    icon: Icon(t.icon),
                    label: Text(t.label),
                  )
              ],
            ),
          Expanded(child: body),
        ],
      ),
      bottomNavigationBar: isWide
          ? null
          : NavigationBar(
              selectedIndex: _index,
              onDestinationSelected: (i) => setState(() => _index = i),
              destinations: navItems,
            ),
      drawer: isWide
          ? null
          : Drawer(
              child: ListView(
                children: [
                  const DrawerHeader(child: Text('Menu')),
                  for (int i = 0; i < tabs.length; i++)
                    ListTile(
                      leading: Icon(tabs[i].icon),
                      title: Text(tabs[i].label),
                      selected: i == _index,
                      onTap: () {
                        setState(() => _index = i);
                        Navigator.pop(context);
                      },
                    ),
                  const Divider(),
                  ListTile(
                    leading: const Icon(Icons.logout),
                    title: const Text('Wyloguj anon.'),
                    onTap: () async {
                      if (mounted) Navigator.pop(context);
                    },
                  ),
                ],
              ),
            ),
    );
  }
}

class _TabDef {
  final String label;
  final IconData icon;
  final Widget child;
  _TabDef(this.label, this.icon, this.child);
}