final _emailRe = RegExp(r'^[^\s@]+@[^\s@]+\.[^\s@]+$');
final _phoneRe = RegExp(r'^\+?[0-9\s\-()]{6,}$');
final _amountRe = RegExp(r'^\d+([.,]\d{1,2})?$');

String? emailValidator(String? v) {
  if (v == null || v.trim().isEmpty) return 'Wymagany e-mail';
  return _emailRe.hasMatch(v.trim()) ? null : 'Nieprawidłowy e-mail';
}

String? phoneValidator(String? v) {
  if (v == null || v.trim().isEmpty) return 'Wymagany telefon';
  return _phoneRe.hasMatch(v.trim()) ? null : 'Nieprawidłowy numer telefonu';
}

String? amountValidator(String? v) {
  if (v == null || v.trim().isEmpty) return 'Wymagana kwota';
  return _amountRe.hasMatch(v.replaceAll(' ', '')) ? null : 'Nieprawidłowa kwota (użyj . lub ,)';
}
