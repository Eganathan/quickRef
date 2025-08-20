---
title: "C++"
date: 2023-01-01T00:00:00Z
draft: false
description: "Modern C++ programming language reference covering syntax, STL, object-oriented programming, and best practices."
categories: ["programming"]
tags: ["cpp", "c++", "programming", "systems", "performance"]
---

## Overview

C++ is a general-purpose programming language that supports procedural, object-oriented, and generic programming. It's widely used for system programming, game development, embedded systems, and high-performance applications.

## Installation

### Compilers
```bash
# GCC (GNU Compiler Collection)
sudo apt install g++                    # Ubuntu/Debian
brew install gcc                        # macOS
sudo yum install gcc-c++                # CentOS/RHEL

# Clang
sudo apt install clang                  # Ubuntu/Debian
brew install llvm                       # macOS

# Microsoft Visual Studio (Windows)
# Download from https://visualstudio.microsoft.com/
```

### Build Tools
```bash
# CMake
sudo apt install cmake                  # Ubuntu/Debian
brew install cmake                      # macOS

# Make
sudo apt install make                   # Usually pre-installed
```

## Basic Syntax

### Hello World
```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

### Compilation
```bash
# Basic compilation
g++ -o program program.cpp

# With debugging info
g++ -g -o program program.cpp

# With optimization
g++ -O2 -o program program.cpp

# C++ standard version
g++ -std=c++17 -o program program.cpp
```

## Data Types

### Primitive Types
```cpp
// Integer types
int num = 42;
short s = 10;
long l = 1000000L;
long long ll = 1000000000LL;

// Unsigned types
unsigned int u = 42u;
unsigned long ul = 1000000UL;

// Floating point
float f = 3.14f;
double d = 3.14159;
long double ld = 3.141592653589793L;

// Character types
char c = 'A';
wchar_t wc = L'A';
char16_t c16 = u'A';
char32_t c32 = U'A';

// Boolean
bool flag = true;

// Auto type deduction
auto x = 42;        // int
auto y = 3.14;      // double
auto z = "hello";   // const char*
```

### Constants
```cpp
const int MAX_SIZE = 100;
constexpr int SIZE = 10;

// Enumeration
enum Color { RED, GREEN, BLUE };
enum class Status { ACTIVE, INACTIVE, PENDING };

// Using enums
Color c = RED;
Status s = Status::ACTIVE;
```

## Variables and Scope

### Variable Declaration
```cpp
int x;              // Declaration
int y = 10;         // Initialization
int z{15};          // Uniform initialization
int a(20);          // Direct initialization

// Multiple declarations
int m = 1, n = 2, p = 3;
```

### Scope
```cpp
int global_var = 10;    // Global scope

int main() {
    int local_var = 20;  // Local scope
    
    {
        int block_var = 30;  // Block scope
        // block_var is accessible here
    }
    // block_var is not accessible here
    
    return 0;
}
```

## Functions

### Function Declaration
```cpp
// Function prototype
int add(int a, int b);

// Function definition
int add(int a, int b) {
    return a + b;
}

// Function with default parameters
int multiply(int a, int b = 1) {
    return a * b;
}

// Function overloading
int max(int a, int b) {
    return (a > b) ? a : b;
}

double max(double a, double b) {
    return (a > b) ? a : b;
}
```

### Advanced Functions
```cpp
// Function templates
template<typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

// Lambda functions
auto lambda = [](int x, int y) { return x + y; };
int result = lambda(5, 3);

// Lambda with capture
int multiplier = 10;
auto multiply_by = [multiplier](int x) { return x * multiplier; };
```

## Control Structures

### Conditionals
```cpp
// if-else
if (x > 0) {
    std::cout << "Positive" << std::endl;
} else if (x < 0) {
    std::cout << "Negative" << std::endl;
} else {
    std::cout << "Zero" << std::endl;
}

// Ternary operator
int result = (x > 0) ? 1 : -1;

// Switch statement
switch (choice) {
    case 1:
        std::cout << "Option 1" << std::endl;
        break;
    case 2:
        std::cout << "Option 2" << std::endl;
        break;
    default:
        std::cout << "Invalid option" << std::endl;
}
```

### Loops
```cpp
// for loop
for (int i = 0; i < 10; i++) {
    std::cout << i << " ";
}

// Range-based for loop
std::vector<int> numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
    std::cout << num << " ";
}

// while loop
int i = 0;
while (i < 10) {
    std::cout << i << " ";
    i++;
}

// do-while loop
int j = 0;
do {
    std::cout << j << " ";
    j++;
} while (j < 10);
```

## Pointers and References

### Pointers
```cpp
int x = 10;
int* ptr = &x;          // Pointer to x
int value = *ptr;       // Dereference pointer

// Dynamic memory allocation
int* arr = new int[10]; // Allocate array
delete[] arr;           // Free memory

