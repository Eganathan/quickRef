---
title: "Grep"
date: 2023-01-01T00:00:00Z
draft: false
description: "Text search and pattern matching utility for searching plain-text data sets for lines that match a regular expression."
categories: ["tools"]
tags: ["tools", "linux", "cli", "text", "search"]
---

## Overview

Grep is a command-line utility for searching plain-text data sets for lines that match a regular expression. It's one of the most powerful and frequently used tools in Unix/Linux systems.

## Basic Usage

```bash
grep "pattern" filename
```

**Example:**
```bash
# Search for the word "error" in log file
grep "error" /var/log/system.log
```

## Common Options

### Case & Matching

- `-i` - Ignore case
- `-v` - Invert match (exclude)
- `-w` - Match whole words
- `-x` - Match whole lines
- `-F` - Fixed strings (no regex)
- `-E` - Extended regex

### Output Control

- `-n` - Show line numbers
- `-c` - Count matches
- `-l` - List matching files
- `-L` - List non-matching files
- `-o` - Show only matches
- `-q` - Quiet mode

## Context Options

```bash
# Show 3 lines after match
grep -A 3 "pattern" file

# Show 3 lines before match
grep -B 3 "pattern" file

# Show 3 lines around match
grep -C 3 "pattern" file
```

## Regular Expressions

### Basic Patterns

- `^` - Start of line
- `$` - End of line
- `.` - Any character
- `*` - Zero or more
- `+` - One or more (with -E)
- `?` - Zero or one (with -E)

### Character Classes

- `[abc]` - Any of a, b, c
- `[^abc]` - Not a, b, c
- `[a-z]` - Any lowercase
- `[0-9]` - Any digit
- `\d` - Digit (with -P)
- `\w` - Word character (with -P)

## Practical Examples

### Search for IP addresses:
```bash
grep -E "[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}" file.txt
```

### Search for email addresses:
```bash
grep -E "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" file.txt
```

### Search in multiple files:
```bash
grep -r "TODO" /path/to/project
```

### Search with file patterns:
```bash
grep -r --include="*.js" "console.log" .
```

### Count occurrences:
```bash
grep -c "error" /var/log/system.log
```

### Show only matching part:
```bash
grep -o "[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}" access.log
```

## File Operations

### Recursive Search
```bash
grep -r "pattern" /path
grep -R "pattern" /path
```

### Include/Exclude Files
```bash
grep -r --include="*.txt" "pattern" .
grep -r --exclude="*.log" "pattern" .
```

## Useful Combinations

### Search for functions in code:
```bash
grep -n "function.*(" *.js
```

### Find files containing pattern:
```bash
grep -l "pattern" *.txt
```

### Search case-insensitive with line numbers:
```bash
grep -in "error" /var/log/system.log
```

### Exclude binary files:
```bash
grep -I "pattern" *
```

### Search for multiple patterns:
```bash
grep -E "error|warning|critical" /var/log/system.log
```

## Exit Codes

- **0** - Match found
- **1** - No match found
- **2** - Error occurred

## Tips and Tricks

- Use `grep --help` for complete option list
- Combine with other tools: `ps aux | grep process_name`
- Use aliases for common patterns: `alias finderr='grep -r "error" .'`
- For complex patterns, consider using `egrep` (equivalent to `grep -E`)

## See Also

- `egrep` - Extended grep
- `fgrep` - Fixed string grep
- `rg` (ripgrep) - Faster alternative
- `ag` (the silver searcher) - Another fast alternative