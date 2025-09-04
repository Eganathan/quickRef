---
title: "KiCad"
date: 2025-09-03T00:00:00Z
draft: false
description: "A free and open-source software suite for electronic design automation (EDA)."
categories: ["tools"]
tags: ["kicad", "eda", "pcb", "electronics", "schematic"]
---

## Overview

KiCad is a cross-platform and open-source Electronic Design Automation (EDA) suite. It includes a schematic editor, a PCB layout tool, a 3D viewer, and a Gerber file viewer. It's a powerful tool for designing and manufacturing printed circuit boards (PCBs).

## Installation

```bash
# Ubuntu/Debian
sudo add-apt-repository --yes ppa:kicad/kicad-6.0-releases
sudo apt update
sudo apt install --install-recommends kicad

# macOS
brew install --cask kicad

# Windows
# Download from https://www.kicad.org/download/windows/
```

## General Hotkeys

| Hotkey | Action |
|---|---|
| `Ctrl+N` | New Project |
| `Ctrl+O` | Open Project |
| `Ctrl+S` | Save File |
| `Ctrl+Z` | Undo |
| `Ctrl+Y` | Redo |
| `Ctrl+F` | Find |
| `F1` | Help |
| `Alt+F4` | Exit |

## Schematic Editor Hotkeys

### General

| Hotkey | Action |
|---|---|
| `?` | List all hotkeys |
| `Space` | Start placing a component |
| `A` | Add a symbol |
| `W` | Wire |
| `B` | Bus |
| `J` | Junction |
| `L` | Label |
| `T` | Text |
| `K` | No-Connection Flag |
| `V` | Value |
| `F` | Field |
| `U` | Update PCB from Schematic |

### Component Manipulation

| Hotkey | Action |
|---|---|
| `M` | Move |
| `R` | Rotate |
| `G` | Drag |
| `C` | Copy |
| `Del` | Delete |
| `E` | Edit |
| `Q` | Edit Value |

## PCB Editor Hotkeys

### General

| Hotkey | Action |
|---|---|
| `?` | List all hotkeys |
| `PageUp` | Switch to Top Layer |
| `PageDown` | Switch to Bottom Layer |
| `+` | Next Layer |
| `-` | Previous Layer |
| `F5` | Switch to Top Layer |
| `F6` | Switch to Bottom Layer |
| `F7` | Switch to Inner Layer 1 |
| `F8` | Switch to Inner Layer 2 |
| `Tab` | Highlight Net |
| `~` | Show/Hide Ratsnest |

### Drawing

| Hotkey | Action |
|---|---|
| `X` | Route Tracks |
| `V` | Add Via |
| `D` | Drag Track |
| `G` | Drag Item |
| `Ctrl+M` | Move Exactly |
| `F` | Flip Item to Opposite Side |
| `Z` | Add Filled Zone |
| `Ctrl+B` | Refill All Zones |

### 3D Viewer

| Hotkey | Action |
|---|---|
| `Z` | Zoom to Fit |
| `R` | Reload 3D View |
| `O` | Orthographic Projection |
| `P` | Perspective Projection |

## Tips and Tricks

- **Use Projects:** Always start with a project file (`.pro`) to keep your schematic and PCB files linked.
- **Libraries:** KiCad comes with a large library of symbols and footprints. You can also add your own or download them from the internet.
- **Design Rules:** Set up your design rules in the PCB editor to ensure your board can be manufactured.
- **3D Viewer:** Use the 3D viewer to check for mechanical conflicts and to get a realistic view of your board.
- **Custom Hotkeys:** You can customize the hotkeys in the preferences to match your workflow.

## See Also

- [KiCad Website](https://www.kicad.org/)
- [KiCad Documentation](https://docs.kicad.org/)
- [KiCad Forums](https://forum.kicad.info/)