int* num = new int(42); // Allocate single int
delete num;             // Free memory
```

### References
```cpp
int x = 10;
int& ref = x;           // Reference to x
ref = 20;               // Changes x to 20

// Function parameters
void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}
```

### Smart Pointers
```cpp
#include <memory>

// unique_ptr
std::unique_ptr<int> ptr1 = std::make_unique<int>(42);

// shared_ptr
std::shared_ptr<int> ptr2 = std::make_shared<int>(42);

// weak_ptr
std::weak_ptr<int> weak_ptr = ptr2;
```

## Object-Oriented Programming

### Classes and Objects
```cpp
class Rectangle {
private:
    double width, height;

public:
    // Constructor
    Rectangle(double w, double h) : width(w), height(h) {}
    
    // Default constructor
    Rectangle() : width(0), height(0) {}
    
    // Copy constructor
    Rectangle(const Rectangle& other) 
        : width(other.width), height(other.height) {}
    
    // Destructor
    ~Rectangle() {
        // Cleanup code
    }
    
    // Member functions
    double area() const {
        return width * height;
    }
    
    void setDimensions(double w, double h) {
        width = w;
        height = h;
    }
    
    // Getters
    double getWidth() const { return width; }
    double getHeight() const { return height; }
};

// Usage
Rectangle rect(5.0, 3.0);
double area = rect.area();
```

### Inheritance
```cpp
// Base class
class Shape {
protected:
    std::string color;
    
public:
    Shape(const std::string& c) : color(c) {}
    
    virtual double area() const = 0;    // Pure virtual function
    virtual void draw() const {
        std::cout << "Drawing a " << color << " shape" << std::endl;
    }
    
    virtual ~Shape() = default;         // Virtual destructor
};

// Derived class
class Circle : public Shape {
private:
    double radius;
    
public:
    Circle(double r, const std::string& c) : Shape(c), radius(r) {}
    
    double area() const override {
        return 3.14159 * radius * radius;
    }
    
    void draw() const override {
        std::cout << "Drawing a " << color << " circle" << std::endl;
    }
};
```

### Polymorphism
```cpp
// Virtual functions
class Animal {
public:
    virtual void makeSound() const {
        std::cout << "Some generic animal sound" << std::endl;
    }
    virtual ~Animal() = default;
};

class Dog : public Animal {
public:
    void makeSound() const override {
        std::cout << "Woof!" << std::endl;
    }
};

class Cat : public Animal {
public:
    void makeSound() const override {
        std::cout << "Meow!" << std::endl;
    }
};

// Usage
std::vector<std::unique_ptr<Animal>> animals;
animals.push_back(std::make_unique<Dog>());
animals.push_back(std::make_unique<Cat>());

for (const auto& animal : animals) {
    animal->makeSound();  // Polymorphic call
}
```

## Standard Template Library (STL)

### Containers

#### Vector
```cpp
#include <vector>

std::vector<int> v = {1, 2, 3, 4, 5};
v.push_back(6);
v.pop_back();
int size = v.size();
int element = v[0];
```

#### List
```cpp
#include <list>

std::list<int> l = {1, 2, 3};
l.push_front(0);
l.push_back(4);
l.remove(2);
```

#### Map
```cpp
#include <map>

std::map<std::string, int> m;
m["apple"] = 5;
m["banana"] = 3;
m.insert({"orange", 2});

// Iteration
for (const auto& pair : m) {
    std::cout << pair.first << ": " << pair.second << std::endl;
}
```

#### Set
```cpp
#include <set>

std::set<int> s = {3, 1, 4, 1, 5};  // Automatically sorted, no duplicates
s.insert(2);
s.erase(3);
bool found = s.find(4) != s.end();
```

### Algorithms
```cpp
#include <algorithm>

std::vector<int> v = {3, 1, 4, 1, 5, 9};

// Sorting
std::sort(v.begin(), v.end());

// Finding
auto it = std::find(v.begin(), v.end(), 4);
if (it != v.end()) {
    std::cout << "Found at position: " << std::distance(v.begin(), it) << std::endl;
}

// Transforming
std::transform(v.begin(), v.end(), v.begin(), [](int x) { return x * 2; });

// Filtering
std::vector<int> filtered;
std::copy_if(v.begin(), v.end(), std::back_inserter(filtered), 
             [](int x) { return x > 5; });
```

### Iterators
```cpp
std::vector<int> v = {1, 2, 3, 4, 5};

// Forward iterator
for (auto it = v.begin(); it != v.end(); ++it) {
    std::cout << *it << " ";
}

// Reverse iterator
for (auto it = v.rbegin(); it != v.rend(); ++it) {
    std::cout << *it << " ";
}

