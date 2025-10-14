import 'package:flutter/material.dart';
import 'package:signature/signature.dart';
import 'package:printing/printing.dart';
import 'package:pdf/widgets.dart' as pw;
import 'package:pdf/pdf.dart';
import 'package:flutter/services.dart'; // ADDED for rootBundle
// ADD Graph:
// REPLACE powyższy import:
import '../services/m365_auth_service_web.dart' show uploadProtocolPdfDefaultBytes;
import 'package:protokol_serwisowy_app/utils/validators.dart';

class NewProtocolScreen extends StatefulWidget {
  const NewProtocolScreen({super.key});

  @override
  State<NewProtocolScreen> createState() => _NewProtocolScreenState();
}

enum PaymentMethod { cash, transfer }

class _NewProtocolScreenState extends State<NewProtocolScreen> {
  static const TextStyle styleMain =
      TextStyle(fontSize: 13, fontWeight: FontWeight.w600);
  static const TextStyle styleSub =
      TextStyle(fontSize: 12, color: Colors.black87);

  // Kontrolery tekstowe
  final TextEditingController _firmaController = TextEditingController();
  final TextEditingController _imieNazwiskoController = TextEditingController();
  final TextEditingController _adresController = TextEditingController();
  final TextEditingController _telefonController = TextEditingController();
  final TextEditingController _mailController = TextEditingController();
  final TextEditingController _dataController = TextEditingController();
  final TextEditingController _uwagiKlientaController = TextEditingController();
  final TextEditingController _uwagiSerwisantaController =
      TextEditingController();
  final TextEditingController _gotowkaKwotaController = TextEditingController();
  final TextEditingController _nextServiceDateController = TextEditingController(); // NEW

  // Rodzaj wizyty - checkboxy
  bool _przeglad = false;
  bool _awaria = false;
  bool _naprawa = false;

  // Sposób płatności — używaj wyłącznie PaymentMethod (RadioListTile)
  // USUNIĘTO: nieużywane pola powodujące ostrzeżenia:
  // bool _gotowka = false;
  // bool _przelew = false;

  // Obsługa kompletów urządzeń z nazwą
  final List<Map<String, dynamic>> _komplety = [];
  int? _wybranyKomplet;

  // Czynności wykonywane na urządzeniach
  final List<bool> _klimaChecks = List.filled(11, false);
  final List<bool> _wentChecks = List.filled(11, false);

  final List<String> _klimaCzynnosci = [
    'Sprawdzenie szczelności układu chłodniczego.',
    'Kontrola ciśnienia czynnika chłodniczego.',
    'Czyszczenie filtrów powietrza.',
    'Czyszczenie parownika i skraplacza.',
    'Kontrola i czyszczenie wentylatorów.',
    'Sprawdzenie poprawności działania sterowania i elektroniki.',
    'Kontrola odpływu skroplin i drożności tacy ociekowej.',
    'Pomiar temperatury nawiewu.',
    'Sprawdzenie izolacji termicznej linii freonowej.',
    'Kontrola mocowania i stanu technicznego urządzenia.',
    'Uzupełnienie czynnika chłodniczego (jeśli wymagane).',
  ];

  final List<String> _wentCzynnosci = [
    'Sprawdzenie poprawności działania sterowania i automatyki centrali.',
    'Kontrola i czyszczenie filtrów powietrza (wymiana jeśli wymagane).',
    'Czyszczenie wymienników ciepła (rekuperatory).',
    'Kontrola stanu łożysk wentylatorów nawiewnych i wywiewnych.',
    'Sprawdzenie stanu pasków napędowych.',
    'Sprawdzenie działania przepustnic i siłowników.',
    'Sprawdzenie drożności odpływu skroplin.',
    'Kontrola stanu technicznego obudowy, mocowań i izolacji.',
    'Kontrola i czyszczenie czujników temperatury, wilgotności, CO₂.',
    'Sprawdzenie pracy nagrzewnicy, chłodnicy, odzysku ciepła.',
    'Sprawdzenie zabezpieczeń elektrycznych i połączeń.',
  ];

  final SignatureController _klientSignatureController = SignatureController(
    penStrokeWidth: 3,
    penColor: Colors.black,
    exportBackgroundColor: Colors.white,
  );

  final SignatureController _serwisantSignatureController = SignatureController(
    penStrokeWidth: 3,
    penColor: Colors.black,
    exportBackgroundColor: Colors.white,
  );

  // CACHE dla zasobów PDF (NEW)
  Uint8List? _logoBytes;
  pw.Font? _fontRegular;
  pw.Font? _fontBold;

  Future<void> _ensurePdfAssets() async {
    _logoBytes ??= await _loadLogo();                // CHANGED
    _fontRegular ??= await _loadFont('assets/fonts/NotoSans-Regular.ttf'); // CHANGED
    _fontBold ??= await _loadFont('assets/fonts/NotoSans-Bold.ttf');       // CHANGED
  }

  Future<Uint8List?> _loadLogo() async { // NEW
    try {
      final data = await rootBundle.load('assets/images/logo.png');
      return data.buffer.asUint8List();
    } catch (_) {
      return null;
    }
  }

  Future<pw.Font> _loadFont(String path) async { // NEW
    final data = await rootBundle.load(path);
    return pw.Font.ttf(data);
  }

  @override
  void dispose() {
    _firmaController.dispose();
    _imieNazwiskoController.dispose();
    _adresController.dispose();
    _telefonController.dispose();
    _mailController.dispose();
    _dataController.dispose();
    _uwagiKlientaController.dispose();
    _uwagiSerwisantaController.dispose();
    _gotowkaKwotaController.dispose();
    _klientSignatureController.dispose();
    _serwisantSignatureController.dispose();
    _nextServiceDateController.dispose(); // NEW
    super.dispose();
  }

  void _dodajKomplet() {
    setState(() {
      _komplety.add({
        'nazwa': 'Komplet ${_komplety.length + 1}',
        'jednostkiZewn': <Map<String, String>>[],
        'jednostkiWewn': <Map<String, String>>[],
        'centrale': <Map<String, dynamic>>[],
      });
      _wybranyKomplet = _komplety.length - 1;
    });
  }

