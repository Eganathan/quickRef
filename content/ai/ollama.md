---
title: "Ollama"
date: 2024-01-01T00:00:00Z
draft: false
description: "Run large language models locally with Ollama - installation, model management, and API usage guide."
categories: ["ai"]
tags: ["ollama", "llm", "local-ai", "cli", "api", "machine-learning"]
---

## Overview

Ollama is a lightweight, extensible framework for building and running large language models locally. It provides a simple API for creating, running, and managing LLMs, and supports various models like Llama 2, Code Llama, and other open-source models.

## Installation

### macOS
```bash
# Using Homebrew
brew install ollama

# Or download from website
curl -fsSL https://ollama.com/install.sh | sh

# Start Ollama service
ollama serve
```

### Linux
```bash
# Install script
curl -fsSL https://ollama.com/install.sh | sh

# Manual installation
wget https://ollama.com/download/ollama-linux-amd64
chmod +x ollama-linux-amd64
sudo mv ollama-linux-amd64 /usr/local/bin/ollama

# Start as service
sudo systemctl start ollama
sudo systemctl enable ollama
```

### Windows
```bash
# Download from https://ollama.com/download/windows
# Or use PowerShell
Invoke-WebRequest -Uri "https://ollama.com/download/ollama-windows-amd64.exe" -OutFile "ollama.exe"
```

### Docker
```bash
# Pull and run
docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama

# With GPU support
docker run -d --gpus=all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```

## Basic Usage

### Running Models
```bash
# Run a model interactively
ollama run llama2

# Run with specific version
ollama run llama2:7b

# Run with custom parameters
ollama run llama2 --verbose
```

### Model Management
```bash
# List available models
ollama list

# Pull/download a model
ollama pull llama2
ollama pull codellama:7b

# Show model information
ollama show llama2

# Remove a model
ollama rm llama2
```

### Basic Chat
```bash
# Interactive chat
ollama run llama2
>>> Hello! How are you?
>>> /bye

# Single query
echo "What is the capital of France?" | ollama run llama2

# From file
ollama run llama2 < input.txt
```

## Available Models

### Text Generation
```bash
# Meta Llama 2
ollama pull llama2          # 7B parameters
ollama pull llama2:13b      # 13B parameters
ollama pull llama2:70b      # 70B parameters

# Code Llama
ollama pull codellama       # 7B parameters
ollama pull codellama:13b   # 13B parameters
ollama pull codellama:34b   # 34B parameters

# Mistral
ollama pull mistral         # 7B parameters
ollama pull mistral:instruct

# Orca Mini
ollama pull orca-mini       # 3B parameters
ollama pull orca-mini:7b    # 7B parameters
```

### Specialized Models
```bash
# Neural Chat
ollama pull neural-chat

# Zephyr
ollama pull zephyr

# Vicuna
ollama pull vicuna
ollama pull vicuna:13b

# Dolphin
ollama pull dolphin-mistral
```

### Model Variants
```bash
# Instruction-tuned models
ollama pull llama2:7b-chat
ollama pull codellama:7b-instruct

# Quantized models (smaller, faster)
ollama pull llama2:7b-q4_0
ollama pull llama2:7b-q8_0

# Uncensored models
ollama pull llama2-uncensored
```

## API Usage

### REST API
```bash
# Default endpoint
curl -X POST http://localhost:11434/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama2",
    "prompt": "Why is the sky blue?",
    "stream": false
  }'

# Streaming response
curl -X POST http://localhost:11434/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama2",
    "prompt": "Tell me a story",
    "stream": true
  }'
```

### Chat API
```bash
# Chat completion
curl -X POST http://localhost:11434/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama2",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'

# Multi-turn conversation
curl -X POST http://localhost:11434/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama2",
    "messages": [
      {"role": "user", "content": "What is 2+2?"},
      {"role": "assistant", "content": "2+2 equals 4."},
      {"role": "user", "content": "What about 3+3?"}
    ]
  }'
```

### Model Management API
```bash
# List models
curl http://localhost:11434/api/tags

# Pull model
curl -X POST http://localhost:11434/api/pull \
  -H "Content-Type: application/json" \
  -d '{"name": "llama2"}'

# Delete model
curl -X DELETE http://localhost:11434/api/delete \
  -H "Content-Type: application/json" \
  -d '{"name": "llama2"}'
```

## Configuration

### Model Parameters
```bash
# Temperature (randomness)
ollama run llama2 --temperature 0.7

# Top-k sampling
ollama run llama2 --top_k 40

# Top-p sampling
ollama run llama2 --top_p 0.9

# Context length
ollama run llama2 --num_ctx 2048

# Repeat penalty
ollama run llama2 --repeat_penalty 1.1
```

