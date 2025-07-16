---
title: "Gemini CLI"
date: 2024-01-01T00:00:00Z
draft: false
description: "Google's Gemini AI CLI tool for text generation, code assistance, and multimodal AI interactions."
categories: ["ai"]
tags: ["gemini", "google", "ai", "cli", "multimodal", "code-generation"]
---

## Overview

Gemini is Google's advanced AI model accessible through various interfaces including CLI tools, APIs, and integrations. This guide covers using Gemini through command-line interfaces, Google AI Studio, and programmatic access for text generation, code assistance, and multimodal tasks.

## Installation

### Google AI CLI
```bash
# Install via npm
npm install -g @google-ai/generativelanguage

# Or using pip
pip install google-generativeai

# Using gcloud CLI
gcloud components install alpha
gcloud alpha ai models list
```

### API Setup
```bash
# Get API key from Google AI Studio
export GOOGLE_API_KEY="your-api-key-here"

# Or set in config file
echo "GOOGLE_API_KEY=your-api-key-here" >> ~/.env
```

### Authentication
```bash
# Using service account
export GOOGLE_APPLICATION_CREDENTIALS="path/to/service-account.json"

# Using gcloud auth
gcloud auth login
gcloud auth application-default login
```

## Basic Usage

### Text Generation
```bash
# Simple text generation
curl -X POST \
  -H "Content-Type: application/json" \
  -H "x-goog-api-key: $GOOGLE_API_KEY" \
  -d '{
    "contents": [
      {
        "parts": [
          {"text": "Explain quantum computing in simple terms"}
        ]
      }
    ]
  }' \
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent"
```

### Using Python SDK
```python
import google.generativeai as genai

# Configure API key
genai.configure(api_key="your-api-key")

# Generate text
model = genai.GenerativeModel('gemini-pro')
response = model.generate_content("What is machine learning?")
print(response.text)
```

### Node.js SDK
```javascript
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function generateText() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = "Explain the concept of recursion";
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    console.log(response.text());
}
```

## Available Models

### Gemini Pro
```bash
# Text-only model
curl -X POST \
  -H "Content-Type: application/json" \
  -H "x-goog-api-key: $GOOGLE_API_KEY" \
  -d '{
    "contents": [{"parts": [{"text": "Hello, Gemini!"}]}]
  }' \
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent"
```

### Gemini Pro Vision
```bash
# Multimodal model (text + images)
curl -X POST \
  -H "Content-Type: application/json" \
  -H "x-goog-api-key: $GOOGLE_API_KEY" \
  -d '{
    "contents": [
      {
        "parts": [
          {"text": "What is in this image?"},
          {
            "inline_data": {
              "mime_type": "image/jpeg",
              "data": "base64-encoded-image-data"
            }
          }
        ]
      }
    ]
  }' \
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent"
```

### Model Information
```bash
# List available models
curl -X GET \
  -H "x-goog-api-key: $GOOGLE_API_KEY" \
  "https://generativelanguage.googleapis.com/v1beta/models"

# Get model details
curl -X GET \
  -H "x-goog-api-key: $GOOGLE_API_KEY" \
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro"
```

## Text Generation

### Basic Generation
```python
import google.generativeai as genai

genai.configure(api_key="your-api-key")
model = genai.GenerativeModel('gemini-pro')

# Simple generation
response = model.generate_content("Write a haiku about technology")
print(response.text)

# With parameters
response = model.generate_content(
    "Explain machine learning",
    generation_config=genai.types.GenerationConfig(
        candidate_count=1,
        max_output_tokens=1000,
        temperature=0.7
    )
)
```

### Streaming Generation
```python
import google.generativeai as genai

genai.configure(api_key="your-api-key")
model = genai.GenerativeModel('gemini-pro')

response = model.generate_content(
    "Write a story about AI",
    stream=True
)

for chunk in response:
    print(chunk.text, end='')
```