  void _zmienNazweKompletu(int idx) {
    final nazwaController = TextEditingController(text: _komplety[idx]['nazwa']);
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Zmień nazwę kompletu'),
        content: TextField(
          controller: nazwaController,
          decoration: const InputDecoration(
              labelText: 'Nazwa kompletu', border: OutlineInputBorder()),
        ),
        actions: [
          TextButton(
            onPressed: () {
              setState(() {
                _komplety[idx]['nazwa'] = nazwaController.text;
              });
              Navigator.pop(context);
            },
            child: const Text('Zapisz'),
          ),
        ],
      ),
    );
  }

  void _dodajJednostkeZewnDoKompletu() {
    if (_wybranyKomplet == null) return;
    showDialog(
      context: context,
      builder: (context) {
        final typController = TextEditingController();
        final producentController = TextEditingController();
        final modelController = TextEditingController();
        final nrSeryjnyController = TextEditingController();
        return AlertDialog(
          title: const Text('Dodaj jednostkę zewnętrzną'),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              TextField(
                  controller: typController,
                  decoration: const InputDecoration(labelText: 'Typ')),
              TextField(
                  controller: producentController,
                  decoration: const InputDecoration(labelText: 'Producent')),
              TextField(
                  controller: modelController,
                  decoration: const InputDecoration(labelText: 'Model')),
              TextField(
                  controller: nrSeryjnyController,
                  decoration: const InputDecoration(labelText: 'Nr seryjny')),
            ],
          ),
          actions: [
            TextButton(
              onPressed: () {
                setState(() {
                  _komplety[_wybranyKomplet!]['jednostkiZewn'].add({
                    'Typ': typController.text,
                    'Producent': producentController.text,
                    'Model': modelController.text,
                    'Nr seryjny': nrSeryjnyController.text,
                  });
                });
                Navigator.pop(context);
              },
              child: const Text('Dodaj'),
            ),
          ],
        );
      },
    );
  }

  void _dodajJednostkeWewnDoKompletu() {
    if (_wybranyKomplet == null) return;
    showDialog(
      context: context,
      builder: (context) {
        final typController = TextEditingController();
        final producentController = TextEditingController();
        final modelController = TextEditingController();
        final nrSeryjnyController = TextEditingController();
        return AlertDialog(
          title: const Text('Dodaj jednostkę wewnętrzną'),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              TextField(
                  controller: typController,
                  decoration: const InputDecoration(labelText: 'Typ')),
              TextField(
                  controller: producentController,
                  decoration: const InputDecoration(labelText: 'Producent')),
              TextField(
                  controller: modelController,
                  decoration: const InputDecoration(labelText: 'Model')),
              TextField(
                  controller: nrSeryjnyController,
                  decoration: const InputDecoration(labelText: 'Nr seryjny')),
            ],
          ),
          actions: [
            TextButton(
              onPressed: () {
                setState(() {
                  _komplety[_wybranyKomplet!]['jednostkiWewn'].add({
                    'Typ': typController.text,
                    'Producent': producentController.text,
                    'Model': modelController.text,
                    'Nr seryjny': nrSeryjnyController.text,
                  });
                });
                Navigator.pop(context);
              },
              child: const Text('Dodaj'),
            ),
          ],
        );
      },
    );
  }

  void _dodajCentraleDoKompletu() {
    if (_wybranyKomplet == null) return;
    showDialog(
      context: context,
      builder: (context) {
        final producentController = TextEditingController();
        final modelController = TextEditingController();
        final nrSeryjnyController = TextEditingController();
        List<Map<String, String>> filtry = [];
        return StatefulBuilder(
          builder: (context, setStateDialog) {
            void addFiltr() { // RENAMED from _dodajFiltr
              final klasaController = TextEditingController();
              final rodzajController = TextEditingController();
              final wymiarController = TextEditingController();
              final iloscController = TextEditingController();
              showDialog(
                context: context,
                builder: (context) {
                  return AlertDialog(
                    title: const Text('Dodaj filtr'),
                    content: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        TextField(
                            controller: klasaController,
                            decoration:
                                const InputDecoration(labelText: 'Klasa')),
                        TextField(
                            controller: rodzajController,
                            decoration:
                                const InputDecoration(labelText: 'Rodzaj')),
                        TextField(
                            controller: wymiarController,
                            decoration:
                                const InputDecoration(labelText: 'Wymiar')),
                        TextField(
                            controller: iloscController,
                            decoration:
                                const InputDecoration(labelText: 'Ilość')),
                      ],
                    ),
                    actions: [
                      TextButton(
                        onPressed: () {
                          setStateDialog(() {
                            filtry.add({
                              'Klasa': klasaController.text,
                              'Rodzaj': rodzajController.text,
                              'Wymiar': wymiarController.text,
                              'Ilość': iloscController.text,
                            });
                          });
                          Navigator.pop(context);
                        },
                        child: const Text('Dodaj'),
                      ),
                    ],
                  );
                },
              );
            }

            return AlertDialog(
              title: const Text('Dodaj centralę wentylacyjną'),
              content: SingleChildScrollView(
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    TextField(
                        controller: producentController,
                        decoration:
                            const InputDecoration(labelText: 'Producent')),
                    TextField(
                        controller: modelController,
                        decoration:
                            const InputDecoration(labelText: 'Model')),
                    TextField(
                        controller: nrSeryjnyController,
                        decoration:
                            const InputDecoration(labelText: 'Nr seryjny')),
                    const SizedBox(height: 8),
                    ElevatedButton(
                      onPressed: addFiltr, // UPDATED call
                      child: const Text('Dodaj Filtr'),
                    ),
                    ...filtry.map((f) => ListTile(
                          title: Text(
                              'Filtr: ${f['Klasa']}, ${f['Rodzaj']}, ${f['Wymiar']}, Ilość: ${f['Ilość']}'),
                        )),
                  ],
                ),
              ),
              actions: [
                TextButton(
                  onPressed: () {
                    setState(() {
                      _komplety[_wybranyKomplet!]['centrale'].add({
                        'Producent': producentController.text,
                        'Model': modelController.text,
                        'Nr seryjny': nrSeryjnyController.text,
                        'Filtry': filtry,
                      });
                    });
                    Navigator.pop(context);
                  },
                  child: const Text('Dodaj'),
                ),
              ],
            );
          },
        );
      },
    );
  }

  String _formatDate(DateTime d) =>
      '${d.day.toString().padLeft(2, '0')}.${d.month.toString().padLeft(2, '0')}.${d.year}'; // NEW

  Future<void> _pickDate() async {
    final now = DateTime.now();
    DateTime? picked;
    try {
      picked = await showDatePicker(
        context: context,
        initialDate: now,
        firstDate: DateTime(2000),
        lastDate: DateTime(2100),
        locale: const Locale('pl', 'PL'),
      );
    } catch (_) {
      try {
        picked = await showDatePicker(
          context: context,
          initialDate: now,
          firstDate: DateTime(2000),
          lastDate: DateTime(2100),
        );
      } catch (e) {
        if (!context.mounted) return; // zmiana: guard na BuildContext
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Błąd otwierania kalendarza: $e')),
        );
        return;
      }
    }
    if (!mounted) return;
    if (picked != null) {
      _dataController.text = _formatDate(picked);
      setState(() {});
    }
  }

  Future<void> _pickNextServiceDate() async {
    final now = DateTime.now();
    final picked = await showDatePicker(
      context: context,
      initialDate: now.add(const Duration(days: 90)),
      firstDate: now,
      lastDate: DateTime(now.year + 3),
      locale: const Locale('pl','PL'),
    );
    if (!mounted) return; // ADDED
    if (picked != null) {
      _nextServiceDateController.text = _formatDate(picked); // CHANGED
      setState(() {});
    }
  }

  Future<void> _generujPdf() async {
    // Usunięto cachowanie ScaffoldMessenger (lint: use_build_context_synchronously)
    if (_dataController.text.trim().isEmpty) {
      final now = DateTime.now();
      _dataController.text = _formatDate(now);
    }
    if (_firmaController.text.trim().isEmpty &&
        _imieNazwiskoController.text.trim().isEmpty) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Podaj firmę lub imię i nazwisko klienta.')),
      );
      return;
    }
    // NEW: wymagaj kwoty przy płatności gotówką
    if (_paymentMethod == PaymentMethod.cash &&
        _gotowkaKwotaController.text.trim().isEmpty) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Podaj kwotę dla płatności gotówką.')),
      );
      return;
    }
    try {
      final klientSignature = await _klientSignatureController.toPngBytes();
      final serwisantSignature = await _serwisantSignatureController.toPngBytes();
      if (!mounted) return;
      if (klientSignature == null || serwisantSignature == null) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Podpisz protokół przed wygenerowaniem PDF!')),
        );
        return;
      }

      await _ensurePdfAssets();
      final pdf = pw.Document();

      // listy zaznaczonych czynności
      final selectedKlima = <String>[];
      for (int i = 0; i < _klimaCzynnosci.length; i++) {
        if (_klimaChecks[i]) selectedKlima.add(_klimaCzynnosci[i]);
      }
      final selectedWent = <String>[];
      for (int i = 0; i < _wentCzynnosci.length; i++) {
        if (_wentChecks[i]) selectedWent.add(_wentCzynnosci[i]);
      }

      // STYLE HELPERS (NEW: fallback fonts)
      final baseFont = _fontRegular ?? pw.Font.helvetica();
      final boldFont = _fontBold ?? pw.Font.helveticaBold();
      final titleStyle = pw.TextStyle(font: boldFont, fontSize: 22);
      final sectionTitle = pw.TextStyle(font: boldFont, fontSize: 14);
      final smallStyle = pw.TextStyle(font: baseFont, fontSize: 9);
      final boldSmallStyle = pw.TextStyle(font: boldFont, fontSize: 9);
      pw.RichText labelValue(String label, String value) => pw.RichText(
        text: pw.TextSpan(
          children: [
            pw.TextSpan(text: label, style: pw.TextStyle(font: boldFont, fontSize: 11)),
            pw.TextSpan(text: value, style: pw.TextStyle(font: baseFont, fontSize: 11)),
          ],
        ),
      );

      // NOWE: tekst płatności w oparciu o PaymentMethod
      final paymentText = _paymentMethod == PaymentMethod.cash
          ? 'Gotówka (${_gotowkaKwotaController.text.trim().isEmpty ? "-" : _gotowkaKwotaController.text})'
          : _paymentMethod == PaymentMethod.transfer
              ? 'Przelew'
              : '-';

      // HEADER (tylko pierwsza strona)
      pw.Widget headerWidget = pw.Column(
        crossAxisAlignment: pw.CrossAxisAlignment.start,
        children: [
          pw.Row(
            crossAxisAlignment: pw.CrossAxisAlignment.start,
            children: [
              if (_logoBytes != null)
                pw.Container(width: 110, child: pw.Image(pw.MemoryImage(_logoBytes!)))
              else
                pw.Container(
                  width: 110,
                  height: 60,
                  alignment: pw.Alignment.center,
                  decoration: pw.BoxDecoration(border: pw.Border.all(width: 0.5)),
                  child: pw.Text('Brak logo', style: pw.TextStyle(font: baseFont, fontSize: 8)),
                ),
              pw.SizedBox(width: 14),
              pw.Expanded(
                child: pw.Text(
                  'NR. CERTYFIKATU PRZEDSIĘBIORSTWA - FGAZ-P/10/0020/16',
                  style: pw.TextStyle(font: boldFont, fontSize: 10, letterSpacing: 0.3),
                ),
              ),
            ],
          ),
          pw.SizedBox(height: 6),
          pw.Row(
            children: [
              pw.Spacer(),
              pw.Text('Data: ${_dataController.text}',
                  style: pw.TextStyle(font: baseFont, fontSize: 11)),
            ],
          ),
          pw.SizedBox(height: 8),
          pw.Center(child: pw.Text('PROTOKÓŁ SERWISOWY', style: titleStyle)),
          pw.SizedBox(height: 12),
        ],
      );

      pdf.addPage(
        pw.MultiPage(
          theme: pw.ThemeData.withFont(base: baseFont, bold: boldFont),
          pageFormat: PdfPageFormat.a4,
          header: (ctx) => ctx.pageNumber == 1 ? headerWidget : pw.SizedBox(),
          footer: (ctx) => ctx.pageNumber == ctx.pagesCount
              ? pw.Column(
                  children: [
                    pw.Divider(thickness: 0.4),
                    pw.SizedBox(height: 4),
                    pw.Row(
                      mainAxisAlignment: pw.MainAxisAlignment.spaceBetween,
                      children: [
                        pw.Column(
                            crossAxisAlignment: pw.CrossAxisAlignment.start,
                            children: [
                              pw.Text('Klimatim S.C.',
                                  style: pw.TextStyle(font: boldFont, fontSize: 9)),
                              pw.Text('NIP: 9591952500',
                                  style: const pw.TextStyle(fontSize: 7)),
                            ]),
                        pw.Text('Strona ${ctx.pageNumber}/${ctx.pagesCount}',
                            style: const pw.TextStyle(fontSize: 7)),
                        pw.Column(
                            crossAxisAlignment: pw.CrossAxisAlignment.end,
                            children: [
                              pw.Text('Klimatim sp. z o.o.',
                                  style: pw.TextStyle(font: boldFont, fontSize: 9)),
                              pw.Text('NIP: 9592056854',
                                  style: const pw.TextStyle(fontSize: 7)),
                            ]),
                      ],
                    ),
                    pw.SizedBox(height: 2),
                    pw.Text(
                      'ul. Krakowska 285a, 25-800 Kielce  •  biuro@klimatim.pl  •  serwis@klimatim.pl  •  www.klimatim.pl',
                      style: const pw.TextStyle(fontSize: 6),
                    ),
                  ],
                )
              : pw.SizedBox(),
          build: (context) => [
            // Dane klienta
            pw.Text('Dane Klienta', style: sectionTitle),
            pw.SizedBox(height: 4),
            labelValue('Firma/Obiekt: ', _firmaController.text),
            labelValue('Imię i Nazwisko: ', _imieNazwiskoController.text),
            labelValue('Adres: ', _adresController.text),
            labelValue('Telefon: ', _telefonController.text),
            labelValue('Mail: ', _mailController.text),
            pw.SizedBox(height: 10),
            pw.RichText(
              text: pw.TextSpan(
                style: pw.TextStyle(font: baseFont, fontSize: 10),
                children: [
                  pw.TextSpan(text: 'Rodzaj wizyty: ', style: pw.TextStyle(font: boldFont)),
                  pw.TextSpan(
                    text:
                      '${_przeglad ? "Przegląd " : ""}'
                      '${_awaria ? "Awaria " : ""}'
                      '${_naprawa ? "Naprawa " : ""}',
                  ),
                ],
              ),
            ),
            pw.SizedBox(height: 14),

            // Urządzenia
            pw.Text('Urządzenia', style: sectionTitle),
            ..._komplety.map((k) => pw.Column(
                  crossAxisAlignment: pw.CrossAxisAlignment.start,
                  children: [
                    pw.Text('Komplet: ${k['nazwa']}',
                        style: pw.TextStyle(font: boldFont, fontSize: 11)),
                    ...((k['jednostkiZewn'] as List).map<pw.Widget>((j) =>
                        pw.Text('Jedn. zewn.: ${j['Typ']}, ${j['Producent']}, ${j['Model']}, ${j['Nr seryjny']}',
                            style: smallStyle))),
                    ...((k['jednostkiWewn'] as List).map<pw.Widget>((j) =>
                        pw.Text('Jedn. wewn.: ${j['Typ']}, ${j['Producent']}, ${j['Model']}, ${j['Nr seryjny']}',
                            style: smallStyle))),
                    ...((k['centrale'] as List).map<pw.Widget>((c) => pw.Column(
                          crossAxisAlignment: pw.CrossAxisAlignment.start,
                          children: [
                            pw.Text('Centrala: ${c['Producent']}, ${c['Model']}, ${c['Nr seryjny']}',
                                style: smallStyle),
                            ...((c['Filtry'] as List).map((f) => pw.Text(
                                'Filtr: ${f['Klasa']}, ${f['Rodzaj']}, ${f['Wymiar']}, Ilość: ${f['Ilość']}',
                                style: smallStyle))),
                          ],
                        ))),
                    pw.SizedBox(height: 4),
                  ],
                )),
            pw.SizedBox(height: 12),
            pw.Text('Czynności serwisowe',
                style:
                    pw.TextStyle(font: boldFont, fontSize: 14)),
            pw.SizedBox(height: 4),
            pw.Row(
              crossAxisAlignment: pw.CrossAxisAlignment.start,
              children: [
                pw.Expanded(
                  child: pw.Column(
                    crossAxisAlignment: pw.CrossAxisAlignment.start,
                    children: [
                      pw.Text('Klimatyzacyjne:', style: boldSmallStyle),
                      pw.SizedBox(height: 2),
                      if (selectedKlima.isEmpty)
                        pw.Text('— brak zaznaczonych —', style: smallStyle)
                      else
                        ...selectedKlima.map((e) =>
                            pw.Row(
                              crossAxisAlignment: pw.CrossAxisAlignment.start,
                              children: [
                                pw.Text('• ', style: smallStyle),
                                pw.Expanded(child: pw.Text(e, style: smallStyle)),
                              ],
                            )),
                    ],
                  ),
                ),
                pw.SizedBox(width: 16),
                pw.Expanded(
                  child: pw.Column(
                    crossAxisAlignment: pw.CrossAxisAlignment.start,
                    children: [
                      pw.Text('Wentylacyjnych', style: boldSmallStyle),
                      pw.SizedBox(height: 2),
                      if (selectedWent.isEmpty)
                        pw.Text('— brak zaznaczonych —', style: smallStyle)
                      else
                        ...selectedWent.map((e) =>
                            pw.Row(
                              crossAxisAlignment: pw.CrossAxisAlignment.start,
                              children: [
                                pw.Text('• ', style: smallStyle),
                                pw.Expanded(child: pw.Text(e, style: smallStyle)),
                              ],
                            )),
                    ],
                  ),
                ),
              ],
            ),
            pw.SizedBox(height: 12),

            // Uwagi (pogrubione etykiety) (CHANGED)
            pw.RichText(
              text: pw.TextSpan(
                children: [
                  pw.TextSpan(text: 'Uwagi Klienta: ', style: pw.TextStyle(font: boldFont, fontSize: 11)),
                  pw.TextSpan(text: _uwagiKlientaController.text, style: pw.TextStyle(font: baseFont, fontSize: 11)),
                ],
              ),
            ),
            pw.SizedBox(height: 4),
            pw.RichText(
              text: pw.TextSpan(
                children: [
                  pw.TextSpan(text: 'Uwagi Serwisanta: ', style: pw.TextStyle(font: boldFont, fontSize: 11)),
                  pw.TextSpan(text: _uwagiSerwisantaController.text, style: pw.TextStyle(font: baseFont, fontSize: 11)),
                ],
              ),
            ),
            pw.SizedBox(height: 6),

            // Płatność (POPRAWIONE)
            pw.RichText(
              text: pw.TextSpan(
                children: [
                  pw.TextSpan(text: 'Płatność: ', style: pw.TextStyle(font: boldFont, fontSize: 11)),
                  pw.TextSpan(text: paymentText, style: pw.TextStyle(font: baseFont, fontSize: 11)),
                ],
              ),
            ),
            pw.SizedBox(height: 6),

            // NOWE: Następny przegląd
            pw.RichText(
              text: pw.TextSpan(
                children: [
                  pw.TextSpan(text: 'Następny przegląd: ', style: pw.TextStyle(font: boldFont, fontSize: 11)),
                  pw.TextSpan(
                    text: _nextServiceDateController.text.trim().isEmpty ? '-' : _nextServiceDateController.text,
                    style: pw.TextStyle(font: baseFont, fontSize: 11),
                  ),
                ],
              ),
            ),
            pw.SizedBox(height: 18),

            // Podpisy
            pw.Row(
              mainAxisAlignment: pw.MainAxisAlignment.spaceBetween,
              children: [
                pw.Column(children: [
                  pw.Text('Podpis klienta:', style: pw.TextStyle(font: boldFont, fontSize: 11)),
                  pw.SizedBox(height: 4),
                  pw.Image(pw.MemoryImage(klientSignature), height: 60),
                ]),
                pw.Column(children: [
                  pw.Text('Podpis serwisanta:', style: pw.TextStyle(font: boldFont, fontSize: 11)),
                  pw.SizedBox(height: 4),
                  pw.Image(pw.MemoryImage(serwisantSignature), height: 60),
                ]),
              ],
            ),
          ],
        ),
      );

      final bytes = await pdf.save();

      // PRZYGOTUJ nazwę pliku i folder w bibliotece “Protokoly”
      String sanitize(String s) => s.replaceAll(RegExp(r'[\\/:*?"<>|]'), '_').trim();
      final clientName = _firmaController.text.isNotEmpty ? _firmaController.text : _imieNazwiskoController.text;
      final year = DateTime.now().year.toString();
      // Uwaga: folderPath BEZ nazwy biblioteki (biblioteka to już “Protokoly”)
      final folderPath = '$year/${sanitize(clientName)}';
      final fileName = 'Protokol_${_dataController.text}_${sanitize(clientName)}.pdf';

      final metadata = <String, String>{
        'Klient': clientName,
        'DataSerwisu': _dataController.text,
        'Telefon': _telefonController.text,
        'Mail': _mailController.text,
        'NastepnyPrzeglad': _nextServiceDateController.text,
      };

      // ZAPISZ PDF DO SHAREPOINT (Graph) przez SharePointUploader
      await uploadProtocolPdfDefaultBytes(
        pdfBytes: bytes,
        filename: fileName,
        folderPath: folderPath,
        metadata: metadata,
      );

      // (opcjonalnie) pokaż dialog wydruku po udanym uploadzie:
      await Printing.layoutPdf(onLayout: (format) async => bytes);

      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Protokół zapisany w Microsoft 365.')),
      );
      // (opcjonalnie) w logu przeglądarki zobaczysz URL:
      // print('SP URL: ${res['webUrl']}');
    } catch (e) {
      // Dodano log do konsoli dla diagnostyki Graph/SharePoint
      // (zachowujemy SnackBar dla użytkownika)
      // ignore: avoid_print
      print('PDF upload error: $e');
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Błąd generowania/zapisu: $e')),
      );
    }
  }

  Widget _footerFirma() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: const [
        Divider(),
        SizedBox(height: 8),
        Text('KLIMATIM S.C.', style: styleMain),
        Text('NIP: 9591952500', style: styleSub),
        SizedBox(height: 4),
        Text('KLIMATIM SP. Z O.O.', style: styleMain),
        Text('NIP: 9592056854', style: styleSub),
        SizedBox(height: 8),
        Text('ul. Krakowska 285a', style: styleSub),
        Text('25-800 Kielce', style: styleSub),
        SizedBox(height: 8),
        Text('biuro@klimatim.pl • serwis@klimatim.pl', style: styleSub),
        Text('www.klimatim.pl', style: styleSub),
        SizedBox(height: 16),
      ],
    );
  }

  final _formKey = GlobalKey<FormState>();
  PaymentMethod? _paymentMethod; // null = nie wybrano

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Nowy protokół')),
      body: SafeArea(
        child: Form(
          key: _formKey,
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              children: [
                // Logo i nagłówek
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Column(
                      children: [
                        SizedBox(
                          height: 80,
                          child: Image.asset(
                            'assets/images/logo.png',
                            height: 80,
                            fit: BoxFit.contain,
                            errorBuilder: (context, error, stackTrace) => Container(
                              height: 80,
                              width: 120,
                              alignment: Alignment.center,
                              decoration: BoxDecoration(
                                border: Border.all(color: Colors.grey.shade300),
                                color: Colors.grey.shade50,
                              ),
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: const [
                                  Icon(Icons.image_not_supported, size: 28, color: Colors.grey),
                                  SizedBox(height: 4),
                                  Text('Brak logo', style: TextStyle(fontSize: 10, color: Colors.grey)),
                                ],
                              ),
                            ),
                          ),
                        ),
                        const SizedBox(height: 6), // zmniejszony odstęp
                        const Text(
                          'NR. CERTYFIKATU PRZEDSIĘBIORSTWA - FGAZ-P/10/0020/16',
                          style: TextStyle(
                            fontWeight: FontWeight.w600,
                            fontSize: 12, // delikatnie mniejsze
                            letterSpacing: 0.5,
                            color: Colors.black87,
                          ),
                          textAlign: TextAlign.center,
                        ),
                      ],
                    ),
                    const Spacer(),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.end,
                      children: [
                        const SizedBox(height: 8),
                        Text(
                          'Data wykonania serwisu:',
                          style: Theme.of(context).textTheme.titleMedium,
                        ),
                        SizedBox(
                          width: 160,
                          child: GestureDetector(
                            onTap: _pickDate,
                            child: AbsorbPointer(
                              child: TextField(
                                controller: _dataController,
                                decoration: const InputDecoration(
                                  labelText: 'dd.mm.rrrr',
                                  border: OutlineInputBorder(),
                                  suffixIcon: Icon(Icons.calendar_today), // CHANGED: add const
                                ),
                                keyboardType: TextInputType.datetime,
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
                const SizedBox(height: 16),
                // Nagłówek protokołu
                const Center( // CHANGED: const
                  child: Text(
                    'Protokół serwisowy',
                    style: TextStyle(
                      fontSize: 32,
                      fontWeight: FontWeight.bold,
                    ),
                    textAlign: TextAlign.center,
                  ),
                ),
                const SizedBox(height: 24),
                // Rodzaj wizyty - trzy checkboxy w jednym wierszu
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Expanded(
                      child: CheckboxListTile(
                        title: const Text('Przegląd'),
                        value: _przeglad,
                        onChanged: (val) {
                          setState(() {
                            _przeglad = val ?? false;
                          });
                        },
                        controlAffinity: ListTileControlAffinity.leading,
                      ),
                    ),
                    Expanded(
                      child: CheckboxListTile(
                        title: const Text('Awaria'),
                        value: _awaria,
                        onChanged: (val) {
                          setState(() {
                            _awaria = val ?? false;
                          });
                        },
                        controlAffinity: ListTileControlAffinity.leading,
                      ),
                    ),
                    Expanded(
                      child: CheckboxListTile(
                        title: const Text('Naprawa'),
                        value: _naprawa,
                        onChanged: (val) {
                          setState(() {
                            _naprawa = val ?? false;
                          });
                        },
                        controlAffinity: ListTileControlAffinity.leading,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 24),
                // Dane klienta
                Align(
                  alignment: Alignment.centerLeft,
                  child:
                      Text('Dane Klienta:', style: Theme.of(context).textTheme.headlineSmall),
                ),
                const SizedBox(height: 8),
                TextFormField(
                  controller: _firmaController,
                  decoration: const InputDecoration(
                      labelText: 'Firma / Obiekt', border: OutlineInputBorder()),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'To pole jest wymagane';
                    }
                    return null;
                  },
                ),
                const SizedBox(height: 8),
                TextFormField(
                  controller: _imieNazwiskoController,
                  decoration: const InputDecoration(
                      labelText: 'Imię i Nazwisko', border: OutlineInputBorder()),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'To pole jest wymagane';
                    }
                    return null;
                  },
                ),
                const SizedBox(height: 8),
                TextFormField(
                  controller: _adresController,
                  decoration: const InputDecoration(
                      labelText: 'Adres', border: OutlineInputBorder()),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'To pole jest wymagane';
                    }
                    return null;
                  },
                ),
                const SizedBox(height: 8),
                TextFormField(
                  controller: _telefonController,
                  decoration: const InputDecoration(labelText: 'Nr tel.', border: OutlineInputBorder()),
                  keyboardType: TextInputType.phone,
                  validator: phoneValidator,
                ),
                const SizedBox(height: 8),
                TextFormField(
                  controller: _mailController,
                  decoration: const InputDecoration(labelText: 'Adres Mail', border: OutlineInputBorder()),
                  keyboardType: TextInputType.emailAddress,
                  validator: emailValidator,
                ),
                const SizedBox(height: 24),
                // Dane serwisowanych urządzeń
                Align(
                  alignment: Alignment.centerLeft,
                  child:
                      Text('Dane Serwisowanych Urządzeń:', style: Theme.of(context).textTheme.headlineSmall),
                ),
                const SizedBox(height: 8),
                Row(
                  children: [
                    ElevatedButton(
                      onPressed: _dodajKomplet,
                      child: const Text('Dodaj komplet urządzeń'),
                    ),
                    const SizedBox(width: 16),
                    if (_komplety.isNotEmpty)
                      DropdownButton<int>(
                        value: _wybranyKomplet,
                        items: List.generate(_komplety.length, (i) => DropdownMenuItem(
                          value: i,
                          child: Row(
                            children: [
                              Text(_komplety[i]['nazwa']),
                              IconButton(
                                icon: const Icon(Icons.edit, size: 18),
                                tooltip: 'Zmień nazwę',
                                onPressed: () => _zmienNazweKompletu(i),
                              ),
                            ],
                          ),
                        )),
                        onChanged: (int? idx) {
                          setState(() {
                            _wybranyKomplet = idx ?? 0;
                          });
                        },
                      ),
                  ],
                ),
                const SizedBox(height: 8),
                Row(
                  children: [
                    ElevatedButton(
                      onPressed: _komplety.isNotEmpty ? _dodajJednostkeZewnDoKompletu : null,
                      child: const Text('Dodaj jedn. zewn.'),
                    ),
                    const SizedBox(width: 8),
                    ElevatedButton(
                      onPressed: _komplety.isNotEmpty ? _dodajJednostkeWewnDoKompletu : null,
                      child: const Text('Dodaj jedn. wewn.'),
                    ),
                    const SizedBox(width: 8),
                    ElevatedButton(
                      onPressed: _komplety.isNotEmpty ? _dodajCentraleDoKompletu : null,
                      child: const Text('Dodaj Centrale Wentylacyjną'),
                    ),
                  ],
                ),
                const SizedBox(height: 8),
                if (_komplety.isNotEmpty && _wybranyKomplet != null)
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start, // FIX (usunieto pw.)
                    children: [
                      ...(_komplety[_wybranyKomplet!]['jednostkiZewn'] as List).asMap().entries.map((entry) {
                        final idx = entry.key;
                        final j = entry.value;
                        return ListTile(
                          title: Text('Jedn. zewn.: ${j['Typ']}, ${j['Producent']}, ${j['Model']}, ${j['Nr seryjny']}'),
                          trailing: Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              IconButton(
                                icon: const Icon(Icons.edit),
                                onPressed: () {
                                  final typController = TextEditingController(text: j['Typ']);
                                  final producentController = TextEditingController(text: j['Producent']);
                                  final modelController = TextEditingController(text: j['Model']);
                                  final nrSeryjnyController = TextEditingController(text: j['Nr seryjny']);
                                  showDialog(
                                    context: context,
                                    builder: (context) => AlertDialog(
                                      title: const Text('Edytuj jednostkę zewnętrzną'),
                                      content: Column(
                                        mainAxisSize: MainAxisSize.min,
                                        children: [
                                          TextField(controller: typController, decoration: const InputDecoration(labelText: 'Typ')),
                                          TextField(controller: producentController, decoration: const InputDecoration(labelText: 'Producent')),
                                          TextField(controller: modelController, decoration: const InputDecoration(labelText: 'Model')),
                                          TextField(controller: nrSeryjnyController, decoration: const InputDecoration(labelText: 'Nr seryjny')),
                                        ],
                                      ),
                                      actions: [
                                        TextButton(
                                          onPressed: () {
                                            setState(() {
                                              _komplety[_wybranyKomplet!]['jednostkiZewn'][idx] = {
                                                'Typ': typController.text,
                                                'Producent': producentController.text,
                                                'Model': modelController.text,
                                                'Nr seryjny': nrSeryjnyController.text,
                                              };
                                            });
                                            Navigator.pop(context);
                                          },
                                          child: const Text('Zapisz'),
                                        ),
                                      ],
                                    ),
                                  );
                                },
                              ),
                              IconButton(
                                icon: const Icon(Icons.delete),
                                onPressed: () {
                                  setState(() {
                                    _komplety[_wybranyKomplet!]['jednostkiZewn'].removeAt(idx);
                                  });
                                },
                              ),
                            ],
                          ),
                        );
                      }).toList(),
                      ...(_komplety[_wybranyKomplet!]['jednostkiWewn'] as List).asMap().entries.map((entry) {
                        final idx = entry.key;
                        final j = entry.value;
                        return ListTile(
                          title: Text('Jedn. wewn.: ${j['Typ']}, ${j['Producent']}, ${j['Model']}, ${j['Nr seryjny']}'),
                          trailing: Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              IconButton(
                                icon: const Icon(Icons.edit),
                                onPressed: () {
                                  final typController = TextEditingController(text: j['Typ']);
                                  final producentController = TextEditingController(text: j['Producent']);
                                  final modelController = TextEditingController(text: j['Model']);
                                  final nrSeryjnyController = TextEditingController(text: j['Nr seryjny']);
                                  showDialog(
                                    context: context,
                                    builder: (context) => AlertDialog(
                                      title: const Text('Edytuj jednostkę wewnętrzną'),
                                      content: Column(
                                        mainAxisSize: MainAxisSize.min,
                                        children: [
                                          TextField(controller: typController, decoration: const InputDecoration(labelText: 'Typ')),
                                          TextField(controller: producentController, decoration: const InputDecoration(labelText: 'Producent')),
                                          TextField(controller: modelController, decoration: const InputDecoration(labelText: 'Model')),
                                          TextField(controller: nrSeryjnyController, decoration: const InputDecoration(labelText: 'Nr seryjny')),
                                        ],
                                      ),
                                      actions: [
                                        TextButton(
                                          onPressed: () {
                                            setState(() {
                                              _komplety[_wybranyKomplet!]['jednostkiWewn'][idx] = {
                                                'Typ': typController.text,
                                                'Producent': producentController.text,
                                                'Model': modelController.text,
                                                'Nr seryjny': nrSeryjnyController.text,
                                              };
                                            });
                                            Navigator.pop(context);
                                          },
                                          child: const Text('Zapisz'),
                                        ),
                                      ],
                                    ),
                                  );
                                },
                              ),
                              IconButton(
                                icon: const Icon(Icons.delete),
                                onPressed: () {
                                  setState(() {
                                    _komplety[_wybranyKomplet!]['jednostkiWewn'].removeAt(idx);
                                  });
                                },
                              ),
                            ],
                          ),
                        );
                      }).toList(),
                      ...(_komplety[_wybranyKomplet!]['centrale'] as List).asMap().entries.map((entry) {
                        final idx = entry.key;
                        final c = entry.value;
                        return Column(
                          // CHANGED: użyj Flutter CrossAxisAlignment
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            ListTile(
                              title: Text('Centrala: ${c['Producent']}, ${c['Model']}, ${c['Nr seryjny']}'),
                              trailing: Row(
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  IconButton(
                                    icon: const Icon(Icons.edit), // ADDED const
                                    onPressed: () {
                                      final producentController = TextEditingController(text: c['Producent']);
                                      final modelController = TextEditingController(text: c['Model']);
                                      final nrSeryjnyController = TextEditingController(text: c['Nr seryjny']);
                                      showDialog(
                                        context: context,
                                        builder: (context) => AlertDialog(
                                          title: const Text('Edytuj centralę wentylacyjną'),
                                          content: Column(
                                            mainAxisSize: MainAxisSize.min,
                                            children: [
                                              TextField(controller: producentController, decoration: const InputDecoration(labelText: 'Producent')),
                                              TextField(controller: modelController, decoration: const InputDecoration(labelText: 'Model')),
                                              TextField(controller: nrSeryjnyController, decoration: const InputDecoration(labelText: 'Nr seryjny')),
                                            ],
                                          ),
                                          actions: [
                                            TextButton(
                                              onPressed: () {
                                                setState(() {
                                                  _komplety[_wybranyKomplet!]['centrale'][idx]['Producent'] = producentController.text;
                                                  _komplety[_wybranyKomplet!]['centrale'][idx]['Model'] = modelController.text;
                                                  _komplety[_wybranyKomplet!]['centrale'][idx]['Nr seryjny'] = nrSeryjnyController.text;
                                                });
                                                Navigator.pop(context);
                                              },
                                              child: const Text('Zapisz'),
                                            ),
                                          ],
                                        ),
                                      );
                                    },
                                  ),
                                  IconButton(
                                    icon: const Icon(Icons.delete), // ADDED const
                                    onPressed: () {
                                      setState(() {
                                        _komplety[_wybranyKomplet!]['centrale'].removeAt(idx);
                                      });
                                    },
                                  ),
                                ],
                              ),
                            ),
                            ...((c['Filtry'] as List<Map<String, String>>).asMap().entries.map((fEntry) {
                              final fIdx = fEntry.key;
                              final f = fEntry.value;
                              return Padding(
                                padding: const EdgeInsets.only(left: 16.0),
                                child: ListTile(
                                  title: Text('Filtr: ${f['Klasa']}, ${f['Rodzaj']}, ${f['Wymiar']}, Ilość: ${f['Ilość']}'),
                                  trailing: Row(
                                    mainAxisSize: MainAxisSize.min,
                                    children: [
                                      IconButton(
                                        icon: const Icon(Icons.edit), // ADDED const
                                        onPressed: () {
                                          final klasaController = TextEditingController(text: f['Klasa']);
                                          final rodzajController = TextEditingController(text: f['Rodzaj']);
                                          final wymiarController = TextEditingController(text: f['Wymiar']);
                                          final iloscController = TextEditingController(text: f['Ilość']);
                                          showDialog(
                                            context: context,
                                            builder: (context) => AlertDialog(
                                              title: const Text('Edytuj filtr'),
                                              content: Column(
                                                mainAxisSize: MainAxisSize.min,
                                                children: [
                                                  TextField(controller: klasaController, decoration: const InputDecoration(labelText: 'Klasa')),
                                                  TextField(controller: rodzajController, decoration: const InputDecoration(labelText: 'Rodzaj')),
                                                  TextField(controller: wymiarController, decoration: const InputDecoration(labelText: 'Wymiar')),
                                                  TextField(controller: iloscController, decoration: const InputDecoration(labelText: 'Ilość')),
                                                ],
                                              ),
                                              actions: [
                                                TextButton(
                                                  onPressed: () {
                                                    setState(() {
                                                      _komplety[_wybranyKomplet!]['centrale'][idx]['Filtry'][fIdx] = {
                                                        'Klasa': klasaController.text,
                                                        'Rodzaj': rodzajController.text,
                                                        'Wymiar': wymiarController.text,
                                                        'Ilość': iloscController.text,
                                                      };
                                                    });
                                                    Navigator.pop(context);
                                                  },
                                                  child: const Text('Zapisz'),
                                                ),
                                              ],
                                            ),
                                          );
                                        },
                                      ),
                                      IconButton(
                                        icon: const Icon(Icons.delete), // ADDED const
                                        onPressed: () {
                                          setState(() {
                                            _komplety[_wybranyKomplet!]['centrale'][idx]['Filtry'].removeAt(fIdx);
                                          });
                                        },
                                      ),
                                    ],
                                  ),
                                ),
                              );
                            })).toList(),
                          ],
                        );
                      }).toList(),
                    ],
                  ),
                const SizedBox(height: 24),
                // Czynności wykonywane podczas serwisu
                Align(
                  alignment: Alignment.centerLeft,
                  child: Text(
                    'Czynności wykonywane na urządzeniach:',
                    style: Theme.of(context).textTheme.headlineSmall,
                  ),
                ),
                const SizedBox(height: 8),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Klimatyzacyjne
                    Expanded(
                      child: Card(
                        elevation: 2,
                        margin: const EdgeInsets.all(8),
                        child: Padding(
                          padding: const EdgeInsets.all(12.0),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                children: [
                                  Expanded(
                                    child: Text('Klimatyzacyjnych', style: Theme.of(context).textTheme.titleMedium),
                                  ),
                                  TextButton(
                                    onPressed: () {
                                      setState(() {
                                        final allChecked = _klimaChecks.every((e) => e);
                                        for (int i = 0; i < _klimaChecks.length; i++) {
                                          _klimaChecks[i] = !allChecked;
                                        }
                                      });
                                    },
                                    child: Text(
                                      _klimaChecks.every((e) => e) ? 'Odznacz wszystko' : 'Zaznacz wszystko',
                                      style: const TextStyle(fontSize: 12),
                                    ),
                                  ),
                                ],
                              ),
                              ..._klimaCzynnosci.asMap().entries.map((entry) {
                                final idx = entry.key;
                                final txt = entry.value;
                                return CheckboxListTile(
                                  title: Text(txt, style: const TextStyle(fontSize: 14)),
                                  value: _klimaChecks[idx],
                                  onChanged: (val) {
                                    setState(() {
                                      _klimaChecks[idx] = val ?? false;
                                    });
                                  },
                                  controlAffinity: ListTileControlAffinity.leading,
                                  dense: true,
                                  contentPadding: EdgeInsets.zero,
                                );
                              }).toList(),
                            ], // FIX (was },)
                          ),
                        ),
                      ),
                    ),
                    // Wentylacyjne
                    Expanded(
                      child: Card(
                        elevation: 2,
                        margin: const EdgeInsets.all(8),
                        child: Padding(
                          padding: const EdgeInsets.all(12.0),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                children: [
                                  Expanded(
                                    child: Text('Wentylacyjnych', style: Theme.of(context).textTheme.titleMedium),
                                  ),
                                  TextButton(
                                    onPressed: () {
                                      setState(() {
                                        final allChecked = _wentChecks.every((e) => e);
                                        for (int i = 0; i < _wentChecks.length; i++) {
                                          _wentChecks[i] = !allChecked;
                                        }
                                      });
                                    },
                                    child: Text(
                                      _wentChecks.every((e) => e) ? 'Odznacz wszystko' : 'Zaznacz wszystko',
                                      style: const TextStyle(fontSize: 12),
                                    ),
                                  ),
                                ],
                              ),
                              ..._wentCzynnosci.asMap().entries.map((entry) {
                                final idx = entry.key;
                                final txt = entry.value;
                                return CheckboxListTile(
                                  title: Text(txt, style: const TextStyle(fontSize: 14)),
                                  value: _wentChecks[idx],
                                  onChanged: (val) {
                                    setState(() {
                                      _wentChecks[idx] = val ?? false;
                                    });
                                  },
                                  controlAffinity: ListTileControlAffinity.leading,
                                  dense: true,
                                  contentPadding: EdgeInsets.zero,
                                );
                              }).toList(),
                            ], // FIX (was },)
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 16),
                // Uwagi
                Align(
                  alignment: Alignment.centerLeft,
                  child: Text('Uwagi Klienta:', style: Theme.of(context).textTheme.titleMedium),
                ),
                TextField(
                  controller: _uwagiKlientaController,
                  decoration: const InputDecoration(labelText: 'Uwagi od Klienta', border: OutlineInputBorder()),
                  maxLines: 3,
                ),
                const SizedBox(height: 12),
                Align(
                  alignment: Alignment.centerLeft,
                  child: Text('Uwagi Serwisanta:', style: Theme.of(context).textTheme.titleMedium),
                ),
                TextField(
                  controller: _uwagiSerwisantaController,
                  decoration: const InputDecoration(labelText: 'Uwagi od Serwisanta', border: OutlineInputBorder()),
                  minLines: 3,
                  maxLines: 8,
                ),
                const SizedBox(height: 24),
                // Sposób płatności - dwa checkboxy
                Align(
                  alignment: Alignment.centerLeft,
                  child: Text('Sposób płatności:', style: Theme.of(context).textTheme.titleMedium),
                ),
                Row(
                  children: [
                    Expanded(
                      child: RadioListTile<PaymentMethod>(
                        title: const Text('Gotówka'),
                        value: PaymentMethod.cash,
                        groupValue: _paymentMethod,
                        onChanged: (v) => setState(() {
                          _paymentMethod = v;
                          // NEW: nie czyść kwoty przy wyborze gotówki
                        }),
                      ),
                    ),
                    Expanded(
                      child: RadioListTile<PaymentMethod>(
                        title: const Text('Przelew'),
                        value: PaymentMethod.transfer,
                        groupValue: _paymentMethod,
                        onChanged: (v) => setState(() {
                          _paymentMethod = v;
                          // NEW: po zmianie na przelew wyczyść kwotę gotówki, by nie wprowadzała w błąd
                          _gotowkaKwotaController.clear();
                        }),
                      ),
                    ),
                  ],
                ),
                // NEW: pole kwoty widoczne tylko dla gotówki
                if (_paymentMethod == PaymentMethod.cash)
                  Padding(
                    padding: const EdgeInsets.only(top: 8.0),
                    child: TextField(
                      controller: _gotowkaKwotaController,
                      decoration: const InputDecoration(
                        labelText: 'Kwota (PLN)',
                        hintText: 'np. 150,00',
                        border: OutlineInputBorder(),
                        prefixIcon: Icon(Icons.payments),
                      ),
                      keyboardType: const TextInputType.numberWithOptions(decimal: true),
                      inputFormatters: [
                        // pozwól na cyfry, spacje, kropki i przecinki
                        FilteringTextInputFormatter.allow(RegExp(r'[0-9,.\s]')),
                      ],
                    ),
                  ),
                const SizedBox(height: 16),
                Align( // NEW - pole następnego przeglądu
                  alignment: Alignment.centerLeft,
                  child: Text('Następny przegląd (plan):', style: Theme.of(context).textTheme.titleMedium),
                ),
                Row(
                  children: [
                    Expanded(
                      child: TextField(
                        controller: _nextServiceDateController,
                        readOnly: true,
                        decoration: const InputDecoration(
                          labelText: 'dd.mm.rrrr',
                          border: OutlineInputBorder(),
                        ),
                      ),
                    ),
                    const SizedBox(width: 8),
                    ElevatedButton(
                      onPressed: _pickNextServiceDate,
                      child: const Text('Wybierz'),
                    ),
                  ],
                ),
                const SizedBox(height: 24),
                // Podpisy
                Align(
                  alignment: Alignment.centerLeft,
                  child: Text('Podpisy:', style: Theme.of(context).textTheme.headlineSmall),
                ),
                const SizedBox(height: 16),
                Container(
                  height: 100,
                  width: double.infinity,
                  decoration: BoxDecoration(
                    border: Border.all(color: Colors.grey),
                    borderRadius: BorderRadius.circular(5),
                  ),
                  child: Signature(
                    controller: _klientSignatureController,
                    backgroundColor: Colors.white,
                  ),
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    TextButton(
                      onPressed: () => _klientSignatureController.clear(),
                      child: const Text('Wyczyść podpis klienta'),
                    ),
                  ],
                ),
                const SizedBox(height: 16),
                Container(
                  height: 100,
                  width: double.infinity,
                  decoration: BoxDecoration(
                    border: Border.all(color: Colors.grey),
                    borderRadius: BorderRadius.circular(5),
                  ),
                  child: Signature(
                    controller: _serwisantSignatureController,
                    backgroundColor: Colors.white,
                  ),
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    TextButton(
                      onPressed: () => _serwisantSignatureController.clear(),
                      child: const Text('Wyczyść podpis serwisanta'),
                    ),
                  ],
                ),
                const SizedBox(height: 32),
                // Przycisk PDF
                SizedBox(
                  width: double.infinity,
                  child: ElevatedButton.icon(
                    onPressed: () {
                      if (_formKey.currentState?.validate() != true) return;
                      if (_paymentMethod == null) {
                        ScaffoldMessenger.of(context).showSnackBar(
                          const SnackBar(content: Text('Wybierz sposób płatności')),
                        );
                        return;
                      }
                      _generujPdf();
                    },
                    icon: const Icon(Icons.picture_as_pdf),
                    label: const Text('Generuj i Zapisz Protokół PDF'),
                    style: ElevatedButton.styleFrom(
                      padding: const EdgeInsets.symmetric(vertical: 12),
                      textStyle: const TextStyle(fontSize: 18),
                    ),
                  ),
                ),
                const SizedBox(height: 24),
                _footerFirma(),
              ],
            ),
          ),
        ),
      ),
    );
  }
}