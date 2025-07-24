---
title: "ADB (Android Debug Bridge)"
date: 2024-01-01T00:00:00Z
draft: false
description: "Command-line tool for interacting with Android devices, essential for development, debugging, and testing."
categories: ["tools"]
tags: ["adb", "android", "debugging", "development", "cli"]
---

## Overview

Android Debug Bridge (ADB) is a versatile command-line tool that lets you communicate with a device. The adb command facilitates a variety of device actions, such as installing and debugging apps, and it provides access to a Unix shell that you can use to run a variety of commands on a device.

## Installation

```bash
# Ubuntu/Debian
sudo apt install adb

# macOS
brew install --cask android-platform-tools

# CentOS/RHEL
sudo yum install android-tools

# Windows
# Download from https://developer.android.com/studio/releases/platform-tools
```

## Basic Commands

### Device Management
```bash
# List connected devices
adb devices

# Start the adb server
adb start-server

# Kill the adb server
adb kill-server

# Get device state
adb get-state

# Wait for device to be connected
adb wait-for-device
```

### File Management
```bash
# Push a file to the device
adb push local.txt /sdcard/remote.txt

# Pull a file from the device
adb pull /sdcard/remote.txt local.txt

# List files on the device
adb shell ls /sdcard/
```

## App Management

### Installing and Uninstalling Apps
```bash
# Install an APK
adb install app.apk

# Reinstall an existing app, keeping its data
adb install -r app.apk

# Uninstall an app
adb uninstall com.example.app

# Uninstall an app, keeping its data and cache
adb uninstall -k com.example.app
```

### App Information
```bash
# List all installed packages
adb shell pm list packages

# List all installed packages with their associated file
adb shell pm list packages -f

# List third-party packages
adb shell pm list packages -3

# Get the path to an APK
adb shell pm path com.example.app
```

## Debugging

### Logcat
```bash
# View logs from the device
adb logcat

# Filter logs by tag
adb logcat -s "MyApp"

# Clear the logcat buffer
adb logcat -c
```

### Shell Access
```bash
# Start a remote shell on the device
adb shell

# Execute a single command on the device
adb shell "ls -l /sdcard/"
```

## Advanced Commands

### Port Forwarding
```bash
# Forward a device port to a local port
adb forward tcp:8080 tcp:8080

# List all forwarded ports
adb forward --list
```

### Screenshots and Screen Recording
```bash
# Take a screenshot
adb shell screencap /sdcard/screenshot.png

# Record the device screen
adb shell screenrecord /sdcard/demo.mp4
```

## Quick Reference

### Common Commands
```bash
adb devices         # List connected devices
adb shell           # Enter a remote shell
adb push <local> <remote>  # Push a file to the device
adb pull <remote> <local>  # Pull a file from the device
adb install <apk>   # Install an app
adb uninstall <package> # Uninstall an app
adb logcat          # View device logs
```

## See Also

- [Official ADB Documentation](https://developer.android.com/studio/command-line/adb)
- [Android Developer Documentation](https://developer.android.com/)
