# SharePoint Online – hosting i zapis protokołów

Kroki:
1) Rejestracja w Entra ID (Azure AD)
- Utwórz App Registration.
- Redirect URI: https://TwojHostAplikacji (lub window.location.origin).
- API permissions (Delegated): User.Read, Files.ReadWrite, Sites.Read.All, Sites.ReadWrite.All. Nadaj admin consent.

2) Instalacja i konfiguracja
- npm i @azure/msal-browser
- Uzupełnij src/auth/msalConfig.ts: clientId, tenantId, redirectUri.
- Dodaj pliki: src/auth/msalConfig.ts oraz src/services/sharepointUpload.ts

3) Bundlowanie (proste – bez --global-name, bo kod sam przypina window.SPUP)
```powershell
npx esbuild src/services/sharepointUpload.ts --bundle --format=iife --outfile=dist/msal-sharepoint.js
```

4) Wgranie do SharePoint (szczegółowo)
Cel: umieścić pliki aplikacji w jednym folderze w Site Assets i dodać do index.html skrypt msal-sharepoint.js.

Kroki:
1) Wejdź na: https://klimatimeco.sharepoint.com/sites/Klimatimecosp.zo.o
2) Otwórz: Ustawienia koła zębatego → Zawartość witryny → „Zasoby witryny” (Site Assets).
3) Utwórz nowy folder: ProtokolyApp (jeśli nie istnieje).
4) Lokalnie wejdź do build/web – zaznacz całą jego zawartość (NIE sam folder) i przeciągnij do folderu ProtokolyApp w SharePoint (drag & drop).
5) Zbundlowany plik dist/msal-sharepoint.js skopiuj do tego samego folderu (ProtokolyApp).
6) Dodanie znacznika <script> do index.html:

   Opcja A (zalecana – przed uploadem):
   - Otwórz lokalny build/web/index.html.
   - Tuż przed </body> dodaj:
     ```html
     <script src="./msal-sharepoint.js?v=1"></script>
     ```
   - Zapisz i wtedy dopiero wgraj index.html wraz z resztą plików.

   Opcja B (po uploadzie):
   - W folderze ProtokolyApp zaznacz index.html → Pobierz.
   - Edytuj lokalnie → wstaw linijkę jak wyżej → zapisz.
   - Przeciągnij zmieniony plik z powrotem do folderu (potwierdź zastąpienie).

7) Wersjonowanie / cache:
   - Przy każdej zmianie msal-sharepoint.js zwiększ parametr, np. ?v=2, ?v=20240210.
   - Jeśli zapomnisz zwiększyć – użyj Ctrl+F5 lub dopisz ręcznie ?v=NOWA_WERSJA w tagu script.
   - Parametr po znaku ? nie musi istnieć fizycznie – służy tylko do przełamania cache przeglądarki.

8) Weryfikacja po wgraniu:
   - Otwórz w nowej karcie URL do index.html, np.:
     https://klimatimeco.sharepoint.com/sites/Klimatimecosp.zo.o/SiteAssets/ProtokolyApp/index.html
   - Otwórz DevTools → Network → odśwież stronę → potwierdź, że msal-sharepoint.js ma status 200.
   - W konsoli wpisz: typeof SPUP  (powinno zwrócić "object").

9) Typowe błędy:
   - 404 dla msal-sharepoint.js: plik nie leży w tym samym folderze co index.html albo literówka w nazwie.
   - SPUP is not defined: skrypt nie załadował się / jest w cache → sprawdź Network + użyj nowego parametru ?v=.
   - Mixed content (HTTP/HTTPS): wszystkie zasoby muszą być pod HTTPS (SharePoint tak działa domyślnie).

Przykładowy finalny fragment index.html (koniec pliku):
```html
<!-- inne skrypty Flutter -->
<script src="./flutter.js"></script>
<script src="./main.dart.js"></script>
<!-- MSAL + Graph (Twoje API) -->
<script src="./msal-sharepoint.js?v=3"></script>
</body>
</html>
```

5) Użycie (po osadzeniu, w konsoli przeglądarki)
```js
await SPUP.ensureM365Ready();
await SPUP.uploadProtocolPdfDefault(
  new Blob(['test'], { type: 'application/pdf' }),
  'Test.pdf',
  { folderPath: '', metadata: { NumerZlecenia: '123' } }
);
```

Uwagi:
- Nie wgrywaj node_modules ani źródeł TS do SharePoint – tylko build/web + dist/msal-sharepoint.js.
- Jeśli pojawi się AADSTS50011: dodaj origin strony do Redirect URI (SPA) w Entra ID.
- Jeśli “Drive not found”: użyj `await SPUP.testSharePointAccess()` i wybierz nazwę z pola `name`.

