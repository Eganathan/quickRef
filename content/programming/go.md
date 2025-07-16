---
title: "Go"
date: 2024-01-01T00:00:00Z
draft: false
description: "Go programming language reference covering syntax, concurrency, standard library, and best practices."
categories: ["programming"]
tags: ["go", "golang", "programming", "concurrent", "systems"]
---

## Overview

Go (Golang) is a statically typed, compiled programming language developed at Google. It's designed for simplicity, efficiency, and excellent concurrency support. Go is widely used for web services, cloud infrastructure, DevOps tools, and system programming.

## Installation

### Go Installation
```bash
# Ubuntu/Debian
sudo apt install golang-go

# macOS
brew install go

# Windows
# Download from https://golang.org/dl/

# Verify installation
go version

# Set GOPATH (optional with Go modules)
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin
```

### Module Management
```bash
# Initialize new module
go mod init myproject

# Add dependency
go get github.com/gorilla/mux

# Update dependencies
go get -u

# Tidy modules
go mod tidy

# Vendor dependencies
go mod vendor
```

## Basic Syntax

### Hello World
```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

### Running Go Programs
```bash
# Run directly
go run main.go

# Build executable
go build main.go

# Build and install
go install

# Format code
go fmt

# Test code
go test
```

## Data Types

### Basic Types
```go
// Integer types
var i int = 42
var i8 int8 = 127
var i16 int16 = 32767
var i32 int32 = 2147483647
var i64 int64 = 9223372036854775807

// Unsigned integers
var u uint = 42
var u8 uint8 = 255
var u16 uint16 = 65535
var u32 uint32 = 4294967295
var u64 uint64 = 18446744073709551615

// Floating point
var f32 float32 = 3.14
var f64 float64 = 3.141592653589793

// Complex numbers
var c64 complex64 = 1 + 2i
var c128 complex128 = 1 + 2i

// Boolean
var b bool = true

// String
var s string = "Hello, Go!"

// Byte (alias for uint8)
var bt byte = 'A'

// Rune (alias for int32, represents Unicode code point)
var r rune = '🚀'
```

### Type Inference
```go
// Short variable declaration
x := 42        // int
y := 3.14      // float64
z := true      // bool
s := "hello"   // string

// Multiple assignments
a, b := 1, 2
name, age := "John", 30

// Zero values
var i int     // 0
var f float64 // 0.0
var b bool    // false
var s string  // ""
var p *int    // nil
```

### Constants
```go
const Pi = 3.14159
const MaxUsers = 1000

// Typed constants
const Name string = "Go"
const Version int = 1

// Constant block
const (
    StatusOK     = 200
    StatusNotFound = 404
    StatusError  = 500
)

// iota for enumeration
const (
    Sunday = iota    // 0
    Monday           // 1
    Tuesday          // 2
    Wednesday        // 3
    Thursday         // 4
    Friday           // 5
    Saturday         // 6
)
```

## Variables and Scope

### Variable Declaration
```go
// var declaration
var name string = "John"
var age int = 30

// Multiple variables
var (
    name string = "John"
    age  int    = 30
    city string = "New York"
)

// Short declaration (inside functions only)
name := "John"
age := 30

// Multiple short declarations
name, age := "John", 30
```

### Scope
```go
package main

import "fmt"

// Package-level variable
var globalVar = "global"

func main() {
    // Function-level variable
    localVar := "local"
    
    {
        // Block-level variable
        blockVar := "block"
        fmt.Println(blockVar)
    }
    // blockVar is not accessible here
    
    fmt.Println(globalVar, localVar)
}
```

## Functions

### Function Declaration
```go
// Basic function
func greet(name string) string {
    return "Hello, " + name
}

// Multiple parameters
func add(a, b int) int {
    return a + b
}

// Multiple return values
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

// Named return values
func split(sum int) (x, y int) {
    x = sum * 4 / 9
    y = sum - x
    return // naked return
}
```

### Variadic Functions
```go
func sum(numbers ...int) int {
    total := 0
    for _, num := range numbers {
        total += num
    }
    return total
}

// Usage
result := sum(1, 2, 3, 4, 5)
nums := []int{1, 2, 3, 4, 5}
result = sum(nums...) // spread operator
```

### Function Types and Closures
```go
// Function type
type Operation func(int, int) int

// Function as parameter
func calculate(a, b int, op Operation) int {
    return op(a, b)
}

// Anonymous function
multiply := func(x, y int) int {
    return x * y
}

// Closure
func adder() func(int) int {
    sum := 0
    return func(x int) int {
        sum += x
        return sum
    }
}

