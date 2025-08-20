---
title: "C"
date: 2023-01-01T00:00:00Z
draft: false
description: "C programming language reference covering syntax, memory management, system programming, and best practices."
categories: ["programming"]
tags: ["c", "programming", "systems", "low-level", "performance"]
---

## Overview

C is a general-purpose programming language that provides low-level access to memory and system resources. It's the foundation for many operating systems, embedded systems, and performance-critical applications.

## Installation

### Compilers
```bash
# GCC (GNU Compiler Collection)
sudo apt install gcc                    # Ubuntu/Debian
brew install gcc                        # macOS
sudo yum install gcc                    # CentOS/RHEL

# Clang
sudo apt install clang                  # Ubuntu/Debian
brew install llvm                       # macOS

# Microsoft Visual Studio (Windows)
# Download from https://visualstudio.microsoft.com/
```

### Build Tools
```bash
# Make
sudo apt install make                   # Usually pre-installed

# GDB (GNU Debugger)
sudo apt install gdb                    # Ubuntu/Debian
brew install gdb                        # macOS
```

## Basic Syntax

### Hello World
```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

### Compilation
```bash
# Basic compilation
gcc -o program program.c

# With debugging info
gcc -g -o program program.c

# With warnings
gcc -Wall -Wextra -o program program.c

# C standard version
gcc -std=c99 -o program program.c
```

## Data Types

### Primitive Types
```c
// Integer types
int num = 42;
short s = 10;
long l = 1000000L;
long long ll = 1000000000LL;

// Unsigned types
unsigned int u = 42U;
unsigned short us = 10U;
unsigned long ul = 1000000UL;
unsigned long long ull = 1000000000ULL;

// Floating point
float f = 3.14f;
double d = 3.14159;
long double ld = 3.141592653589793L;

// Character
char c = 'A';
unsigned char uc = 255;

// Boolean (C99)
#include <stdbool.h>
bool flag = true;
```

### Size Information
```c
#include <stdio.h>
#include <limits.h>

int main() {
    printf("Size of int: %zu bytes\n", sizeof(int));
    printf("Size of long: %zu bytes\n", sizeof(long));
    printf("Size of float: %zu bytes\n", sizeof(float));
    printf("Size of double: %zu bytes\n", sizeof(double));
    
    printf("INT_MAX: %d\n", INT_MAX);
    printf("INT_MIN: %d\n", INT_MIN);
    
    return 0;
}
```

### Constants and Macros
```c
#include <stdio.h>

#define PI 3.14159
#define MAX_SIZE 100
#define SQUARE(x) ((x) * (x))

const int BUFFER_SIZE = 1024;

// Enumeration
enum Color {
    RED,
    GREEN,
    BLUE
};

enum Status {
    ACTIVE = 1,
    INACTIVE = 0,
    PENDING = -1
};
```

## Variables and Scope

### Variable Declaration
```c
int x;              // Declaration
int y = 10;         // Initialization
int z = 0;          // Always initialize

// Multiple declarations
int a = 1, b = 2, c = 3;

// Storage classes
auto int local_var = 10;        // Default for local variables
static int static_var = 20;     // Retains value between calls
extern int global_var;          // Declared elsewhere
register int fast_var = 30;     // Hint for compiler optimization
```

### Scope
```c
int global_var = 10;    // Global scope

void function() {
    static int count = 0;   // Static local variable
    count++;
    printf("Count: %d\n", count);
}

int main() {
    int local_var = 20;     // Local scope
    
    {
        int block_var = 30;  // Block scope
        printf("Block var: %d\n", block_var);
    }
    // block_var is not accessible here
    
    return 0;
}
```

## Functions

### Function Declaration and Definition
```c
// Function prototype
int add(int a, int b);
void print_message(void);

// Function definition
int add(int a, int b) {
    return a + b;
}

void print_message(void) {
    printf("Hello from function!\n");
}

// Function with no return value
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}
```

### Function Pointers
```c
// Function pointer declaration
int (*operation)(int, int);

// Functions to point to
int add(int a, int b) { return a + b; }
int multiply(int a, int b) { return a * b; }

int main() {
    operation = add;
    printf("5 + 3 = %d\n", operation(5, 3));
    
    operation = multiply;
    printf("5 * 3 = %d\n", operation(5, 3));
    
    return 0;
}
```

### Variadic Functions
```c
#include <stdarg.h>