### Multi-turn Conversations
```python
import google.generativeai as genai

genai.configure(api_key="your-api-key")
model = genai.GenerativeModel('gemini-pro')

# Start a chat
chat = model.start_chat(history=[])

# Send messages
response = chat.send_message("What is Python?")
print(response.text)

response = chat.send_message("What are its main features?")
print(response.text)

# View history
for message in chat.history:
    print(f"{message.role}: {message.parts[0].text}")
```

## Code Generation

### Basic Code Generation
```python
import google.generativeai as genai

genai.configure(api_key="your-api-key")
model = genai.GenerativeModel('gemini-pro')

# Generate Python code
prompt = """
Write a Python function that:
1. Takes a list of numbers as input
2. Returns the average of the numbers
3. Handles empty lists gracefully
4. Includes proper error handling
"""

response = model.generate_content(prompt)
print(response.text)
```

### Code Review
```python
code_to_review = """
def calculate_factorial(n):
    if n == 0:
        return 1
    else:
        return n * calculate_factorial(n-1)
"""

prompt = f"""
Review this Python code and provide feedback:
{code_to_review}

Please check for:
- Correctness
- Edge cases
- Performance
- Best practices
"""

response = model.generate_content(prompt)
print(response.text)
```

### Code Explanation
```python
complex_code = """
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)
"""

prompt = f"""
Explain this code step by step:
{complex_code}

Include:
- What algorithm is implemented
- How it works
- Time complexity
- Space complexity
"""

response = model.generate_content(prompt)
print(response.text)
```

## Multimodal Capabilities

### Image Analysis
```python
import google.generativeai as genai
from PIL import Image

genai.configure(api_key="your-api-key")
model = genai.GenerativeModel('gemini-pro-vision')

# Load image
image = Image.open('path/to/image.jpg')

# Analyze image
response = model.generate_content([
    "What objects do you see in this image?",
    image
])
print(response.text)
```

### Image and Text
```python
import google.generativeai as genai

genai.configure(api_key="your-api-key")
model = genai.GenerativeModel('gemini-pro-vision')

# Multiple inputs
response = model.generate_content([
    "Describe the architectural style of this building",
    "Focus on the key design elements",
    image
])
print(response.text)
```

### Document Analysis
```python
import google.generativeai as genai

genai.configure(api_key="your-api-key")
model = genai.GenerativeModel('gemini-pro-vision')

# Analyze document/chart
response = model.generate_content([
    "Extract the key information from this document",
    "Format as bullet points",
    document_image
])
print(response.text)
```

## Configuration Options

### Generation Parameters
```python
import google.generativeai as genai

genai.configure(api_key="your-api-key")
model = genai.GenerativeModel('gemini-pro')

# Configure generation
generation_config = genai.types.GenerationConfig(
    candidate_count=1,          # Number of responses
    max_output_tokens=2048,     # Maximum tokens
    temperature=0.7,            # Creativity (0.0-1.0)
    top_p=0.8,                 # Nucleus sampling
    top_k=40                   # Top-k sampling
)

response = model.generate_content(
    "Write a creative story",
    generation_config=generation_config
)
```

### Safety Settings
```python
import google.generativeai as genai

genai.configure(api_key="your-api-key")

# Safety settings
safety_settings = [
    {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    }
]

model = genai.GenerativeModel(
    'gemini-pro',
    safety_settings=safety_settings
)
```

## Advanced Usage

### Function Calling
```python
import google.generativeai as genai

genai.configure(api_key="your-api-key")

# Define function
def get_weather(location):
    """Get weather information for a location"""
    # Mock weather data
    return f"The weather in {location} is sunny, 25°C"

# Create function schema
weather_function = genai.protos.FunctionDeclaration(
    name="get_weather",
    description="Get weather information for a location",
    parameters=genai.protos.Schema(
        type=genai.protos.Type.OBJECT,
        properties={
            "location": genai.protos.Schema(
                type=genai.protos.Type.STRING,
                description="The location to get weather for"
            )
        },
        required=["location"]
    )
)

# Use function with model
tool = genai.protos.Tool(
    function_declarations=[weather_function]
)

model = genai.GenerativeModel('gemini-pro', tools=[tool])
response = model.generate_content("What's the weather like in Tokyo?")
```