// Usage
pos, neg := adder(), adder()
fmt.Println(pos(2), neg(-2))
```

## Control Structures

### Conditionals
```go
// if statement
if x > 0 {
    fmt.Println("Positive")
} else if x < 0 {
    fmt.Println("Negative")
} else {
    fmt.Println("Zero")
}

// if with initialization
if value := getValue(); value > 0 {
    fmt.Println("Value is positive:", value)
}

// switch statement
switch day := time.Now().Weekday(); {
case day == time.Saturday || day == time.Sunday:
    fmt.Println("Weekend")
default:
    fmt.Println("Weekday")
}

// Type switch
switch v := interface{}(x).(type) {
case int:
    fmt.Printf("Integer: %d\n", v)
case string:
    fmt.Printf("String: %s\n", v)
default:
    fmt.Printf("Unknown type: %T\n", v)
}
```

### Loops
```go
// for loop
for i := 0; i < 10; i++ {
    fmt.Println(i)
}

// while-like loop
i := 0
for i < 10 {
    fmt.Println(i)
    i++
}

// infinite loop
for {
    // loop body
    break // exit condition
}

// range loop
numbers := []int{1, 2, 3, 4, 5}
for index, value := range numbers {
    fmt.Printf("Index: %d, Value: %d\n", index, value)
}

// range with map
m := map[string]int{"a": 1, "b": 2}
for key, value := range m {
    fmt.Printf("Key: %s, Value: %d\n", key, value)
}

// range with channel
ch := make(chan int)
go func() {
    for i := 0; i < 3; i++ {
        ch <- i
    }
    close(ch)
}()

for value := range ch {
    fmt.Println(value)
}
```

## Data Structures

### Arrays
```go
// Array declaration
var a [5]int
var b = [5]int{1, 2, 3, 4, 5}
var c = [...]int{1, 2, 3, 4, 5} // compiler counts elements

// Array operations
fmt.Println(len(a))    // length
fmt.Println(a[0])      // access element
a[0] = 10             // modify element

// Multi-dimensional arrays
var matrix [3][3]int
matrix[0][0] = 1
```

### Slices
```go
// Slice declaration
var s []int
s = []int{1, 2, 3, 4, 5}

// Make slice
s = make([]int, 5)    // length 5, capacity 5
s = make([]int, 3, 5) // length 3, capacity 5

// Slice operations
s = append(s, 6)      // append element
s = append(s, 7, 8)   // append multiple
fmt.Println(len(s))   // length
fmt.Println(cap(s))   // capacity

// Slicing
sub := s[1:4]         // elements 1, 2, 3
sub = s[:3]           // elements 0, 1, 2
sub = s[2:]           // from element 2 to end
sub = s[:]            // all elements

// Copy slice
dest := make([]int, len(s))
copy(dest, s)
```

### Maps
```go
// Map declaration
var m map[string]int
m = make(map[string]int)

// Map literal
m = map[string]int{
    "apple":  5,
    "banana": 3,
    "orange": 8,
}

// Map operations
m["grape"] = 2        // add/update
delete(m, "banana")   // delete
value, ok := m["apple"] // check existence

// Iterate map
for key, value := range m {
    fmt.Printf("%s: %d\n", key, value)
}
```

### Strings
```go
// String operations
s := "Hello, 世界"
fmt.Println(len(s))              // byte length
fmt.Println(len([]rune(s)))      // character count

// String manipulation
import "strings"
s = strings.ToUpper(s)
s = strings.ToLower(s)
s = strings.TrimSpace(s)
parts := strings.Split(s, ",")
joined := strings.Join(parts, "-")

// String formatting
import "fmt"
name := "John"
age := 30
message := fmt.Sprintf("Name: %s, Age: %d", name, age)
```

## Structs

### Struct Definition
```go
type Person struct {
    Name string
    Age  int
    City string
}

// Struct with methods
type Rectangle struct {
    Width  float64
    Height float64
}

func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func (r *Rectangle) Scale(factor float64) {
    r.Width *= factor
    r.Height *= factor
}
```

### Struct Usage
```go
// Create struct
p1 := Person{
    Name: "John",
    Age:  30,
    City: "New York",
}

// Positional initialization
p2 := Person{"Jane", 25, "London"}

// Zero value
var p3 Person

// Pointer to struct
p4 := &Person{
    Name: "Bob",
    Age:  35,
}

// Access fields
fmt.Println(p1.Name)
p1.Age = 31
```

### Embedded Structs
```go
type Address struct {
    Street string
    City   string
    State  string
}

type Employee struct {
    Name    string
    Age     int
    Address // embedded struct
}

