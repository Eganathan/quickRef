---
title: "Nginx"
date: 2023-01-01T00:00:00Z
draft: false
description: "High-performance web server, reverse proxy, and load balancer for modern web applications."
categories: ["tools"]
tags: ["nginx", "web-server", "reverse-proxy", "load-balancer", "http", "https", "ssl", "proxy"]
---

## Overview

Nginx (pronounced "Engine X") is a high-performance HTTP and reverse proxy server, mail proxy server, and generic TCP/UDP proxy server created by Igor Sysoev in 2004. Originally developed to solve the C10K problem (handling 10,000 concurrent connections), Nginx has become one of the most popular web servers in the world.

### Why Use Nginx?

- **High Performance**: Event-driven architecture handles thousands of concurrent connections with minimal memory usage
- **Low Resource Usage**: Significantly less memory consumption compared to Apache
- **Reverse Proxy Excellence**: Outstanding performance as a reverse proxy and load balancer
- **Static Content**: Extremely efficient at serving static files (HTML, CSS, JS, images)
- **Scalability**: Handles high traffic loads with ease
- **Flexibility**: Can function as web server, reverse proxy, load balancer, HTTP cache, and mail proxy
- **Security**: Regular security updates and robust security features
- **Configuration**: Simple, readable configuration syntax

### Key Features

- **Event-driven architecture**: Asynchronous, non-blocking I/O
- **Master/Worker process model**: Efficient resource management
- **Hot configuration reload**: Zero-downtime configuration updates
- **SSL/TLS termination**: Built-in SSL/TLS support with modern protocols
- **HTTP/2 and HTTP/3 support**: Latest HTTP protocol implementations
- **Compression**: Built-in gzip and Brotli compression
- **Caching**: Advanced caching capabilities for improved performance
- **Rate limiting**: Built-in protection against abuse and DDoS attacks

Nginx powers some of the world's largest websites including Netflix, Cloudflare, and WordPress.com, making it an excellent choice for serving static content, load balancing, and reverse proxying.

## Installation

### Ubuntu/Debian
```bash
# Update package index
sudo apt update

# Install Nginx
sudo apt install nginx

# Start and enable Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Check status
sudo systemctl status nginx
```

### CentOS/RHEL
```bash
# Install EPEL repository (if not already installed)
sudo yum install epel-release

# Install Nginx
sudo yum install nginx

# Start and enable Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Open firewall
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
```

### macOS
```bash
# Using Homebrew
brew install nginx

# Start Nginx
brew services start nginx

# Or start manually
nginx
```

### Docker
```bash
# Run Nginx container
docker run -d --name nginx -p 80:80 nginx

# With custom config
docker run -d --name nginx -p 80:80 -v /path/to/config:/etc/nginx/conf.d nginx
```

## Quick Setup Guide

### Basic Configuration Structure
```bash
# Main configuration file
/etc/nginx/nginx.conf

# Site configurations
/etc/nginx/sites-available/    # Available sites
/etc/nginx/sites-enabled/      # Enabled sites (symlinks)

# Custom configurations
/etc/nginx/conf.d/            # Drop-in configs

# Document root
/var/www/html/                # Default web root

# Logs
/var/log/nginx/access.log     # Access logs
/var/log/nginx/error.log      # Error logs
```

### Basic Site Configuration
```nginx
# /etc/nginx/sites-available/example.com
server {
    listen 80;
    server_name example.com www.example.com;
    
    root /var/www/example.com;
    index index.html index.htm index.php;
    
    location / {
        try_files $uri $uri/ =404;
    }
    
    # PHP processing (if needed)
    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
}
```