int sum(int count, ...) {
    va_list args;
    va_start(args, count);
    
    int total = 0;
    for (int i = 0; i < count; i++) {
        total += va_arg(args, int);
    }
    
    va_end(args);
    return total;
}

int main() {
    printf("Sum: %d\n", sum(3, 10, 20, 30));
    return 0;
}
```

## Control Structures

### Conditionals
```c
// if-else
if (x > 0) {
    printf("Positive\n");
} else if (x < 0) {
    printf("Negative\n");
} else {
    printf("Zero\n");
}

// Ternary operator
int result = (x > 0) ? 1 : -1;

// Switch statement
switch (choice) {
    case 1:
        printf("Option 1\n");
        break;
    case 2:
        printf("Option 2\n");
        break;
    case 3:
    case 4:
        printf("Option 3 or 4\n");
        break;
    default:
        printf("Invalid option\n");
}
```

### Loops
```c
// for loop
for (int i = 0; i < 10; i++) {
    printf("%d ", i);
}

// while loop
int i = 0;
while (i < 10) {
    printf("%d ", i);
    i++;
}

// do-while loop
int j = 0;
do {
    printf("%d ", j);
    j++;
} while (j < 10);

// Loop control
for (int i = 0; i < 10; i++) {
    if (i == 5) continue;   // Skip iteration
    if (i == 8) break;      // Exit loop
    printf("%d ", i);
}
```

## Arrays and Strings

### Arrays
```c
// Array declaration and initialization
int numbers[5] = {1, 2, 3, 4, 5};
int values[] = {10, 20, 30};        // Size inferred
int matrix[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

// Array access
for (int i = 0; i < 5; i++) {
    printf("%d ", numbers[i]);
}

// Array size
int size = sizeof(numbers) / sizeof(numbers[0]);
```

### Strings
```c
#include <string.h>

// String declaration
char str1[20] = "Hello";
char str2[] = "World";
char *str3 = "C Programming";

// String functions
int len = strlen(str1);
strcpy(str1, "New string");
strcat(str1, " appended");
int cmp = strcmp(str1, str2);

// String input/output
char buffer[100];
printf("Enter a string: ");
fgets(buffer, sizeof(buffer), stdin);
printf("You entered: %s", buffer);
```

### String Manipulation
```c
#include <string.h>
#include <ctype.h>

// Convert to uppercase
void to_upper(char *str) {
    while (*str) {
        *str = toupper(*str);
        str++;
    }
}

// Find substring
char *find_substr(char *haystack, char *needle) {
    return strstr(haystack, needle);
}

// Split string
void split_string(char *str, char delimiter) {
    char *token = strtok(str, &delimiter);
    while (token != NULL) {
        printf("%s\n", token);
        token = strtok(NULL, &delimiter);
    }
}
```

## Pointers

### Basic Pointers
```c
int x = 10;
int *ptr = &x;      // Pointer to x
int value = *ptr;   // Dereference pointer

printf("Value: %d\n", value);
printf("Address: %p\n", (void*)ptr);

// Null pointer
int *null_ptr = NULL;
if (null_ptr == NULL) {
    printf("Pointer is null\n");
}
```

### Pointer Arithmetic
```c
int arr[] = {1, 2, 3, 4, 5};
int *ptr = arr;  // Points to first element

// Pointer arithmetic
ptr++;           // Move to next element
ptr += 2;        // Move 2 elements forward
ptr--;           // Move to previous element

// Array traversal using pointers
int *start = arr;
int *end = arr + 5;
while (start < end) {
    printf("%d ", *start);
    start++;
}
```

### Pointers and Functions
```c
// Pass by reference
void increment(int *num) {
    (*num)++;
}

// Return pointer from function
int* get_max(int *a, int *b) {
    return (*a > *b) ? a : b;
}

// Array as function parameter
void print_array(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
}
```

### Double Pointers
```c
int x = 10;
int *ptr = &x;
int **double_ptr = &ptr;

printf("Value: %d\n", **double_ptr);
printf("Address of x: %p\n", (void*)ptr);
printf("Address of ptr: %p\n", (void*)double_ptr);
```

## Memory Management

### Dynamic Memory Allocation
```c
#include <stdlib.h>

// malloc - allocate memory
int *ptr = (int*)malloc(5 * sizeof(int));
if (ptr == NULL) {
    printf("Memory allocation failed\n");
    return 1;
}

// Initialize allocated memory
for (int i = 0; i < 5; i++) {
    ptr[i] = i + 1;
}

// calloc - allocate and initialize to zero
int *arr = (int*)calloc(5, sizeof(int));

// realloc - resize memory
ptr = (int*)realloc(ptr, 10 * sizeof(int));

// free - deallocate memory
free(ptr);
free(arr);
ptr = NULL;  // Avoid dangling pointer
arr = NULL;
```

### Memory Management Best Practices
```c
// Check for allocation failure
void* safe_malloc(size_t size) {
    void *ptr = malloc(size);
    if (ptr == NULL) {
        fprintf(stderr, "Memory allocation failed\n");
        exit(1);
    }
    return ptr;
}

// Always free allocated memory
void process_data() {
    int *data = (int*)malloc(100 * sizeof(int));
    if (data == NULL) return;
    
    // Process data...
    
    free(data);
    data = NULL;
}
```

## Structures and Unions

### Structures
```c
// Structure definition
struct Person {
    char name[50];
    int age;
    float salary;
};

// Structure usage
struct Person person1 = {"John Doe", 30, 50000.0};
struct Person person2;

// Accessing members
strcpy(person2.name, "Jane Smith");
person2.age = 25;
person2.salary = 45000.0;

// Pointer to structure
struct Person *ptr = &person1;
printf("Name: %s\n", ptr->name);
printf("Age: %d\n", ptr->age);
```

### Typedef
```c
// Define structure with typedef
typedef struct {
    int x;
    int y;
} Point;

// Usage
Point p1 = {10, 20};
Point p2 = {0};  // Initialize to zero

// Function with structure
double distance(Point p1, Point p2) {
    int dx = p1.x - p2.x;
    int dy = p1.y - p2.y;
    return sqrt(dx*dx + dy*dy);
}
```

### Unions
```c
union Data {
    int i;
    float f;
    char str[20];
};

union Data data;
data.i = 10;
printf("Integer: %d\n", data.i);

data.f = 3.14;
printf("Float: %.2f\n", data.f);

strcpy(data.str, "Hello");
printf("String: %s\n", data.str);
```

### Bit Fields
```c
struct Flags {
    unsigned int flag1 : 1;
    unsigned int flag2 : 1;
    unsigned int flag3 : 1;
    unsigned int reserved : 5;
};

struct Flags flags = {0};
flags.flag1 = 1;
flags.flag2 = 0;
flags.flag3 = 1;
```

## File I/O

### File Operations
```c
#include <stdio.h>

// Open file
FILE *file = fopen("input.txt", "r");
if (file == NULL) {
    perror("Error opening file");
    return 1;
}

// Read from file
char buffer[100];
while (fgets(buffer, sizeof(buffer), file) != NULL) {
    printf("%s", buffer);
}

// Close file
fclose(file);
```

### File Modes
```c
// File modes
FILE *read_file = fopen("file.txt", "r");     // Read
FILE *write_file = fopen("file.txt", "w");    // Write (truncate)
FILE *append_file = fopen("file.txt", "a");   // Append
FILE *read_write = fopen("file.txt", "r+");   // Read/Write
FILE *binary_file = fopen("file.bin", "rb");  // Binary read
```

### Formatted I/O
```c
// Writing formatted data
FILE *file = fopen("output.txt", "w");
fprintf(file, "Name: %s, Age: %d, Salary: %.2f\n", "John", 30, 50000.0);
fclose(file);

// Reading formatted data
FILE *file = fopen("input.txt", "r");
char name[50];
int age;
float salary;
fscanf(file, "Name: %s, Age: %d, Salary: %f", name, &age, &salary);
fclose(file);
```

### Binary I/O
```c
// Write binary data
struct Person person = {"John", 30, 50000.0};
FILE *file = fopen("person.bin", "wb");
fwrite(&person, sizeof(struct Person), 1, file);
fclose(file);

// Read binary data
struct Person read_person;
FILE *file = fopen("person.bin", "rb");
fread(&read_person, sizeof(struct Person), 1, file);
fclose(file);
```

## Preprocessor

### Macros
```c
#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define MIN(a, b) ((a) < (b) ? (a) : (b))
#define SWAP(a, b) do { \
    typeof(a) temp = a; \
    a = b; \
    b = temp; \
} while(0)

