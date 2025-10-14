import 'package:flutter/material.dart';
import '../services/universal_auth_service.dart';

class SyncSettingsScreen extends StatefulWidget {
  const SyncSettingsScreen({super.key});

  @override
  State<SyncSettingsScreen> createState() => _SyncSettingsScreenState();
}

class _SyncSettingsScreenState extends State<SyncSettingsScreen> {
Future<void> _handleLogout() async {
    final authService = UniversalAuthService.instance;
    await authService.signOut();
    
    if (mounted) {
      Navigator.of(context).pushReplacementNamed('/');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Ustawienia'),
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        actions: [
          IconButton(
            onPressed: () {
              Navigator.of(context).popUntil((route) => route.isFirst);
            },
            icon: const Icon(Icons.home),
            tooltip: 'Strona główna',
          ),
        ],
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              // Status aplikacji
              Card(
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          const Icon(Icons.storage, color: Colors.blue),
                          const SizedBox(width: 8),
                          Text(
                            'Tryb offline',
                            style: Theme.of(context).textTheme.titleMedium,
                          ),
                        ],
                      ),
                      const SizedBox(height: 8),
                      const Text(
                        'Aplikacja działa w trybie lokalnym',
                        style: TextStyle(color: Colors.blue),
                      ),
                      const SizedBox(height: 16),
                      Row(
                        children: [
                          const Icon(Icons.security, color: Colors.green, size: 20),
                          const SizedBox(width: 8),
                          Text(
                            'Dane bezpieczne offline',
                            style: Theme.of(context).textTheme.bodyMedium,
                          ),
                        ],
                      ),
                      const SizedBox(height: 4),
                      Row(
                        children: [
                          const Icon(Icons.speed, color: Colors.green, size: 20),
                          const SizedBox(width: 8),
                          Text(
                            'Szybki dostęp do danych',
                            style: Theme.of(context).textTheme.bodyMedium,
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 16),
              
              // Informacje o aplikacji
              Card(
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Text(
                        'Informacje o aplikacji',
                        style: Theme.of(context).textTheme.titleMedium,
                      ),
                      const SizedBox(height: 16),
                      const ListTile(
                        leading: Icon(Icons.info, color: Colors.blue),
                        title: Text('Wersja aplikacji'),
                        subtitle: Text('1.0.0'),
                      ),
                      const ListTile(
                        leading: Icon(Icons.build, color: Colors.orange),
                        title: Text('Protokoły serwisowe'),
                        subtitle: Text('Zarządzanie serwisem urządzeń'),
                      ),
                      const ListTile(
                        leading: Icon(Icons.calendar_today, color: Colors.green),
                        title: Text('Przypomnienia'),
                        subtitle: Text('Powiadomienia o terminach serwisu'),
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 16),
              
              // Funkcje dostępne
              Card(
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Text(
                        'Dostępne funkcje',
                        style: Theme.of(context).textTheme.titleMedium,
                      ),
                      const SizedBox(height: 16),
                      const ListTile(
                        leading: Icon(Icons.description, color: Colors.purple),
                        title: Text('Tworzenie protokołów'),
                        subtitle: Text('Nowe protokoły serwisowe'),
                      ),
                      const ListTile(
                        leading: Icon(Icons.history, color: Colors.teal),
                        title: Text('Historia protokołów'),
                        subtitle: Text('Przeglądanie zapisanych protokołów'),
                      ),
                      const ListTile(
                        leading: Icon(Icons.notifications, color: Colors.amber),
                        title: Text('Zarządzanie przypomnieniami'),
                        subtitle: Text('Dodawanie i edycja przypomnień'),
                      ),
                    ],
                  ),
                ),
              ),
              const Spacer(),
              
              // Logout
              Card(
                color: Colors.red.shade50,
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Text(
                        'Sesja użytkownika',
                        style: Theme.of(context).textTheme.titleMedium,
                      ),
                      const SizedBox(height: 16),
                      OutlinedButton.icon(
                        onPressed: _handleLogout,
                        icon: const Icon(Icons.logout, color: Colors.red),
                        label: const Text('Wyloguj się', style: TextStyle(color: Colors.red)),
                        style: OutlinedButton.styleFrom(
                          side: const BorderSide(color: Colors.red),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

