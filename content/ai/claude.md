---
title: "Claude CLI"
date: 2025-08-18T00:00:00Z
draft: false
description: "A quick reference for installing and using the official Claude CLI to interact with Anthropic's AI models from your terminal."
categories: ["ai"]
tags: ["claude", "cli", "ai", "anthropic", "npm"]
---

## Overview

`@anthropic-ai/claude-code` is the official command-line interface (CLI) for Claude, developed by Anthropic. It allows developers to interact with Claude models directly from the terminal, making it easy to integrate AI into development workflows, analyze code, and generate content without leaving the command line.

## Installation

You must have Node.js (version 18 or higher) and npm installed.

To install the Claude CLI globally on your system, run the following command:
```bash
npm install -g @anthropic-ai/claude-code
```

## Configuration

The first time you run the `claude` command, it will guide you through an authentication process in your web browser.

1.  Open your terminal.
2.  Run the command `claude`.
3.  Follow the on-screen prompts to log in to your Anthropic account. This requires an active subscription (like Claude Pro) or a funded account on the Anthropic Console.

## Usage

### Interactive Mode

The primary way to use the tool is by starting an interactive chat session within your project directory.

```bash
# Navigate to your project folder
cd /path/to/your-project

# Start the interactive CLI
claude
```

Once inside the session, you can ask questions about your codebase, generate files, or ask for explanations.

**Example Prompts:**
```
> Explain the purpose of the `utils.js` file.
> Write a README.md file for this project.
> What are the main dependencies in package.json?
```

### Piping and One-off Commands

You can pipe the content of files to the `claude` command for specific, one-time tasks using the `-p` (prompt) flag.

**Syntax:**
```bash
cat [FILENAME] | claude -p "[YOUR_PROMPT]"
```

**Examples:**

```bash
# Get an explanation of a file
cat src/api.js | claude -p "Explain what this code does in simple terms."

# Refactor a file
cat components/LegacyComponent.jsx | claude -p "Refactor this class component into a functional component using React Hooks."

# Add documentation to a file
cat scripts/deploy.sh | claude -p "Add comments to this shell script explaining each step."
```

## Effective Usage Tips

- **Context is Key:** Always run the `claude` command from your project's root directory. The CLI automatically gathers context from your file structure to provide more relevant answers.
- **Be Specific:** When piping commands, be very clear in your prompt about the desired action and output format.
- **Use for Reviews:** Pipe your code before committing to get a quick code review and suggestions for improvement. `git diff HEAD | claude -p "Review these changes for potential bugs."`
- **Combine with other tools:** Use `claude` as part of a larger script. For example, you could find all `TODO` comments and ask Claude to suggest solutions for them.
