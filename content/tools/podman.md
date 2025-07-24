---
title: "Podman"
date: 2024-01-01T00:00:00Z
draft: false
description: "Podman container management tool - rootless, daemonless alternative to Docker with OCI compliance."
categories: ["tools"]
tags: ["podman", "containers", "docker", "oci", "rootless", "kubernetes"]
---

## Overview

Podman is a daemonless, rootless container engine for developing, managing, and running OCI containers. It's designed as a drop-in replacement for Docker with enhanced security features and Kubernetes compatibility.

## Installation

### Linux
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install podman

# CentOS/RHEL/Fedora
sudo dnf install podman

# Arch Linux
sudo pacman -S podman

# From source
git clone https://github.com/containers/podman.git
cd podman
make
sudo make install
```

### macOS
```bash
# Using Homebrew
brew install podman

# Initialize and start machine
podman machine init
podman machine start

# Verify installation
podman version
```

### Windows
```bash
# Using Chocolatey
choco install podman

# Using Scoop
scoop install podman

# Initialize machine
podman machine init
podman machine start
```

## Basic Commands

### Container Management
```bash
# Run container
podman run hello-world
podman run -it ubuntu:latest /bin/bash

# List containers
podman ps                    # Running containers
podman ps -a                 # All containers

# Start/stop containers
podman start container_name
podman stop container_name
podman restart container_name

# Remove containers
podman rm container_name
podman rm -f container_name  # Force remove
```

### Image Management
```bash
# Pull images
podman pull ubuntu:latest
podman pull docker.io/nginx:alpine

# List images
podman images
podman image ls

# Remove images
podman rmi image_name
podman rmi -f image_name     # Force remove

# Build images
podman build -t my-app .
podman build -f Dockerfile.prod -t my-app:prod .
```

### Registry Operations
```bash
# Login to registry
podman login registry.example.com
podman login docker.io

# Push images
podman push my-app:latest registry.example.com/my-app:latest

# Search images
podman search nginx
podman search --limit 10 python
```

## Advanced Container Operations

### Running Containers
```bash
# Run with port mapping
podman run -p 8080:80 nginx

# Run with volume mounting
podman run -v /host/path:/container/path nginx

# Run with environment variables
podman run -e ENV_VAR=value nginx

# Run in detached mode
podman run -d --name web-server nginx

# Run with resource limits
podman run --memory=1g --cpus=0.5 nginx
```

### Container Networking
```bash
# Create network
podman network create mynetwork

# List networks
podman network ls

# Run container on specific network
podman run --network mynetwork nginx

# Connect container to network
podman network connect mynetwork container_name

# Disconnect from network
podman network disconnect mynetwork container_name
```

### Volume Management
```bash
# Create volume
podman volume create myvolume

# List volumes
podman volume ls

# Inspect volume
podman volume inspect myvolume

# Use volume with container
podman run -v myvolume:/data nginx

# Remove volume
podman volume rm myvolume
```

## Pods

### Pod Management
```bash
# Create pod
podman pod create --name mypod

# Create pod with port mapping
podman pod create --name mypod -p 8080:80

# List pods
podman pod ls

# Add container to pod
podman run -dt --pod mypod nginx
podman run -dt --pod mypod redis

# Start/stop pod
podman pod start mypod
podman pod stop mypod

# Remove pod
podman pod rm mypod
podman pod rm -f mypod       # Force remove
```

### Pod Networking
```bash
# Create pod with custom network
podman pod create --name mypod --network mynetwork

# Pod with multiple ports
podman pod create --name mypod -p 8080:80 -p 3000:3000

# Pod with shared volumes
podman pod create --name mypod -v /host/data:/shared
```

## Kubernetes Integration

### Generate Kubernetes YAML
```bash
# Generate pod YAML
podman generate kube mypod > mypod.yaml

# Generate deployment YAML
podman generate kube --type deployment mypod > deployment.yaml

# Generate service YAML
podman generate kube --service mypod > service.yaml
```

### Play Kubernetes YAML
```bash
# Deploy from YAML
podman play kube deployment.yaml

