---
title: "Vim"
date: 2024-01-01T00:00:00Z
draft: false
description: "Powerful text editor with modal editing, extensive customization, and efficient keyboard-driven workflow."
categories: ["tools"]
tags: ["vim", "editor", "text-editing", "productivity", "cli"]
---

## Overview

Vim is a highly configurable text editor built to make creating and changing text very efficient. It's an improved version of the vi editor with additional features like syntax highlighting, plugin system, and extensive customization options.

## Installation

```bash
# Ubuntu/Debian
sudo apt install vim

# macOS
brew install vim
# or use MacVim for GUI
brew install --cask macvim

# CentOS/RHEL
sudo yum install vim

# Arch Linux
sudo pacman -S vim
```

## Basic Concepts

### Modal Editing
Vim operates in different modes:
- **Normal Mode**: Navigation and commands (default)
- **Insert Mode**: Text insertion
- **Visual Mode**: Text selection
- **Command-line Mode**: Ex commands

### Mode Switching
```bash
# From Normal to Insert
i           # Insert before cursor
I           # Insert at beginning of line
a           # Insert after cursor
A           # Insert at end of line
o           # Open new line below
O           # Open new line above

# From Insert to Normal
<Esc>       # Exit Insert mode
<Ctrl+[>    # Alternative to Esc

# From Normal to Visual
v           # Visual mode
V           # Visual line mode
<Ctrl+v>    # Visual block mode

# From any mode to Command-line
:           # Ex command mode
```

## Basic Navigation

### Character Movement
```bash
h           # Move left
j           # Move down
k           # Move up
l           # Move right

# Arrow keys also work but are less efficient
```

### Word Movement
```bash
w           # Next word
b           # Previous word
e           # End of word
ge          # End of previous word

# Capital versions ignore punctuation
W           # Next WORD
B           # Previous WORD
E           # End of WORD
```

### Line Movement
```bash
0           # Beginning of line
^           # First non-blank character
$           # End of line
g_          # Last non-blank character

# Number + movement
5w          # Move 5 words forward
3j          # Move 3 lines down
```

### Screen Movement
```bash
H           # Top of screen
M           # Middle of screen
L           # Bottom of screen

<Ctrl+f>    # Page down
<Ctrl+b>    # Page up
<Ctrl+d>    # Half page down
<Ctrl+u>    # Half page up

gg          # Go to first line
G           # Go to last line
:n          # Go to line n
nG          # Go to line n
```

## Editing Commands

### Insertion
```bash
i           # Insert before cursor
I           # Insert at beginning of line
a           # Append after cursor
A           # Append at end of line
o           # Open line below
O           # Open line above
s           # Substitute character
S           # Substitute line
```

### Deletion
```bash
x           # Delete character
X           # Delete character before cursor
dd          # Delete line
D           # Delete to end of line
dw          # Delete word
db          # Delete word backward
d$          # Delete to end of line
d0          # Delete to beginning of line

# Delete with motion
d5w         # Delete 5 words
d3j         # Delete current line and 3 below
```

### Change
```bash
c           # Change (delete and enter insert mode)
cw          # Change word
cc          # Change line
C           # Change to end of line
r           # Replace character
R           # Replace mode
~           # Toggle case
```

### Copy and Paste
```bash
y           # Yank (copy)
yy          # Yank line
Y           # Yank line
yw          # Yank word
y$          # Yank to end of line

p           # Paste after cursor
P           # Paste before cursor

# Numbered registers
"1p         # Paste from register 1
"ay5w       # Yank 5 words to register a
"ap         # Paste from register a
```

## Search and Replace

### Searching
```bash
/pattern    # Search forward
?pattern    # Search backward
n           # Next match
N           # Previous match
*           # Search for word under cursor (forward)
#           # Search for word under cursor (backward)

# Case sensitivity
/\cpattern  # Case insensitive
/\Cpattern  # Case sensitive
```

### Replace
```bash
:s/old/new/         # Replace first occurrence in line
:s/old/new/g        # Replace all occurrences in line
:%s/old/new/g       # Replace all occurrences in file
:%s/old/new/gc      # Replace all with confirmation
:1,10s/old/new/g    # Replace in lines 1-10

# Special characters
:%s/\n/,/g          # Replace newlines with commas
:%s/\s\+$//g        # Remove trailing whitespace
```

## Visual Mode

### Selection
```bash
v           # Visual mode
V           # Visual line mode
<Ctrl+v>    # Visual block mode

# Extend selection
w           # Select word
$           # Select to end of line
G           # Select to end of file
```

### Operations on Selection
```bash
d           # Delete selection
y           # Yank selection
c           # Change selection
u           # Lowercase
U           # Uppercase
>           # Indent
<           # Unindent
```

### Block Operations
```bash
<Ctrl+v>    # Start visual block
# Select block
I           # Insert at beginning of all lines
A           # Append at end of all lines
c           # Change all selected text
```

## File Operations

