# QuickRef - Hugo Static Site Generator

A fast, modern reference website for developers built with Hugo. No server-side processing, no databases - just markdown files that generate a beautiful, searchable reference site.

## Features

- 🚀 **Fast**: Static site generation with Hugo
- 📱 **Responsive**: Bootstrap-based mobile-first design
- 🔍 **Searchable**: Built-in search functionality
- 📝 **Markdown**: Easy content creation with markdown
- 🎨 **Modern**: Clean, minimalist design
- 🔧 **Flexible**: Easy to customize and extend
- 📁 **Organized**: Category-based organization system

## Quick Start

### Prerequisites

Install Hugo (extended version recommended):
```bash
# macOS
brew install hugo

# Ubuntu/Debian
sudo apt install hugo

# Windows
choco install hugo-extended

# Or download from: https://github.com/gohugoio/hugo/releases
```

### Setup

1. **Clone/download the project**
2. **Start development server**:
   ```bash
   ./serve.sh
   # or
   hugo server
   ```
3. **Open browser** to `http://localhost:1313`

### Adding Content

#### Method 1: Using the helper script
```bash
# Create new tool reference
./new-content.sh tools git

# Create new programming language reference
./new-content.sh programming python

# Create new web technology reference
./new-content.sh web html
```

#### Method 2: Manual creation
```bash
# Create new content file
hugo new content/tools/docker.md

# Edit the file
vim content/tools/docker.md
```

### Building for Production

```bash
# Build site
./build.sh
# or
hugo --minify

# Deploy the public/ directory to your web server
```

## Directory Structure

```
quickRef/
├── hugo.toml                 # Hugo configuration
├── content/                  # Markdown content files
│   ├── tools/               # Tool references
│   │   ├── grep.md
│   │   └── git.md
│   ├── programming/         # Programming languages
│   │   ├── bash.md
│   │   └── python.md
│   └── web/                 # Web technologies
│       ├── html.md
│       └── css.md
├── themes/quickref/         # Custom Hugo theme
│   ├── layouts/             # HTML templates
│   │   ├── _default/
│   │   │   ├── baseof.html  # Base template
│   │   │   └── single.html  # Single page template
│   │   └── index.html       # Homepage template
│   └── static/              # Static assets
│       ├── css/styles.css   # Custom styles
│       └── js/app.js        # JavaScript
├── archetypes/              # Content templates
│   ├── default.md
│   ├── tools.md
│   └── programming.md
├── public/                  # Generated site (after build)
├── build.sh                 # Build script
├── serve.sh                 # Development server script
└── new-content.sh           # Content creation helper
```

## Content Creation

### Markdown Front Matter

Each content file starts with YAML front matter:

```yaml
---
title: "Tool Name"
date: 2024-01-01T00:00:00Z
draft: false
description: "Brief description of the tool"
categories: ["tools"]
tags: ["cli", "linux", "tools"]
---
```

### Content Structure

Use this structure for consistent reference pages:

```markdown
## Overview
Brief description of what this tool does.

## Installation
How to install the tool.

## Basic Usage
Basic command syntax and examples.

## Advanced Features
More complex usage examples.

## Examples
Real-world examples and use cases.

## Tips and Tricks
Helpful tips for using the tool.

## See Also
Links to related tools or documentation.
```

## Customization

### Theme Customization

Edit these files to customize the theme:

- `themes/quickref/static/css/styles.css` - Styles
- `themes/quickref/static/js/app.js` - JavaScript
- `themes/quickref/layouts/` - HTML templates

### Site Configuration

Edit `hugo.toml` to configure:

```toml
baseURL = "https://yoursite.com"
title = "Your QuickRef Site"

[params]
  description = "Your custom description"
  
[menu]
  [[menu.main]]
    name = "Home"
    url = "/"
    weight = 1
```

### Adding New Categories

1. Create a new directory in `content/`:
   ```bash
   mkdir content/database
   ```

2. Create content files:
   ```bash
   hugo new content/database/mysql.md
   ```

3. The category will automatically appear on the homepage

### Creating Custom Archetypes

Create new archetypes for specific content types:

```bash
# Create archetype
vim archetypes/database.md

# Use archetype
hugo new content/database/postgresql.md --kind=database
```

## Deployment

### Static Hosting

Deploy the `public/` directory to any static hosting service:

- **GitHub Pages**: Push to `gh-pages` branch
- **Netlify**: Connect repository with automatic builds
- **Vercel**: Import project and deploy
- **AWS S3**: Upload to S3 bucket with static website hosting
- **Any web server**: Upload `public/` contents

### GitHub Pages

1. Build the site:
   ```bash
   ./build.sh
   ```

2. Deploy to GitHub Pages:
   ```bash
   # Add public/ to a separate branch
   git subtree push --prefix public origin gh-pages
   ```

### Netlify

1. Connect your repository to Netlify
2. Set build command: `hugo --minify`
3. Set publish directory: `public`
4. Deploy!

### Custom Server

```bash
# Build and copy to server
./build.sh
rsync -av public/ user@server:/var/www/html/
```

## Content Management

### Adding References

1. **Create content file**:
   ```bash
   ./new-content.sh tools kubectl
   ```

2. **Edit content**:
   ```bash
   vim content/tools/kubectl.md
   ```

3. **Preview changes**:
   ```bash
   ./serve.sh
   ```

4. **Build and deploy**:
   ```bash
   ./build.sh
   # Upload public/ to your server
   ```

### Organizing Content

- Use **categories** for main sections (tools, programming, web)
- Use **tags** for cross-cutting topics (cli, linux, javascript)
- Keep **file names** lowercase with hyphens
- Use **descriptive titles** in front matter

## Development

### Local Development

```bash
# Start development server
./serve.sh

# With custom port
./serve.sh 8080

# Build drafts
hugo server --buildDrafts
```

### Theme Development

```bash
# Watch for changes
hugo server --watch

# Build without minification
hugo --buildDrafts --buildFuture
```

## Troubleshooting

### Common Issues

**Hugo not found**:
```bash
# Check installation
hugo version

# Install if missing
brew install hugo
```

**Build errors**:
```bash
# Check content syntax
hugo --verbose

# Validate front matter
hugo list all
```

**Theme issues**:
```bash
# Check theme files
ls themes/quickref/layouts/
```

### Performance Tips

- Use `hugo --minify` for production builds
- Optimize images before adding them
- Keep markdown files well-structured
- Use Hugo's built-in caching

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add your reference content
4. Test locally with `./serve.sh`
5. Submit a pull request

### Content Guidelines

- Use clear, concise explanations
- Include practical examples
- Follow the established structure
- Test all commands before publishing
- Keep references current and accurate

## License

MIT License - feel free to use and modify as needed.

## Support

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hugo Community](https://discourse.gohugo.io/)
- [Markdown Guide](https://www.markdownguide.org/)

## Tips for Success

1. **Start small**: Begin with a few well-crafted references
2. **Stay consistent**: Use the same structure for all references
3. **Keep it updated**: Regularly review and update content
4. **Test everything**: Verify all commands and examples work
5. **Get feedback**: Share with others and iterate based on feedback

---

**Happy documenting!** 🚀