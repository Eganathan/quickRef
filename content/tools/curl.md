---
title: "Curl"
date: 2023-01-01T00:00:00Z
draft: false
description: "Command-line tool for transferring data with URLs, essential for API testing, web scraping, and HTTP requests."
categories: ["tools"]
tags: ["curl", "http", "api", "web", "networking", "cli"]
---

## Overview

Curl is a command-line tool for transferring data from or to servers using various protocols including HTTP, HTTPS, FTP, and more. It's essential for API testing, web scraping, downloading files, and debugging network requests.

## Installation

```bash
# Ubuntu/Debian
sudo apt install curl

# macOS (usually pre-installed)
brew install curl

# CentOS/RHEL
sudo yum install curl

# Windows
# Download from https://curl.se/windows/
```

## Basic Usage

### Simple GET Request
```bash
# Basic GET request
curl https://api.example.com

# GET with verbose output
curl -v https://api.example.com

# GET with headers only
curl -I https://api.example.com
```

### Download Files
```bash
# Download file
curl -O https://example.com/file.zip

# Download with custom filename
curl -o myfile.zip https://example.com/file.zip

# Download multiple files
curl -O https://example.com/file1.zip -O https://example.com/file2.zip
```

## HTTP Methods

### GET Requests
```bash
# Simple GET
curl https://api.example.com/users

# GET with query parameters
curl "https://api.example.com/users?page=1&limit=10"

# GET with URL encoding
curl -G -d "q=search term" -d "page=1" https://api.example.com/search
```

### POST Requests
```bash
# POST with data
curl -X POST -d "name=John&email=john@example.com" https://api.example.com/users

# POST with JSON data
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com"}' \
  https://api.example.com/users

# POST with file data
curl -X POST \
  -H "Content-Type: application/json" \
  -d @data.json \
  https://api.example.com/users
```

### PUT Requests
```bash
# PUT request
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"name":"John Updated"}' \
  https://api.example.com/users/123
```

### DELETE Requests
```bash
# DELETE request
curl -X DELETE https://api.example.com/users/123

# DELETE with authentication
curl -X DELETE \
  -H "Authorization: Bearer token123" \
  https://api.example.com/users/123
```

### PATCH Requests
```bash
# PATCH request
curl -X PATCH \
  -H "Content-Type: application/json" \
  -d '{"name":"Partially Updated"}' \
  https://api.example.com/users/123
```

## Headers and Authentication

### Custom Headers
```bash
# Add custom header
curl -H "Authorization: Bearer token123" https://api.example.com

# Multiple headers
curl -H "Authorization: Bearer token123" \
     -H "Content-Type: application/json" \
     -H "User-Agent: MyApp/1.0" \
     https://api.example.com

# Remove default headers
curl -H "User-Agent:" https://api.example.com
```

### Authentication

#### Basic Authentication
```bash
# Basic auth with username:password
curl -u username:password https://api.example.com

# Basic auth with prompt for password
curl -u username https://api.example.com

# Basic auth with encoded credentials
curl -H "Authorization: Basic dXNlcjpwYXNz" https://api.example.com
```

#### Bearer Token
```bash
# Bearer token
curl -H "Authorization: Bearer your-token-here" https://api.example.com

# OAuth token
curl -H "Authorization: OAuth oauth-token" https://api.example.com
```

#### API Key
```bash
# API key in header
curl -H "X-API-Key: your-api-key" https://api.example.com

# API key in query parameter
curl "https://api.example.com/data?api_key=your-api-key"
```

## Data Formats

### JSON Data
```bash
# JSON POST
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"key":"value","number":42}' \
  https://api.example.com

# JSON from file
curl -X POST \
  -H "Content-Type: application/json" \
  -d @data.json \
  https://api.example.com
```

### Form Data
```bash
# URL-encoded form data
curl -X POST \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "name=John&email=john@example.com" \
  https://api.example.com

# Form data (automatic content-type)
curl -X POST \
  -d "name=John" \
  -d "email=john@example.com" \
  https://api.example.com
```

