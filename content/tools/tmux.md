---
title: "Tmux"
date: 2024-01-01T00:00:00Z
draft: false
description: "Terminal multiplexer for managing multiple terminal sessions, windows, and panes in a single interface."
categories: ["tools"]
tags: ["tmux", "terminal", "multiplexer", "session", "productivity"]
---

## Overview

Tmux is a terminal multiplexer that allows you to run multiple terminal sessions, windows, and panes within a single terminal window. It's essential for remote work, development environments, and maintaining persistent sessions.

## Installation

```bash
# Ubuntu/Debian
sudo apt install tmux

# macOS
brew install tmux

# CentOS/RHEL
sudo yum install tmux

# Arch Linux
sudo pacman -S tmux
```

## Basic Concepts

### Hierarchy
- **Session**: Top-level container for windows
- **Window**: Contains one or more panes
- **Pane**: Individual terminal instance

### Default Prefix Key
- **Prefix**: `Ctrl+b` (can be customized)
- All tmux commands start with the prefix key

## Session Management

### Creating Sessions
```bash
# Create new session
tmux new-session
tmux new

# Create named session
tmux new-session -s session_name
tmux new -s work

# Create detached session
tmux new-session -d -s background
```

### Listing Sessions
```bash
# List all sessions
tmux list-sessions
tmux ls

# Show sessions in tmux
Ctrl+b s
```

### Attaching to Sessions
```bash
# Attach to last session
tmux attach
tmux a

# Attach to specific session
tmux attach -t session_name
tmux a -t work

# Attach or create session
tmux new-session -A -s session_name
```

### Detaching from Sessions
```bash
# Detach from current session
Ctrl+b d

# Detach from command line
tmux detach
```

### Session Control
```bash
# Kill session
tmux kill-session -t session_name

# Kill all sessions
tmux kill-server

# Rename session
Ctrl+b $
```

## Window Management

### Creating Windows
```bash
# Create new window
Ctrl+b c

# Create window with name
Ctrl+b c
# Then rename: Ctrl+b ,
```

### Navigating Windows
```bash
# Next window
Ctrl+b n

# Previous window
Ctrl+b p

# Go to window by number
Ctrl+b 0-9

# Go to window by name
Ctrl+b f

# List windows
Ctrl+b w
```

### Window Control
```bash
# Rename window
Ctrl+b ,

# Kill window
Ctrl+b &

# Move window
Ctrl+b .
```

## Pane Management

### Creating Panes
```bash
# Split horizontally (top/bottom)
Ctrl+b "

# Split vertically (left/right)
Ctrl+b %

# Split with custom command
Ctrl+b "
# Then type command
```

### Navigating Panes
```bash
# Move between panes
Ctrl+b arrow keys
Ctrl+b h/j/k/l  # vim-style (if configured)

# Go to next pane
Ctrl+b o

# Go to previous pane
Ctrl+b ;

# Show pane numbers
Ctrl+b q
```

### Resizing Panes
```bash
# Resize pane (arrow keys)
Ctrl+b Ctrl+arrow keys

# Resize by 5 cells
Ctrl+b Alt+arrow keys

# Make pane full screen
Ctrl+b z

# Balance panes
Ctrl+b Alt+1  # horizontal
Ctrl+b Alt+2  # vertical
```

### Pane Control
```bash
# Kill pane
Ctrl+b x

# Break pane to new window
Ctrl+b !

# Move pane to another window
Ctrl+b :
move-pane -t window_name

# Swap panes
Ctrl+b {  # swap with previous
Ctrl+b }  # swap with next
```

## Copy Mode

### Entering Copy Mode
```bash
# Enter copy mode
Ctrl+b [

# Search in copy mode
Ctrl+b Ctrl+s  # forward
Ctrl+b Ctrl+r  # backward
```

### Copy Mode Navigation
```bash
# Move cursor
Arrow keys
h/j/k/l  # vim-style

# Page up/down
Page Up/Page Down
Ctrl+b/Ctrl+f  # vim-style

# Go to line
g  # beginning
G  # end
```

### Selecting and Copying
```bash
# Start selection
Space

# Copy selection
Enter

# Paste
Ctrl+b ]

# Show paste buffer
Ctrl+b =
```

## Command Mode

### Entering Command Mode
```bash
# Command prompt
Ctrl+b :

# Common commands
:new-window
:kill-window
:split-window
:resize-pane
```

### Useful Commands
```bash
# List commands
:list-commands

# Show key bindings
:list-keys

# Reload config
:source-file ~/.tmux.conf

# Show options
:show-options
```

## Configuration

### Basic Configuration (~/.tmux.conf)
```bash
# Change prefix key
set -g prefix C-a
unbind C-b
bind C-a send-prefix

# Enable mouse support
set -g mouse on

# Start windows and panes at 1
set -g base-index 1
setw -g pane-base-index 1

# Renumber windows
set -g renumber-windows on

# Increase history limit
set -g history-limit 10000

# Enable vi mode
setw -g mode-keys vi

# Fast pane switching
bind -n M-Left select-pane -L
bind -n M-Right select-pane -R
bind -n M-Up select-pane -U
bind -n M-Down select-pane -D
```

