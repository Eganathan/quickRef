---
title: "Regex"
date: 2023-01-01T00:00:00Z
draft: false
description: "Regular expressions for pattern matching and text processing in various programming languages and tools."
categories: ["tools"]
tags: ["regex", "pattern-matching", "text-processing", "programming", "search"]
---

## Overview

Regular expressions (regex) are patterns used to match character combinations in strings. They're essential for text processing, validation, searching, and data extraction across virtually all programming languages and tools.

## Basic Syntax

### Literal Characters
```regex
hello       # Matches "hello" exactly
123         # Matches "123" exactly
```

### Meta Characters
```regex
.           # Any character except newline
^           # Start of string/line
$           # End of string/line
\           # Escape character
|           # OR operator
()          # Group
[]          # Character class
{}          # Quantifier
```

## Character Classes

### Predefined Classes
```regex
.           # Any character except newline
\d          # Any digit (0-9)
\D          # Any non-digit
\w          # Any word character (a-z, A-Z, 0-9, _)
\W          # Any non-word character
\s          # Any whitespace character
\S          # Any non-whitespace character
```

### Custom Classes
```regex
[abc]       # Any of a, b, or c
[a-z]       # Any lowercase letter
[A-Z]       # Any uppercase letter
[0-9]       # Any digit
[^abc]      # Any character except a, b, or c
[a-zA-Z0-9] # Any alphanumeric character
```

## Quantifiers

### Basic Quantifiers
```regex
*           # 0 or more
+           # 1 or more
?           # 0 or 1 (optional)
{n}         # Exactly n times
{n,}        # n or more times
{n,m}       # Between n and m times
```

### Examples
```regex
a*          # "", "a", "aa", "aaa", ...
a+          # "a", "aa", "aaa", ... (not empty)
a?          # "" or "a"
a{3}        # "aaa" exactly
a{2,4}      # "aa", "aaa", or "aaaa"
```

## Anchors

### Position Anchors
```regex
^           # Start of string/line
$           # End of string/line
\b          # Word boundary
\B          # Non-word boundary
```

### Examples
```regex
^hello      # "hello" at start of line
world$      # "world" at end of line
\bcat\b     # "cat" as whole word
\Bcat\B     # "cat" not as whole word
```

## Groups and Capturing

### Groups
```regex
(abc)       # Capture group
(?:abc)     # Non-capturing group
(?P<name>abc) # Named group (Python)
(?<name>abc)  # Named group (C#, Java)
```

### Backreferences
```regex
(cat)\1     # Matches "catcat"
(\w+)\s+\1  # Matches repeated words
```

## Common Patterns

### Email Validation
```regex
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
```

### Phone Numbers
```regex
^\+?1?[-.\s]?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$
```

### URLs
```regex
^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$
```

### IPv4 Address
```regex
^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$
```

### Date Formats
```regex
# MM/DD/YYYY
^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$

# YYYY-MM-DD
^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$
```

### Credit Card Numbers
```regex
# Visa
^4[0-9]{12}(?:[0-9]{3})?$

# MasterCard
^5[1-5][0-9]{14}$

# American Express
^3[47][0-9]{13}$
```

## Language-Specific Usage

### JavaScript
```javascript
// Create regex
const regex = /pattern/flags;
const regex = new RegExp('pattern', 'flags');

// Test match
regex.test(string);

// Find matches
string.match(regex);
string.search(regex);
string.replace(regex, replacement);
```

### Python
```python
import re

# Compile regex
pattern = re.compile(r'regex_pattern')

# Match functions
re.match(pattern, string)    # Match at beginning
re.search(pattern, string)   # Find first match
re.findall(pattern, string)  # Find all matches
re.sub(pattern, replacement, string)  # Replace
```

### Bash/grep
```bash
# Basic grep
grep 'pattern' file.txt

# Extended regex
grep -E 'pattern' file.txt
egrep 'pattern' file.txt

# Perl-compatible regex
grep -P 'pattern' file.txt
```

### sed
```bash
# Replace with regex
sed 's/pattern/replacement/g' file.txt

# Extended regex
sed -E 's/pattern/replacement/g' file.txt
```

## Flags/Modifiers

### Common Flags
```regex
i           # Case insensitive
g           # Global (find all matches)
m           # Multiline (^ and $ match line breaks)
s           # Dot matches newline
x           # Extended (ignore whitespace)
```

### Examples
```javascript
/hello/i        # Case insensitive
/hello/g        # Global search
/hello/gi       # Case insensitive + global
```

## Advanced Features

### Lookahead/Lookbehind
```regex
(?=pattern)     # Positive lookahead
(?!pattern)     # Negative lookahead
(?<=pattern)    # Positive lookbehind
(?<!pattern)    # Negative lookbehind
```

### Examples
```regex
\d+(?=px)       # Numbers followed by "px"
\d+(?!px)       # Numbers not followed by "px"
(?<=\$)\d+      # Numbers preceded by "$"
(?<!\$)\d+      # Numbers not preceded by "$"
```

## Practical Examples

### Extract Domain from Email
```regex
@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})
```

### Find HTML Tags
```regex
<\/?[a-zA-Z][^>]*>
```

### Match Quoted Strings
```regex
"([^"\\]|\\.)*"
```

### Find CSS Colors
```regex
#[0-9a-fA-F]{3,6}
```

### Extract URLs from Text
```regex
https?:\/\/[^\s]+
```

### Match JSON Values
```regex
"[^"]*":\s*("[^"]*"|\d+|true|false|null)
```

## Testing and Debugging

### Online Tools
- [regex101.com](https://regex101.com) - Interactive regex tester
- [regexr.com](https://regexr.com) - Visual regex builder
- [regexpal.com](https://regexpal.com) - Simple regex tester

### Command Line Testing
```bash
# Test with grep
echo "test string" | grep -E 'pattern'

# Test with sed
echo "test string" | sed 's/pattern/replacement/'

# Test with Python
python3 -c "import re; print(re.search(r'pattern', 'test string'))"
```

## Performance Tips

### Best Practices
- Use specific characters instead of `.` when possible
- Avoid nested quantifiers like `(a+)+`
- Use non-capturing groups `(?:...)` when you don't need the match
- Anchor patterns with `^` and `$` when appropriate
- Use word boundaries `\b` for word matching

### Common Pitfalls
- **Greedy vs Non-greedy**: `.*` vs `.*?`
- **Backtracking**: Avoid complex nested patterns
- **Case sensitivity**: Remember to use `i` flag when needed
- **Escaping**: Don't forget to escape special characters

## Quick Reference

### Most Common Patterns
```regex
\d+             # One or more digits
\w+             # One or more word characters
\s+             # One or more whitespace
[a-zA-Z]+       # One or more letters
\b\w+\b         # Whole words
^.+$            # Entire line
.*              # Any characters (greedy)
.*?             # Any characters (non-greedy)
```

### Escape Sequences
```regex
\.              # Literal dot
\*              # Literal asterisk
\+              # Literal plus
\?              # Literal question mark
\\              # Literal backslash
\(              # Literal parenthesis
\[              # Literal bracket
\{              # Literal brace
\|              # Literal pipe
```

## See Also

- `man grep` - Pattern matching in files
- `man sed` - Stream editor with regex support
- `man awk` - Pattern scanning and processing
- [MDN Regex Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Python re module](https://docs.python.org/3/library/re.html)