### Multipart Form Data
```bash
# File upload
curl -X POST \
  -F "file=@document.pdf" \
  https://api.example.com/upload

# Mixed form data
curl -X POST \
  -F "name=John" \
  -F "email=john@example.com" \
  -F "avatar=@profile.jpg" \
  https://api.example.com/users
```

### XML Data
```bash
# XML POST
curl -X POST \
  -H "Content-Type: application/xml" \
  -d '<user><name>John</name><email>john@example.com</email></user>' \
  https://api.example.com
```

## Output and Formatting

### Output Control
```bash
# Save response to file
curl -o response.json https://api.example.com

# Append to file
curl -o response.json https://api.example.com

# Silent mode (no progress bar)
curl -s https://api.example.com

# Show only HTTP status code
curl -s -o /dev/null -w "%{http_code}" https://api.example.com
```

### Response Information
```bash
# Show response headers
curl -i https://api.example.com

# Show only headers
curl -I https://api.example.com

# Verbose output
curl -v https://api.example.com

# Show response time
curl -w "%{time_total}\n" -o /dev/null -s https://api.example.com
```

### Pretty Print JSON
```bash
# Format JSON output (with jq)
curl -s https://api.example.com | jq '.'

# Format JSON with Python
curl -s https://api.example.com | python -m json.tool

# Save formatted JSON
curl -s https://api.example.com | jq '.' > formatted.json
```

## Advanced Features

### Follow Redirects
```bash
# Follow redirects
curl -L https://example.com

# Follow redirects with max count
curl -L --max-redirs 5 https://example.com

# Show redirect chain
curl -L -v https://example.com
```

### Cookies
```bash
# Save cookies
curl -c cookies.txt https://example.com

# Load cookies
curl -b cookies.txt https://example.com

# Use specific cookie
curl -H "Cookie: sessionid=abc123" https://example.com
```

### Timeouts and Retries
```bash
# Connection timeout
curl --connect-timeout 10 https://api.example.com

# Maximum time for request
curl --max-time 30 https://api.example.com

# Retry on failure
curl --retry 3 https://api.example.com

# Retry with delay
curl --retry 3 --retry-delay 2 https://api.example.com
```

### Proxy Support
```bash
# Use HTTP proxy
curl --proxy http://proxy.example.com:8080 https://api.example.com

# Use SOCKS proxy
curl --socks5 proxy.example.com:1080 https://api.example.com

# Proxy authentication
curl --proxy-user username:password \
     --proxy http://proxy.example.com:8080 \
     https://api.example.com
```

## SSL/TLS Options

### SSL Verification
```bash
# Skip SSL verification (insecure)
curl -k https://self-signed.example.com

# Use specific CA certificate
curl --cacert ca-cert.pem https://api.example.com

# Use client certificate
curl --cert client-cert.pem --key client-key.pem https://api.example.com
```

### SSL Information
```bash
# Show SSL certificate info
curl -v https://api.example.com 2>&1 | grep -A 10 "Server certificate"

# Check SSL certificate expiration
curl -v https://api.example.com 2>&1 | grep "expire date"
```

## Testing APIs

### REST API Testing
```bash
# Test API endpoint
curl -X GET \
  -H "Accept: application/json" \
  https://api.example.com/v1/users

# Test with authentication
curl -X GET \
  -H "Authorization: Bearer token123" \
  -H "Accept: application/json" \
  https://api.example.com/v1/users/me

# Test error handling
curl -X GET \
  -H "Accept: application/json" \
  https://api.example.com/v1/nonexistent
```

### GraphQL API Testing
```bash
# GraphQL query
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"query":"query { users { id name email } }"}' \
  https://api.example.com/graphql

# GraphQL mutation
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"query":"mutation { createUser(name: \"John\", email: \"john@example.com\") { id name } }"}' \
  https://api.example.com/graphql
```

### Health Checks
```bash
# Simple health check
curl -f https://api.example.com/health

# Health check with timeout
curl -f --max-time 5 https://api.example.com/health

# Health check script
#!/bin/bash
if curl -f -s https://api.example.com/health > /dev/null; then
    echo "Service is healthy"
else
    echo "Service is down"
fi
```