### Status Bar Configuration
```bash
# Status bar
set -g status-interval 1
set -g status-justify centre
set -g status-style bg=black,fg=white

# Status left
set -g status-left-length 40
set -g status-left '#[fg=green]#S #[fg=blue]#I #[fg=cyan]#P'

# Status right
set -g status-right '#[fg=cyan]%d %b %R'

# Window status
setw -g window-status-style fg=cyan,bg=black
setw -g window-status-current-style fg=white,bg=red
```

### Key Bindings
```bash
# Vim-style pane navigation
bind h select-pane -L
bind j select-pane -D
bind k select-pane -U
bind l select-pane -R

# Vim-style copy mode
bind-key -T copy-mode-vi 'v' send -X begin-selection
bind-key -T copy-mode-vi 'y' send -X copy-selection

# Better splitting
bind | split-window -h
bind - split-window -v
```

## Common Workflows

### Development Setup
```bash
# Create development session
tmux new-session -d -s dev

# Split into multiple panes
tmux split-window -h
tmux split-window -v
tmux select-pane -t 0
tmux split-window -v

# Run different commands in each pane
tmux send-keys -t 0 'vim' Enter
tmux send-keys -t 1 'npm start' Enter
tmux send-keys -t 2 'npm test' Enter
tmux send-keys -t 3 'git status' Enter

# Attach to session
tmux attach -t dev
```

### Remote Work
```bash
# Create persistent session on remote server
ssh user@server
tmux new-session -d -s remote-work

# Run long-running processes
tmux send-keys 'python train_model.py' Enter

# Detach and logout
tmux detach
exit

# Later: reconnect and attach
ssh user@server
tmux attach -t remote-work
```

## Advanced Features

### Session Scripting
```bash
#!/bin/bash
# Create development environment
tmux new-session -d -s dev -x 120 -y 40

# Create windows
tmux new-window -t dev:1 -n 'editor'
tmux new-window -t dev:2 -n 'server'
tmux new-window -t dev:3 -n 'tests'

# Setup editor window
tmux send-keys -t dev:1 'cd ~/project && vim' Enter

# Setup server window
tmux send-keys -t dev:2 'cd ~/project && npm start' Enter

# Setup tests window
tmux send-keys -t dev:3 'cd ~/project' Enter

# Attach to session
tmux attach -t dev
```

### Plugins (TPM)
```bash
# Install TPM (Tmux Plugin Manager)
git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm

# Add to ~/.tmux.conf
set -g @plugin 'tmux-plugins/tpm'
set -g @plugin 'tmux-plugins/tmux-sensible'
set -g @plugin 'tmux-plugins/tmux-resurrect'

# Initialize TPM
run '~/.tmux/plugins/tpm/tpm'

# Install plugins: Ctrl+b I
# Update plugins: Ctrl+b U
```

## Troubleshooting

### Common Issues

**Prefix key not working**
```bash
# Check if prefix is set correctly
tmux show-options -g prefix

# Reset prefix
tmux set-option -g prefix C-b
```

**Colors not working**
```bash
# Check terminal colors
echo $TERM

# Set in ~/.tmux.conf
set -g default-terminal "screen-256color"
```

**Mouse not working**
```bash
# Enable mouse in config
set -g mouse on

# Reload config
tmux source-file ~/.tmux.conf
```

### Debugging
```bash
# Show tmux info
tmux info

# Show server info
tmux show-options -g

# List clients
tmux list-clients

# Show messages
tmux show-messages
```

## Quick Reference

### Essential Commands
```bash
# Sessions
tmux new -s name          # Create session
tmux ls                   # List sessions
tmux attach -t name       # Attach to session
Ctrl+b d                  # Detach from session

# Windows
Ctrl+b c                  # Create window
Ctrl+b n/p               # Next/previous window
Ctrl+b 0-9               # Go to window number

# Panes
Ctrl+b %                  # Split vertically
Ctrl+b "                  # Split horizontally
Ctrl+b arrow keys        # Navigate panes
Ctrl+b x                  # Kill pane

# Copy mode
Ctrl+b [                  # Enter copy mode
Space                     # Start selection
Enter                     # Copy selection
Ctrl+b ]                  # Paste
```

### Useful Key Bindings
```bash
Ctrl+b ?                  # Show help
Ctrl+b t                  # Show time
Ctrl+b q                  # Show pane numbers
Ctrl+b z                  # Toggle pane zoom
Ctrl+b {/}               # Swap panes
Ctrl+b !                  # Break pane to window
```

## Tips and Tricks

### Productivity Tips
- Use named sessions for different projects
- Create shell aliases for common tmux commands
- Use tmux scripting for consistent environments
- Learn vim-style navigation for efficiency
- Use mouse mode for quick operations

### Best Practices
- Keep sessions organized and named
- Use different windows for different tasks
- Regularly detach from sessions when not needed
- Configure tmux to match your workflow
- Use plugins to extend functionality

## See Also

- `man tmux` - Complete manual
- [Tmux GitHub](https://github.com/tmux/tmux) - Official repository
- [Tmux Wiki](https://github.com/tmux/tmux/wiki) - Documentation
- `screen` - Alternative terminal multiplexer
- `byobu` - Enhanced tmux/screen wrapper