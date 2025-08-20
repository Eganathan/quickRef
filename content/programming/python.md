---
title: "Python"
date: 2023-01-01T00:00:00Z
draft: false
description: "Python programming language reference covering syntax, data structures, libraries, and best practices."
categories: ["programming"]
tags: ["python", "programming", "scripting", "data-science", "web-development"]
---

## Overview

Python is a high-level, interpreted programming language known for its simplicity and readability. It's widely used for web development, data science, automation, artificial intelligence, and rapid prototyping.

## Installation

### Python Installation
```bash
# Ubuntu/Debian
sudo apt install python3 python3-pip

# macOS
brew install python3

# Windows
# Download from https://python.org/downloads/

# Check version
python3 --version
pip3 --version
```

### Package Management
```bash
# Install package
pip install package_name

# Install specific version
pip install package_name==1.2.3

# Install from requirements file
pip install -r requirements.txt

# List installed packages
pip list

# Create virtual environment
python3 -m venv myenv
source myenv/bin/activate  # Linux/Mac
myenv\Scripts\activate     # Windows
```

## Basic Syntax

### Hello World
```python
print("Hello, World!")

# Multi-line string
message = """
This is a
multi-line string
"""
print(message)
```

### Running Python
```bash
# Interactive mode
python3

# Run script
python3 script.py

# Run module
python3 -m module_name

# One-liner
python3 -c "print('Hello, World!')"
```

## Data Types

### Basic Types
```python
# Numbers
integer = 42
float_num = 3.14
complex_num = 3 + 4j

# String
text = "Hello, World!"
multiline = """Line 1
Line 2
Line 3"""

# Boolean
flag = True
is_valid = False

# None
value = None
```

### Type Checking
```python
# Type function
print(type(42))        # <class 'int'>
print(type(3.14))      # <class 'float'>
print(type("hello"))   # <class 'str'>

# isinstance function
print(isinstance(42, int))      # True
print(isinstance(3.14, float))  # True
print(isinstance("hello", str)) # True
```

### Type Conversion
```python
# String to number
num = int("123")
float_num = float("3.14")

# Number to string
text = str(123)
text = str(3.14)

# List to string
numbers = [1, 2, 3]
text = str(numbers)
joined = ", ".join(map(str, numbers))
```

## Variables and Constants

### Variable Assignment
```python
# Basic assignment
x = 10
y = 20

# Multiple assignment
a, b, c = 1, 2, 3
x = y = z = 0

# Swapping
a, b = b, a

# Unpacking
numbers = [1, 2, 3]
first, second, third = numbers
```

### Constants (Convention)
```python
# Constants are uppercase by convention
PI = 3.14159
MAX_SIZE = 1000
API_URL = "https://api.example.com"

# Use enum for related constants
from enum import Enum

class Status(Enum):
    PENDING = 1
    APPROVED = 2
    REJECTED = 3
```

## Strings

### String Operations
```python
# String creation
name = "John"
greeting = 'Hello'
template = f"Hello, {name}!"

# String methods
text = "Hello, World!"
print(text.upper())        # HELLO, WORLD!
print(text.lower())        # hello, world!
print(text.title())        # Hello, World!
print(text.replace("World", "Python"))  # Hello, Python!
print(text.split(","))     # ['Hello', ' World!']
print(text.strip())        # Remove whitespace
print(text.startswith("Hello"))  # True
print(text.endswith("!"))  # True
```

### String Formatting
```python
name = "Alice"
age = 30

# f-strings (Python 3.6+)
message = f"My name is {name} and I'm {age} years old"

# format method
message = "My name is {} and I'm {} years old".format(name, age)
message = "My name is {name} and I'm {age} years old".format(name=name, age=age)

# % formatting (older style)
message = "My name is %s and I'm %d years old" % (name, age)

# Advanced formatting
number = 3.14159
formatted = f"{number:.2f}"  # 3.14
```

### String Indexing and Slicing
```python
text = "Python"

# Indexing
print(text[0])     # P
print(text[-1])    # n

# Slicing
print(text[1:4])   # yth
print(text[:3])    # Pyt
print(text[2:])    # thon
print(text[::-1])  # nohtyP (reverse)
```

## Data Structures

