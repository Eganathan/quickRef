---
title: "jq"
date: 2023-01-01T00:00:00Z
draft: false
description: "Lightweight and flexible command-line JSON processor for parsing, filtering, and transforming JSON data."
categories: ["tools"]
tags: ["jq", "json", "cli", "data-processing", "parsing"]
---

## Overview

jq is a lightweight and flexible command-line JSON processor. It's like `sed` for JSON data, allowing you to slice, filter, map, and transform structured data with ease. Essential for API testing, data processing, and JSON manipulation.

## Installation

```bash
# Ubuntu/Debian
sudo apt install jq

# macOS
brew install jq

# CentOS/RHEL
sudo yum install jq

# Windows
# Download from https://stedolan.github.io/jq/download/
```

## Basic Usage

### Simple Filtering
```bash
# Pretty print JSON
echo '{"name":"John","age":30}' | jq '.'

# Extract field
echo '{"name":"John","age":30}' | jq '.name'

# Extract nested field
echo '{"user":{"name":"John","age":30}}' | jq '.user.name'

# Extract array element
echo '["apple","banana","cherry"]' | jq '.[0]'
```

### Array Operations
```bash
# Get array length
echo '[1,2,3,4,5]' | jq 'length'

# Get all elements
echo '[1,2,3,4,5]' | jq '.[]'

# Get specific elements
echo '[1,2,3,4,5]' | jq '.[1:3]'  # Elements 1-2
echo '[1,2,3,4,5]' | jq '.[-2:]'  # Last 2 elements
```

## Data Types

### Working with Objects
```bash
# Get all keys
echo '{"name":"John","age":30,"city":"NYC"}' | jq 'keys'

# Get all values
echo '{"name":"John","age":30,"city":"NYC"}' | jq 'values'

# Check if key exists
echo '{"name":"John","age":30}' | jq 'has("name")'

# Get type of value
echo '{"name":"John","age":30}' | jq '.age | type'
```

### Working with Arrays
```bash
# Add element
echo '[1,2,3]' | jq '. + [4]'

# Remove element
echo '[1,2,3,4]' | jq 'del(.[1])'

# Reverse array
echo '[1,2,3,4]' | jq 'reverse'

# Sort array
echo '[3,1,4,2]' | jq 'sort'

# Unique elements
echo '[1,2,2,3,3,3]' | jq 'unique'
```

## Filtering and Selection

### Basic Filters
```bash
# Select objects with specific field
echo '[{"name":"John","age":30},{"name":"Jane","age":25}]' | jq '.[] | select(.age > 25)'

# Select objects with specific value
echo '[{"name":"John","active":true},{"name":"Jane","active":false}]' | jq '.[] | select(.active)'

# Select objects with key
echo '[{"name":"John"},{"age":30}]' | jq '.[] | select(has("name"))'
```

### Complex Filters
```bash
# Multiple conditions
echo '[{"name":"John","age":30},{"name":"Jane","age":25}]' | jq '.[] | select(.age > 25 and .name == "John")'

# Regular expression matching
echo '[{"name":"John"},{"name":"Jane"}]' | jq '.[] | select(.name | test("J.*"))'

# Empty or null values
echo '[{"name":"John"},{"name":null},{}]' | jq '.[] | select(.name != null)'
```

## Transformations

### Map Operations
```bash
# Transform array elements
echo '[1,2,3,4]' | jq 'map(. * 2)'

# Transform object fields
echo '[{"name":"john"},{"name":"jane"}]' | jq 'map(.name | ascii_upcase)'

# Add field to objects
echo '[{"name":"John"},{"name":"Jane"}]' | jq 'map(. + {"active": true})'
```

### Object Construction
```bash
# Create new object
echo '{"first":"John","last":"Doe"}' | jq '{name: (.first + " " + .last)}'

# Multiple fields
echo '{"name":"John","age":30}' | jq '{user: .name, years: .age}'

# Conditional fields
echo '{"name":"John","age":30}' | jq '{name, age: (if .age > 25 then "adult" else "young" end)}'
```

### String Operations
```bash
# String interpolation
echo '{"name":"John","age":30}' | jq '"Name: \(.name), Age: \(.age)"'

# String manipulation
echo '{"name":"john doe"}' | jq '.name | ascii_upcase'
echo '{"name":"John Doe"}' | jq '.name | ascii_downcase'
echo '{"text":"  hello  "}' | jq '.text | ltrimstr(" ") | rtrimstr(" ")'

# Split and join
echo '{"path":"/home/user/file.txt"}' | jq '.path | split("/") | join("-")'
```

## Advanced Features

