import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'screens/dashboard_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const ProtokolSerwisowyApp());
}

class ProtokolSerwisowyApp extends StatelessWidget {
  const ProtokolSerwisowyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Protokół',
      theme: ThemeData(
        // Użyj `colorSchemeSeed` zamiast przestarzałego `primarySwatch` dla Material 3
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
        useMaterial3: true,
      ),
      // Ustaw `NewProtocolScreen` jako ekran startowy
      home: const DashboardScreen(), // CHANGED
      // Opcjonalnie: zdefiniuj trasy do pozostałych widoków
      localizationsDelegates: const [
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
      ],
      supportedLocales: const [
        Locale('pl', 'PL'),
        Locale('en', 'US'),
      ],
      locale: const Locale('pl', 'PL'),
    );
  }
}

// TODO: usuń fizycznie nieużywane pliki ekranów: 
//   screens/welcome_screen.dart
//   screens/home_screen_web.dart
//   screens/simple_sync_settings_screen.dart
//   (oraz inne jeśli nie są importowane nigdzie)
// TODO: usuń fizycznie nieużywane pliki ekranów: 
//   screens/welcome_screen.dart
//   screens/home_screen_web.dart
//   screens/simple_sync_settings_screen.dart
//   (oraz inne jeśli nie są importowane nigdzie)