# Deploy with custom name
podman play kube --name custom-name deployment.yaml

# Remove deployment
podman play kube --down deployment.yaml
```

## Rootless Containers

### Rootless Setup
```bash
# Install rootless dependencies
sudo apt install slirp4netns fuse-overlayfs

# Configure user namespaces
echo 'user.max_user_namespaces=28633' | sudo tee -a /etc/sysctl.d/userns.conf

# Set up subuid/subgid
sudo usermod --add-subuids 100000-165535 --add-subgids 100000-165535 $USER

# Enable lingering
sudo loginctl enable-linger $USER
```

### Rootless Operations
```bash
# Run rootless container
podman run --rm -it ubuntu:latest

# Check rootless status
podman info | grep -i root

# Run with different user
podman run --user 1000:1000 nginx

# Map user namespace
podman run --userns=keep-id nginx
```

## Security Features

### Security Options
```bash
# Run with SELinux labels
podman run --security-opt label=level:s0:c123,c456 nginx

# Run with seccomp profile
podman run --security-opt seccomp=unconfined nginx

# Run with AppArmor profile
podman run --security-opt apparmor=docker-default nginx

# Run with no-new-privileges
podman run --security-opt no-new-privileges nginx
```

### Capabilities
```bash
# Drop capabilities
podman run --cap-drop ALL --cap-add NET_BIND_SERVICE nginx

# Add capabilities
podman run --cap-add SYS_ADMIN nginx

# Run privileged
podman run --privileged nginx
```

## Build Images

### Dockerfile
```dockerfile
FROM ubuntu:latest

RUN apt-get update && apt-get install -y nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY . /var/www/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### Build Commands
```bash
# Build image
podman build -t myapp .

# Build with build args
podman build --build-arg VERSION=1.0 -t myapp .

# Build with different file
podman build -f Dockerfile.prod -t myapp:prod .

# Build with context
podman build -t myapp /path/to/context

# Multi-stage build
podman build --target production -t myapp:prod .
```

## Container Inspection

### Inspect Commands
```bash
# Inspect container
podman inspect container_name

# Inspect image
podman inspect image_name

# Get specific info
podman inspect --format='{{.NetworkSettings.IPAddress}}' container_name

# View logs
podman logs container_name
podman logs -f container_name    # Follow logs
podman logs --since=1h container_name

# View processes
podman top container_name
```

### Statistics
```bash
# Container stats
podman stats container_name

# All container stats
podman stats

# System info
podman info
podman system info

# System events
podman events
```

## Docker Compatibility

### Docker Command Mapping
```bash
# Docker to Podman aliases
alias docker=podman

# Or set up podman-docker package
sudo apt install podman-docker

# Docker-compose equivalent
podman-compose up
podman-compose down
```

### Docker Socket
```bash
# Enable podman socket
systemctl --user enable podman.socket
systemctl --user start podman.socket

# Use with docker clients
export DOCKER_HOST=unix:///run/user/$UID/podman/podman.sock
```

## Systemd Integration

### User Services
```bash
# Generate systemd unit
podman generate systemd --new --name mycontainer > ~/.config/systemd/user/mycontainer.service

# Enable and start service
systemctl --user enable mycontainer.service
systemctl --user start mycontainer.service

# Check status
systemctl --user status mycontainer.service
```

### System Services
```bash
# Generate system service
sudo podman generate systemd --new --name mycontainer > /etc/systemd/system/mycontainer.service

# Enable and start
sudo systemctl enable mycontainer.service
sudo systemctl start mycontainer.service
```

## Compose Alternative

### Podman Compose
```bash
# Install podman-compose
pip install podman-compose

# Or use docker-compose with podman
sudo ln -s /usr/bin/podman /usr/bin/docker
```

