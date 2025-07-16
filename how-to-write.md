# How to Write QuickRef Content

This guide provides comprehensive instructions for creating and editing content for the QuickRef Hugo site. Follow these guidelines to ensure consistency, quality, and maintainability.

## 📁 File Structure

### Content Organization
```
content/
├── tools/           # Command-line tools and utilities
│   ├── grep.md     # Individual reference files
│   ├── git.md
│   └── docker.md
├── programming/     # Programming languages and frameworks
│   ├── bash.md
│   ├── python.md
│   └── javascript.md
├── web/            # Web development technologies
│   ├── html.md
│   ├── css.md
│   └── react.md
└── database/       # Database systems and tools
    ├── mysql.md
    └── postgresql.md
```

### Category Guidelines
- **tools**: Command-line utilities, development tools, system tools
- **programming**: Programming languages, frameworks, libraries
- **web**: Web technologies, HTML, CSS, JavaScript frameworks
- **database**: Database systems, query languages, database tools
- **linux**: Linux commands, system administration, shell utilities
- **devops**: CI/CD, deployment, infrastructure tools
- **security**: Security tools, practices, and utilities

## 📝 Content Format

### Front Matter (Required)
Every content file must start with YAML front matter:

```yaml
---
title: "Tool Name"
date: 2024-01-01T00:00:00Z
draft: false
description: "Brief, clear description of what this tool does (max 150 characters)"
categories: ["tools"]
tags: ["cli", "linux", "text-processing", "search"]
---
```

**Front Matter Fields:**
- `title`: Display name (use proper capitalization)
- `date`: Creation/last update date (ISO format)
- `draft`: Set to `false` for published content
- `description`: One-sentence summary (appears in cards)
- `categories`: Array with one category (must match folder name)
- `tags`: Relevant tags for filtering and search

### Content Structure Template

```markdown
## Overview
Brief 1-2 sentence explanation of what the tool does and why it's useful.

## Installation
How to install the tool on different systems.

```bash
# Ubuntu/Debian
sudo apt install tool-name

# macOS
brew install tool-name

# CentOS/RHEL
sudo yum install tool-name
```

## Basic Usage
Fundamental commands and syntax.

```bash
# Basic command structure
tool-name [options] [arguments]
```

## Common Options
Essential flags and options with explanations.

| Option | Description |
|--------|-------------|
| `-h, --help` | Show help message |
| `-v, --verbose` | Verbose output |
| `-q, --quiet` | Quiet mode |

## Examples

### Basic Example
```bash
# Simple usage example
tool-name input.txt
```

### Advanced Example
```bash
# More complex usage
tool-name --option1 value1 --option2 value2 input.txt
```

## Use Cases
Real-world scenarios where this tool is helpful.

## Tips and Tricks
- Tip 1: Useful shortcut or best practice
- Tip 2: Common gotcha to avoid
- Tip 3: Performance or efficiency tip

## See Also
- Related tools or commands
- Links to official documentation
- `man tool-name` for manual pages
```

## 🎨 Formatting Guidelines

### Code Blocks
Use fenced code blocks with language specification:

```markdown
```bash
# This is a bash command
grep -r "pattern" /path/to/directory
```

```python
# This is Python code
def hello_world():
    print("Hello, World!")
```

```json
{
  "key": "value",
  "number": 42
}
```
```

### Inline Code
Use backticks for inline code, commands, file paths, and technical terms:

```markdown
Use the `grep` command to search for patterns in files.
Edit the `~/.bashrc` file to add aliases.
The `--recursive` flag searches subdirectories.
```

### Tables
Use tables for structured information:

```markdown
| Command | Description | Example |
|---------|-------------|---------|
| `ls -la` | List all files with details | `ls -la /home/user` |
| `cd ~` | Change to home directory | `cd ~` |
| `pwd` | Print working directory | `pwd` |
```

### Lists
Use bullet points for features, options, or tips:

```markdown
- **Feature 1**: Description of the feature
- **Feature 2**: Another important feature
- **Feature 3**: Yet another feature
```

Use numbered lists for step-by-step instructions:

```markdown
1. First step with clear instructions
2. Second step building on the first
3. Final step to complete the process
```

### Headings
Use consistent heading hierarchy:

```markdown
# Main Title (automatically added from front matter)
## Major Sections (Installation, Usage, Examples)
### Subsections (Basic Example, Advanced Example)
#### Sub-subsections (rarely needed)
```

### Emphasis
- Use **bold** for important terms, commands, and key concepts
- Use *italics* for emphasis and file names
- Use `code` for commands, file paths, and technical terms

## 🔧 Content Guidelines

### Writing Style
- **Be concise**: Get to the point quickly
- **Be practical**: Focus on real-world usage
- **Be accurate**: Test all commands and examples
- **Be consistent**: Use the same terminology throughout

### Command Examples
- **Test everything**: All commands must work as written
- **Use realistic examples**: Avoid foo/bar, use meaningful names
- **Include output**: Show expected results when helpful
- **Add comments**: Explain complex commands