// Range-based for loop (preferred)
for (int value : v) {
    std::cout << value << " ";
}
```

## Memory Management

### Stack vs Heap
```cpp
// Stack allocation
int x = 10;                    // Automatically managed
int arr[100];                  // Fixed size, stack allocated

// Heap allocation
int* ptr = new int(10);        // Manual management required
int* arr = new int[100];       // Dynamic size, heap allocated

// Don't forget to free
delete ptr;
delete[] arr;
```

### RAII (Resource Acquisition Is Initialization)
```cpp
class FileHandler {
private:
    std::FILE* file;
    
public:
    FileHandler(const std::string& filename) {
        file = std::fopen(filename.c_str(), "r");
        if (!file) {
            throw std::runtime_error("Cannot open file");
        }
    }
    
    ~FileHandler() {
        if (file) {
            std::fclose(file);
        }
    }
    
    // Delete copy constructor and assignment operator
    FileHandler(const FileHandler&) = delete;
    FileHandler& operator=(const FileHandler&) = delete;
};
```

## Exception Handling

### Try-Catch
```cpp
#include <stdexcept>

try {
    int result = divide(10, 0);
    std::cout << "Result: " << result << std::endl;
} catch (const std::runtime_error& e) {
    std::cerr << "Runtime error: " << e.what() << std::endl;
} catch (const std::exception& e) {
    std::cerr << "General error: " << e.what() << std::endl;
} catch (...) {
    std::cerr << "Unknown error occurred" << std::endl;
}
```

### Custom Exceptions
```cpp
class DivisionByZeroException : public std::exception {
public:
    const char* what() const noexcept override {
        return "Division by zero is not allowed";
    }
};

int divide(int a, int b) {
    if (b == 0) {
        throw DivisionByZeroException();
    }
    return a / b;
}
```

## Templates

### Function Templates
```cpp
template<typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}

// Usage
int max_int = max(5, 3);
double max_double = max(5.5, 3.3);
```

### Class Templates
```cpp
template<typename T>
class Stack {
private:
    std::vector<T> elements;
    
public:
    void push(const T& item) {
        elements.push_back(item);
    }
    
    T pop() {
        if (elements.empty()) {
            throw std::runtime_error("Stack is empty");
        }
        T top = elements.back();
        elements.pop_back();
        return top;
    }
    
    bool empty() const {
        return elements.empty();
    }
};

// Usage
Stack<int> int_stack;
Stack<std::string> string_stack;
```

### Template Specialization
```cpp
template<typename T>
class Container {
public:
    void process() {
        std::cout << "General processing" << std::endl;
    }
};

// Specialization for bool
template<>
class Container<bool> {
public:
    void process() {
        std::cout << "Boolean processing" << std::endl;
    }
};
```

## Modern C++ Features

### C++11 Features
```cpp
// Auto keyword
auto x = 42;
auto y = 3.14;

// Range-based for loop
std::vector<int> v = {1, 2, 3, 4, 5};
for (auto& element : v) {
    element *= 2;
}

// Lambda expressions
auto lambda = [](int x) { return x * 2; };

// nullptr
int* ptr = nullptr;  // Instead of NULL

// Move semantics
std::vector<int> v1 = {1, 2, 3};
std::vector<int> v2 = std::move(v1);  // v1 is now empty
```

### C++14 Features
```cpp
// Generic lambda
auto lambda = [](auto x, auto y) { return x + y; };

// Return type deduction
auto fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

// Binary literals
int binary = 0b101010;
```

### C++17 Features
```cpp
// Structured bindings
std::map<std::string, int> m = {{"apple", 5}, {"banana", 3}};
for (const auto& [key, value] : m) {
    std::cout << key << ": " << value << std::endl;
}

// if constexpr
template<typename T>
auto process(T value) {
    if constexpr (std::is_integral_v<T>) {
        return value * 2;
    } else {
        return value;
    }
}
```

## File I/O

### Reading Files
```cpp
#include <fstream>
#include <sstream>

// Read entire file
std::ifstream file("input.txt");
std::string content((std::istreambuf_iterator<char>(file)),
                    std::istreambuf_iterator<char>());

// Read line by line
std::ifstream file("input.txt");
std::string line;
while (std::getline(file, line)) {
    std::cout << line << std::endl;
}
```

### Writing Files
```cpp
#include <fstream>

// Write to file
std::ofstream file("output.txt");
file << "Hello, World!" << std::endl;
file << "Line 2" << std::endl;

// Append to file
std::ofstream file("output.txt", std::ios::app);
file << "Appended line" << std::endl;
```

## Debugging and Best Practices

### Debugging
```cpp
#include <cassert>

// Assertions
assert(x > 0);  // Only in debug builds

// Debug output
#ifdef DEBUG
    std::cout << "Debug: x = " << x << std::endl;
#endif
```

### Best Practices
```cpp
// Use const correctness
void print(const std::string& message) {
    std::cout << message << std::endl;
}