### Lists
```python
# List creation
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
empty = []

# List methods
numbers.append(6)           # Add to end
numbers.insert(0, 0)        # Insert at index
numbers.remove(3)           # Remove first occurrence
popped = numbers.pop()      # Remove and return last
numbers.extend([7, 8])      # Add multiple items
numbers.sort()              # Sort in place
numbers.reverse()           # Reverse in place

# List comprehension
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]
```

### Tuples
```python
# Tuple creation
coordinates = (10, 20)
single = (42,)  # Single element tuple
empty = ()

# Tuple unpacking
x, y = coordinates

# Named tuples
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(10, 20)
print(p.x, p.y)
```

### Dictionaries
```python
# Dictionary creation
person = {"name": "John", "age": 30, "city": "New York"}
empty = {}

# Dictionary methods
person["email"] = "john@example.com"  # Add/update
age = person.get("age", 0)            # Get with default
person.pop("city")                    # Remove and return
person.update({"country": "USA"})     # Update multiple

# Dictionary comprehension
squares = {x: x**2 for x in range(5)}
filtered = {k: v for k, v in person.items() if v != "John"}

# Iteration
for key in person:
    print(key, person[key])

for key, value in person.items():
    print(key, value)
```

### Sets
```python
# Set creation
numbers = {1, 2, 3, 4, 5}
empty = set()

# Set operations
numbers.add(6)          # Add element
numbers.remove(3)       # Remove element (raises error if not found)
numbers.discard(3)      # Remove element (no error if not found)

# Set operations
set1 = {1, 2, 3}
set2 = {3, 4, 5}
union = set1 | set2           # {1, 2, 3, 4, 5}
intersection = set1 & set2    # {3}
difference = set1 - set2      # {1, 2}
```

## Control Structures

### Conditionals
```python
# if-elif-else
x = 10
if x > 0:
    print("Positive")
elif x < 0:
    print("Negative")
else:
    print("Zero")

# Ternary operator
result = "positive" if x > 0 else "not positive"

# Multiple conditions
if x > 0 and x < 100:
    print("Between 0 and 100")

if x < 0 or x > 100:
    print("Outside range")
```

### Loops
```python
# for loop
for i in range(5):
    print(i)

# for loop with list
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(fruit)

# for loop with index
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")

# while loop
count = 0
while count < 5:
    print(count)
    count += 1

# Loop control
for i in range(10):
    if i == 3:
        continue    # Skip iteration
    if i == 7:
        break       # Exit loop
    print(i)
```

### Loop Patterns
```python
# Loop with else
for i in range(5):
    if i == 10:
        break
else:
    print("Loop completed normally")

# Nested loops
for i in range(3):
    for j in range(3):
        print(f"({i}, {j})")

# Dictionary iteration
person = {"name": "John", "age": 30}
for key, value in person.items():
    print(f"{key}: {value}")
```

## Functions

### Function Definition
```python
# Basic function
def greet(name):
    return f"Hello, {name}!"

# Function with default parameters
def greet(name="World"):
    return f"Hello, {name}!"

# Function with multiple parameters
def add(a, b):
    return a + b

# Function with variable arguments
def sum_all(*args):
    return sum(args)

# Function with keyword arguments
def create_profile(**kwargs):
    return kwargs

# Mixed arguments
def process_data(required, *args, **kwargs):
    print(f"Required: {required}")
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")
```

### Lambda Functions
```python
# Lambda function
square = lambda x: x**2
add = lambda x, y: x + y

# Lambda with higher-order functions
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))
```

### Decorators
```python
# Simple decorator
def my_decorator(func):
    def wrapper():
        print("Before function")
        result = func()
        print("After function")
        return result
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

# Decorator with arguments
def timing_decorator(func):
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.2f} seconds")
        return result
    return wrapper

@timing_decorator
def slow_function():
    time.sleep(1)
    return "Done"
```

## Object-Oriented Programming

### Classes and Objects
```python
class Person:
    # Class variable
    species = "Homo sapiens"
    
    # Constructor
    def __init__(self, name, age):
        self.name = name    # Instance variable
        self.age = age
    
    # Instance method
    def greet(self):
        return f"Hello, I'm {self.name}"
    
    # Class method
    @classmethod
    def create_child(cls, name):
        return cls(name, 0)
    
    # Static method
    @staticmethod
    def is_adult(age):
        return age >= 18
    
    # String representation
    def __str__(self):
        return f"Person(name={self.name}, age={self.age})"

# Usage
person = Person("Alice", 30)
print(person.greet())
print(person)
```

