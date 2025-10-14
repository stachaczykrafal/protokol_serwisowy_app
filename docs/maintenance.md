# Konserwacja repo

## Usuń zbędny plik services/.dart
Uwaga: plik o nazwie `.dart` w katalogu `lib/services` może psuć importy i analizę.

Polecenia (z katalogu głównego repo):
```
git rm --cached -- "lib/services/.dart" 2> NUL
git commit -m "chore: remove stray services/.dart"
```
Następnie usuń lokalnie:
- Windows: `del lib\services\.dart` (PowerShell: `Remove-Item lib/services/.dart -Force`)
- macOS/Linux: `rm -f lib/services/.dart`

## Usuń build artefacts z repo i dodaj do .gitignore
```
git rm -r --cached builds build
git commit -m "chore: drop build artefacts and ignore them"
```

## Upewnij się, że assets są dostępne
- Umieść pliki:
  - `assets/images/logo.png`
  - `assets/fonts/Roboto-Regular.ttf`
  - `assets/fonts/Roboto-Bold.ttf`
- Uruchom: `flutter pub get`
- W razie problemów z PDF na web/desktop sprawdź ścieżki i wpisy w `pubspec.yaml`.