### System Configuration
```bash
# Set environment variables
export OLLAMA_HOST=0.0.0.0:11434
export OLLAMA_MODELS=/path/to/models

# GPU configuration
export OLLAMA_GPU_LAYERS=32
export OLLAMA_NUM_PARALLEL=2

# Memory settings
export OLLAMA_MAX_VRAM=8GB
```

## Advanced Usage

### Custom Models
```bash
# Create Modelfile
cat > Modelfile << 'EOF'
FROM llama2

# Set parameters
PARAMETER temperature 0.8
PARAMETER top_p 0.9

# Set system message
SYSTEM You are a helpful assistant.

# Set template
TEMPLATE """{{ if .System }}{{ .System }}{{ end }}{{ if .Prompt }}{{ .Prompt }}{{ end }}"""
EOF

# Create model
ollama create mymodel -f Modelfile
```

### Model Customization
```bash
# Modelfile example
FROM llama2:7b

# Set custom parameters
PARAMETER temperature 0.7
PARAMETER top_k 50
PARAMETER top_p 0.95
PARAMETER repeat_penalty 1.05

# Set system prompt
SYSTEM """
You are a coding assistant. You help users write, debug, and optimize code.
Always provide explanations for your code suggestions.
"""

# Custom template
TEMPLATE """
### Instruction:
{{ .Prompt }}

### Response:
"""
```

### Fine-tuning
```bash
# Using adapters
FROM llama2:7b
ADAPTER ./my-adapter.bin

# With custom training data
FROM llama2:7b
DATASET ./training-data.jsonl
```

## Python Integration

### Basic Usage
```python
import requests
import json

def query_ollama(prompt, model="llama2"):
    url = "http://localhost:11434/api/generate"
    payload = {
        "model": model,
        "prompt": prompt,
        "stream": False
    }
    
    response = requests.post(url, json=payload)
    return response.json()["response"]

# Usage
result = query_ollama("What is Python?")
print(result)
```

### Streaming Responses
```python
import requests
import json

def stream_ollama(prompt, model="llama2"):
    url = "http://localhost:11434/api/generate"
    payload = {
        "model": model,
        "prompt": prompt,
        "stream": True
    }
    
    response = requests.post(url, json=payload, stream=True)
    
    for line in response.iter_lines():
        if line:
            chunk = json.loads(line)
            if "response" in chunk:
                print(chunk["response"], end="", flush=True)
```

### Chat Interface
```python
import requests
import json

class OllamaChat:
    def __init__(self, model="llama2"):
        self.model = model
        self.messages = []
        self.url = "http://localhost:11434/api/chat"
    
    def send_message(self, message):
        self.messages.append({"role": "user", "content": message})
        
        payload = {
            "model": self.model,
            "messages": self.messages,
            "stream": False
        }
        
        response = requests.post(self.url, json=payload)
        assistant_message = response.json()["message"]["content"]
        
        self.messages.append({"role": "assistant", "content": assistant_message})
        return assistant_message

# Usage
chat = OllamaChat()
response = chat.send_message("Hello!")
print(response)
```

## JavaScript Integration

### Node.js
```javascript
const axios = require('axios');

async function queryOllama(prompt, model = 'llama2') {
    try {
        const response = await axios.post('http://localhost:11434/api/generate', {
            model: model,
            prompt: prompt,
            stream: false
        });
        
        return response.data.response;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}

// Usage
queryOllama('What is JavaScript?')
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

### Browser (with CORS)
```javascript
async function queryOllama(prompt, model = 'llama2') {
    const response = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: model,
            prompt: prompt,
            stream: false
        })
    });
    
    const data = await response.json();
    return data.response;
}
```

## Performance Optimization

### Hardware Optimization
```bash
# GPU acceleration
export OLLAMA_GPU_LAYERS=32
export OLLAMA_GPU_MEMORY_FRACTION=0.8

# CPU optimization
export OLLAMA_NUM_THREAD=8
export OLLAMA_USE_MMAP=1

# Memory optimization
export OLLAMA_MAX_QUEUE=4
export OLLAMA_MAX_VRAM=8GB
```

### Model Selection
```bash
# For speed (smaller models)
ollama pull llama2:7b-q4_0    # 4-bit quantized
ollama pull orca-mini:3b      # Smaller model

# For quality (larger models)
ollama pull llama2:13b        # Better quality
ollama pull codellama:34b     # Best for code

# Balanced approach
ollama pull llama2:7b-q8_0    # 8-bit quantized
```

### Batch Processing
```bash
# Process multiple inputs
cat inputs.txt | while read line; do
    echo "$line" | ollama run llama2 --stream false
