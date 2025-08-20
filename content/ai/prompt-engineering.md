---
title: "Prompt Engineering"
date: 2023-01-01T00:00:00Z
draft: false
description: "Essential techniques and patterns for effective AI prompt engineering with LLMs like GPT, Claude, and Gemini."
categories: ["ai"]
tags: ["prompt-engineering", "ai", "llm", "gpt", "claude", "gemini"]
---

## Overview

Prompt engineering is the art and science of crafting effective prompts for Large Language Models (LLMs) to achieve desired outcomes. It involves understanding how to structure, phrase, and format inputs to get the best possible responses from AI systems.

## Core Principles

### Clarity and Specificity
```
❌ Poor: "Write about dogs"
✅ Good: "Write a 300-word informative article about Golden Retriever training techniques for first-time dog owners"
```

### Context Setting
```
❌ Poor: "Explain recursion"
✅ Good: "Explain recursion to a computer science student who understands basic programming concepts but struggles with advanced algorithms. Use simple examples and analogies."
```

### Role Definition
```
❌ Poor: "Help with my code"
✅ Good: "As an experienced Python developer, help me debug this function and explain the error in detail"
```

## Framework

Getting the most out of generative AI is all about understanding inputs and outputs. What are you hoping to get from the tool? That’s the output. What kind of prompt is going to help you get it? That’s the input. And there’s a simple framework that helps you provide clear and specific directions to any gen AI tool.

The **TCREI** framework (a useful acronym for "Thoughtfully Create Really Excellent Inputs") stands for:
- **T**ask
- **C**ontext
- **R**eferences
- **E**valuate
- **I**terate

## Prompt Structure

### Basic Template
```
[ROLE/CONTEXT]
[TASK/INSTRUCTION]
[SPECIFIC REQUIREMENTS]
[FORMAT/CONSTRAINTS]
[EXAMPLES (if needed)]
```

### Example Structure
```
Role: You are a senior software engineer with 10 years of experience
Task: Review this code and provide feedback
Requirements: Focus on security vulnerabilities and performance issues
Format: Provide a numbered list with explanations
Constraints: Keep explanations under 100 words each
```

## Essential Techniques

### 1. Zero-Shot Prompting
```
Prompt: "Translate the following English text to French: 'Hello, how are you today?'"

Response: "Bonjour, comment allez-vous aujourd'hui ?"
```

### 2. Few-Shot Prompting
```
Prompt: "Convert these statements to questions:
Statement: The weather is nice today.
Question: Is the weather nice today?

Statement: She likes coffee.
Question: Does she like coffee?

Statement: The meeting starts at 3 PM.
Question: "

Response: "Does the meeting start at 3 PM?"
```

### 3. Chain of Thought (CoT)
```
Prompt: "Solve this step by step: If a train travels 120 miles in 2 hours, what's its speed in mph?"

Response: "Let me solve this step by step:
1. Distance = 120 miles
2. Time = 2 hours
3. Speed = Distance ÷ Time
4. Speed = 120 ÷ 2 = 60 mph
Therefore, the train's speed is 60 mph."
```

### 4. Self-Consistency
```
Prompt: "Solve this problem using three different approaches: What's 15% of 240?"

Approach 1: 240 × 0.15 = 36
Approach 2: (15/100) × 240 = 36
Approach 3: 240 ÷ 100 × 15 = 36
```

### 5. Tree of Thoughts
```
Prompt: "Let's explore multiple solution paths for this problem:
Problem: How to increase website conversion rate?

Path 1: User Experience improvements
Path 2: Pricing strategy optimization
Path 3: Marketing message refinement

Analyze each path and recommend the best approach."
```

## Advanced Patterns

### System Prompts
```
System: You are a helpful assistant that always responds in JSON format.
User: What's the weather like?
Assistant: {
  "response": "I don't have access to real-time weather data",
  "suggestion": "Please check a weather website or app for current conditions"
}
```

### Constitutional AI
```
Initial Prompt: "Write a social media post about politics"
Constitutional Rule: "Ensure the response is balanced, factual, and doesn't promote extreme viewpoints"
Refined Response: [Balanced political content]
```