// Use RAII for resource management
class ResourceManager {
    std::unique_ptr<Resource> resource;
public:
    ResourceManager() : resource(std::make_unique<Resource>()) {}
    // Destructor automatically called
};

// Prefer STL containers over raw arrays
std::vector<int> v(100);  // Instead of int arr[100];

// Use smart pointers instead of raw pointers
std::unique_ptr<int> ptr = std::make_unique<int>(42);
```

## Common Patterns

### Singleton Pattern
```cpp
class Singleton {
private:
    static Singleton* instance;
    Singleton() = default;
    
public:
    static Singleton* getInstance() {
        if (!instance) {
            instance = new Singleton();
        }
        return instance;
    }
    
    // Delete copy constructor and assignment
    Singleton(const Singleton&) = delete;
    Singleton& operator=(const Singleton&) = delete;
};
```

### Factory Pattern
```cpp
class Product {
public:
    virtual ~Product() = default;
    virtual void use() = 0;
};

class ConcreteProduct : public Product {
public:
    void use() override {
        std::cout << "Using concrete product" << std::endl;
    }
};

class Factory {
public:
    static std::unique_ptr<Product> createProduct() {
        return std::make_unique<ConcreteProduct>();
    }
};
```

## Compilation and Build Systems

### CMake
```cmake
# CMakeLists.txt
cmake_minimum_required(VERSION 3.10)
project(MyProject)

set(CMAKE_CXX_STANDARD 17)

add_executable(myapp main.cpp utils.cpp)

# Link libraries
target_link_libraries(myapp pthread)
```

### Makefile
```makefile
# Makefile
CXX = g++
CXXFLAGS = -std=c++17 -Wall -Wextra -g
TARGET = myapp
SOURCES = main.cpp utils.cpp

$(TARGET): $(SOURCES)
	$(CXX) $(CXXFLAGS) -o $(TARGET) $(SOURCES)

clean:
	rm -f $(TARGET)
```

## Performance Tips

### Optimization
```cpp
// Use const references for function parameters
void process(const std::vector<int>& data) {
    // Process data without copying
}

// Use move semantics
std::vector<int> getData() {
    std::vector<int> result(1000);
    // ... fill result
    return result;  // Move semantics applied automatically
}

// Reserve vector capacity
std::vector<int> v;
v.reserve(1000);  // Avoid reallocations

// Use emplace instead of push
std::vector<std::string> v;
v.emplace_back("Hello");  // Construct in place
```

### Memory Optimization
```cpp
// Use appropriate data types
std::uint8_t small_number = 255;  // Instead of int for small values

// Use object pooling for frequently created objects
class ObjectPool {
    std::vector<std::unique_ptr<Object>> pool;
public:
    std::unique_ptr<Object> acquire() {
        if (pool.empty()) {
            return std::make_unique<Object>();
        }
        auto obj = std::move(pool.back());
        pool.pop_back();
        return obj;
    }
    
    void release(std::unique_ptr<Object> obj) {
        pool.push_back(std::move(obj));
    }
};
```

## Testing

### Unit Testing (with Google Test)
```cpp
#include <gtest/gtest.h>

// Test fixture
class CalculatorTest : public ::testing::Test {
protected:
    void SetUp() override {
        calc = std::make_unique<Calculator>();
    }
    
    std::unique_ptr<Calculator> calc;
};

// Test case
TEST_F(CalculatorTest, Addition) {
    EXPECT_EQ(calc->add(2, 3), 5);
    EXPECT_EQ(calc->add(-1, 1), 0);
}

TEST_F(CalculatorTest, Division) {
    EXPECT_EQ(calc->divide(10, 2), 5);
    EXPECT_THROW(calc->divide(10, 0), std::invalid_argument);
}
```

## Quick Reference

### Common Headers
```cpp
#include <iostream>     // Input/output
#include <vector>       // Dynamic arrays
#include <string>       // String class
#include <algorithm>    // Algorithms
#include <memory>       // Smart pointers
#include <fstream>      // File I/O
#include <map>          // Associative containers
#include <thread>       // Threading
```

### Essential Operators
```cpp
// Arithmetic
+ - * / %

// Comparison
== != < > <= >=

// Logical
&& || !

// Bitwise
& | ^ ~ << >>

// Assignment
= += -= *= /= %=

// Increment/Decrement
++ --

// Member access
. ->

// Scope resolution
::
```

## See Also

- [cppreference.com](https://en.cppreference.com/) - Comprehensive C++ reference
- [C++ Core Guidelines](https://github.com/isocpp/CppCoreGuidelines) - Best practices
- [Modern C++ Tutorial](https://changkun.de/modern-cpp/) - Modern C++ features
- `man g++` - GCC compiler manual
- `clang++` - Clang compiler
- `gdb` - GNU Debugger