### Docker Compose File
```yaml
version: '3'
services:
  web:
    image: nginx:alpine
    ports:
      - "8080:80"
    volumes:
      - ./html:/usr/share/nginx/html
  
  db:
    image: postgres:13
    environment:
      POSTGRES_DB: mydb
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - db_data:/var/lib/postgresql/data

volumes:
  db_data:
```

### Compose Commands
```bash
# Start services
podman-compose up
podman-compose up -d

# Stop services
podman-compose down

# Build services
podman-compose build

# View logs
podman-compose logs
```

## Registry Configuration

### Registry Setup
```bash
# Configure registries
sudo vim /etc/containers/registries.conf

# Add registry
[registries.search]
registries = ['docker.io', 'registry.fedoraproject.org']

[registries.insecure]
registries = ['localhost:5000']
```

### Private Registry
```bash
# Login to private registry
podman login registry.example.com

# Push to private registry
podman tag myapp:latest registry.example.com/myapp:latest
podman push registry.example.com/myapp:latest

# Pull from private registry
podman pull registry.example.com/myapp:latest
```

## Troubleshooting

### Common Issues
```bash
# Check system
podman info

# Check version
podman version

# Reset system
podman system reset

# Clean up
podman system prune
podman system prune -a
```

### Storage Issues
```bash
# Check storage
podman system df

# Clean up storage
podman image prune
podman container prune
podman volume prune
```

### Network Issues
```bash
# Reset network
podman network prune

# Check network config
podman network inspect bridge

# Restart networking
podman machine restart
```

## Performance Optimization

### Container Optimization
```bash
# Use specific tags
podman pull nginx:alpine

# Multi-stage builds
FROM node:alpine AS builder
# Build stage
FROM nginx:alpine
# Runtime stage

# Resource limits
podman run --memory=512m --cpus=0.5 nginx
```

### Storage Optimization
```bash
# Use overlay storage
podman info | grep -i storage

# Configure storage
sudo vim /etc/containers/storage.conf

# Clean up regularly
podman system prune -a
```

## Monitoring

### Container Monitoring
```bash
# Live stats
podman stats

# Health checks
podman healthcheck run container_name

# System events
podman events --since=1h
```

### Logging
```bash
# Container logs
podman logs container_name

# System logs
journalctl --user -u podman.service

# Log drivers
podman run --log-driver=journald nginx
```

## Security Best Practices

### Container Security
```bash
# Run as non-root
podman run --user 1000:1000 nginx

# Read-only root filesystem
podman run --read-only nginx

# Drop capabilities
podman run --cap-drop ALL --cap-add NET_BIND_SERVICE nginx

# Use trusted images
podman pull registry.redhat.io/rhel8/nginx
```

### Host Security
```bash
# Regular updates
sudo apt update && sudo apt upgrade

# SELinux enforcement
sudo setsebool -P container_manage_cgroup on

# Firewall rules
sudo ufw allow 8080/tcp
```

## Quick Reference

### Essential Commands
```bash
podman run                # Run container
podman ps                 # List containers
podman images             # List images
podman pull               # Pull image
podman build              # Build image
podman stop               # Stop container
podman rm                 # Remove container
podman rmi                # Remove image
```

### Pod Commands
```bash
podman pod create         # Create pod
podman pod ls             # List pods
podman pod start          # Start pod
podman pod stop           # Stop pod
podman pod rm             # Remove pod
```

### System Commands
```bash
podman info               # System info
podman version            # Version info
podman system prune       # Clean up
podman system df          # Storage usage
podman events             # System events
```

### Network Commands
```bash
podman network create    # Create network
podman network ls         # List networks
podman network inspect   # Inspect network
podman network connect   # Connect container
podman network disconnect # Disconnect container
```

## See Also

- [Podman Documentation](https://docs.podman.io/) - Official documentation
- [Podman GitHub](https://github.com/containers/podman) - Source code
- [Podman Tutorials](https://github.com/containers/podman/tree/main/docs/tutorials) - Official tutorials
- [Buildah](https://buildah.io/) - Container image builder
- [Skopeo](https://github.com/containers/skopeo) - Container image operations
- `man podman` - Manual pages