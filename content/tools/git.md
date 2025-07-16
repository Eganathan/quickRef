---
title: "Git"
date: 2024-01-01T00:00:00Z
draft: false
description: "Distributed version control system for tracking changes in source code during software development."
categories: ["tools"]
tags: ["git", "version-control", "scm", "development", "collaboration"]
---

## Overview

Git is a distributed version control system that tracks changes in files and coordinates work among multiple developers. It's essential for software development, enabling collaboration, version tracking, and code management.

## Installation

```bash
# Ubuntu/Debian
sudo apt install git

# macOS
brew install git
# or use Xcode Command Line Tools
xcode-select --install

# CentOS/RHEL
sudo yum install git

# Windows
# Download from https://git-scm.com/download/win
```

## Initial Setup

### Configuration
```bash
# Set global username and email
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set default editor
git config --global core.editor "vim"

# Set default branch name
git config --global init.defaultBranch main

# List all configurations
git config --list
```

### SSH Key Setup
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Start SSH agent
eval "$(ssh-agent -s)"

# Add key to agent
ssh-add ~/.ssh/id_ed25519

# Copy public key to clipboard
cat ~/.ssh/id_ed25519.pub
# Add to GitHub/GitLab/etc.
```

## Repository Basics

### Creating Repositories
```bash
# Initialize new repository
git init

# Initialize with specific branch
git init -b main

# Clone existing repository
git clone https://github.com/user/repo.git

# Clone with specific name
git clone https://github.com/user/repo.git my-project

# Clone specific branch
git clone -b branch-name https://github.com/user/repo.git
```

### Repository Status
```bash
# Check status
git status

# Short status
git status -s

# Show branch information
git branch -v

# Show remote information
git remote -v
```

## Basic Workflow

### Staging Changes
```bash
# Add specific file
git add filename.txt

# Add all files
git add .

# Add all files in directory
git add src/

# Add by pattern
git add "*.js"

# Interactive staging
git add -i

# Add patches interactively
git add -p
```

### Committing Changes
```bash
# Commit with message
git commit -m "Add new feature"

# Commit with detailed message
git commit -m "Add user authentication" -m "Detailed description here"

# Commit all tracked changes
git commit -a -m "Update existing files"

# Amend last commit
git commit --amend -m "Updated commit message"

# Commit with specific author
git commit --author="Name <email@example.com>" -m "Message"
```

### Viewing History
```bash
# Show commit history
git log

# Show concise history
git log --oneline

# Show graph
git log --graph --oneline --all

# Show specific number of commits
git log -n 5

# Show commits by author
git log --author="John Doe"

# Show commits since date
git log --since="2 weeks ago"

# Show file changes
git log --stat
```

## Branching

### Creating Branches
```bash
# Create new branch
git branch feature-branch

# Create and switch to branch
git checkout -b feature-branch

# Create branch from specific commit
git checkout -b hotfix abc1234

# Create branch from remote
git checkout -b local-branch origin/remote-branch
```

### Switching Branches
```bash
# Switch to branch
git checkout branch-name

# Switch to previous branch
git checkout -

# Switch using newer syntax
git switch branch-name

# Create and switch (newer syntax)
git switch -c new-branch
```

### Managing Branches
```bash
# List branches
git branch

# List all branches (including remote)
git branch -a

# List remote branches
git branch -r

# Delete branch
git branch -d branch-name

# Force delete branch
git branch -D branch-name

# Rename branch
git branch -m old-name new-name

# Rename current branch
git branch -m new-name
```

## Remote Repositories

### Adding Remotes
```bash
# Add remote
git remote add origin https://github.com/user/repo.git

# Add multiple remotes
git remote add upstream https://github.com/original/repo.git

# Change remote URL
git remote set-url origin https://github.com/user/new-repo.git

# Remove remote
git remote remove origin
```

### Fetching and Pulling
```bash
# Fetch from remote
git fetch origin

# Fetch all remotes
git fetch --all

# Pull (fetch + merge)
git pull origin main

# Pull with rebase
git pull --rebase origin main

