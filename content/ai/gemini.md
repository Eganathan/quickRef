---
title: "Gemini CLI"
date: 2025-08-18T00:00:00Z
draft: false
description: "A quick reference for installing and using the official Google Gemini CLI to interact with AI models from your terminal."
categories: ["ai"]
tags: ["gemini", "cli", "ai", "google", "npm"]
---

## Overview

`@google/gemini-cli` is the official, open-source command-line interface (CLI) for Gemini, developed by Google. It brings the power of Gemini models to your terminal, allowing you to ask questions, understand and generate code, and integrate AI into your development workflows.

## Installation

You must have Node.js (version 20 or higher) and npm installed.

You can either run the CLI without installation using `npx` or install it globally for regular use.

**Run with NPX (no install):**
```bash
npx https://github.com/google-gemini/gemini-cli
```

**Global Installation:**
```bash
npm install -g @google/gemini-cli
```

## Configuration

The first time you run the `gemini` command, it will guide you through a setup process.

1.  Open your terminal.
2.  Run the command `gemini`.
3.  Follow the prompts to log in. The recommended method is to sign in with your personal Google account, which provides a generous free tier. You can also use an API key from Google AI Studio or a Google Cloud project for higher usage.

## Usage

### Interactive Mode

The primary way to use the tool is by starting an interactive chat session.

```bash
# Navigate to your project folder if you want to ask about it
cd /path/to/your-project

# Start the interactive CLI
gemini
```

Once inside the session, you can ask questions, paste code, or have a conversation.

### One-off Commands

You can pass a prompt directly to the `gemini` command for a single response using the `-p` (prompt) flag.

**Syntax:**
```bash
gemini -p "[YOUR_PROMPT]"
```

**Examples:**

```bash
# Ask a general question
gemini -p "What is the difference between PUT and PATCH HTTP methods?"

# Ask about your codebase (run from the project directory)
gemini -p "Explain the architecture of this codebase based on the file structure."

# Generate a commit message for staged changes
git diff --staged | gemini -p "Generate a concise and conventional commit message for these changes."
```

### Piping Content

You can pipe the content of files to the `gemini` command.

```bash
# Ask Gemini to explain a file
cat README.md | gemini -p "Summarize this README for a non-technical user."

# Generate code and save it to a file
gemini -p "Write a simple Python Flask server with one route" > app.py
```

## Effective Usage Tips

- **Ground with Search:** Gemini CLI can use Google Search to provide more up-to-date and factual answers. This is on by default.
- **Use Vision:** You can pass local image files to prompts for multimodal queries.
  `gemini -p "Describe this user interface" -i "screenshot.png"`
- **Specify Models:** If you have access to multiple Gemini models, you can specify which one to use with the `-m` flag (e.g., `gemini -m "models/gemini-1.5-pro-latest"`).
- **Extensibility:** The Gemini CLI is extensible. Explore its documentation to learn about creating custom plugins and tools for more advanced workflows.