// Usage
emp := Employee{
    Name: "John",
    Age:  30,
    Address: Address{
        Street: "123 Main St",
        City:   "New York",
        State:  "NY",
    },
}

// Direct access to embedded fields
fmt.Println(emp.Street) // same as emp.Address.Street
```

## Interfaces

### Interface Definition
```go
type Shape interface {
    Area() float64
    Perimeter() float64
}

type Writer interface {
    Write([]byte) (int, error)
}

// Empty interface
var x interface{}
x = 42
x = "hello"
x = []int{1, 2, 3}
```

### Interface Implementation
```go
type Circle struct {
    Radius float64
}

func (c Circle) Area() float64 {
    return math.Pi * c.Radius * c.Radius
}

func (c Circle) Perimeter() float64 {
    return 2 * math.Pi * c.Radius
}

// Usage
var s Shape = Circle{Radius: 5}
fmt.Println(s.Area())
```

### Type Assertions
```go
var i interface{} = "hello"

// Type assertion
s := i.(string)
fmt.Println(s)

// Safe type assertion
s, ok := i.(string)
if ok {
    fmt.Println(s)
}

// Type switch
switch v := i.(type) {
case int:
    fmt.Printf("Integer: %d\n", v)
case string:
    fmt.Printf("String: %s\n", v)
default:
    fmt.Printf("Unknown type: %T\n", v)
}
```

## Error Handling

### Error Type
```go
// Error interface
type error interface {
    Error() string
}

// Creating errors
import "errors"
err := errors.New("something went wrong")

// Formatted errors
import "fmt"
err := fmt.Errorf("failed to process %s: %w", filename, originalErr)
```

### Error Handling Patterns
```go
// Basic error handling
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

// Usage
result, err := divide(10, 2)
if err != nil {
    log.Fatal(err)
}
fmt.Println(result)

// Multiple error checks
func processFile(filename string) error {
    file, err := os.Open(filename)
    if err != nil {
        return fmt.Errorf("failed to open file: %w", err)
    }
    defer file.Close()
    
    data, err := io.ReadAll(file)
    if err != nil {
        return fmt.Errorf("failed to read file: %w", err)
    }
    
    // Process data
    return nil
}
```

### Custom Errors
```go
type ValidationError struct {
    Field string
    Value interface{}
    Msg   string
}

func (e *ValidationError) Error() string {
    return fmt.Sprintf("validation failed for field %s: %s", e.Field, e.Msg)
}

// Usage
func validateAge(age int) error {
    if age < 0 {
        return &ValidationError{
            Field: "age",
            Value: age,
            Msg:   "age cannot be negative",
        }
    }
    return nil
}
```

## Concurrency

### Goroutines
```go
// Start goroutine
go func() {
    fmt.Println("Hello from goroutine")
}()

// Goroutine with parameters
go func(msg string) {
    fmt.Println(msg)
}("Hello, concurrent world!")

// Wait for goroutines
import "sync"
var wg sync.WaitGroup

for i := 0; i < 5; i++ {
    wg.Add(1)
    go func(n int) {
        defer wg.Done()
        fmt.Printf("Goroutine %d\n", n)
    }(i)
}
wg.Wait()
```

### Channels
```go
// Create channel
ch := make(chan int)

// Buffered channel
ch := make(chan int, 10)

// Send and receive
go func() {
    ch <- 42 // send
}()
value := <-ch // receive

// Channel directions
func sender(ch chan<- int) {
    ch <- 42
}

func receiver(ch <-chan int) {
    value := <-ch
    fmt.Println(value)
}

// Close channel
close(ch)

// Range over channel
for value := range ch {
    fmt.Println(value)
}
```

### Select Statement
```go
select {
case msg1 := <-ch1:
    fmt.Println("Received from ch1:", msg1)
case msg2 := <-ch2:
    fmt.Println("Received from ch2:", msg2)
case <-time.After(1 * time.Second):
    fmt.Println("Timeout")
default:
    fmt.Println("No channel ready")
}
```

### Sync Package
```go
import "sync"

// Mutex
var mu sync.Mutex
mu.Lock()
// critical section
mu.Unlock()

// RWMutex
var rwmu sync.RWMutex
rwmu.RLock()
// read operation
rwmu.RUnlock()

rwmu.Lock()
// write operation
rwmu.Unlock()

// Once
var once sync.Once
once.Do(func() {
    fmt.Println("This runs only once")
})
```

## Standard Library

### Package Management
```go
// Import packages
import "fmt"
import "net/http"

// Multiple imports
import (
    "fmt"
    "net/http"
    "time"
)