## Diagnostyka: `typeof SPUP` zwraca 'undefined'
Przyczyny najczęstsze:
1) msal-sharepoint.js nie został załadowany (404 / zła ścieżka / literówka).
2) Przeglądarka używa starej wersji index.html (Service Worker Fluttera trzyma cache).
3) Bundel zawiera błąd runtime (sprawdź Console).
4) Skrypt dodany NAD `<body>` (za wcześnie) albo w ogóle nie dopisany do index.html.
5) IFrame ładuje inny folder niż ten, gdzie wgrałeś msal-sharepoint.js.

Kroki sprawdzenia (w index.html osadzonym w SharePoint):
1) DevTools → Network → zaznacz „Disable cache” → odśwież. Znajdź msal-sharepoint.js:
   - Status 200?
   - Size > 0?
2) Console: czy są błędy z msal-sharepoint.js (np. ReferenceError, SyntaxError)?
3) Otwórz msal-sharepoint.js w nowej karcie (URL bezwzględny) – czy wyświetla zminifikowany kod?
4) W index.html tuż przed `</body>` musi być dokładnie:
```html
<script src="./msal-sharepoint.js?v=2"></script>
```
   Zwiększaj ?v=... w razie zmian.
5) Wyczyść Service Worker (Flutter):
   - DevTools → Application → Service Workers → Unregister
   - Usuń z Application → Clear storage → przycisk „Clear site data”
   - Odśwież (Ctrl+F5)

Jeśli dalej 'undefined':
6) Tymczasowo usuń (lub zmień nazwę) `flutter_service_worker.js` w folderze i podmień index.html (zmniejsza caching w trakcie debugowania).
7) Zbuduj ponownie bundel z logami:
```powershell
npx esbuild src/services/sharepointUpload.ts --bundle --format=iife --log-level=debug --outfile=dist/msal-sharepoint.js
```
8) Sprawdź czy w bundlu występuje tekst `[SPUP] attached` (powinien zalogować się w Console po wczytaniu).

Po załadowaniu:
```js
typeof SPUP         // 'object'
SPUP.ensureM365Ready()
```

Jeśli msal-sharepoint.js ma 404 – upewnij się, że leży w tym samym katalogu co index.html (SiteAssets/ProtokolyApp/).

## Przywracanie środowiska po `flutter clean`
`flutter clean` usuwa: build/, .dart_tool/, część plików cache. Nie można „cofnąć” bez kopii lub systemu kontroli wersji. Można tylko odbudować:

1) Pobranie pakietów
```powershell
flutter pub get
```

2) (Opcjonalnie) Aktualizacja pakietów
```powershell
flutter pub upgrade
```

3) Sprawdzenie konfiguracji
```powershell
flutter doctor
```

4) Odbudowa aplikacji web (z właściwym base href)
```powershell
flutter build web --release --base-href ./
```

5) Ponowne zbudowanie bundla JS (MSAL/Graph)
```powershell
npx esbuild src/services/sharepointUpload.ts --bundle --format=iife --outfile=dist/msal-sharepoint.js
```

6) Weryfikacja działania lokalnie (jeśli potrzebne)
Użyj prostego serwera:
```powershell
dart pub global activate dhttpd
dhttpd --path build/web --port 8080
```
Albo:
```powershell
npx serve build/web
```

7) Wgranie ponownie do SharePoint
- Skopiuj świeże pliki z build/web + msal-sharepoint.js do SiteAssets/ProtokolyApp/
- Zwiększ parametr wersji w:
```html
<script src="./msal-sharepoint.js?v=2"></script>
```

8) Test w konsoli
```js
typeof SPUP
await SPUP.ensureM365Ready()
```

Jeśli używasz Git – przywrócenie zmian:
```powershell
git checkout -- .
```
Jeżeli pliki źródłowe zostały usunięte i brak kopii/VC – odzyskanie niemożliwe (trzeba odtworzyć ręcznie).

## Uwaga: Parametr --base-href (błąd: "--base-href should start and end with /")
Komunikat, który otrzymałeś przy `flutter build web --release --base-href ./` oznacza,
że wartość musi:
- zaczynać się znakiem `/`
- kończyć się znakiem `/`

Masz dwa poprawne sposoby:

### Wariant A (rekomendowany przy hostowaniu w Site Assets)
Użyj pełnej ścieżki folderu w którym ląduje index.html:
```powershell
flutter build web --release --base-href /sites/Klimatimecosp.zo.o/SiteAssets/ProtokolyApp/
```
Po buildzie w pliku build/web/index.html otrzymasz:
```html
<base href="/sites/Klimatimecosp.zo.o/SiteAssets/ProtokolyApp/">
```
Wtedy NIE zmieniasz już ręcznie `<base>` i możesz wgrać katalog build/web bez modyfikacji.

### Wariant B (elastyczny / ręczna korekta)
1. Buduj z domyślnym base (nie podawaj parametru):
```powershell
flutter build web --release
```
2. W build/web/index.html zmień:
```html
<base href="/">
```
na
```html
<base href="./">
```
3. Dodaj (lub upewnij się) skrypt:
```html
<script src="./msal-sharepoint.js?v=1"></script>
```
Tu podejście działa, bo wszystkie odwołania będą względne do bieżącego folderu.

### Kiedy wybrać który?
- Jeśli docelowy folder w SharePoint NIE będzie się zmieniał: użyj Wariantu A.
- Jeśli chcesz łatwo przenosić folder w inne miejsce lub testować lokalnie: Wariant B.

### Typowe problemy związane z base href
| Problem | Przyczyna | Rozwiązanie |
|--------|-----------|-------------|
| Ładuje stronę logowania Microsoft zamiast aplikacji | Złe ścieżki do zasobów (base wskazuje root dzierżawy) | Ustaw poprawny `--base-href` (A) albo `<base href="./">` (B) |
| 404 dla main.dart.js | Base kieruje do innej lokalizacji niż pliki | Zweryfikuj w DevTools → Network faktyczny URL main.dart.js |
| Biały ekran | Brak main.dart.js / błędna ścieżka assets/ | Sprawdź czy relative path działa przy otwarciu w nowej karcie |

### Najczęstszy błąd przy `--base-href`
Komenda zakończona błędem:
```powershell
flutter build web --release --base-href /sites/Klimatimecosp.zo.o/SiteAssets/ProtokolyApp
```
Komunikat:
```
Received a --base-href value of "/sites/Klimatimecosp.zo.o/SiteAssets/ProtokolyApp"
--base-href should start and end with /
```
Przyczyna: brak końcowego ukośnika.

Poprawna komenda (z końcowym slash):
```powershell
flutter build web --release --base-href /sites/Klimatimecosp.zo.o/SiteAssets/ProtokolyApp/
```

Weryfikacja po build:
- W pliku build/web/index.html powinno być:
```html
<base href="/sites/Klimatimecosp.zo.o/SiteAssets/ProtokolyApp/">
```

Jeśli nadal masz wątpliwość, w PowerShell sprawdź:
```powershell
$bh = '/sites/Klimatimecosp.zo.o/SiteAssets/ProtokolyApp/'
$bh
```
Musi się wyświetlić dokładnie z końcowym `/`.

### Alternatywa bez `--base-href`
1. `flutter build web --release`
2. W build/web/index.html zamień:
```html
<base href="/">
```
na
```html
<base href="./">
```