### Opening Files
```bash
:e filename         # Edit file
:o filename         # Open file
:r filename         # Read file into current buffer
:r !command         # Read command output into buffer

# Tab completion
:e <Tab>            # Tab complete filename
```

### Saving and Quitting
```bash
:w              # Write (save) file
:w filename     # Write to specific file
:w!             # Force write
:q              # Quit
:q!             # Quit without saving
:wq             # Write and quit
ZZ              # Write and quit
ZQ              # Quit without saving

:x              # Write if changed and quit
:xa             # Write all and quit all
```

### Multiple Files
```bash
:n              # Next file
:N              # Previous file
:args           # List files
:args *.txt     # Set file list

# Buffers
:ls             # List buffers
:b number       # Switch to buffer number
:b name         # Switch to buffer by name
:bd             # Delete buffer
```

## Windows and Tabs

### Windows
```bash
:split          # Horizontal split
:sp filename    # Split and open file
:vsplit         # Vertical split
:vsp filename   # Vertical split and open file

<Ctrl+w>h       # Move to left window
<Ctrl+w>j       # Move to bottom window
<Ctrl+w>k       # Move to top window
<Ctrl+w>l       # Move to right window

<Ctrl+w>c       # Close window
<Ctrl+w>o       # Close all other windows
<Ctrl+w>=       # Equalize window sizes
```

### Tabs
```bash
:tabnew         # New tab
:tabnew file    # New tab with file
:tabc           # Close tab
:tabo           # Close all other tabs

gt              # Next tab
gT              # Previous tab
2gt             # Go to tab 2
```

## Advanced Features

### Macros
```bash
q{letter}       # Start recording macro
q               # Stop recording
@{letter}       # Execute macro
@@              # Repeat last macro
5@a             # Execute macro 'a' 5 times
```

### Marks
```bash
m{letter}       # Set mark
'{letter}       # Jump to mark
''              # Jump to last position
'.              # Jump to last edit
```

### Folding
```bash
zf              # Create fold
zo              # Open fold
zc              # Close fold
za              # Toggle fold
zR              # Open all folds
zM              # Close all folds
```

### Completion
```bash
# In Insert mode
<Ctrl+n>        # Next completion
<Ctrl+p>        # Previous completion
<Ctrl+x><Ctrl+f> # File completion
<Ctrl+x><Ctrl+l> # Line completion
```

## Configuration

### Basic Configuration (~/.vimrc)
```vim
" Basic settings
set number              " Show line numbers
set relativenumber      " Show relative line numbers
set tabstop=4           " Tab width
set shiftwidth=4        " Indent width
set expandtab           " Use spaces instead of tabs
set autoindent          " Auto indent
set smartindent         " Smart indent
set wrap                " Wrap lines
set ignorecase          " Case insensitive search
set smartcase           " Case sensitive if uppercase used
set hlsearch            " Highlight search results
set incsearch           " Incremental search
set showmatch           " Show matching brackets
set ruler               " Show cursor position
set laststatus=2        " Always show status line
set wildmenu            " Enhanced command completion
set clipboard=unnamedplus " Use system clipboard

" Colors and appearance
syntax enable           " Enable syntax highlighting
set background=dark     " Dark background
colorscheme default     " Color scheme

" Key mappings
let mapleader = ","     " Change leader key
nnoremap <leader>w :w<CR>      " Quick save
nnoremap <leader>q :q<CR>      " Quick quit
nnoremap <C-h> <C-w>h          " Easy window navigation
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l
```

### Plugin Management
```vim
" Using vim-plug
call plug#begin('~/.vim/plugged')

" Essential plugins
Plug 'preservim/nerdtree'           " File explorer
Plug 'vim-airline/vim-airline'      " Status line
Plug 'tpope/vim-fugitive'           " Git integration
Plug 'tpope/vim-surround'           " Surrounding text
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'             " Fuzzy finder

call plug#end()
```

## Useful Plugins

### Essential Plugins
```vim
" File management
Plug 'preservim/nerdtree'           " File tree
Plug 'junegunn/fzf.vim'             " Fuzzy finder
Plug 'tpope/vim-vinegar'            " Better netrw

" Git integration
Plug 'tpope/vim-fugitive'           " Git commands
Plug 'airblade/vim-gitgutter'       " Git diff in gutter

" Text editing
Plug 'tpope/vim-surround'           " Surround text
Plug 'tpope/vim-commentary'         " Comment/uncomment
Plug 'jiangmiao/auto-pairs'         " Auto brackets

" Appearance
Plug 'vim-airline/vim-airline'      " Status line
Plug 'morhetz/gruvbox'              " Color scheme
```

## Command-line Mode

### Ex Commands
```bash
:help           # Help system
:help command   # Help for specific command
:set            # Show settings
:set option     # Set option
:set option?    # Show option value
:set option!    # Toggle option

# File operations
:pwd            # Print working directory
:cd path        # Change directory
:!command       # Execute shell command
:r !command     # Read command output
```

