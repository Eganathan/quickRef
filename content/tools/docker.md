---
title: "Docker"
date: 2023-01-01T00:00:00Z
draft: false
description: "Platform for developing, shipping, and running applications using containerization technology."
categories: ["tools"]
tags: ["docker", "containers", "containerization", "devops", "deployment", "virtualization"]
---

## Overview

Docker is a platform that enables developers to package applications and their dependencies into lightweight, portable containers. It provides consistent environments across development, testing, and production, making application deployment more reliable and scalable.

## Installation

```bash
# Ubuntu/Debian
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# macOS
brew install --cask docker
# or download Docker Desktop from https://docker.com

# CentOS/RHEL
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install docker-ce docker-ce-cli containerd.io

# Start Docker service
sudo systemctl start docker
sudo systemctl enable docker
```

## Container Basics

### Running Containers
```bash
# Run container from image
docker run hello-world

# Run interactive container
docker run -it ubuntu bash

# Run container in background (detached)
docker run -d nginx

# Run with port mapping
docker run -p 8080:80 nginx

# Run with volume mount
docker run -v /host/path:/container/path nginx

# Run with environment variables
docker run -e ENV_VAR=value nginx

# Run with custom name
docker run --name my-container nginx
```

### Container Management
```bash
# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# Stop container
docker stop container-name

# Start stopped container
docker start container-name

# Restart container
docker restart container-name

# Remove container
docker rm container-name

# Remove running container (force)
docker rm -f container-name

# Remove all stopped containers
docker container prune
```

### Container Interaction
```bash
# Execute command in running container
docker exec -it container-name bash

# Execute single command
docker exec container-name ls -la

# View container logs
docker logs container-name

# Follow logs in real-time
docker logs -f container-name

# Copy files to/from container
docker cp file.txt container-name:/path/
docker cp container-name:/path/file.txt .

# Inspect container details
docker inspect container-name
```

## Image Management

### Working with Images
```bash
# List local images
docker images

# Pull image from registry
docker pull ubuntu:20.04

# Pull specific tag
docker pull nginx:alpine

# Search for images
docker search ubuntu

# Remove image
docker rmi image-name

# Remove unused images
docker image prune

# Remove all unused images
docker image prune -a

# Show image history
docker history image-name
```

### Building Images
```bash
# Build image from Dockerfile
docker build -t my-app .

# Build with custom Dockerfile
docker build -f custom.Dockerfile -t my-app .

# Build with build arguments
docker build --build-arg VERSION=1.0 -t my-app .

# Build without cache
docker build --no-cache -t my-app .

# Tag image
docker tag my-app:latest my-app:v1.0

# Push image to registry
docker push my-app:v1.0
```

## Dockerfile

### Basic Dockerfile Structure
```dockerfile
# Base image
FROM ubuntu:20.04

# Maintainer info
LABEL maintainer="your-email@example.com"

# Set working directory
WORKDIR /app

# Install dependencies
RUN apt-get update && apt-get install -y \
    curl \
    vim \
    && rm -rf /var/lib/apt/lists/*

# Copy files
COPY . .

# Set environment variables
ENV NODE_ENV=production

# Expose port
EXPOSE 3000

# Default command
CMD ["npm", "start"]
```

### Dockerfile Instructions
```dockerfile
# FROM - Base image
FROM node:16-alpine

# RUN - Execute commands during build
RUN npm install -g yarn

# COPY - Copy files from host to image
COPY package.json .

# ADD - Copy files (with additional features)
ADD https://example.com/file.tar.gz /tmp/

# WORKDIR - Set working directory
WORKDIR /usr/src/app

# ENV - Set environment variables
ENV PORT=3000

# ARG - Build-time variables
ARG VERSION=1.0.0

# EXPOSE - Document port usage
EXPOSE 3000

# USER - Set user for subsequent commands
USER node

# VOLUME - Create mount point
VOLUME ["/data"]

# CMD - Default command (can be overridden)
CMD ["node", "server.js"]

# ENTRYPOINT - Fixed command (cannot be overridden)
ENTRYPOINT ["docker-entrypoint.sh"]
```

