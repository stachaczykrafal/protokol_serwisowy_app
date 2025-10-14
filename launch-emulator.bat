@echo off
echo.
echo ====================================
echo    Android Emulator Launcher
echo ====================================
echo.

REM Set Android SDK paths
set ANDROID_HOME=%LOCALAPPDATA%\Android\sdk
set ANDROID_SDK_ROOT=%LOCALAPPDATA%\Android\sdk
set PATH=%ANDROID_HOME%\emulator;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools;%PATH%

echo Setting Android SDK paths...
echo ANDROID_HOME: %ANDROID_HOME%
echo.

echo Available emulators:
"%ANDROID_HOME%\emulator\emulator.exe" -list-avds
echo.

set /p emulator_name="Enter emulator name (or press Enter for 'flutter_emulator'): "
if "%emulator_name%"=="" set emulator_name=flutter_emulator

echo.
echo Launching emulator: %emulator_name%
echo Please wait...
echo.

start "Android Emulator" "%ANDROID_HOME%\emulator\emulator.exe" -avd %emulator_name%

echo.
echo Emulator is starting...
echo Wait 30-60 seconds for it to fully boot, then run:
echo   flutter run
echo.
echo Press any key to exit...
pause >nul