### Ranges
```bash
:1,10d          # Delete lines 1-10
:5,15s/old/new/g # Replace in lines 5-15
:%s/old/new/g   # Replace in entire file
:.,$d           # Delete from current line to end
:1,.d           # Delete from line 1 to current
```

## Text Objects

### Text Object Commands
```bash
# Inside objects
ciw             # Change inside word
di"             # Delete inside quotes
yi)             # Yank inside parentheses
ca}             # Change around braces

# Around objects
daw             # Delete around word
ca"             # Change around quotes
ya)             # Yank around parentheses
```

### Object Types
```bash
w               # Word
s               # Sentence
p               # Paragraph
t               # Tag (HTML/XML)
"               # Double quotes
'               # Single quotes
)               # Parentheses
}               # Braces
]               # Square brackets
```

## Practical Examples

### Quick File Editing
```bash
# Edit file and jump to line 25
vim +25 file.txt

# Edit file and search for pattern
vim +/pattern file.txt

# Edit multiple files
vim file1.txt file2.txt file3.txt

# Edit files matching pattern
vim *.txt
```

### Bulk Operations
```bash
# Replace in multiple files
:args *.txt
:argdo %s/old/new/g | update

# Execute command on all buffers
:bufdo %s/old/new/g | update

# Execute macro on all lines
:%normal @a
```

### Working with Code
```bash
# Jump to matching brace
%

# Indent/unindent blocks
>>              # Indent line
<<              # Unindent line
5>>             # Indent 5 lines
>i{             # Indent inside braces

# Comment/uncomment (with vim-commentary)
gcc             # Comment line
gc              # Comment selection
```

## Tips and Tricks

### Efficiency Tips
```bash
# Jump to specific line
:42             # Go to line 42
42G             # Go to line 42

# Quick edits
cw              # Change word
C               # Change to end of line
D               # Delete to end of line
J               # Join lines

# Repeat commands
.               # Repeat last command
2.              # Repeat last command 2 times
```

### Advanced Navigation
```bash
# Jump list
<Ctrl+o>        # Go back in jump list
<Ctrl+i>        # Go forward in jump list

# Change list
g;              # Go to older change
g,              # Go to newer change

# Search history
/               # Enter search
<Up>            # Previous search
<Down>          # Next search
```

### Text Manipulation
```bash
# Sort lines
:sort           # Sort all lines
:5,10sort       # Sort lines 5-10
:sort u         # Sort and remove duplicates

# Reverse lines
:g/^/m0         # Reverse all lines

# Remove blank lines
:g/^\s*$/d      # Remove blank/whitespace lines
```

## Common Workflows

### Development Workflow
```bash
# Open project
vim .

# Navigate files
:e src/main.js
:find *.py
<Ctrl+p>        # With fzf plugin

# Search in project
:grep pattern **/*.js
:vimgrep pattern **/*.py

# Git operations (with vim-fugitive)
:Git status
:Git diff
:Git blame
```

### Configuration Management
```bash
# Edit vimrc
:e $MYVIMRC

# Reload vimrc
:source $MYVIMRC

# Install plugins (with vim-plug)
:PlugInstall
:PlugUpdate
:PlugClean
```

## Troubleshooting

### Common Issues
```bash
# Stuck in Insert mode
<Esc>           # Exit Insert mode

# Accidental Ctrl+S (terminal freeze)
<Ctrl+Q>        # Unfreeze terminal

# Undo tree navigation
u               # Undo
<Ctrl+r>        # Redo
:earlier 10m    # Go to 10 minutes ago
:later 5m       # Go to 5 minutes later

# Reset highlighting
:noh            # No highlight
```

### Recovery
```bash
# Recover from swap file
vim -r filename

# Show swap files
:sw

# Delete swap file
:!rm .filename.swp
```

## Quick Reference

### Essential Commands
```bash
# Movement
h/j/k/l         # Left/down/up/right
w/b/e           # Word forward/back/end
0/^/$           # Line start/first-char/end
gg/G            # File start/end

# Editing
i/a/o           # Insert before/after/newline
x/dd            # Delete char/line
yy/p            # Copy line/paste
u/<Ctrl+r>      # Undo/redo

# Search/Replace
/pattern        # Search
:%s/old/new/g   # Replace all

# Files
:w              # Save
:q              # Quit
:wq             # Save and quit
```

### Mode Indicators
```bash
# Check current mode
:echo mode()

# Mode abbreviations
n               # Normal
i               # Insert
v               # Visual
V               # Visual line
<Ctrl+v>        # Visual block
c               # Command-line
```

## See Also

- `vimtutor` - Interactive Vim tutorial
- `:help` - Built-in help system
- [Vim Documentation](https://vimdoc.sourceforge.net/) - Complete docs
- [Vim Awesome](https://vimawesome.com/) - Plugin directory
- `nvim` - Neovim (modern Vim fork)
- `emacs` - Alternative editor