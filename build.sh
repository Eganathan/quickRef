#!/bin/bash
set -euo pipefail

# QuickRef Hugo Build Script
# This script builds the Hugo site for deployment

echo "🚀 Building QuickRef Hugo Site..."

# Check if Hugo is installed
if ! command -v hugo &> /dev/null; then
    echo "❌ Hugo is not installed. Please install Hugo first."
    echo "Visit: https://gohugo.io/getting-started/installing/"
    exit 1
fi

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf public/

# Build the site
echo "🔨 Building site..."
hugo --minify

# Check if build was successful
if [ -d "public" ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Output directory: public/"
    echo "📊 Site statistics:"
    echo "   - Pages: $(find public -name "*.html" | wc -l)"
    echo "   - CSS files: $(find public -name "*.css" | wc -l)"
    echo "   - JS files: $(find public -name "*.js" | wc -l)"
    echo "   - Total files: $(find public -type f | wc -l)"
    echo "   - Total size: $(du -sh public | cut -f1)"
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🌐 Site is ready for deployment!"
echo "   Upload the 'public/' directory to your web server"