// Conditional compilation
#ifdef DEBUG
    #define DBG_PRINT(x) printf("DEBUG: %s\n", x)
#else
    #define DBG_PRINT(x)
#endif

// Predefined macros
printf("File: %s\n", __FILE__);
printf("Line: %d\n", __LINE__);
printf("Function: %s\n", __func__);
printf("Date: %s\n", __DATE__);
printf("Time: %s\n", __TIME__);
```

### Header Guards
```c
// header.h
#ifndef HEADER_H
#define HEADER_H

// Header content here

#endif // HEADER_H
```

### Include Files
```c
#include <stdio.h>      // Standard library
#include <stdlib.h>     // Standard library
#include <string.h>     // String functions
#include <math.h>       // Math functions
#include <time.h>       // Time functions
#include "myheader.h"   // User-defined header
```

## Error Handling

### Error Codes
```c
#include <errno.h>

int divide(int a, int b, int *result) {
    if (b == 0) {
        return -1;  // Error code
    }
    *result = a / b;
    return 0;  // Success
}

int main() {
    int result;
    if (divide(10, 0, &result) != 0) {
        printf("Error: Division by zero\n");
    }
    return 0;
}
```

### Error Messages
```c
#include <errno.h>
#include <string.h>

FILE *file = fopen("nonexistent.txt", "r");
if (file == NULL) {
    fprintf(stderr, "Error opening file: %s\n", strerror(errno));
    return 1;
}
```

### Assert
```c
#include <assert.h>

