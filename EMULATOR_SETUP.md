# Android Emulator Setup Guide

## ✅ Fixed: Android Emulator Path Issue

The error you encountered was due to an incorrect path format. The suggested path `~\Library\Android\sdk\emulator\emulator` is for macOS/Linux, but you're on Windows.

### ✅ Correct Windows Setup

**Android SDK Location:** `C:\Users\[username]\AppData\Local\Android\sdk\`

**Environment Variables Set:**
- `ANDROID_HOME` = `C:\Users\[username]\AppData\Local\Android\sdk`
- `ANDROID_SDK_ROOT` = `C:\Users\[username]\AppData\Local\Android\sdk`

### 📱 Available Emulators
- `VirtualAndroid`
- `flutter_emulator`

## 🚀 How to Use Emulators

### Option 1: VS Code Tasks (Recommended)
1. Press `Ctrl+Shift+P`
2. Type "Tasks: Run Task"
3. Choose:
   - **Launch Android Emulator** - Starts the emulator
   - **Flutter Run (Android Emulator)** - Runs your app on emulator
   - **Flutter Run (Windows)** - Runs on Windows desktop

### Option 2: Terminal Commands
```powershell
# Launch emulator
flutter emulators --launch flutter_emulator

# Check available devices
flutter devices

# Run app on any available device
flutter run

# Run specifically on emulator (once launched)
flutter run -d emulator-5554
```

### Option 3: PowerShell Script
```powershell
# Use the included launcher script
.\launch-emulator.ps1
# or specify emulator name
.\launch-emulator.ps1 VirtualAndroid
```

## 🔧 Troubleshooting

### "Device not authorized" Issue
This happens when the emulator first starts. To fix:

1. **Look for the Android emulator window** - it should be visible on your desktop
2. **In the emulator screen**, you might see an authorization dialog
3. **Click "Allow" or "OK"** if prompted
4. **Wait 30-60 seconds** for the emulator to fully boot

### If Emulator Won't Start
```powershell
# Check if emulator process is running
Get-Process | Where-Object {$_.ProcessName -like "*emulator*"}

# Kill stuck emulator processes
Get-Process | Where-Object {$_.ProcessName -like "*emulator*"} | Stop-Process -Force

# Try launching again
flutter emulators --launch flutter_emulator
```

### Create New Emulator
```powershell
# Create a new emulator with default settings
flutter emulators --create --name my_new_emulator

# List all available emulators
flutter emulators
```

## 🎯 Quick Start Commands

```powershell
# 1. Launch emulator (wait for it to fully boot)
flutter emulators --launch flutter_emulator

# 2. Check if ready (wait until you see emulator-XXXX)
flutter devices

# 3. Run your app with beautiful welcome screen
flutter run

# Or run on Windows desktop (faster for testing)
flutter run -d windows
```

## 🌟 Your App Features

Once running, you'll see:
- **Animated Welcome Screen** with smooth transitions
- **Professional blue gradient design**
- **Feature highlights** of your service protocol app
- **"Rozpocznij pracę" button** that navigates to your main app

## 📝 Tips

- **Windows desktop** is fastest for testing UI changes
- **Android emulator** is best for testing mobile-specific features
- **Web browser** works but some features may be limited
- **Use hot reload** (`r` key) while app is running for instant updates

Your emulator setup is now correctly configured for Windows! 🎉