### Multi-stage Builds
```dockerfile
# Build stage
FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Production stage
FROM node:16-alpine AS production
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
CMD ["npm", "start"]
```

## Docker Compose

### Basic docker-compose.yml
```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db
    volumes:
      - .:/app
      - /app/node_modules

  db:
    image: postgres:13
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### Compose Commands
```bash
# Start services
docker-compose up

# Start in detached mode
docker-compose up -d

# Build and start
docker-compose up --build

# Stop services
docker-compose down

# Stop and remove volumes
docker-compose down -v

# View running services
docker-compose ps

# View logs
docker-compose logs

# Follow logs for specific service
docker-compose logs -f web

# Execute command in service
docker-compose exec web bash

# Scale service
docker-compose up --scale web=3
```

## Networking

### Network Management
```bash
# List networks
docker network ls

# Create network
docker network create my-network

# Create custom network with subnet
docker network create --subnet=192.168.0.0/24 my-network

# Connect container to network
docker network connect my-network container-name

# Disconnect container from network
docker network disconnect my-network container-name

# Remove network
docker network rm my-network

# Inspect network
docker network inspect my-network
```

### Network Types
```bash
# Bridge network (default)
docker run --network bridge nginx

# Host network
docker run --network host nginx

# None network
docker run --network none nginx

# Custom network
docker run --network my-network nginx
```

## Storage

### Volumes
```bash
# Create volume
docker volume create my-volume

# List volumes
docker volume ls

# Inspect volume
docker volume inspect my-volume

# Remove volume
docker volume rm my-volume

# Remove unused volumes
docker volume prune

# Use volume in container
docker run -v my-volume:/data nginx
```

### Bind Mounts
```bash
# Bind mount host directory
docker run -v /host/path:/container/path nginx

# Bind mount with read-only
docker run -v /host/path:/container/path:ro nginx

# Bind mount current directory
docker run -v $(pwd):/app nginx
```

### tmpfs Mounts
```bash
# Mount tmpfs
docker run --tmpfs /tmp nginx

# Mount with size limit
docker run --tmpfs /tmp:size=100m nginx
```

## Registry Operations

### Docker Hub
```bash
# Login to Docker Hub
docker login

# Push image
docker push username/image:tag

# Pull private image
docker pull username/private-image:tag

# Logout
docker logout
```

### Private Registry
```bash
# Tag for private registry
docker tag my-app:latest registry.company.com/my-app:latest

# Push to private registry
docker push registry.company.com/my-app:latest

# Pull from private registry
docker pull registry.company.com/my-app:latest
```

## System Management

### System Information
```bash
# Show Docker version
docker version

# Show system information
docker info

# Show disk usage
docker system df

# Show detailed usage
docker system df -v

# Monitor resource usage
docker stats

# Monitor specific containers
docker stats container1 container2
```

### Cleanup Commands
```bash
# Remove all stopped containers
docker container prune

# Remove all unused images
docker image prune

# Remove all unused networks
docker network prune

# Remove all unused volumes
docker volume prune

# Remove everything unused
docker system prune

# Remove everything including unused images
docker system prune -a

# Remove with force (no confirmation)
docker system prune -f
```

## Advanced Features

### Health Checks
```dockerfile
# In Dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/ || exit 1
```

```bash
# Run with health check
docker run --health-cmd="curl -f http://localhost/" \
           --health-interval=30s \
           --health-timeout=3s \
           --health-retries=3 \
           nginx
```

### Resource Limits
```bash
# Memory limit
docker run -m 512m nginx

# CPU limit
docker run --cpus=1.5 nginx

# CPU and memory limits
docker run -m 1g --cpus=2 nginx

# Swap limit
docker run -m 1g --memory-swap=2g nginx
```

### Security
```bash
# Run as specific user
docker run --user 1001:1001 nginx

# Read-only file system
docker run --read-only nginx