### Inheritance
```python
# Base class
class Animal:
    def __init__(self, name):
        self.name = name
    
    def make_sound(self):
        pass
    
    def info(self):
        return f"I am {self.name}"

# Derived class
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)  # Call parent constructor
        self.breed = breed
    
    def make_sound(self):
        return "Woof!"
    
    def info(self):
        return f"{super().info()} and I'm a {self.breed}"

# Usage
dog = Dog("Buddy", "Golden Retriever")
print(dog.info())
print(dog.make_sound())
```

### Properties and Magic Methods
```python
class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def radius(self):
        return self._radius
    
    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value
    
    @property
    def area(self):
        return 3.14159 * self._radius ** 2
    
    # Magic methods
    def __str__(self):
        return f"Circle(radius={self.radius})"
    
    def __repr__(self):
        return f"Circle({self.radius})"
    
    def __eq__(self, other):
        return self.radius == other.radius
    
    def __lt__(self, other):
        return self.radius < other.radius

# Usage
circle = Circle(5)
print(circle.area)
circle.radius = 10
print(circle)
```

## Error Handling

### Try-Except
```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
except ValueError as e:
    print(f"Value error: {e}")
except Exception as e:
    print(f"General error: {e}")
else:
    print("No error occurred")
finally:
    print("This always runs")
```

### Custom Exceptions
```python
class CustomError(Exception):
    def __init__(self, message):
        self.message = message
        super().__init__(self.message)

def validate_age(age):
    if age < 0:
        raise CustomError("Age cannot be negative")
    if age > 150:
        raise CustomError("Age seems unrealistic")
    return age

# Usage
try:
    validate_age(-5)
except CustomError as e:
    print(e.message)
```

## File I/O

### Reading Files
```python
# Read entire file
with open('file.txt', 'r') as f:
    content = f.read()

# Read line by line
with open('file.txt', 'r') as f:
    for line in f:
        print(line.strip())

# Read all lines
with open('file.txt', 'r') as f:
    lines = f.readlines()

# Read with error handling
try:
    with open('file.txt', 'r') as f:
        content = f.read()
except FileNotFoundError:
    print("File not found")
except IOError:
    print("Error reading file")
```

### Writing Files
```python
# Write to file
with open('output.txt', 'w') as f:
    f.write("Hello, World!\n")
    f.write("Second line\n")

# Append to file
with open('output.txt', 'a') as f:
    f.write("Appended line\n")

# Write list to file
lines = ["Line 1\n", "Line 2\n", "Line 3\n"]
with open('output.txt', 'w') as f:
    f.writelines(lines)
```

### JSON Files
```python
import json

# Write JSON
data = {"name": "John", "age": 30, "city": "New York"}
with open('data.json', 'w') as f:
    json.dump(data, f, indent=2)

# Read JSON
with open('data.json', 'r') as f:
    data = json.load(f)

# JSON strings
json_string = json.dumps(data)
data = json.loads(json_string)
```

## Modules and Packages

### Importing
```python
# Import entire module
import math
print(math.sqrt(16))

# Import specific functions
from math import sqrt, pi
print(sqrt(16))

# Import with alias
import numpy as np
import pandas as pd

# Import all (not recommended)
from math import *
```

### Creating Modules
```python
# utils.py
def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

# main.py
import utils
result = utils.add(5, 3)

# Or
from utils import add, multiply
result = add(5, 3)
```

### Package Structure
```
mypackage/
    __init__.py
    module1.py
    module2.py
    subpackage/
        __init__.py
        submodule.py
```

## Standard Library

### Common Modules
```python
# os - Operating system interface
import os
current_dir = os.getcwd()
os.mkdir('new_directory')
os.remove('file.txt')

# sys - System-specific parameters
import sys
print(sys.version)
sys.exit(0)

# datetime - Date and time handling
from datetime import datetime, date, timedelta
now = datetime.now()
today = date.today()
future = now + timedelta(days=7)

# random - Random number generation
import random
random_int = random.randint(1, 10)
random_choice = random.choice(['apple', 'banana', 'orange'])
random.shuffle(my_list)

# collections - Specialized container datatypes
from collections import Counter, defaultdict, deque
counter = Counter(['a', 'b', 'a', 'c', 'b', 'a'])
dd = defaultdict(list)
queue = deque([1, 2, 3])
```