void process_array(int *arr, int size) {
    assert(arr != NULL);
    assert(size > 0);
    
    // Process array...
}
```

## Standard Library

### Common Functions
```c
// String functions
#include <string.h>
strlen(str)         // String length
strcpy(dest, src)   // Copy string
strcat(dest, src)   // Concatenate strings
strcmp(str1, str2)  // Compare strings
strstr(haystack, needle)  // Find substring

// Memory functions
memset(ptr, value, size)        // Set memory
memcpy(dest, src, size)         // Copy memory
memmove(dest, src, size)        // Move memory
memcmp(ptr1, ptr2, size)        // Compare memory

// Math functions
#include <math.h>
sqrt(x)     // Square root
pow(x, y)   // Power
sin(x)      // Sine
cos(x)      // Cosine
log(x)      // Natural logarithm
```

### Character Functions
```c
#include <ctype.h>

isalpha(c)      // Is alphabetic
isdigit(c)      // Is digit
isalnum(c)      // Is alphanumeric
isspace(c)      // Is whitespace
isupper(c)      // Is uppercase
islower(c)      // Is lowercase
toupper(c)      // Convert to uppercase
tolower(c)      // Convert to lowercase
```

## Common Patterns

### Linked List
```c
typedef struct Node {
    int data;
    struct Node *next;
} Node;

Node* create_node(int data) {
    Node *node = (Node*)malloc(sizeof(Node));
    node->data = data;
    node->next = NULL;
    return node;
}

void insert_at_head(Node **head, int data) {
    Node *new_node = create_node(data);
    new_node->next = *head;
    *head = new_node;
}

void print_list(Node *head) {
    while (head != NULL) {
        printf("%d -> ", head->data);
        head = head->next;
    }
    printf("NULL\n");
}
```

### Generic Programming with void*
```c
// Generic stack implementation
typedef struct {
    void **data;
    int top;
    int capacity;
    size_t element_size;
} Stack;

Stack* create_stack(int capacity, size_t element_size) {
    Stack *stack = (Stack*)malloc(sizeof(Stack));
    stack->data = (void**)malloc(capacity * sizeof(void*));
    stack->top = -1;
    stack->capacity = capacity;
    stack->element_size = element_size;
    return stack;
}

int push(Stack *stack, void *element) {
    if (stack->top >= stack->capacity - 1) {
        return 0;  // Stack full
    }
    
    void *copy = malloc(stack->element_size);
    memcpy(copy, element, stack->element_size);
    stack->data[++stack->top] = copy;
    return 1;  // Success
}
```

## Debugging

### GDB Usage
```bash
# Compile with debug information
gcc -g -o program program.c

# Run with GDB
gdb ./program