done

# Parallel processing
cat inputs.txt | xargs -P 4 -I {} ollama run llama2 "{}"
```

## Use Cases

### Code Generation
```bash
# Code completion
ollama run codellama "def fibonacci(n):"

# Code explanation
ollama run codellama "Explain this code: [paste code]"

# Debugging
ollama run codellama "Debug this Python error: [paste error]"
```

### Content Creation
```bash
# Blog writing
ollama run llama2 "Write a blog post about artificial intelligence"

# Technical documentation
ollama run llama2 "Create API documentation for a REST endpoint"

# Creative writing
ollama run llama2 "Write a short story about time travel"
```

### Data Analysis
```bash
# SQL generation
ollama run codellama "Generate SQL query to find top customers"

# Data interpretation
ollama run llama2 "Analyze this data: [paste data]"

# Report generation
ollama run llama2 "Create a summary report from this data"
```

## Troubleshooting

### Common Issues
```bash
# Model not found
ollama pull llama2  # Download the model first

# Service not running
ollama serve  # Start the service

# Port already in use
export OLLAMA_HOST=0.0.0.0:11435
ollama serve

# Out of memory
export OLLAMA_MAX_VRAM=4GB
ollama run llama2:7b-q4_0  # Use smaller model
```

### Performance Issues
```bash
# Check GPU usage
nvidia-smi  # For NVIDIA GPUs

# Monitor memory
ollama ps  # Show running models
ollama stop llama2  # Stop model to free memory

# Optimize settings
export OLLAMA_NUM_PARALLEL=1  # Reduce parallel requests
export OLLAMA_GPU_LAYERS=16   # Reduce GPU layers
```

### Debugging
```bash
# Verbose logging
ollama run llama2 --verbose

# Debug mode
export OLLAMA_DEBUG=1
ollama serve

# Check logs
tail -f ~/.ollama/logs/server.log
```

## Best Practices

### Model Selection
```bash
# For development/testing
ollama pull orca-mini:3b      # Fast, small

# For production
ollama pull llama2:7b-q8_0    # Balanced quality/speed

# For specialized tasks
ollama pull codellama:13b     # Code generation
ollama pull mistral:instruct  # Instruction following
```

### Performance Tips
```bash
# Preload models
ollama run llama2 <<< "warmup"

# Use quantized models
ollama pull llama2:7b-q4_0

# Optimize context length
ollama run llama2 --num_ctx 1024  # Smaller context

# Batch similar requests
# Process multiple similar queries together
```

### Security
```bash
# Bind to localhost only
export OLLAMA_HOST=127.0.0.1:11434

# Use firewall rules
sudo ufw allow from 192.168.1.0/24 to any port 11434

# Monitor resource usage
htop  # Check CPU/memory usage
```

## Integration Examples

### Shell Scripts
```bash
#!/bin/bash
# AI-powered commit message generator
git_diff=$(git diff --cached)
commit_msg=$(echo "Generate a commit message for this diff: $git_diff" | ollama run llama2 --stream false)
echo "Suggested commit message: $commit_msg"
```

### Web Applications
```javascript
// Express.js endpoint
app.post('/api/chat', async (req, res) => {
    const { message } = req.body;
    
    try {
        const response = await axios.post('http://localhost:11434/api/generate', {
            model: 'llama2',
            prompt: message,
            stream: false
        });
        
        res.json({ response: response.data.response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
```

## Quick Reference

### Essential Commands
```bash
ollama serve           # Start service
ollama run <model>     # Run model interactively
ollama list            # List installed models
ollama pull <model>    # Download model
ollama rm <model>      # Remove model
ollama ps              # Show running models
ollama stop <model>    # Stop model
```

### API Endpoints
```bash
POST /api/generate     # Generate text
POST /api/chat         # Chat completion
POST /api/pull         # Pull model
GET /api/tags          # List models
DELETE /api/delete     # Delete model
```

### Environment Variables
```bash
OLLAMA_HOST           # Server host/port
OLLAMA_MODELS         # Models directory
OLLAMA_GPU_LAYERS     # GPU layers
OLLAMA_NUM_PARALLEL   # Parallel requests
OLLAMA_MAX_VRAM       # Maximum VRAM
```

## See Also

- [Ollama GitHub](https://github.com/ollama/ollama) - Source code and documentation
- [Ollama Library](https://ollama.com/library) - Available models
- [Ollama API Documentation](https://github.com/ollama/ollama/blob/main/docs/api.md) - API reference
- [Langchain Ollama](https://python.langchain.com/docs/integrations/llms/ollama) - Integration guide
- [Model Cards](https://huggingface.co/models) - Model information on Hugging Face