### Conditionals
```bash
# If-then-else
echo '{"age":30}' | jq 'if .age > 18 then "adult" else "minor" end'

# Multiple conditions
echo '{"score":85}' | jq '
  if .score >= 90 then "A"
  elif .score >= 80 then "B"
  elif .score >= 70 then "C"
  else "F"
  end'

# Null handling
echo '{"name":null}' | jq '.name // "Unknown"'
```

### Grouping
```bash
# Group by field
echo '[{"name":"John","dept":"IT"},{"name":"Jane","dept":"HR"},{"name":"Bob","dept":"IT"}]' | jq 'group_by(.dept)'

# Group and count
echo '[{"type":"A"},{"type":"B"},{"type":"A"},{"type":"C"}]' | jq 'group_by(.type) | map({type: .[0].type, count: length})'
```

### Aggregation
```bash
# Sum values
echo '[1,2,3,4,5]' | jq 'add'

# Min/max
echo '[1,5,3,9,2]' | jq 'min'
echo '[1,5,3,9,2]' | jq 'max'

# Average
echo '[1,2,3,4,5]' | jq 'add / length'

# Count
echo '[{"active":true},{"active":false},{"active":true}]' | jq 'map(select(.active)) | length'
```

## Working with Complex Data

### Nested Objects
```bash
# Deep field access
echo '{"user":{"profile":{"name":"John"}}}' | jq '.user.profile.name'

# Safe navigation
echo '{"user":{"profile":{"name":"John"}}}' | jq '.user.profile.email?'

# Recursive descent
echo '{"a":{"b":{"c":1}}}' | jq '.. | numbers'
```

### Array of Objects
```bash
# Extract specific fields
echo '[{"name":"John","age":30},{"name":"Jane","age":25}]' | jq 'map(.name)'

# Filter and transform
echo '[{"name":"John","age":30},{"name":"Jane","age":25}]' | jq 'map(select(.age > 25) | .name)'

# Create lookup table
echo '[{"id":1,"name":"John"},{"id":2,"name":"Jane"}]' | jq 'map({(.id|tostring): .name}) | add'
```

### Flattening
```bash
# Flatten array
echo '[[1,2],[3,4],[5,6]]' | jq 'flatten'

# Flatten one level
echo '[[1,2],[3,4],[5,6]]' | jq 'flatten(1)'

# Flatten objects
echo '{"a":{"x":1,"y":2},"b":{"x":3,"y":4}}' | jq 'to_entries | map(.value) | flatten'
```

## Input/Output Formats

### Raw Output
```bash
# Raw strings
echo '{"name":"John"}' | jq -r '.name'

# Multiple raw strings
echo '[{"name":"John"},{"name":"Jane"}]' | jq -r '.[] | .name'

# Tab-separated values
echo '[{"name":"John","age":30},{"name":"Jane","age":25}]' | jq -r '.[] | [.name, .age] | @tsv'
```

### CSV Output
```bash
# CSV format
echo '[{"name":"John","age":30},{"name":"Jane","age":25}]' | jq -r '.[] | [.name, .age] | @csv'

# CSV with headers
echo '[{"name":"John","age":30},{"name":"Jane","age":25}]' | jq -r '["name","age"], (.[] | [.name, .age]) | @csv'
```

### JSON Lines
```bash
# Convert to JSON Lines
echo '[{"name":"John"},{"name":"Jane"}]' | jq -c '.[]'

# Convert from JSON Lines
echo '{"name":"John"}
{"name":"Jane"}' | jq -s '.'
```

## Practical Examples

### API Response Processing
```bash
# Extract user names from API response
curl -s https://api.github.com/users | jq '.[].login'

# Get specific fields
curl -s https://api.github.com/users | jq '.[] | {name: .login, url: .html_url}'

# Filter by criteria
curl -s https://api.github.com/users | jq '.[] | select(.type == "User") | .login'
```

### Log Processing
```bash
# Parse JSON logs
cat application.log | jq 'select(.level == "ERROR") | .message'

# Count by log level
cat application.log | jq -r '.level' | sort | uniq -c

# Extract timestamp and message
cat application.log | jq -r '"\(.timestamp): \(.message)"'
```

### Configuration Management
```bash
# Update configuration
echo '{"database":{"host":"localhost","port":5432}}' | jq '.database.host = "newhost"'

# Merge configurations
echo '{"a":1,"b":2}' | jq '. + {"c":3,"d":4}'

# Remove sensitive data
echo '{"user":"john","password":"secret","email":"john@example.com"}' | jq 'del(.password)'
```

### Data Validation
```bash
# Check required fields
echo '{"name":"John","age":30}' | jq 'if has("name") and has("age") then "valid" else "invalid" end'

# Validate data types
echo '{"name":"John","age":"30"}' | jq 'if (.name | type) == "string" and (.age | type) == "number" then "valid" else "invalid" end'

# Check array length
echo '{"items":[1,2,3]}' | jq 'if (.items | length) > 0 then "has items" else "empty" end'
```

