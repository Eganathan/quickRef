---
title: "Managing AI Agents with AGENT.MD"
date: 2025-08-18T00:00:00Z
draft: false
description: "A guide to creating and using an AGENT.MD file to provide persistent guidance to AI agents for consistent and efficient project collaboration."
categories: ["ai"]
tags: ["ai-agent", "agent-md", "meta-prompting", "collaboration"]
---

## AGENT.MD: Persistent Guidance for AI Agents

For ongoing projects, especially when collaborating with an AI agent, creating an `AGENT.MD` file in the project's root directory is a powerful technique. This file acts as a persistent, high-level prompt that guides the agent's behavior, ensuring consistency and adherence to project standards over multiple interactions.

### Why is `AGENT.MD` Important?

- **Consistency**: Ensures the agent follows the same style, conventions, and architectural patterns every time it works on the codebase.
- **Efficiency**: Reduces the need to repeat instructions in every prompt. The agent can refer to the `AGENT.MD` for standing orders.
- **Safety**: Allows you to define clear safety rules, forbidden commands, or sensitive areas of the codebase to avoid accidental changes.
- **Onboarding**: Helps the agent (and new human developers) quickly understand the project's specific operational procedures and conventions.

### How to Design an Effective `AGENT.MD`

An effective `AGENT.MD` should be structured like a set of clear instructions. Use Markdown to create a readable and well-organized document.

**1. Core Mandates & Principles**
- Start with the most important, non-negotiable rules.
- *Example*: "Rigorously adhere to existing project conventions. Analyze surrounding code before making changes."

**2. Project-Specific Conventions**
- Detail the coding style (e.g., "use tabs, not spaces"), naming conventions, and preferred libraries or frameworks.
- *Example*: "All new frontend components must be written in TypeScript using React Hooks. Avoid class-based components."

**3. Key Workflows & Procedures**
- Describe common multi-step tasks.
- *Example*: "To add a new feature: 1. Create a feature branch (`feature/name`). 2. Write unit tests first. 3. Implement the feature. 4. Run the linter and all tests. 5. Create a pull request."

**4. Tooling and Commands**
- List the specific commands for running tests, linting, building, and serving the application. This prevents the agent from guessing.
- *Example*: "Use `npm run test` to execute unit tests. Use `npm run lint:fix` to format the code."

**5. Persona / Role Definition (Optional)**
- You can define the persona you want the agent to adopt.
- *Example*: "Act as a senior software engineer focused on code quality and performance."

## Prompts for Automatic Generation

You can instruct an AI agent to analyze your codebase and create a draft `AGENT.MD` for you. Below are some templates you can adapt for your project.

### For a Web Project

```
You are an expert AI assistant specializing in analyzing software projects to establish development best practices.

Your task is to analyze the entire codebase in the current directory and generate a comprehensive `AGENT.MD` file to guide future AI-assisted development.

**Analysis Instructions:**
1.  **Identify Core Technologies:** Scan `package.json`, `webpack.config.js`, `tsconfig.json`, and other configuration files to identify the primary languages (e.g., TypeScript, JavaScript), frameworks (e.g., React, Vue, Node.js, Express), and package managers (npm, yarn, pnpm).
2.  **Extract Key Scripts:** From `package.json`, pull out the exact commands for `test`, `build`, `lint`, and `start`/`serve`.
3.  **Determine Conventions:**
    *   Analyze the `src` directory to identify coding patterns (e.g., functional components vs. class components), naming conventions (e.g., `camelCase` for files, `PascalCase` for components), and file structure.
    *   Check for linter configurations (`.eslintrc`, `.prettierrc`) to define code style rules.
    *   Review `git log` to understand the preferred commit message format.
4.  **Define Workflows:** Infer standard workflows, such as how new components or API routes are created and structured.

**Output (`AGENT.MD`):**
Generate a complete Markdown file with the following sections, populating them with your findings:
- **Core Mandates:** High-level rules for development.
- **Project-Specific Conventions:** Languages, frameworks, code style, naming, commit messages.
- **Key Workflows:** Step-by-step guides for common tasks.
- **Tooling and Commands:** A list of exact shell commands for testing, building, and linting.
- **Persona:** Suggest a persona for the AI (e.g., "Senior Full-Stack Developer").

**User Input:**
[User: Add any specific, non-obvious project details or personal preferences here. For example: "Always use Axios for HTTP requests instead of fetch." or "Ensure all new components have a corresponding Storybook file."]
```