### Enable Site
```bash
# Create symlink to enable site
sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

## Reverse Proxy Configuration

### Basic Reverse Proxy
```nginx
server {
    listen 80;
    server_name app.example.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Multiple Backend Servers
```nginx
# Define upstream servers
upstream backend {
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
    server 127.0.0.1:3002;
}

server {
    listen 80;
    server_name api.example.com;
    
    location / {
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Load Balancing Methods
```nginx
# Round-robin (default)
upstream backend {
    server backend1.example.com;
    server backend2.example.com;
}

# Least connections
upstream backend {
    least_conn;
    server backend1.example.com;
    server backend2.example.com;
}

# IP hash (session persistence)
upstream backend {
    ip_hash;
    server backend1.example.com;
    server backend2.example.com;
}

# Weighted round-robin
upstream backend {
    server backend1.example.com weight=3;
    server backend2.example.com weight=1;
}
```

## SSL/TLS Configuration

### SSL with Let's Encrypt
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d example.com -d www.example.com

# Auto-renewal (add to crontab)
0 12 * * * /usr/bin/certbot renew --quiet
```

### Manual SSL Configuration
```nginx
server {
    listen 443 ssl http2;
    server_name example.com;
    
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    
    # Modern SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
    # HSTS
    add_header Strict-Transport-Security "max-age=31536000" always;
    
    root /var/www/example.com;
    index index.html;
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name example.com www.example.com;
    return 301 https://$server_name$request_uri;
}
```

## Nginx Proxy Manager

Nginx Proxy Manager is a Docker-based web interface for managing Nginx proxy configurations with SSL support.

### Installation with Docker
```bash
# Create directory structure
mkdir nginx-proxy-manager
cd nginx-proxy-manager

# Create docker-compose.yml
cat > docker-compose.yml << 'EOF'
version: '3.8'
services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    restart: unless-stopped
    ports:
      - '80:80'
      - '81:81'
      - '443:443'
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
    depends_on:
      - db
      
  db:
    image: 'mariadb:latest'
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: 'npm'
      MYSQL_DATABASE: 'npm'
      MYSQL_USER: 'npm'
      MYSQL_PASSWORD: 'npm'
    volumes:
      - ./data/mysql:/var/lib/mysql
EOF

# Start services
docker-compose up -d
```

### Access and Configuration
```bash
# Access web interface at: http://your-server-ip:81
# Default credentials:
# Email: admin@example.com
# Password: changeme

# After first login, change credentials immediately
```

### Proxy Manager Features
- **Web Interface**: Easy-to-use GUI for managing proxies
- **SSL Certificates**: Automatic Let's Encrypt certificate generation
- **Access Lists**: Built-in authentication and access control
- **Custom Headers**: Add custom headers to requests
- **Custom Nginx Configs**: Advanced configuration options
- **Stream Support**: TCP/UDP proxy support

## Common Nginx Configurations

### Static File Serving
```nginx
server {
    listen 80;
    server_name static.example.com;
    
    root /var/www/static;
    
    # Efficient file serving
    location / {
        expires 1y;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
}
```

### API Gateway
```nginx
# Rate limiting
limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;

server {
    listen 80;
    server_name api.example.com;
    
    # API v1
    location /api/v1/ {
        limit_req zone=api burst=20 nodelay;
        proxy_pass http://api-v1-backend/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
    
    # API v2
    location /api/v2/ {
        limit_req zone=api burst=20 nodelay;
        proxy_pass http://api-v2-backend/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### WebSocket Proxy
```nginx
server {
    listen 80;
    server_name ws.example.com;
    
    location / {
        proxy_pass http://websocket-backend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # WebSocket specific timeouts
        proxy_read_timeout 86400;
        proxy_send_timeout 86400;
    }
}
```

### Security Configuration
```nginx
# Security headers
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

# Hide Nginx version
server_tokens off;

# Request size limits
client_max_body_size 10M;

# Rate limiting
limit_req_zone $binary_remote_addr zone=login:10m rate=1r/s;
limit_req_zone $binary_remote_addr zone=general:10m rate=10r/s;

# Block common attacks
location ~* \.(env|git|svn)$ {
    deny all;
    return 404;
}
```

## Essential Commands

### Service Management
```bash
# Start Nginx
sudo systemctl start nginx

# Stop Nginx
sudo systemctl stop nginx

# Restart Nginx
sudo systemctl restart nginx

# Reload configuration (no downtime)
sudo systemctl reload nginx

# Enable auto-start
sudo systemctl enable nginx

# Check status
sudo systemctl status nginx
```

### Configuration Management
```bash
# Test configuration syntax
sudo nginx -t

# Test and reload if valid
sudo nginx -t && sudo systemctl reload nginx

# Show configuration file paths
nginx -V

# Check current processes
ps aux | grep nginx
```

### Log Management
```bash
# View access logs
sudo tail -f /var/log/nginx/access.log

# View error logs
sudo tail -f /var/log/nginx/error.log

# Rotate logs manually
sudo nginx -s reopen

# Archive and compress old logs
sudo logrotate /etc/logrotate.d/nginx
```

## Performance Optimization

### Worker Configuration
```nginx
# nginx.conf
worker_processes auto;
worker_connections 1024;
worker_rlimit_nofile 2048;

events {
    use epoll;
    multi_accept on;
}
```

### Caching Configuration
```nginx
# Proxy caching
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=10g inactive=60m use_temp_path=off;

server {
    location / {
        proxy_cache my_cache;
        proxy_cache_revalidate on;
        proxy_cache_min_uses 3;
        proxy_cache_use_stale error timeout updating http_500 http_502 http_503 http_504;
        proxy_cache_background_update on;
        proxy_cache_lock on;
        
        proxy_pass http://backend;
    }
}
```

### Compression
```nginx
# Enable gzip compression
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_comp_level 6;
gzip_types
    text/plain
    text/css
    text/xml
    text/javascript
    application/json
    application/javascript
    application/xml+rss
    application/atom+xml
    image/svg+xml;
```

## Troubleshooting

### Common Issues
```bash
# Check configuration syntax
sudo nginx -t

# Check error logs
sudo tail -f /var/log/nginx/error.log

# Check port usage
sudo netstat -tlnp | grep :80

# Check Nginx processes
ps aux | grep nginx

# Verify file permissions
ls -la /var/www/html/

# Test connectivity
curl -I http://localhost
```

### Permission Issues
```bash
# Fix ownership of web directory
sudo chown -R www-data:www-data /var/www/

# Set proper permissions
sudo chmod -R 755 /var/www/

# Check SELinux (CentOS/RHEL)
sudo setsebool -P httpd_can_network_connect 1
```

### SSL/TLS Issues
```bash
# Test SSL certificate
openssl s_client -connect example.com:443 -servername example.com

# Check certificate expiration
openssl x509 -in /path/to/cert.pem -text -noout | grep "Not After"

# Verify certificate chain
curl -vI https://example.com
```

## Quick Reference

### Essential Directives
```nginx
# Basic server block
server {
    listen 80;
    server_name example.com;
    root /var/www/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
}
```

### Common Commands
```bash
# Configuration test and reload
sudo nginx -t && sudo systemctl reload nginx

# View real-time logs
sudo tail -f /var/log/nginx/{access,error}.log

# Quick status check
curl -I http://localhost
```

### File Locations
```bash
/etc/nginx/nginx.conf              # Main config
/etc/nginx/sites-available/        # Available sites
/etc/nginx/sites-enabled/          # Enabled sites
/var/log/nginx/                    # Log files
/var/www/html/                     # Default document root
```

## See Also

- `man nginx` - Nginx manual
- [Nginx Documentation](https://nginx.org/en/docs/) - Official documentation
- [Nginx Proxy Manager](https://nginxproxymanager.com/) - Web-based proxy management
- [Let's Encrypt](https://letsencrypt.org/) - Free SSL certificates
- [SSL Test](https://www.ssllabs.com/ssltest/) - Test SSL configuration