```bash
# Good example with explanation
grep -r "TODO" src/ | head -10
# Searches for TODO comments in source code, shows first 10 results

# Bad example without context
grep -r "pattern" directory/
```

### Error Handling
Include common errors and solutions:

```markdown
## Troubleshooting

### Common Issues

**Error: Command not found**
```bash
# Solution: Install the tool
sudo apt install tool-name
```

**Error: Permission denied**
```bash
# Solution: Use sudo or check file permissions
sudo tool-name
# or
chmod +x filename
```
```

### Categories and Tags

#### Categories (choose one)
- `tools` - Command-line utilities
- `programming` - Languages and frameworks  
- `web` - Web development
- `database` - Database systems
- `linux` - Linux/Unix commands
- `devops` - DevOps tools
- `security` - Security tools

#### Tags (use 3-6 relevant tags)
- **Technical**: `cli`, `gui`, `web`, `mobile`, `desktop`
- **Platform**: `linux`, `windows`, `macos`, `cross-platform`
- **Domain**: `networking`, `security`, `database`, `frontend`, `backend`
- **Type**: `framework`, `library`, `tool`, `language`, `utility`

## 🚀 Creating New Content

### Using the Helper Script
```bash
# Create new tool reference
./new-content.sh tools kubectl

# Create new programming language reference
./new-content.sh programming rust

# Create new web technology reference
./new-content.sh web vue
```

### Manual Creation
```bash
# Create file manually
touch content/tools/new-tool.md

# Edit with your preferred editor
vim content/tools/new-tool.md
```

### Development Workflow
1. **Create content file** with proper front matter
2. **Write content** following the template
3. **Test locally** with `hugo server`
4. **Preview** at `http://localhost:1313`
5. **Refine** based on preview
6. **Build** with `hugo` command
7. **Deploy** the `public/` directory

## 📊 Quality Checklist

Before submitting content, ensure:

### Technical Accuracy
- [ ] All commands have been tested
- [ ] Examples work as written
- [ ] Code syntax is correct
- [ ] Links are functional

### Content Quality
- [ ] Description is clear and concise
- [ ] Examples are practical and realistic
- [ ] All sections are relevant
- [ ] No spelling or grammar errors

### Formatting
- [ ] Front matter is complete and correct
- [ ] Code blocks use proper language tags
- [ ] Tables are properly formatted
- [ ] Headings follow hierarchy
- [ ] Consistent style throughout

### SEO and Findability
- [ ] Title is descriptive and searchable
- [ ] Tags are relevant and useful
- [ ] Description helps users find content
- [ ] Content answers common questions

## 🎯 Best Practices

### Do's
- ✅ Use real-world examples
- ✅ Include practical use cases
- ✅ Test all commands before publishing
- ✅ Keep content current and accurate
- ✅ Include troubleshooting section
- ✅ Add helpful tips and tricks
- ✅ Use consistent formatting
- ✅ Write clear, concise descriptions

### Don'ts
- ❌ Don't include untested commands
- ❌ Don't use placeholder text (foo, bar)
- ❌ Don't write overly long descriptions
- ❌ Don't forget to update the date
- ❌ Don't use inconsistent terminology
- ❌ Don't skip the front matter
- ❌ Don't include sensitive information
- ❌ Don't copy content without attribution

## 🔍 Common Patterns

### Tool References
Focus on practical usage with clear examples:

```markdown
## Basic Usage
```bash
tool-name [options] file
```

## Common Options
| Option | Description |
|--------|-------------|
| `-v` | Verbose output |
| `-h` | Help message |

## Examples
```bash
# Basic example
tool-name input.txt

# Advanced example
tool-name -v --option value input.txt
```
```

### Programming Language References
Include syntax, examples, and best practices:

```markdown
## Variables
```language
// Variable declaration
var name = "value";
```

## Functions
```language
function functionName(parameters) {
    // function body
    return result;
}
```

## Examples
```language
// Real-world example
function calculateTotal(items) {
    return items.reduce((sum, item) => sum + item.price, 0);
}
```
```

## 📚 Resources

### Hugo Documentation
- [Hugo Content Management](https://gohugo.io/content-management/)
- [Hugo Front Matter](https://gohugo.io/content-management/front-matter/)
- [Hugo Markdown](https://gohugo.io/content-management/formats/)

### Markdown References
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)
- [CommonMark Spec](https://commonmark.org/)

### Tools for Writers
- [Grammarly](https://grammarly.com/) - Grammar and spell check
- [Hemingway Editor](https://hemingwayapp.com/) - Readability improvement
- [Vale](https://vale.sh/) - Prose linter for technical writing

## 🤝 Contributing

### Getting Started
1. Fork the repository
2. Create a new branch: `git checkout -b add-new-reference`
3. Add your content following these guidelines
4. Test locally with `hugo server`
5. Submit a pull request

### Review Process
All content goes through review for:
- Technical accuracy
- Formatting consistency
- Content quality
- SEO optimization

### Maintenance
- Review content quarterly for updates
- Update deprecated commands or syntax
- Add new features and options
- Fix reported issues promptly

---

**Questions?** Create an issue in the repository or reach out to the maintainers.

**Happy writing!** 🚀