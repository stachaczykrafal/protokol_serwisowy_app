// Re-exports zależnie od platformy: web -> implementacja MSAL, inne -> stub.
export 'm365_auth_service_stub.dart'
  if (dart.library.html) 'm365_auth_service_web.dart';