### Skrócony workflow (wariant z parametrem)
```powershell
flutter clean
flutter pub get
flutter build web --release --base-href /sites/Klimatimecosp.zo.o/SiteAssets/ProtokolyApp/
npx esbuild src/services/sharepointUpload.ts --bundle --format=iife --outfile=dist/msal-sharepoint.js
```
Wgraj build/web/* + dist/msal-sharepoint.js, dodaj w index.html (jeśli brak):
```html
<script src="./msal-sharepoint.js?v=1"></script>
```

### Czy `<script src="./msal-sharepoint.js?v=1" defer></script>` jest poprawne?
Tak – to poprawna linia jeśli:
- Plik msal-sharepoint.js leży w tym samym folderze co index.html
- Znajduje się tuż przed `</body>`

`defer` możesz:
- ZOSTAWIĆ (ok) – skrypt wykona się po parsowaniu HTML
- USUNĄĆ, jeśli chcesz, by wykonał się natychmiast po wczytaniu (nie jest to zwykle potrzebne)

Kiedy zwiększyć `?v=`:
- Po każdej przebudowie msal-sharepoint.js → zmień na `?v=2`, `?v=3`, itd.
- Przy problemach z cache → podnieś numer i odśwież (Ctrl+F5)

Szybka kontrola w przeglądarce:
1. DevTools → Network → sprawdź że msal-sharepoint.js status 200
2. Console:
```js
typeof SPUP === 'object'
```
Jeśli `undefined`:
- Sprawdź ścieżkę
- Podnieś wersję: `<script src="./msal-sharepoint.js?v=NOWA" defer></script>`
- Wyczyść Service Worker (jeżeli używany) i cache

### Placeholder <base href="$FLUTTER_BASE_HREF">
Aby `flutter build web --base-href ...` działało, w pliku `web/index.html` musi istnieć dokładnie:
```html
<base href="$FLUTTER_BASE_HREF">
```
Komenda (bez protokołu/domeny, tylko ścieżka z / na początku i końcu):
```powershell
flutter build web --release --base-href /sites/Klimatimecosp.zo.o/SiteAssets/ProtokolyApp/
```
Po buildzie w `build/web/index.html` zostanie wstawione:
```html
<base href="/sites/Klimatimecosp.zo.o/SiteAssets/ProtokolyApp/">
```

Jeśli usuniesz placeholder i dasz ręcznie `<base href="./">`, NIE używaj `--base-href` – w przeciwnym razie dostaniesz błąd:
```
Couldn't find the placeholder for base href.
```

Szybkie warianty:
- Dynamiczny (z parametrem): przywróć placeholder + użyj `--base-href`.
- Statyczny (bez parametru): build bez `--base-href`, ręcznie `<base href="./">`.

Najczęstszy błąd:
Użycie pełnego URL lub brak końcowego `/`:
```powershell
# ZŁE
--base-href /https://domena/...   (zawiera protokół)
--base-href /sites/.../ProtokolyApp (brak końcowego /)

# DOBRE
--base-href /sites/Klimatimecosp.zo.o/SiteAssets/ProtokolyApp/
```

## Czyszczenie projektu (web-only)

Usuń wszystkie platformy poza web (po zrobieniu kopii lub commit do GIT):
### PowerShell (Windows)
```powershell
Remove-Item -Recurse -Force android,ios,macos,linux,windows || echo 'Niektóre katalogi mogły już nie istnieć'
```
### Bash (Git Bash / WSL)
```bash
rm -rf android ios macos linux windows
```

Usuń też jeśli istnieją:
- testy specyficzne dla natywnych funkcji wymagających kanałów platform (kamera, GPS itp.)
- pliki konfig: firebase_app_id_file.json, GoogleService-Info.plist, google-services.json

### pubspec.yaml (ręcznie)
- Usuń zależności niedziałające w web (np. camera, geolocator, permission_handler)
- Zostaw tylko pakiety czysto Dart / web-safe
- Uruchom:
```powershell
flutter pub get
```

### Minimalny rebuild po czyszczeniu
(placeholder base musi być w web/index.html jako `<base href="$FLUTTER_BASE_HREF">`)
```powershell
flutter clean
flutter pub get
flutter build web --release --base-href /sites/Klimatimecosp.zo.o/SiteAssets/ProtokolyApp/
```

## Skrypt pomocniczy (opcjonalny) – cleanup + build
Zapisz jako `scripts/build-web-only.ps1` (opcjonalnie).
```powershell
# build-web-only.ps1
Write-Host "Czyszczenie platform..."
Remove-Item -Recurse -Force android,ios,macos,linux,windows -ErrorAction SilentlyContinue
flutter clean
flutter pub get
flutter build web --release --base-href /sites/Klimatimecosp.zo.o/SiteAssets/ProtokolyApp/
npx esbuild src/services/sharepointUpload.ts --bundle --format=iife --outfile=dist/msal-sharepoint.js
Write-Host "Gotowe. Wgraj build/web/* + dist/msal-sharepoint.js do SiteAssets/ProtokolyApp/"
```

## Kontrola po czyszczeniu
| Element | Oczekiwane |
|---------|------------|
| Katalogi platform | Tylko `web/` (plus lib/, src/, dist/, build/) |
| pubspec.yaml | Brak pluginów natywnych |
| web/index.html | `<base href="$FLUTTER_BASE_HREF">` + `<script src="./msal-sharepoint.js?v=1" defer></script>` |
| dist/msal-sharepoint.js | Obecny po esbuild |
| SPUP w konsoli | `typeof SPUP === 'object'` |

### Test końcowy (po wdrożeniu w SharePoint)
```js
await SPUP.ensureM365Ready();
await SPUP.uploadProtocolPdfDefault(
  new Blob(['test'], { type: 'application/pdf' }),
  'Test.pdf',
  { folderPath: '', metadata: { NumerZlecenia: 'TEST' } }
);
```

## Szybkie FAQ (web-only)
- Czy muszę mieć android/ios? → Nie, usuń.
- Czy `--base-href` może być pełnym URL? → Nie, tylko ścieżka zaczynająca i kończąca się `/`.
- Co jeśli chcę lokalnie testować bez SharePoint? → Build bez parametru i zamiana `<base href="/">` na `<base href="./">`.