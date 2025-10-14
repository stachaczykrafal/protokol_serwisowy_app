#!/usr/bin/env pwsh

# Flutter Emulator Launcher Script
# Usage: .\launch-emulator.ps1 [emulator_name]

param(
    [string]$EmulatorName = "flutter_emulator"
)

Write-Host "🚀 Launching Android Emulator: $EmulatorName" -ForegroundColor Green

# Set Android SDK environment variables
$env:ANDROID_HOME = "$env:LOCALAPPDATA\Android\sdk"
$env:ANDROID_SDK_ROOT = "$env:LOCALAPPDATA\Android\sdk"

# Check if emulator exists
Write-Host "📱 Checking available emulators..." -ForegroundColor Cyan
$availableEmulators = & "$env:LOCALAPPDATA\Android\sdk\emulator\emulator.exe" -list-avds

if ($availableEmulators -contains $EmulatorName) {
    Write-Host "✅ Found emulator: $EmulatorName" -ForegroundColor Green
    
    # Launch emulator
    Write-Host "🔄 Starting emulator..." -ForegroundColor Yellow
    flutter emulators --launch $EmulatorName
    
    # Wait for emulator to be ready
    Write-Host "⏳ Waiting for emulator to be ready..." -ForegroundColor Yellow
    $timeout = 60 # seconds
    $elapsed = 0
    
    do {
        Start-Sleep -Seconds 2
        $elapsed += 2
        $devices = flutter devices --machine | ConvertFrom-Json
        $emulator = $devices | Where-Object { $_.type -eq "physical" -and $_.id -like "emulator-*" }
        
        if ($emulator) {
            Write-Host "✅ Emulator is ready!" -ForegroundColor Green
            break
        }
        
        Write-Host "⏳ Still waiting... ($elapsed/$timeout seconds)" -ForegroundColor Yellow
    } while ($elapsed -lt $timeout)
    
    if ($elapsed -ge $timeout) {
        Write-Host "⚠️ Emulator took too long to start. Check the Android emulator window." -ForegroundColor Red
    }
    
} else {
    Write-Host "❌ Emulator '$EmulatorName' not found!" -ForegroundColor Red
    Write-Host "Available emulators:" -ForegroundColor Cyan
    $availableEmulators | ForEach-Object { Write-Host "  - $_" -ForegroundColor White }
    
    Write-Host "`n💡 To create a new emulator, run:" -ForegroundColor Yellow
    Write-Host "flutter emulators --create --name my_emulator" -ForegroundColor White
}

Write-Host "`n🎯 To run your Flutter app on the emulator:" -ForegroundColor Cyan
Write-Host "flutter run" -ForegroundColor White