# GDB commands
(gdb) break main          # Set breakpoint
(gdb) run                 # Run program
(gdb) next                # Next line
(gdb) step                # Step into function
(gdb) print variable      # Print variable value
(gdb) continue            # Continue execution
(gdb) quit                # Exit GDB
```

### Debug Prints
```c
#ifdef DEBUG
    #define DEBUG_PRINT(fmt, ...) \
        fprintf(stderr, "DEBUG: %s:%d: " fmt, __FILE__, __LINE__, ##__VA_ARGS__)
#else
    #define DEBUG_PRINT(fmt, ...)
#endif

int main() {
    int x = 10;
    DEBUG_PRINT("x = %d\n", x);
    return 0;
}
```

## Best Practices

### Code Organization
```c
// Function prototypes at top
int add(int a, int b);
void print_array(int arr[], int size);

// Constants and macros
#define MAX_SIZE 100
const int BUFFER_SIZE = 1024;

// Main function
int main() {
    // Variable declarations at top of function
    int result;
    int numbers[MAX_SIZE];
    
    // Code logic
    result = add(5, 3);
    
    return 0;
}

// Function implementations
int add(int a, int b) {
    return a + b;
}
```

### Memory Safety
```c
// Always check malloc return
int *ptr = (int*)malloc(sizeof(int) * 10);
if (ptr == NULL) {
    // Handle allocation failure
    return -1;
}

// Always free allocated memory
free(ptr);
ptr = NULL;  // Avoid dangling pointer

// Use const for read-only data
void print_string(const char *str) {
    printf("%s\n", str);
}
```

### Error Handling
```c
// Return error codes
int safe_divide(int a, int b, int *result) {
    if (b == 0) {
        return -1;  // Error
    }
    *result = a / b;
    return 0;  // Success
}

// Check return values
if (safe_divide(10, 2, &result) != 0) {
    printf("Error in division\n");
}
```

## Performance Tips

### Optimization
```c
// Use appropriate data types
uint8_t small_number = 255;  // Instead of int for small values

// Use register hint for frequently used variables
register int i;
for (i = 0; i < 1000000; i++) {
    // Loop body
}

// Minimize function calls in loops
int len = strlen(str);
for (int i = 0; i < len; i++) {
    // Process str[i]
}
```

### Memory Optimization
```c
// Align structures for better performance
struct AlignedStruct {
    char a;     // 1 byte
    char pad[3]; // 3 bytes padding
    int b;      // 4 bytes
    double c;   // 8 bytes
};

// Use bit fields for flags
struct Flags {
    unsigned int flag1 : 1;
    unsigned int flag2 : 1;
    unsigned int flag3 : 1;
    unsigned int reserved : 5;
};
```

## Build Systems

### Makefile
```makefile
CC = gcc
CFLAGS = -Wall -Wextra -std=c99 -g
TARGET = myprogram
SOURCES = main.c utils.c
OBJECTS = $(SOURCES:.c=.o)

$(TARGET): $(OBJECTS)
	$(CC) $(OBJECTS) -o $(TARGET)

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

clean:
	rm -f $(OBJECTS) $(TARGET)

.PHONY: clean
```

### CMake
```cmake
cmake_minimum_required(VERSION 3.10)
project(MyProject C)

set(CMAKE_C_STANDARD 99)
set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -Wall -Wextra")

add_executable(myprogram main.c utils.c)

# Link math library
target_link_libraries(myprogram m)
```

## Quick Reference

### Format Specifiers
```c
%d      // int
%ld     // long
%u      // unsigned int
%f      // float
%lf     // double
%c      // char
%s      // string
%p      // pointer
%x      // hexadecimal
%o      // octal
%zu     // size_t
```

### Common Headers
```c
#include <stdio.h>      // Input/output
#include <stdlib.h>     // Memory management, utilities
#include <string.h>     // String functions
#include <math.h>       // Mathematical functions
#include <time.h>       // Time functions
#include <ctype.h>      // Character functions
#include <errno.h>      // Error handling
#include <assert.h>     // Assertions
```

### Operators
```c
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

// Ternary
? :
```

## See Also

- `man gcc` - GCC compiler manual
- `man gdb` - GNU Debugger manual
- [C Reference](https://en.cppreference.com/w/c) - Comprehensive C reference
- [The C Programming Language](https://en.wikipedia.org/wiki/The_C_Programming_Language) - K&R book
- `splint` - Static code analysis tool
- `valgrind` - Memory debugging tool