import 'package:flutter/material.dart';
import 'new_protocol_screen.dart';
import 'new_commissioning_protocol_screen.dart';
import 'offers_screen.dart';
import 'calendar_screen.dart';
import '../widgets/connection_status_icon.dart';

class DashboardScreen extends StatefulWidget {
  const DashboardScreen({super.key});

  @override
  State<DashboardScreen> createState() => _DashboardScreenState();
}

class _DashboardScreenState extends State<DashboardScreen> with TickerProviderStateMixin {
  late TabController _tabController;

  final List<_TabDef> _tabs = [
    _TabDef('Nowy protokół', Icons.add, const NewProtocolScreen()),
    _TabDef('Uruch.', Icons.play_arrow, const NewCommissioningProtocolScreen()),
    _TabDef('Kalendarz', Icons.event, const CalendarScreen()),
    _TabDef('Oferty', Icons.folder_shared, const OffersScreen()),
  ];

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: _tabs.length, vsync: this);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Protokół Serwisowy'),
        bottom: TabBar(
          controller: _tabController,
          tabs: _tabs.map((tab) => Tab(text: tab.label, icon: Icon(tab.icon))).toList(),
        ),
      ),
      body: TabBarView(
        controller: _tabController,
        children: _tabs.map((tab) => tab.screen).toList(),
      ),
    );
  }
}

class _TabDef {
  final String label;
  final IconData icon;
  final Widget screen;

  const _TabDef(this.label, this.icon, this.screen);
}