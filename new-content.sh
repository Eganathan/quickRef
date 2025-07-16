#!/bin/bash
set -euo pipefail

# QuickRef Content Creation Script
# This script creates new content using Hugo archetypes

usage() {
    echo "Usage: $0 <category> <name>"
    echo ""
    echo "Categories:"
    echo "  programming  - Programming languages and frameworks"
    echo "  tools       - Command line tools and utilities"
    echo "  web         - Web development technologies"
    echo "  linux       - Linux commands and utilities"
    echo "  database    - Database systems"
    echo "  devops      - DevOps tools and practices"
    echo ""
    echo "Examples:"
    echo "  $0 tools git"
    echo "  $0 programming python"
    echo "  $0 web html"
    exit 1
}

# Check arguments
if [ $# -ne 2 ]; then
    usage
fi

CATEGORY="$1"
NAME="$2"

# Check if Hugo is installed
if ! command -v hugo &> /dev/null; then
    echo "❌ Hugo is not installed. Please install Hugo first."
    echo "Visit: https://gohugo.io/getting-started/installing/"
    exit 1
fi

# Create content file
CONTENT_PATH="content/$CATEGORY/$NAME.md"

echo "📝 Creating new content: $CONTENT_PATH"

# Use specific archetype if available, otherwise use default
if [ -f "archetypes/$CATEGORY.md" ]; then
    hugo new "$CONTENT_PATH" --kind="$CATEGORY"
    echo "✅ Created using $CATEGORY archetype"
else
    hugo new "$CONTENT_PATH"
    echo "✅ Created using default archetype"
fi

echo "📁 Content file created: $CONTENT_PATH"
echo "🖊️  Edit the file to add your reference content"
echo "🔍 Use 'hugo server' to preview changes"

# Open in default editor if available
if command -v code &> /dev/null; then
    echo "🚀 Opening in VS Code..."
    code "$CONTENT_PATH"
elif command -v vim &> /dev/null; then
    echo "🚀 Opening in Vim..."
    vim "$CONTENT_PATH"
else
    echo "💡 Tip: Edit $CONTENT_PATH with your favorite editor"
fi