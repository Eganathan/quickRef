---
title: "Bash"
date: 2023-01-01T00:00:00Z
draft: false
description: "Bash shell scripting and command line reference for Linux and Unix systems."
categories: ["programming"]
tags: ["programming", "shell", "scripting", "linux", "unix"]
---

## Overview

Bash (Bourne Again SHell) is a Unix shell and command language. It's the default shell on most Linux systems and macOS, and is widely used for system administration and automation.

## Variables

```bash
# Variable assignment (no spaces around =)
name="value"
number=42

# Using variables
echo $name
echo ${name}
echo "Hello $name"
```

### Special Variables

- `$0` - Script name
- `$1, $2, ...` - Script arguments
- `$#` - Number of arguments
- `$@` - All arguments
- `$?` - Exit status of last command
- `$$` - Process ID
- `$!` - Process ID of last background command

## String Operations

```bash
# String length
${#string}

# Substring
${string:position:length}

# Replace
${string/old/new}        # Replace first occurrence
${string//old/new}       # Replace all occurrences

# Remove prefix/suffix
${string#prefix}         # Remove shortest prefix
${string##prefix}        # Remove longest prefix
${string%suffix}         # Remove shortest suffix
${string%%suffix}        # Remove longest suffix
```

## Arrays

```bash
# Array declaration
arr=("item1" "item2" "item3")

# Access elements
echo ${arr[0]}           # First element
echo ${arr[@]}           # All elements
echo ${#arr[@]}          # Array length

# Add elements
arr+=("item4")
```

## Conditionals

```bash
if [ condition ]; then
    # commands
elif [ condition ]; then
    # commands
else
    # commands
fi
```

### Test Conditions

```bash
# File tests
[ -f file ]              # File exists
[ -d directory ]         # Directory exists
[ -r file ]              # File is readable
[ -w file ]              # File is writable
[ -x file ]              # File is executable

# String tests
[ -z string ]            # String is empty
[ -n string ]            # String is not empty
[ string1 = string2 ]    # Strings are equal
[ string1 != string2 ]   # Strings are not equal

# Numeric tests
[ num1 -eq num2 ]        # Equal
[ num1 -ne num2 ]        # Not equal
[ num1 -gt num2 ]        # Greater than
[ num1 -lt num2 ]        # Less than
[ num1 -ge num2 ]        # Greater than or equal
[ num1 -le num2 ]        # Less than or equal
```

## Loops

### For Loop

```bash
# Loop through list
for item in item1 item2 item3; do
    echo $item
done

# Loop through range
for i in {1..10}; do
    echo $i
done

# C-style loop
for ((i=1; i<=10; i++)); do
    echo $i
done

# Loop through files
for file in *.txt; do
    echo $file
done
```

### While Loop

```bash
while [ condition ]; do
    # commands
done

# Reading file line by line
while IFS= read -r line; do
    echo "$line"
done < file.txt
```

### Until Loop

```bash
until [ condition ]; do
    # commands
done
```

## Functions

```bash
# Function definition
function_name() {
    # commands
    echo "Parameter 1: $1"
    echo "Parameter 2: $2"
    return 0
}

# Call function
function_name arg1 arg2

# Function with local variables
my_function() {
    local local_var="local value"
    echo $local_var
}
```

## Input/Output

```bash
# Read user input
read -p "Enter your name: " name
echo "Hello $name"

# Read with options
read -s password           # Silent input
read -t 10 input          # Timeout after 10 seconds
read -n 1 char            # Read single character
```

## File Operations

```bash
# Check if file exists
if [ -f "file.txt" ]; then
    echo "File exists"
fi

# Create file
touch file.txt

# Write to file
echo "content" > file.txt      # Overwrite
echo "content" >> file.txt     # Append

# Read file
while IFS= read -r line; do
    echo "$line"
done < file.txt
```

## Process Control

```bash
# Run in background
command &

# Wait for background jobs
wait

# Kill process
kill PID
killall process_name

# Check if process is running
if pgrep process_name > /dev/null; then
    echo "Process is running"
fi
```

## Error Handling

```bash
# Exit on error
set -e

# Check command success
if command; then
    echo "Success"
else
    echo "Failed"
fi

# Short-circuit evaluation
command && echo "Success" || echo "Failed"
```

## Advanced Features

### Command Substitution

```bash
# Modern syntax
result=$(command)

# Legacy syntax
result=`command`

# Examples
current_date=$(date)
file_count=$(ls | wc -l)
```

### Parameter Expansion

```bash
# Default values
${variable:-default}      # Use default if variable is unset
${variable:=default}      # Set variable to default if unset
${variable:+alternate}    # Use alternate if variable is set
${variable:?error}        # Exit with error if variable is unset
```

### Arithmetic

```bash
# Arithmetic expansion
result=$((5 + 3))
result=$((variable * 2))

# Increment/decrement
((counter++))
((counter--))
```

## Best Practices

- Always quote variables: `"$variable"`
- Use `#!/bin/bash` as the first line
- Set `set -e` to exit on errors
- Use `set -u` to exit on undefined variables
- Use `shellcheck` to validate scripts
- Use meaningful variable names
- Add comments for complex logic

## Common Patterns

### Argument Parsing

```bash
while [[ $# -gt 0 ]]; do
    case $1 in
        -h|--help)
            echo "Usage: $0 [options]"
            exit 0
            ;;
        -v|--verbose)
            verbose=true
            shift
            ;;
        *)
            echo "Unknown option: $1"
            exit 1
            ;;
    esac
done
```

### Script Template

```bash
#!/bin/bash
set -euo pipefail

# Script description
# Usage: script.sh [options] arguments

# Default values
verbose=false
dry_run=false

# Functions
usage() {
    echo "Usage: $0 [options] arguments"
    echo "Options:"
    echo "  -h, --help     Show this help"
    echo "  -v, --verbose  Verbose output"
    echo "  -n, --dry-run  Dry run mode"
}

main() {
    # Main script logic
    echo "Script starting..."
}

# Parse arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -h|--help)
            usage
            exit 0
            ;;
        -v|--verbose)
            verbose=true
            shift
            ;;
        -n|--dry-run)
            dry_run=true
            shift
            ;;
        *)
            echo "Unknown option: $1"
            usage
            exit 1
            ;;
    esac
done

# Run main function
main "$@"
```

## See Also

- `man bash` - Complete manual
- `help` - Built-in help for bash builtins
- `shellcheck` - Script analysis tool
- `zsh` - Alternative shell with more features