# Drop capabilities
docker run --cap-drop=ALL --cap-add=NET_BIND_SERVICE nginx

# No new privileges
docker run --security-opt=no-new-privileges nginx

# SELinux labels
docker run --security-opt label=level:s0:c123,c456 nginx
```

## Troubleshooting

### Common Issues
```bash
# Check container logs
docker logs container-name

# Check container processes
docker exec container-name ps aux

# Check container network
docker exec container-name netstat -tlnp

# Check container resources
docker stats container-name

# Enter container for debugging
docker exec -it container-name bash

# Check Docker daemon logs
sudo journalctl -u docker

# Restart Docker service
sudo systemctl restart docker
```

### Performance Issues
```bash
# Check system resources
docker system df
docker system events

# Monitor container performance
docker stats --all

# Check container processes
docker exec container-name top

# Check container network connections
docker exec container-name ss -tulpn
```

### Permission Issues
```bash
# Add user to docker group
sudo usermod -aG docker $USER

# Change Docker socket permissions
sudo chmod 666 /var/run/docker.sock

# Run with sudo (temporary fix)
sudo docker command
```

## Development Workflows

### Development Environment
```yaml
# docker-compose.dev.yml
version: '3.8'
services:
  app:
    build:
      context: .
      target: development
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
    ports:
      - "3000:3000"
    command: npm run dev
```

### Production Deployment
```yaml
# docker-compose.prod.yml
version: '3.8'
services:
  app:
    image: myapp:latest
    restart: unless-stopped
    environment:
      - NODE_ENV=production
    ports:
      - "80:3000"
    depends_on:
      - db
  
  db:
    image: postgres:13
    restart: unless-stopped
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

## Best Practices

### Image Optimization
```dockerfile
# Use specific tags, not 'latest'
FROM node:16.14.2-alpine

# Use multi-stage builds
FROM node:16-alpine AS build
# ... build steps
FROM node:16-alpine AS production
COPY --from=build /app/dist ./dist

# Minimize layers
RUN apt-get update && apt-get install -y \
    package1 \
    package2 \
    && rm -rf /var/lib/apt/lists/*

# Use .dockerignore
# Create .dockerignore file with:
# node_modules
# .git
# *.md
```

### Security Best Practices
```dockerfile
# Don't run as root
USER node

# Use specific image versions
FROM ubuntu:20.04

# Scan for vulnerabilities
# docker scan image-name

# Use secrets for sensitive data
# docker secret create my_secret secret.txt
# docker service create --secret my_secret nginx
```

### Performance Tips
```bash
# Use BuildKit for faster builds
export DOCKER_BUILDKIT=1
docker build .

# Use layer caching
docker build --cache-from=myapp:latest .

# Use multi-stage builds for smaller images
# Keep frequently changing parts at the end
```

## Quick Reference

### Essential Commands
```bash
# Container lifecycle
docker run -d --name app nginx
docker stop app
docker start app
docker rm app

# Image management
docker build -t myapp .
docker pull nginx
docker push myapp
docker rmi nginx

# System maintenance
docker ps -a
docker images
docker system prune
docker stats

# Compose operations
docker-compose up -d
docker-compose logs -f
docker-compose down -v
```

### Common Patterns
```bash
# Development setup
docker run -it --rm -v $(pwd):/app -w /app node:16 npm install

# Database with persistence
docker run -d --name db -v db_data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=secret mysql

# Temporary container
docker run --rm -it alpine sh

# Port forwarding
docker run -p 8080:80 -d nginx
```

## See Also

- `man docker` - Docker manual
- [Docker Documentation](https://docs.docker.com/) - Official documentation
- [Docker Hub](https://hub.docker.com/) - Container registry
- [Dockerfile Best Practices](https://docs.docker.com/develop/dev-best-practices/) - Official best practices
- [Docker Compose](https://docs.docker.com/compose/) - Multi-container applications
- [Docker Security](https://docs.docker.com/engine/security/) - Security guidelines