# Pull specific branch
git pull origin feature-branch
```

### Pushing Changes
```bash
# Push to remote
git push origin main

# Push new branch
git push -u origin feature-branch

# Push all branches
git push --all origin

# Push tags
git push --tags origin

# Force push (dangerous)
git push --force origin main

# Force push with lease (safer)
git push --force-with-lease origin main
```

## Merging and Rebasing

### Merging
```bash
# Merge branch into current
git merge feature-branch

# Merge with no fast-forward
git merge --no-ff feature-branch

# Merge with squash
git merge --squash feature-branch

# Abort merge
git merge --abort

# Continue merge after resolving conflicts
git merge --continue
```

### Rebasing
```bash
# Rebase current branch onto main
git rebase main

# Interactive rebase
git rebase -i HEAD~3

# Rebase onto specific commit
git rebase --onto main feature-branch

# Abort rebase
git rebase --abort

# Continue rebase after resolving conflicts
git rebase --continue

# Skip current commit during rebase
git rebase --skip
```

## Resolving Conflicts

### Conflict Resolution
```bash
# Show conflicts
git status

# View conflicted file
cat conflicted-file.txt

# Resolve conflicts manually, then:
git add conflicted-file.txt
git commit

# Use merge tool
git mergetool

# Abort merge/rebase
git merge --abort
git rebase --abort
```

### Conflict Prevention
```bash
# Check for conflicts before merging
git merge --no-commit --no-ff feature-branch

# Fetch and check differences
git fetch origin
git diff HEAD origin/main
```

## Undoing Changes

### Working Directory
```bash
# Discard changes in file
git checkout -- filename.txt

# Discard all changes
git checkout .

# Restore file (newer syntax)
git restore filename.txt

# Restore all files
git restore .
```

### Staging Area
```bash
# Unstage file
git reset filename.txt

# Unstage all files
git reset

# Unstage with newer syntax
git restore --staged filename.txt
```

### Commits
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Undo specific commit
git revert abc1234

# Reset to specific commit
git reset --hard abc1234

# Create new commit that undoes changes
git revert HEAD
```

## Stashing

### Basic Stashing
```bash
# Stash changes
git stash

# Stash with message
git stash save "Work in progress"

# Stash including untracked files
git stash -u

# Stash specific files
git stash push -m "message" filename.txt
```

### Managing Stashes
```bash
# List stashes
git stash list

# Show stash contents
git stash show

# Apply latest stash
git stash apply

# Apply specific stash
git stash apply stash@{1}

# Pop stash (apply and remove)
git stash pop

# Drop stash
git stash drop stash@{1}

# Clear all stashes
git stash clear
```

## Tags

### Creating Tags
```bash
# Create lightweight tag
git tag v1.0.0

# Create annotated tag
git tag -a v1.0.0 -m "Version 1.0.0"

# Tag specific commit
git tag -a v1.0.0 abc1234 -m "Version 1.0.0"

# List tags
git tag

# List tags with pattern
git tag -l "v1.*"
```

### Managing Tags
```bash
# Show tag information
git show v1.0.0

# Delete tag
git tag -d v1.0.0

# Delete remote tag
git push origin :refs/tags/v1.0.0

# Push tags
git push origin --tags

# Push specific tag
git push origin v1.0.0
```

## Advanced Features

### Searching
```bash
# Search in files
git grep "search term"

# Search in specific files
git grep "search term" "*.js"

# Search in commit messages
git log --grep="fix bug"

# Search in commit content
git log -S "function name"

# Show commits that added/removed line
git log -p -S "search term"
```

### Blame and History
```bash
# Show file annotations
git blame filename.txt

# Show file history
git log --follow filename.txt

# Show who changed lines
git blame -L 10,20 filename.txt

# Show changes in specific commit
git show abc1234

# Show changes between commits
git diff abc1234..def5678
```

### Submodules
```bash
# Add submodule
git submodule add https://github.com/user/repo.git libs/repo

# Initialize submodules
git submodule init

# Update submodules
git submodule update

# Clone with submodules
git clone --recursive https://github.com/user/repo.git

# Update submodules to latest
git submodule update --remote
```

