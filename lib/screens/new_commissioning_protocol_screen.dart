import 'package:flutter/material.dart';

class NewCommissioningProtocolScreen extends StatelessWidget {
  const NewCommissioningProtocolScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        'Protokół uruchomienia (formularz do implementacji)',
        textAlign: TextAlign.center,
        style: Theme.of(context).textTheme.titleLarge,
      ),
    );
  }
}
