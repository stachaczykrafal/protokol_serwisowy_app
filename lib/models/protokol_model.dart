class ProtokolModel {
  final int? id;
  final String client;
  final String date;
  final String filePath;
  final String? firma;
  final String? imieNazwisko;
  final String? adres;
  final String? telefon;
  final String? mail;
  final String? uwagiKlienta;
  final String? uwagiSerwisanta;
  final bool? przeglad;
  final bool? awaria;
  final bool? naprawa;
  final bool? gotowka;
  final bool? przelew;
  final double? gotowkaKwota;
  final List<Map<String, dynamic>>? komplety;
  final List<bool>? klimaChecks;
  final List<bool>? wentChecks;
  final String? podpisSerwisanta;
  final String? podpisKlienta;

  ProtokolModel({
    this.id,
    required this.client,
    required this.date,
    required this.filePath,
    this.firma,
    this.imieNazwisko,
    this.adres,
    this.telefon,
    this.mail,
    this.uwagiKlienta,
    this.uwagiSerwisanta,
    this.przeglad = false,
    this.awaria = false,
    this.naprawa = false,
    this.gotowka = false,
    this.przelew = false,
    this.gotowkaKwota,
    this.komplety,
    this.klimaChecks,
    this.wentChecks,
    this.podpisSerwisanta,
    this.podpisKlienta,
  });

  // Convert to Map for database storage
  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'client': client,
      'date': date,
      'filePath': filePath,
      'firma': firma,
      'imieNazwisko': imieNazwisko,
      'adres': adres,
      'telefon': telefon,
      'mail': mail,
      'uwagiKlienta': uwagiKlienta,
      'uwagiSerwisanta': uwagiSerwisanta,
      'przeglad': przeglad == true ? 1 : 0,
      'awaria': awaria == true ? 1 : 0,
      'naprawa': naprawa == true ? 1 : 0,
      'gotowka': gotowka == true ? 1 : 0,
      'przelew': przelew == true ? 1 : 0,
      'gotowkaKwota': gotowkaKwota,
      'komplety': komplety?.toString(),
      'klimaChecks': klimaChecks?.toString(),
      'wentChecks': wentChecks?.toString(),
      'podpisSerwisanta': podpisSerwisanta,
      'podpisKlienta': podpisKlienta,
    };
  }

  // Create from Map (from database)
  factory ProtokolModel.fromMap(Map<String, dynamic> map) {
    return ProtokolModel(
      id: map['id'],
      client: map['client'] ?? '',
      date: map['date'] ?? '',
      filePath: map['filePath'] ?? '',
      firma: map['firma'],
      imieNazwisko: map['imieNazwisko'],
      adres: map['adres'],
      telefon: map['telefon'],
      mail: map['mail'],
      uwagiKlienta: map['uwagiKlienta'],
      uwagiSerwisanta: map['uwagiSerwisanta'],
      przeglad: map['przeglad'] == 1,
      awaria: map['awaria'] == 1,
      naprawa: map['naprawa'] == 1,
      gotowka: map['gotowka'] == 1,
      przelew: map['przelew'] == 1,
      gotowkaKwota: map['gotowkaKwota']?.toDouble(),
      // For complex types, you would parse from string if stored as string
      podpisSerwisanta: map['podpisSerwisanta'],
      podpisKlienta: map['podpisKlienta'],
    );
  }

  ProtokolModel copyWith({
    int? id,
    String? client,
    String? date,
    String? filePath,
    String? firma,
    String? imieNazwisko,
    String? adres,
    String? telefon,
    String? mail,
    String? uwagiKlienta,
    String? uwagiSerwisanta,
    bool? przeglad,
    bool? awaria,
    bool? naprawa,
    bool? gotowka,
    bool? przelew,
    double? gotowkaKwota,
    List<Map<String, dynamic>>? komplety,
    List<bool>? klimaChecks,
    List<bool>? wentChecks,
    String? podpisSerwisanta,
    String? podpisKlienta,
  }) {
    return ProtokolModel(
      id: id ?? this.id,
      client: client ?? this.client,
      date: date ?? this.date,
      filePath: filePath ?? this.filePath,
      firma: firma ?? this.firma,
      imieNazwisko: imieNazwisko ?? this.imieNazwisko,
      adres: adres ?? this.adres,
      telefon: telefon ?? this.telefon,
      mail: mail ?? this.mail,
      uwagiKlienta: uwagiKlienta ?? this.uwagiKlienta,
      uwagiSerwisanta: uwagiSerwisanta ?? this.uwagiSerwisanta,
      przeglad: przeglad ?? this.przeglad,
      awaria: awaria ?? this.awaria,
      naprawa: naprawa ?? this.naprawa,
      gotowka: gotowka ?? this.gotowka,
      przelew: przelew ?? this.przelew,
      gotowkaKwota: gotowkaKwota ?? this.gotowkaKwota,
      komplety: komplety ?? this.komplety,
      klimaChecks: klimaChecks ?? this.klimaChecks,
      wentChecks: wentChecks ?? this.wentChecks,
      podpisSerwisanta: podpisSerwisanta ?? this.podpisSerwisanta,
      podpisKlienta: podpisKlienta ?? this.podpisKlienta,
    );
  }
}