## Practical Examples

### Download and Extract
```bash
# Download and extract tar.gz
curl -L https://example.com/file.tar.gz | tar -xz

# Download and pipe to command
curl -s https://api.example.com/data | jq '.results[]'
```

### API Testing Script
```bash
#!/bin/bash
API_BASE="https://api.example.com"
TOKEN="your-token-here"

# Test authentication
echo "Testing authentication..."
curl -s -H "Authorization: Bearer $TOKEN" "$API_BASE/auth/test"

# Test GET endpoint
echo "Testing GET endpoint..."
curl -s -H "Authorization: Bearer $TOKEN" "$API_BASE/users" | jq '.'

# Test POST endpoint
echo "Testing POST endpoint..."
curl -s -X POST \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com"}' \
  "$API_BASE/users" | jq '.'
```

### Web Scraping
```bash
# Download webpage
curl -s https://example.com | grep -o '<title>.*</title>'

# Download images from webpage
curl -s https://example.com | grep -o 'src="[^"]*\.jpg"' | cut -d'"' -f2 | xargs -I {} curl -O {}

# Check HTTP status codes
curl -s -o /dev/null -w "%{http_code} %{url_effective}\n" https://example.com
```

## Error Handling

### Common HTTP Status Codes
```bash
# Check for specific status codes
curl -s -o /dev/null -w "%{http_code}" https://api.example.com
# 200 - OK
# 401 - Unauthorized
# 404 - Not Found
# 500 - Server Error
```

### Error Handling in Scripts
```bash
#!/bin/bash
response=$(curl -s -w "%{http_code}" https://api.example.com)
status_code="${response: -3}"
body="${response%???}"

if [ "$status_code" -eq 200 ]; then
    echo "Success: $body"
else
    echo "Error: HTTP $status_code"
    echo "Response: $body"
fi
```

## Configuration

### Config File (~/.curlrc)
```bash
# Default options
user-agent = "MyApp/1.0"
connect-timeout = 10
max-time = 30
retry = 3
silent
show-error
```

### Environment Variables
```bash
# Set proxy
export HTTP_PROXY=http://proxy.example.com:8080
export HTTPS_PROXY=http://proxy.example.com:8080

# Set CA certificate path
export CURL_CA_BUNDLE=/path/to/ca-bundle.crt
```

## Quick Reference

### Common Options
```bash
-X, --request       # HTTP method
-H, --header        # Add header
-d, --data          # POST data
-F, --form          # Form data
-o, --output        # Output file
-O, --remote-name   # Use remote filename
-u, --user          # Authentication
-v, --verbose       # Verbose output
-s, --silent        # Silent mode
-I, --head          # Headers only
-L, --location      # Follow redirects
-k, --insecure      # Skip SSL verification
```

### Format Strings
```bash
%{http_code}        # HTTP status code
%{time_total}       # Total time
%{time_connect}     # Connection time
%{size_download}    # Download size
%{speed_download}   # Download speed
%{url_effective}    # Final URL
```

## Tips and Tricks

### Performance Testing
```bash
# Measure response time
curl -w "@curl-format.txt" -o /dev/null -s https://api.example.com

# curl-format.txt content:
#     time_namelookup:  %{time_namelookup}\n
#        time_connect:  %{time_connect}\n
#     time_appconnect:  %{time_appconnect}\n
#    time_pretransfer:  %{time_pretransfer}\n
#       time_redirect:  %{time_redirect}\n
#  time_starttransfer:  %{time_starttransfer}\n
#                     ----------\n
#          time_total:  %{time_total}\n
```

### Debugging
```bash
# Debug with verbose output
curl -v https://api.example.com

# Debug with trace
curl --trace-ascii debug.txt https://api.example.com

# Debug SSL
curl -v --trace-ascii ssl-debug.txt https://api.example.com
```

## See Also

- `man curl` - Complete manual
- `curl --help` - Quick help
- [curl documentation](https://curl.se/docs/) - Official docs
- `wget` - Alternative download tool
- `httpie` - Modern HTTP client
- `jq` - JSON processor for formatting responses