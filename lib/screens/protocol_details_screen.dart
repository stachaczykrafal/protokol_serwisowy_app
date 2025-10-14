import 'package:flutter/material.dart';

class ProtocolDetailsScreen extends StatelessWidget {
  final Map<String, dynamic> protocol;

  const ProtocolDetailsScreen({Key? key, required this.protocol}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Szczegóły protokołu'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Klient: ${protocol['client'] ?? 'Nieznany'}',
                style: Theme.of(context).textTheme.headlineSmall),
            const SizedBox(height: 8),
           Text('Data: ${protocol['date'] ?? 'Nieznana'}'),
            const SizedBox(height: 8),
            Text('Szczegóły: ${protocol['details'] ?? 'Brak szczegółów'}'),
          ],
        ),
      ),
    );
  }
}