### Regular Expressions
```python
import re

# Match patterns
pattern = r'\d+'
text = "I have 5 apples and 3 oranges"
matches = re.findall(pattern, text)  # ['5', '3']

# Replace patterns
new_text = re.sub(r'\d+', 'X', text)  # "I have X apples and X oranges"

# Search and groups
pattern = r'(\w+)@(\w+\.\w+)'
email = "user@example.com"
match = re.search(pattern, email)
if match:
    username = match.group(1)
    domain = match.group(2)
```

## List Comprehensions and Generators

### List Comprehensions
```python
# Basic list comprehension
squares = [x**2 for x in range(10)]

# With condition
evens = [x for x in range(20) if x % 2 == 0]

# Nested comprehension
matrix = [[i*j for j in range(3)] for i in range(3)]

# Dictionary comprehension
word_lengths = {word: len(word) for word in ['hello', 'world', 'python']}

# Set comprehension
unique_lengths = {len(word) for word in ['hello', 'world', 'python']}
```

### Generators
```python
# Generator function
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

# Usage
fib = fibonacci(10)
for num in fib:
    print(num)

# Generator expression
squares = (x**2 for x in range(10))
print(list(squares))
```

## Advanced Features

### Context Managers
```python
# Custom context manager
class FileManager:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        self.file = None
    
    def __enter__(self):
        self.file = open(self.filename, self.mode)
        return self.file
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.file:
            self.file.close()

# Usage
with FileManager('test.txt', 'w') as f:
    f.write('Hello, World!')

# Using contextlib
from contextlib import contextmanager

@contextmanager
def timer():
    import time
    start = time.time()
    yield
    end = time.time()
    print(f"Time elapsed: {end - start:.2f} seconds")

# Usage
with timer():
    # Some time-consuming operation
    time.sleep(1)
```

### Iterators
```python
class Counter:
    def __init__(self, max_count):
        self.max_count = max_count
        self.count = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.count < self.max_count:
            self.count += 1
            return self.count
        else:
            raise StopIteration

# Usage
counter = Counter(3)
for num in counter:
    print(num)  # 1, 2, 3
```

## Popular Libraries

### NumPy
```python
import numpy as np

# Create arrays
arr = np.array([1, 2, 3, 4, 5])
matrix = np.array([[1, 2], [3, 4]])
zeros = np.zeros((3, 3))
ones = np.ones((2, 2))

# Array operations
result = arr * 2
dot_product = np.dot(matrix, matrix)
```

### Pandas
```python
import pandas as pd

# Create DataFrame
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'city': ['New York', 'London', 'Tokyo']
})

# DataFrame operations
filtered = df[df['age'] > 25]
grouped = df.groupby('city').mean()
```

### Requests
```python
import requests

# GET request
response = requests.get('https://api.example.com/data')
if response.status_code == 200:
    data = response.json()

# POST request
payload = {'key': 'value'}
response = requests.post('https://api.example.com/create', json=payload)
```

## Testing

### Unit Testing
```python
import unittest

class TestMathFunctions(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(2, 3), 5)
        self.assertEqual(add(-1, 1), 0)
    
    def test_divide(self):
        self.assertEqual(divide(10, 2), 5)
        with self.assertRaises(ZeroDivisionError):
            divide(10, 0)
    
    def setUp(self):
        # Run before each test
        self.calculator = Calculator()
    
    def tearDown(self):
        # Run after each test
        pass

if __name__ == '__main__':
    unittest.main()
```

### Pytest
```python
import pytest

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0

def test_divide():
    assert divide(10, 2) == 5
    with pytest.raises(ZeroDivisionError):
        divide(10, 0)

# Fixtures
@pytest.fixture
def sample_data():
    return [1, 2, 3, 4, 5]

def test_sum(sample_data):
    assert sum(sample_data) == 15
```

## Best Practices

