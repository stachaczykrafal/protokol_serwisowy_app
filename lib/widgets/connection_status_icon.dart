import 'package:flutter/material.dart';
import 'package:connectivity_plus/connectivity_plus.dart';
import 'dart:async';

class ConnectionStatusIcon extends StatefulWidget {
  const ConnectionStatusIcon({Key? key}) : super(key: key);
  @override
  State<ConnectionStatusIcon> createState() => _ConnectionStatusIconState();
}

class _ConnectionStatusIconState extends State<ConnectionStatusIcon> {
  ConnectivityResult? _status;
  late final StreamSubscription<List<ConnectivityResult>> _sub;

  @override
  void initState() {
    super.initState();
    _init();
    _sub = Connectivity().onConnectivityChanged.listen((results) {
      final first = results.isNotEmpty ? results.first : ConnectivityResult.none;
      if (mounted) setState(() => _status = first);
    });
  }

  Future<void> _init() async {
    final results = await Connectivity().checkConnectivity();
    final first = results.isNotEmpty ? results.first : ConnectivityResult.none;
    if (mounted) setState(() => _status = first);
  }

  @override
  void dispose() {
    _sub.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return _status == ConnectivityResult.none
        ? const Icon(Icons.cloud_off, color: Colors.red)
        : const Icon(Icons.cloud_done, color: Colors.green);
  }
}