### Prompt Chaining
```
Prompt 1: "Analyze this customer feedback and identify key themes"
Response 1: [Themes: pricing, support, features]

Prompt 2: "Based on these themes: [themes], create action items for the product team"
Response 2: [Specific action items]
```

## Content-Specific Techniques

### Code Generation
```
Prompt: "Create a Python function that:
- Takes a list of numbers as input
- Returns the median value
- Handles edge cases (empty list, single element)
- Includes docstring and type hints
- Add unit tests"
```

### Creative Writing
```
Prompt: "Write a short story (500 words) about a time traveler who accidentally changes history. 
Style: Humorous, first-person narrative
Setting: Modern day coffee shop
Constraint: Must include the phrase 'butterfly effect' naturally
Tone: Light-hearted but with underlying tension"
```

### Technical Documentation
```
Prompt: "Create API documentation for this endpoint:
- Endpoint: POST /api/users
- Purpose: Create new user account
- Include: request/response examples, error codes, authentication requirements
- Format: OpenAPI specification
- Audience: Backend developers"
```

### Data Analysis
```
Prompt: "Analyze this dataset and provide insights:
[Dataset description]
Please provide:
1. Summary statistics
2. Key trends and patterns
3. Potential outliers
4. Recommendations based on findings
5. Visualizations suggestions"
```

## Platform-Specific Tips

### GPT (OpenAI)
```
# Effective with:
- Role-playing scenarios
- Step-by-step instructions
- Creative tasks
- Code generation

# Best practices:
- Use clear delimiters (```, ---, ###)
- Specify output format explicitly
- Break complex tasks into steps
```

### Claude (Anthropic)
```
# Effective with:
- Analytical tasks
- Long-form content
- Safety-conscious responses
- Nuanced reasoning

# Best practices:
- Provide context about harm prevention
- Use structured thinking prompts
- Request explanations of reasoning
```

### Gemini (Google)
```
# Effective with:
- Multimodal tasks
- Factual information
- Real-time reasoning
- Integration tasks

# Best practices:
- Leverage multimodal capabilities
- Use specific, factual queries
- Provide clear context
```

## Common Patterns

### Question Answering
```
Template: "Based on the following context, answer the question concisely:

Context: [relevant information]
Question: [specific question]
Answer format: [bullet points/paragraph/etc.]
If unsure, say: 'I don't have enough information to answer this question.'"
```

### Summarization
```
Template: "Summarize the following text:
- Length: [word count/paragraph count]
- Audience: [target audience]
- Focus: [key aspects to emphasize]
- Style: [academic/casual/business]

Text: [content to summarize]"
```

### Classification
```
Template: "Classify the following into categories:
Categories: [list categories]
Criteria: [classification rules]
Output format: Category name and confidence level
If uncertain, provide top 2 categories.

Text to classify: [content]"
```

### Extraction
```
Template: "Extract the following information from the text:
- [Field 1]: [description]
- [Field 2]: [description]
- [Field 3]: [description]

If a field is not found, return 'Not specified'
Format as JSON.

Text: [source content]"
```

## Prompt Optimization

### Iterative Refinement
```
Version 1: "Write a blog post about AI"
Version 2: "Write a 800-word blog post about AI ethics for non-technical readers"
Version 3: "Write a 800-word blog post about AI ethics for non-technical readers, focusing on privacy concerns, bias issues, and practical implications for everyday users"
```

### A/B Testing Prompts
```
Prompt A: "Explain machine learning simply"
Prompt B: "Explain machine learning using everyday analogies"
Prompt C: "Explain machine learning to a curious 12-year-old"
```

### Performance Metrics
```
Evaluation Criteria:
- Accuracy: Does it answer correctly?
- Relevance: Is it on-topic?
- Clarity: Is it easy to understand?
- Completeness: Does it cover all aspects?
- Consistency: Are multiple runs similar?
```

## Error Handling

### Common Issues
```
Issue: Vague responses
Solution: Add specific constraints and examples

Issue: Inconsistent format
Solution: Provide clear format templates

Issue: Hallucination
Solution: Request citations and verify claims