### Code Style (PEP 8)
```python
# Good
def calculate_area(radius):
    """Calculate the area of a circle."""
    pi = 3.14159
    return pi * radius ** 2

# Variable naming
user_name = "john_doe"
MAX_RETRIES = 3

# Class naming
class UserManager:
    pass

# Constants
API_BASE_URL = "https://api.example.com"
```

### Documentation
```python
def fibonacci(n):
    """
    Generate Fibonacci sequence up to n terms.
    
    Args:
        n (int): Number of terms to generate
    
    Returns:
        list: List of Fibonacci numbers
    
    Raises:
        ValueError: If n is negative
    """
    if n < 0:
        raise ValueError("n must be non-negative")
    
    if n <= 1:
        return [0] if n == 1 else []
    
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    
    return fib
```

### Virtual Environments
```bash
# Create virtual environment
python3 -m venv myenv

# Activate
source myenv/bin/activate  # Linux/Mac
myenv\Scripts\activate     # Windows

# Install packages
pip install requests pandas

# Save requirements
pip freeze > requirements.txt

# Deactivate
deactivate
```

## Performance Tips

### Optimization
```python
# Use list comprehensions instead of loops
squares = [x**2 for x in range(1000)]  # Faster
squares = []
for x in range(1000):
    squares.append(x**2)  # Slower

# Use generators for large datasets
def large_sequence():
    for i in range(1000000):
        yield i * 2

# Use built-in functions
numbers = [1, 2, 3, 4, 5]
total = sum(numbers)  # Faster than manual loop

# Use sets for membership testing
large_set = set(range(1000))
if 500 in large_set:  # O(1) average case
    print("Found")
```

### Memory Management
```python
# Use slots for memory-efficient classes
class Point:
    __slots__ = ['x', 'y']
    
    def __init__(self, x, y):
        self.x = x
        self.y = y

# Use generators for large datasets
def read_large_file(filename):
    with open(filename) as f:
        for line in f:
            yield line.strip()

# Profile code
import cProfile
cProfile.run('my_function()')
```

## Debugging

### Print Debugging
```python
def debug_function(x, y):
    print(f"Input: x={x}, y={y}")
    result = x + y
    print(f"Result: {result}")
    return result

# Using pdb
import pdb
pdb.set_trace()  # Debugger will stop here
```

### Logging
```python
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Use logging instead of print
logger.info("This is an info message")
logger.warning("This is a warning")
logger.error("This is an error")
```

## Quick Reference

### Built-in Functions
```python
len(obj)          # Length
type(obj)         # Type
isinstance(obj, type)  # Type checking
str(obj)          # String conversion
int(obj)          # Integer conversion
float(obj)        # Float conversion
list(obj)         # List conversion
dict(obj)         # Dictionary conversion
max(iterable)     # Maximum value
min(iterable)     # Minimum value
sum(iterable)     # Sum of values
sorted(iterable)  # Sorted list
reversed(iterable) # Reversed iterator
enumerate(iterable) # Index-value pairs
zip(iter1, iter2) # Parallel iteration
```

### String Methods
```python
s.lower()         # Lowercase
s.upper()         # Uppercase
s.strip()         # Remove whitespace
s.split(sep)      # Split string
s.join(iterable)  # Join strings
s.replace(old, new) # Replace substring
s.startswith(prefix) # Check prefix
s.endswith(suffix)   # Check suffix
s.find(substring)    # Find position
s.isdigit()          # Check if digits
s.isalpha()          # Check if alphabetic
```

### List Methods
```python
l.append(item)    # Add to end
l.insert(i, item) # Insert at index
l.remove(item)    # Remove first occurrence
l.pop(i)          # Remove and return
l.sort()          # Sort in place
l.reverse()       # Reverse in place
l.extend(iterable) # Add multiple items
l.index(item)     # Find index
l.count(item)     # Count occurrences
```

## See Also

- [Python Documentation](https://docs.python.org/3/) - Official documentation
- [PEP 8](https://www.python.org/dev/peps/pep-0008/) - Style guide
- [Real Python](https://realpython.com/) - Tutorials and articles
- [Python Package Index (PyPI)](https://pypi.org/) - Package repository
- `python -m pdb script.py` - Python debugger
- `python -m profile script.py` - Performance profiler