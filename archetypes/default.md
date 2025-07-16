---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
description: "{{ replace .Name "-" " " | title }} reference sheet"
categories: ["{{ .Section }}"]
tags: ["{{ .Section }}", "reference"]
---

## Overview

Brief description of what this tool/language/framework does.

## Basic Usage

```bash
# Basic command syntax
command [options] [arguments]
```

## Common Commands

### Command Category

```bash
# Command description
command --option value
```

**Example:**
```bash
# Specific example
command --example
```

## Advanced Usage

### Feature Name

Description of advanced feature.

```bash
# Advanced command
command --advanced-option
```

## Examples

### Real-world Example

```bash
# Real-world usage example
command --real-world-example
```

## Tips and Tricks

- Tip 1
- Tip 2
- Tip 3

## See Also

- Related tool 1
- Related tool 2