Issue: Incomplete responses
Solution: Ask for step-by-step breakdown
```

### Defensive Prompting
```
Template: "Please [task]. Important constraints:
- Only use information from the provided context
- If you're unsure, explicitly state your uncertainty
- Cite sources when making claims
- If the task is unclear, ask for clarification
- Avoid speculation or assumptions"
```

## Best Practices

### Do's
```
✅ Be specific and clear
✅ Provide context and examples
✅ Use structured format
✅ Test and iterate
✅ Define success criteria
✅ Use appropriate tone
✅ Break complex tasks into steps
```

### Don'ts
```
❌ Don't be vague or ambiguous
❌ Don't overload with information
❌ Don't ignore safety considerations
❌ Don't expect perfect first attempts
❌ Don't forget to validate outputs
❌ Don't use offensive language
❌ Don't rely on single prompts for critical tasks
```

## Evaluation Methods

### Human Evaluation
```
Criteria:
- Helpfulness (1-5 scale)
- Accuracy (1-5 scale)
- Clarity (1-5 scale)
- Relevance (1-5 scale)
- Overall quality (1-5 scale)
```

### Automated Evaluation
```
Metrics:
- BLEU score (translation quality)
- ROUGE score (summarization quality)
- Perplexity (text quality)
- Custom scoring functions
```

## Advanced Techniques

### Meta-Prompting
```
Prompt: "Create a prompt that will help generate effective marketing copy for a SaaS product. The prompt should include:
- Target audience specification
- Product benefit focus
- Call-to-action guidance
- Brand voice requirements"
```

### Prompt Templates
```
Template Engine:
"As a {role}, {task} for {audience}. 
Focus on {key_aspects}. 
Use {tone} tone and {format} format.
Constraints: {limitations}"

Usage:
role = "UX designer"
task = "create wireframes"
audience = "mobile app users"
key_aspects = "usability and accessibility"
tone = "professional"
format = "annotated sketches"
limitations = "mobile-first design"
```

### Dynamic Prompting
```
Conditional Logic:
"If the user query is about {topic_A}, respond with {approach_A}.
If the user query is about {topic_B}, respond with {approach_B}.
If unclear, ask for clarification using this template: {clarification_template}"
```

## Troubleshooting

### Common Problems
```
Problem: Inconsistent outputs
Solution: Add more constraints, use temperature settings

Problem: Too verbose
Solution: Specify length limits, use bullet points

Problem: Off-topic responses
Solution: Repeat key requirements, use system prompts

Problem: Factual errors
Solution: Request citations, use chain-of-thought reasoning
```

### Debugging Techniques
```
1. Simplify the prompt
2. Test each component separately
3. Use explicit instructions
4. Add examples and counter-examples
5. Validate with different inputs
6. Monitor for edge cases
```

## Tools and Resources

### Prompt Testing Tools
```
- OpenAI Playground
- Anthropic Console
- Langchain Prompt Templates
- PromptLayer
- WeaveGPT
- Prompt Perfect
```

### Evaluation Frameworks
```
- HELM (Holistic Evaluation of Language Models)
- BIG-bench
- EleutherAI Evaluation Harness
- Custom evaluation scripts
```

## Quick Reference

### Basic Prompt Structure
```
[Context] + [Task] + [Format] + [Constraints] = Effective Prompt
```

### Essential Elements
```
- Clear objective
- Specific requirements
- Expected format
- Quality criteria
- Examples (when helpful)
- Constraints and limitations
```

### Quality Checklist
```
□ Is the task clearly defined?
□ Are requirements specific?
□ Is the format specified?
□ Are constraints mentioned?
□ Are examples provided?
□ Is the tone appropriate?
□ Are edge cases considered?
```

## See Also

- [Managing AI Agents with AGENT.MD](/ai/managing-ai-agents)
- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)
- [Anthropic Prompt Engineering](https://docs.anthropic.com/claude/docs/prompt-engineering)
- [Google AI Prompt Design](https://ai.google.dev/docs/prompt_best_practices)
- [Prompt Engineering Institute](https://www.promptengineering.org/)
- [LangChain Prompt Templates](https://python.langchain.com/docs/modules/model_io/prompts/)