### For an Android Project

```
You are an expert AI assistant specializing in analyzing mobile applications to establish development best practices.

Your task is to analyze the entire Android project in the current directory and generate a comprehensive `AGENT.MD` file to guide future AI-assisted development.

**Analysis Instructions:**
1.  **Identify Core Technologies:** Scan `build.gradle` and `build.gradle.kts` files to identify the primary language (Kotlin/Java), key libraries (e.g., Jetpack Compose, Retrofit, Dagger/Hilt, Room), and architecture patterns (e.g., MVVM, MVI).
2.  **Extract Key Commands:** Identify the standard Gradle commands for building (`./gradlew assembleDebug`), testing (`./gradlew test`), and running instrumentation tests (`./gradlew connectedAndroidTest`).
3.  **Determine Conventions:**
    *   Analyze the `app/src/main` directory to identify coding patterns, naming conventions for Activities, Fragments, ViewModels, and resource files (e.g., `fragment_main.xml`, `ic_launcher.xml`).
    *   Check for code style configurations in the project settings or `.editorconfig`.
    *   Review `git log` to understand the preferred commit message format.
4.  **Define Workflows:** Infer standard workflows, such as creating a new screen (Activity/Fragment + ViewModel + Layout) or adding a new dependency.

**Output (`AGENT.MD`):**
Generate a complete Markdown file with the following sections, populating them with your findings:
- **Core Mandates:** High-level rules for development.
- **Project-Specific Conventions:** Languages, frameworks, code style, naming, commit messages.
- **Key Workflows:** Step-by-step guides for common tasks.
- **Tooling and Commands:** A list of exact shell commands for testing, building, and linting.
- **Persona:** Suggest a persona for the AI (e.g., "Senior Android Engineer").

**User Input:**
[User: Add any specific, non-obvious project details or personal preferences here. For example: "Always use Kotlin Coroutines for asynchronous tasks." or "Ensure string resources are used instead of hardcoded text."]
```

### For a Hugo Site

```
You are an expert AI assistant specializing in analyzing static sites to establish content and development best practices.

Your task is to analyze the entire Hugo site in the current directory and generate a comprehensive `AGENT.MD` file to guide future AI-assisted development.

**Analysis Instructions:**
1.  **Identify Core Technologies:** Scan `hugo.toml` (or `config.toml`/`config.yaml`) to identify the theme, modules, and site configuration.
2.  **Extract Key Commands:** Identify the standard Hugo commands for running the local server (`hugo server`) and building the site (`hugo`). Note any custom scripts in files like `build.sh`.
3.  **Determine Conventions:**
    *   Analyze the `content` directory to understand how content is structured and the format of front matter (e.g., fields for `title`, `date`, `tags`, `categories`).
    *   Analyze the `archetypes` directory to find templates for new content.
    *   Analyze the `layouts` and `themes` directories to understand the site's structure and templating logic.
    *   Review `git log` to understand the preferred commit message format for content updates vs. theme changes.
4.  **Define Workflows:** Infer standard workflows, such as creating a new blog post using an archetype, or updating the site's CSS.

**Output (`AGENT.MD`):**
Generate a complete Markdown file with the following sections, populating them with your findings:
- **Core Mandates:** High-level rules for development.
- **Project-Specific Conventions:** Content structure, front matter fields, commit messages.
- **Key Workflows:** Step-by-step guides for creating new content and updating the theme.
- **Tooling and Commands:** A list of exact shell commands for serving and building the site.
- **Persona:** Suggest a persona for the AI (e.g., "Expert Content Manager and Hugo Developer").

**User Input:**
[User: Add any specific, non-obvious project details or personal preferences here. For example: "All images should be placed in the `/static/images` folder and optimized before use." or "New posts must include at least three relevant tags."]
```
