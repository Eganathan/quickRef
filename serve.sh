#!/bin/bash
set -euo pipefail

# QuickRef Hugo Development Server
# This script starts the Hugo development server

echo "🚀 Starting QuickRef Development Server..."

# Check if Hugo is installed
if ! command -v hugo &> /dev/null; then
    echo "❌ Hugo is not installed. Please install Hugo first."
    echo "Visit: https://gohugo.io/getting-started/installing/"
    exit 1
fi

# Default port
PORT=${1:-1313}

echo "🌐 Starting server on port $PORT..."
echo "📝 Site will be available at: http://localhost:$PORT"
echo "🔄 Server will auto-reload when files change"
echo "⏹️  Press Ctrl+C to stop"

# Start Hugo server
hugo server --port=$PORT --bind=0.0.0.0 --buildDrafts --watch