### Batch Processing
```python
import google.generativeai as genai
import asyncio

genai.configure(api_key="your-api-key")
model = genai.GenerativeModel('gemini-pro')

async def process_batch(prompts):
    tasks = []
    for prompt in prompts:
        tasks.append(model.generate_content_async(prompt))
    
    results = await asyncio.gather(*tasks)
    return results

# Process multiple prompts
prompts = [
    "Explain photosynthesis",
    "What is quantum computing?",
    "Describe machine learning"
]

results = asyncio.run(process_batch(prompts))
for result in results:
    print(result.text)
```

## Error Handling

### Common Errors
```python
import google.generativeai as genai
from google.generativeai.types import GenerationConfig

genai.configure(api_key="your-api-key")
model = genai.GenerativeModel('gemini-pro')

try:
    response = model.generate_content("Generate content")
    print(response.text)
    
except genai.types.BlockedPromptException as e:
    print(f"Prompt was blocked: {e}")
    
except genai.types.StopCandidateException as e:
    print(f"Candidate was stopped: {e}")
    
except Exception as e:
    print(f"Error: {e}")
```

### Retry Logic
```python
import google.generativeai as genai
import time

def generate_with_retry(prompt, max_retries=3):
    for attempt in range(max_retries):
        try:
            response = model.generate_content(prompt)
            return response.text
        except Exception as e:
            if attempt == max_retries - 1:
                raise e
            time.sleep(2 ** attempt)  # Exponential backoff
    
    return None
```

## Integration Examples

### CLI Tool
```bash
#!/bin/bash
# gemini-cli.sh

if [ -z "$GOOGLE_API_KEY" ]; then
    echo "Error: GOOGLE_API_KEY not set"
    exit 1
fi

PROMPT="$1"
if [ -z "$PROMPT" ]; then
    echo "Usage: $0 'your prompt here'"
    exit 1
fi

curl -s -X POST \
  -H "Content-Type: application/json" \
  -H "x-goog-api-key: $GOOGLE_API_KEY" \
  -d "{\"contents\": [{\"parts\": [{\"text\": \"$PROMPT\"}]}]}" \
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent" | \
  jq -r '.candidates[0].content.parts[0].text'
```

### Python CLI
```python
#!/usr/bin/env python3
import sys
import google.generativeai as genai
import os

def main():
    if len(sys.argv) < 2:
        print("Usage: python gemini-cli.py 'your prompt here'")
        sys.exit(1)
    
    api_key = os.getenv('GOOGLE_API_KEY')
    if not api_key:
        print("Error: GOOGLE_API_KEY not set")
        sys.exit(1)
    
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel('gemini-pro')
    
    prompt = ' '.join(sys.argv[1:])
    
    try:
        response = model.generate_content(prompt)
        print(response.text)
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == '__main__':
    main()
```

### Web Interface
```python
from flask import Flask, request, jsonify
import google.generativeai as genai

app = Flask(__name__)

genai.configure(api_key=os.getenv('GOOGLE_API_KEY'))
model = genai.GenerativeModel('gemini-pro')

@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    prompt = data.get('prompt')
    
    if not prompt:
        return jsonify({'error': 'No prompt provided'}), 400
    
    try:
        response = model.generate_content(prompt)
        return jsonify({'response': response.text})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
```

## Use Cases

