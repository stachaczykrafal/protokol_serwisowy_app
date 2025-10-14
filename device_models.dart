class KompletUrzadzen {
  String nazwa;
  List<Jednostka> jednostkiZewn;
  List<Jednostka> jednostkiWewn;
  List<CentralaWentylacyjna> centrale;

  KompletUrzadzen({
    required this.nazwa,
    List<Jednostka>? jednostkiZewn,
    List<Jednostka>? jednostkiWewn,
    List<CentralaWentylacyjna>? centrale,
  })  : jednostkiZewn = jednostkiZewn ?? [],
        jednostkiWewn = jednostkiWewn ?? [],
        centrale = centrale ?? [];

  Map<String, dynamic> toJson() => {
        'nazwa': nazwa,
        'jednostkiZewn': jednostkiZewn.map((j) => j.toJson()).toList(),
        'jednostkiWewn': jednostkiWewn.map((j) => j.toJson()).toList(),
        'centrale': centrale.map((c) => c.toJson()).toList(),
      };
}

class Jednostka {
  String typ;
  String producent;
  String model;
  String nrSeryjny;

  Jednostka({
    this.typ = '',
    this.producent = '',
    this.model = '',
    this.nrSeryjny = '',
  });

  Map<String, dynamic> toJson() => {
        'Typ': typ,
        'Producent': producent,
        'Model': model,
        'Nr seryjny': nrSeryjny,
      };
}

class CentralaWentylacyjna {
  String producent;
  String model;
  String nrSeryjny;
  List<Filtr> filtry;

  CentralaWentylacyjna({
    this.producent = '',
    this.model = '',
    this.nrSeryjny = '',
    List<Filtr>? filtry,
  }) : filtry = filtry ?? [];

  Map<String, dynamic> toJson() => {
        'Producent': producent,
        'Model': model,
        'Nr seryjny': nrSeryjny,
        'Filtry': filtry.map((f) => f.toJson()).toList(),
      };
}

class Filtr {
  String klasa;
  String rodzaj;
  String wymiar;
  String ilosc;

  Filtr({this.klasa = '', this.rodzaj = '', this.wymiar = '', this.ilosc = ''});

  Map<String, dynamic> toJson() => {
        'Klasa': klasa,
        'Rodzaj': rodzaj,
        'Wymiar': wymiar,
        'Ilość': ilosc,
      };
}