## Configuration

### Global Config
```bash
# Common settings
git config --global core.autocrlf input
git config --global core.safecrlf true
git config --global push.default simple
git config --global pull.rebase true
git config --global rerere.enabled true
```

### Aliases
```bash
# Common aliases
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'
git config --global alias.lg 'log --graph --pretty=format:"%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset" --abbrev-commit'
```

### Ignore Files
```bash
# Create .gitignore file
echo "node_modules/" >> .gitignore
echo "*.log" >> .gitignore
echo ".env" >> .gitignore

# Global gitignore
git config --global core.excludesfile ~/.gitignore_global
```

## Git Workflows

### Feature Branch Workflow
```bash
# Create feature branch
git checkout -b feature/new-feature

# Work on feature
git add .
git commit -m "Add new feature"

# Push feature branch
git push -u origin feature/new-feature

# Create pull request (on GitHub/GitLab)
# After approval, merge and cleanup
git checkout main
git pull origin main
git branch -d feature/new-feature
```

### Gitflow Workflow
```bash
# Initialize gitflow
git flow init

# Start feature
git flow feature start new-feature

# Finish feature
git flow feature finish new-feature

# Start release
git flow release start 1.0.0

# Finish release
git flow release finish 1.0.0

# Start hotfix
git flow hotfix start critical-fix

# Finish hotfix
git flow hotfix finish critical-fix
```

### GitHub Flow
```bash
# Create branch from main
git checkout main
git pull origin main
git checkout -b feature-branch

# Make changes and commit
git add .
git commit -m "Implement feature"

# Push and create PR
git push -u origin feature-branch

# After PR merge, cleanup
git checkout main
git pull origin main
git branch -d feature-branch
```

## Troubleshooting

### Common Issues
```bash
# Fix "detached HEAD" state
git checkout main

# Recover deleted branch
git reflog
git checkout -b recovered-branch abc1234

# Fix merge conflicts
git status
# Edit conflicted files
git add .
git commit

# Undo accidental commit
git reset --soft HEAD~1

# Clean untracked files
git clean -fd

# Fix line endings
git config core.autocrlf true
git rm --cached -r .
git reset --hard
```

### Recovery
```bash
# Show reflog
git reflog

# Recover lost commits
git cherry-pick abc1234

# Recover deleted branch
git branch recovered-branch abc1234

# Find lost commits
git fsck --lost-found

# Garbage collection
git gc --prune=now
```

## Best Practices

### Commit Messages
```bash
# Good commit message format
git commit -m "Add user authentication feature

- Implement login/logout functionality
- Add password hashing
- Create user session management
- Add input validation

Closes #123"
```

### Branch Naming
```bash
# Good branch names
feature/user-authentication
bugfix/login-error
hotfix/security-patch
release/v1.2.0
```

### Repository Hygiene
```bash
# Regular maintenance
git fetch --prune
git branch -d merged-branch
git tag -d old-tag
git gc --aggressive
```

## Quick Reference

### Essential Commands
```bash
# Repository setup
git init
git clone <url>
git remote add origin <url>

# Basic workflow
git add .
git commit -m "message"
git push origin main
git pull origin main

# Branching
git branch feature
git checkout feature
git merge feature
git branch -d feature

# Status and history
git status
git log --oneline
git diff
```

### Useful Aliases
```bash
git config --global alias.s status
git config --global alias.a 'add .'
git config --global alias.c 'commit -m'
git config --global alias.p 'push origin HEAD'
git config --global alias.l 'log --oneline'
git config --global alias.co checkout
git config --global alias.br branch
```

## See Also

- `man git` - Complete manual
- `git help <command>` - Help for specific command
- [Git Documentation](https://git-scm.com/doc) - Official documentation
- [Pro Git Book](https://git-scm.com/book) - Comprehensive guide
- [GitHub Docs](https://docs.github.com/) - GitHub-specific features
- [GitLab Docs](https://docs.gitlab.com/) - GitLab-specific features