// Package alias
import (
    f "fmt"
    h "net/http"
)

// Blank import
import _ "database/sql"
```

### Common Packages
```go
// fmt - Formatted I/O
import "fmt"
fmt.Println("Hello")
fmt.Printf("Value: %d\n", 42)
fmt.Sprintf("Formatted: %s", "string")

// strings - String manipulation
import "strings"
strings.Contains("hello", "ell")
strings.Split("a,b,c", ",")
strings.Join([]string{"a", "b"}, "-")

// strconv - String conversions
import "strconv"
i, err := strconv.Atoi("42")
s := strconv.Itoa(42)
f, err := strconv.ParseFloat("3.14", 64)

// time - Time operations
import "time"
now := time.Now()
duration := time.Duration(5) * time.Second
time.Sleep(duration)
```

### File Operations
```go
import (
    "os"
    "io"
    "bufio"
)

// Read file
data, err := os.ReadFile("filename.txt")
if err != nil {
    log.Fatal(err)
}

// Write file
err = os.WriteFile("output.txt", []byte("Hello, World!"), 0644)
if err != nil {
    log.Fatal(err)
}

// Open file
file, err := os.Open("filename.txt")
if err != nil {
    log.Fatal(err)
}
defer file.Close()

// Buffered reading
scanner := bufio.NewScanner(file)
for scanner.Scan() {
    fmt.Println(scanner.Text())
}
```

### HTTP Client/Server
```go
import (
    "net/http"
    "encoding/json"
)

// HTTP client
resp, err := http.Get("https://api.example.com/users")
if err != nil {
    log.Fatal(err)
}
defer resp.Body.Close()

body, err := io.ReadAll(resp.Body)
if err != nil {
    log.Fatal(err)
}

// HTTP server
http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, World!")
})

http.HandleFunc("/api/users", func(w http.ResponseWriter, r *http.Request) {
    users := []string{"Alice", "Bob", "Charlie"}
    json.NewEncoder(w).Encode(users)
})

log.Fatal(http.ListenAndServe(":8080", nil))
```

### JSON Processing
```go
import "encoding/json"

// Struct for JSON
type User struct {
    Name  string `json:"name"`
    Email string `json:"email"`
    Age   int    `json:"age"`
}

// Marshal to JSON
user := User{Name: "John", Email: "john@example.com", Age: 30}
data, err := json.Marshal(user)
if err != nil {
    log.Fatal(err)
}

// Unmarshal from JSON
var user2 User
err = json.Unmarshal(data, &user2)
if err != nil {
    log.Fatal(err)
}

// Working with generic JSON
var result map[string]interface{}
err = json.Unmarshal(data, &result)
```

## Testing

### Basic Testing
```go
// math.go
package math

func Add(a, b int) int {
    return a + b
}

// math_test.go
package math

import "testing"

func TestAdd(t *testing.T) {
    result := Add(2, 3)
    expected := 5
    if result != expected {
        t.Errorf("Add(2, 3) = %d; expected %d", result, expected)
    }
}

func TestAddMultiple(t *testing.T) {
    tests := []struct {
        a, b, expected int
    }{
        {2, 3, 5},
        {-1, 1, 0},
        {0, 0, 0},
    }
    
    for _, test := range tests {
        result := Add(test.a, test.b)
        if result != test.expected {
            t.Errorf("Add(%d, %d) = %d; expected %d", 
                test.a, test.b, result, test.expected)
        }
    }
}
```

### Benchmarking
```go
func BenchmarkAdd(b *testing.B) {
    for i := 0; i < b.N; i++ {
        Add(2, 3)
    }
}

// Run benchmarks
// go test -bench=.
```

### Test Coverage
```bash
# Run tests with coverage
go test -cover

# Generate coverage report
go test -coverprofile=coverage.out
go tool cover -html=coverage.out
```

## Best Practices

### Code Organization
```go
// Package declaration
package main

// Import block
import (
    "fmt"
    "net/http"
    
    "github.com/gorilla/mux"
)

// Constants
const (
    DefaultPort = 8080
    MaxRetries  = 3
)

// Types
type Server struct {
    port int
    mux  *mux.Router
}

// Functions
func NewServer(port int) *Server {
    return &Server{
        port: port,
        mux:  mux.NewRouter(),
    }
}
```

### Error Handling
```go
// Don't ignore errors
result, err := someFunction()
if err != nil {
    return fmt.Errorf("failed to process: %w", err)
}

// Use early returns
func processUser(user User) error {
    if user.Name == "" {
        return errors.New("name is required")
    }
    
    if user.Email == "" {
        return errors.New("email is required")
    }
    
    // Process user
    return nil
}
```

### Resource Management
```go
// Always close resources
file, err := os.Open("filename.txt")
if err != nil {
    return err
}
defer file.Close()