### Content Creation
```python
import google.generativeai as genai

genai.configure(api_key="your-api-key")
model = genai.GenerativeModel('gemini-pro')

# Blog post generation
prompt = """
Write a blog post about sustainable technology.
Target audience: General public
Length: 800 words
Tone: Informative and engaging
Include: Examples, benefits, and future outlook
"""

response = model.generate_content(prompt)
print(response.text)
```

### Code Documentation
```python
code = """
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
"""

prompt = f"""
Generate comprehensive documentation for this function:
{code}

Include:
- Function description
- Parameters with types
- Return value
- Examples
- Time complexity
- Space complexity
"""

response = model.generate_content(prompt)
print(response.text)
```

### Data Analysis
```python
data = """
Sales data for Q1 2024:
January: $125,000
February: $110,000
March: $135,000
"""

prompt = f"""
Analyze this sales data:
{data}

Provide:
1. Summary statistics
2. Trends and patterns
3. Insights and recommendations
4. Predictions for Q2
"""

response = model.generate_content(prompt)
print(response.text)
```

## Best Practices

### Prompt Engineering
```python
# Good prompt structure
prompt = """
Role: You are a senior software engineer
Task: Review this code for security vulnerabilities
Context: This is a web application handling user input
Format: Provide numbered list with severity levels
Code: [paste code here]
"""

# Use specific instructions
prompt = """
Generate a Python function that:
1. Takes a list of integers as input
2. Returns the median value
3. Handles empty lists by returning None
4. Includes proper type hints
5. Has comprehensive docstring
"""
```

### Error Handling
```python
import google.generativeai as genai

def safe_generate(prompt, max_retries=3):
    for attempt in range(max_retries):
        try:
            response = model.generate_content(prompt)
            if response.text:
                return response.text
            else:
                print("Empty response received")
                return None
        except Exception as e:
            print(f"Attempt {attempt + 1} failed: {e}")
            if attempt < max_retries - 1:
                time.sleep(2 ** attempt)
    
    return None
```

### Rate Limiting
```python
import time
import google.generativeai as genai

class RateLimitedGemini:
    def __init__(self, requests_per_minute=60):
        self.requests_per_minute = requests_per_minute
        self.min_interval = 60 / requests_per_minute
        self.last_request_time = 0
        
        genai.configure(api_key="your-api-key")
        self.model = genai.GenerativeModel('gemini-pro')
    
    def generate_content(self, prompt):
        # Rate limiting
        current_time = time.time()
        time_since_last = current_time - self.last_request_time
        
        if time_since_last < self.min_interval:
            time.sleep(self.min_interval - time_since_last)
        
        self.last_request_time = time.time()
        return self.model.generate_content(prompt)
```

## Quick Reference

### Basic Commands
```bash
# Set API key
export GOOGLE_API_KEY="your-api-key"

# Simple generation
curl -X POST -H "Content-Type: application/json" \
  -H "x-goog-api-key: $GOOGLE_API_KEY" \
  -d '{"contents": [{"parts": [{"text": "Hello"}]}]}' \
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent"
```

### Python SDK
```python
import google.generativeai as genai

genai.configure(api_key="your-api-key")
model = genai.GenerativeModel('gemini-pro')
response = model.generate_content("Your prompt here")
print(response.text)
```

### Available Models
```
gemini-pro          # Text generation
gemini-pro-vision   # Text + image understanding
```

### Configuration Options
```python
generation_config = genai.types.GenerationConfig(
    temperature=0.7,        # Creativity
    max_output_tokens=1000, # Response length
    top_p=0.8,             # Nucleus sampling
    top_k=40               # Top-k sampling
)
```

## See Also

- [Google AI Studio](https://aistudio.google.com/) - Web interface
- [Gemini API Documentation](https://ai.google.dev/docs) - Official API docs
- [Google AI Python SDK](https://github.com/google/generative-ai-python) - Python client
- [Vertex AI](https://cloud.google.com/vertex-ai) - Enterprise AI platform
- [Model Garden](https://console.cloud.google.com/vertex-ai/model-garden) - Available models