## Error Handling

### Safe Navigation
```bash
# Optional field access
echo '{"user":{"name":"John"}}' | jq '.user.email?'

# Default values
echo '{"user":{"name":"John"}}' | jq '.user.email // "not provided"'

# Try-catch alternative
echo '{"user":{"name":"John"}}' | jq '.user.email | select(. != null)'
```

### Empty Handling
```bash
# Handle empty arrays
echo '[]' | jq 'if length > 0 then .[0] else "empty" end'

# Handle null values
echo '{"name":null}' | jq '.name | if . == null then "N/A" else . end'

# Compact output (remove nulls)
echo '{"a":1,"b":null,"c":3}' | jq 'compact'
```

## Command-line Options

### Common Options
```bash
# Compact output
jq -c '.'

# Raw output
jq -r '.name'

# Sort keys
jq -S '.'

# Slurp mode (read entire input)
jq -s '.'

# Read from file
jq '.' data.json

# Multiple inputs
jq -s '.[0] + .[1]' file1.json file2.json
```

### Output Control
```bash
# Tab output
jq -t '.'

# Null input
jq -n '{name: "John", age: 30}'

# Exit status
jq -e '.success' # Exit 0 if truthy, 1 if falsy/null
```

## Advanced Use Cases

### Stream Processing
```bash
# Process large JSON files
jq --stream '. as $item | if $item[0][0] == "users" then $item else empty end' large.json

# Streaming parser
curl -s https://api.example.com/stream | jq --stream
```

### Custom Functions
```bash
# Define function
jq '
def double: . * 2;
def square: . * .;
[1,2,3,4] | map(double | square)
'

# Function with parameters
jq '
def multiply(n): . * n;
[1,2,3,4] | map(multiply(5))
'
```

### Complex Transformations
```bash
# Pivot data
echo '[{"name":"John","skill":"Java"},{"name":"John","skill":"Python"},{"name":"Jane","skill":"JavaScript"}]' | jq '
group_by(.name) | map({
  name: .[0].name,
  skills: map(.skill)
})
'

# Nested grouping
echo '[{"dept":"IT","name":"John","salary":50000},{"dept":"IT","name":"Jane","salary":60000}]' | jq '
group_by(.dept) | map({
  department: .[0].dept,
  employees: map({name, salary}),
  total_salary: map(.salary) | add
})
'
```

## Performance Tips

### Optimization
```bash
# Use streaming for large files
jq --stream '. | select(.[0][0] == "target_field")'

# Limit output early
jq 'limit(10; .[] | select(.active))'

# Use compact output for smaller files
jq -c '.'
```

### Memory Management
```bash
# Process line by line
jq --stream '. | select(length == 2)'

# Avoid loading entire file
jq -c '.[]' large.json | head -100
```

## Quick Reference

### Basic Syntax
```bash
.               # Identity (entire input)
.field          # Field access
.[0]            # Array index
.[]             # Array/object values
.[1:3]          # Array slice
.field?         # Optional field access
```

### Common Operations
```bash
length          # Get length
keys            # Get keys
values          # Get values
type            # Get type
empty           # Empty value
map(expr)       # Transform array
select(expr)    # Filter
has("key")      # Check key existence
```

### String Functions
```bash
ascii_downcase  # Lowercase
ascii_upcase    # Uppercase
ltrimstr(s)     # Left trim
rtrimstr(s)     # Right trim
split(s)        # Split string
join(s)         # Join array
test(regex)     # Test regex
```

### Math Functions
```bash
add             # Sum array
min             # Minimum
max             # Maximum
sort            # Sort array
reverse         # Reverse array
unique          # Unique elements
group_by(expr)  # Group by expression
```

## Troubleshooting

### Common Errors
```bash
# Parse error
echo 'invalid json' | jq '.'
# Solution: Fix JSON syntax

# Field doesn't exist
echo '{"name":"John"}' | jq '.age'
# Solution: Use .age? or .age // "default"

# Type error
echo '{"name":"John"}' | jq '.name + 1'
# Solution: Convert types or check type first
```

### Debugging
```bash
# Debug mode
jq --debug '.'

# Verbose output
jq -v '.'

# Show parse tree
jq --debug '.' 2>&1 | head -20
```

## See Also

- `man jq` - Manual page
- [jq Manual](https://stedolan.github.io/jq/manual/) - Official documentation
- [jq Cookbook](https://github.com/stedolan/jq/wiki/Cookbook) - Examples
- `yq` - YAML processor using jq syntax
- `jid` - Interactive jq
- `fx` - Interactive JSON viewer