// Use context for cancellation
ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
defer cancel()

req, err := http.NewRequestWithContext(ctx, "GET", "https://api.example.com", nil)
```

## Performance Tips

### Memory Management
```go
// Use slices efficiently
s := make([]int, 0, 100) // preallocate capacity
s = append(s, 1, 2, 3)

// Avoid memory leaks with slices
func processLargeSlice(data []int) []int {
    // Process only first 10 elements
    result := make([]int, 10)
    copy(result, data[:10])
    return result // Don't return data[:10] to avoid holding large slice
}

// Use string builder for concatenation
var builder strings.Builder
for i := 0; i < 1000; i++ {
    builder.WriteString("item")
}
result := builder.String()
```

### Concurrency Patterns
```go
// Worker pool pattern
func workerPool(jobs <-chan int, results chan<- int) {
    for job := range jobs {
        // Process job
        results <- job * 2
    }
}

// Start workers
jobs := make(chan int, 100)
results := make(chan int, 100)

for w := 1; w <= 3; w++ {
    go workerPool(jobs, results)
}

// Fan-out pattern
func fanOut(input <-chan int, workers int) []<-chan int {
    outputs := make([]<-chan int, workers)
    for i := 0; i < workers; i++ {
        output := make(chan int)
        outputs[i] = output
        go func() {
            for n := range input {
                output <- n * 2
            }
            close(output)
        }()
    }
    return outputs
}
```

## Common Patterns

### Singleton Pattern
```go
type singleton struct {
    data string
}

var instance *singleton
var once sync.Once

func GetInstance() *singleton {
    once.Do(func() {
        instance = &singleton{data: "singleton"}
    })
    return instance
}
```

### Factory Pattern
```go
type Shape interface {
    Draw()
}

type Circle struct{}
func (c Circle) Draw() { fmt.Println("Drawing circle") }

type Rectangle struct{}
func (r Rectangle) Draw() { fmt.Println("Drawing rectangle") }

func CreateShape(shapeType string) Shape {
    switch shapeType {
    case "circle":
        return Circle{}
    case "rectangle":
        return Rectangle{}
    default:
        return nil
    }
}
```

### Observer Pattern
```go
type Observer interface {
    Update(string)
}

type Subject struct {
    observers []Observer
}

func (s *Subject) Attach(o Observer) {
    s.observers = append(s.observers, o)
}

func (s *Subject) Notify(message string) {
    for _, observer := range s.observers {
        observer.Update(message)
    }
}
```

## Build and Deployment

### Build Options
```bash
# Build for current platform
go build

# Build for specific platform
GOOS=linux GOARCH=amd64 go build

# Build with optimizations
go build -ldflags="-s -w"

# Build with version info
go build -ldflags="-X main.version=1.0.0"
```

### Modules
```bash
# Initialize module
go mod init myproject

# Add dependency
go get github.com/gorilla/mux@v1.8.0

# Update dependencies
go get -u

# Remove unused dependencies
go mod tidy

# Create vendor directory
go mod vendor
```

## Quick Reference

### Basic Syntax
```go
// Variable declaration
var name string = "value"
name := "value"

// Function declaration
func name(params) returnType {
    return value
}

// Struct declaration
type Name struct {
    field type
}

// Interface declaration
type Name interface {
    Method() returnType
}
```

### Common Operations
```go
// Slices
append(slice, element)
copy(dest, src)
len(slice)
cap(slice)

// Maps
make(map[keyType]valueType)
delete(map, key)
value, ok := map[key]

// Channels
make(chan type)
make(chan type, capacity)
close(channel)
<-channel // receive
channel <- value // send
```

### Error Handling
```go
if err != nil {
    return err
}

// Wrap error
return fmt.Errorf("operation failed: %w", err)
```

### Concurrency
```go
// Goroutine
go func() {
    // concurrent code
}()

// Channel
ch := make(chan int)
go func() { ch <- 42 }()
value := <-ch

// Select
select {
case <-ch1:
    // handle ch1
case <-ch2:
    // handle ch2
default:
    // no channel ready
}
```

## See Also

- [Go Documentation](https://golang.org/doc/) - Official documentation
- [Effective Go](https://golang.org/doc/effective_go.html) - Best practices
- [Go by Example](https://gobyexample.com/) - Practical examples
- [A Tour of Go](https://tour.golang.org/) - Interactive tutorial
- `go help` - Built-in help system
- `go doc` - Documentation tool