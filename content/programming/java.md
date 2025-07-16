---
title: "Java"
date: 2024-01-01T00:00:00Z
draft: false
description: "Java programming language reference covering syntax, OOP, collections, concurrency, and enterprise development."
categories: ["programming"]
tags: ["java", "programming", "jvm", "enterprise", "object-oriented"]
---

## Overview

Java is a high-level, object-oriented programming language designed for platform independence. It's widely used for enterprise applications, Android development, web services, and large-scale systems.

## Installation

### Java Development Kit (JDK)
```bash
# Ubuntu/Debian
sudo apt install openjdk-11-jdk

# macOS
brew install openjdk@11

# Windows
# Download from https://adoptium.net/

# Verify installation
java -version
javac -version
```

### Build Tools
```bash
# Maven
sudo apt install maven
mvn --version

# Gradle
sudo apt install gradle
gradle --version
```

## Basic Syntax

### Hello World
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### Compilation and Execution
```bash
# Compile
javac HelloWorld.java

# Run
java HelloWorld

# Run with classpath
java -cp . HelloWorld
```

## Data Types

### Primitive Types
```java
// Integer types
byte b = 127;                    // 8-bit signed (-128 to 127)
short s = 32767;                 // 16-bit signed
int i = 2147483647;              // 32-bit signed
long l = 9223372036854775807L;   // 64-bit signed

// Floating point
float f = 3.14f;                 // 32-bit IEEE 754
double d = 3.14159265359;        // 64-bit IEEE 754

// Character and boolean
char c = 'A';                    // 16-bit Unicode
boolean flag = true;             // true or false
```

### Reference Types
```java
// Strings
String name = "John";
String message = new String("Hello");

// Arrays
int[] numbers = {1, 2, 3, 4, 5};
String[] names = new String[10];

// Object references
Object obj = new Object();
String str = null;  // null reference
```

### Type Conversion
```java
// Implicit conversion (widening)
int i = 42;
double d = i;  // int to double

// Explicit conversion (narrowing)
double d = 3.14;
int i = (int) d;  // double to int

// String conversion
String str = String.valueOf(42);
int num = Integer.parseInt("123");
double value = Double.parseDouble("3.14");
```

## Variables and Constants

### Variable Declaration
```java
// Declaration and initialization
int number = 42;
String name = "Alice";

// Multiple declarations
int x = 10, y = 20, z = 30;

// Final variables (constants)
final int MAX_SIZE = 100;
final double PI = 3.14159;

// Static variables
static int counter = 0;
```

### Variable Scope
```java
public class ScopeExample {
    // Instance variable
    private int instanceVar = 10;
    
    // Class variable
    static int classVar = 20;
    
    public void method() {
        // Local variable
        int localVar = 30;
        
        // Block scope
        {
            int blockVar = 40;
            // blockVar is accessible here
        }
        // blockVar is not accessible here
    }
}
```

## Operators

### Arithmetic Operators
```java
int a = 10, b = 3;
int sum = a + b;        // Addition: 13
int diff = a - b;       // Subtraction: 7
int product = a * b;    // Multiplication: 30
int quotient = a / b;   // Division: 3
int remainder = a % b;  // Modulus: 1

// Unary operators
int x = 5;
int y = ++x;  // Pre-increment: x=6, y=6
int z = x++;  // Post-increment: x=7, z=6
```

### Comparison and Logical Operators
```java
int a = 10, b = 20;
boolean result;

// Comparison
result = a == b;  // Equal to: false
result = a != b;  // Not equal to: true
result = a < b;   // Less than: true
result = a > b;   // Greater than: false
result = a <= b;  // Less than or equal: true
result = a >= b;  // Greater than or equal: false

// Logical
result = true && false;  // AND: false
result = true || false;  // OR: true
result = !true;          // NOT: false
```

### Bitwise Operators
```java
int a = 5;  // 101 in binary
int b = 3;  // 011 in binary

int and = a & b;    // AND: 001 = 1
int or = a | b;     // OR: 111 = 7
int xor = a ^ b;    // XOR: 110 = 6
int not = ~a;       // NOT: ...11111010 = -6
int left = a << 1;  // Left shift: 1010 = 10
int right = a >> 1; // Right shift: 10 = 2
```

## Control Structures

### Conditionals
```java
// if-else
int x = 10;
if (x > 0) {
    System.out.println("Positive");
} else if (x < 0) {
    System.out.println("Negative");
} else {
    System.out.println("Zero");
}

// Ternary operator
String result = (x > 0) ? "positive" : "not positive";

// Switch statement
int day = 2;
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    default:
        System.out.println("Other day");
}

// Switch expression (Java 14+)
String dayName = switch (day) {
    case 1 -> "Monday";
    case 2 -> "Tuesday";
    case 3 -> "Wednesday";
    default -> "Other day";
};
```

### Loops
```java
// for loop
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}

// Enhanced for loop (for-each)
int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
    System.out.println(num);
}

// while loop
int i = 0;
while (i < 10) {
    System.out.println(i);
    i++;
}

// do-while loop
int j = 0;
do {
    System.out.println(j);
    j++;
} while (j < 10);

// Loop control
for (int i = 0; i < 10; i++) {
    if (i == 5) continue;  // Skip iteration
    if (i == 8) break;     // Exit loop
    System.out.println(i);
}
```

## Methods

### Method Declaration
```java
public class Calculator {
    // Method with return value
    public int add(int a, int b) {
        return a + b;
    }
    
    // Method without return value
    public void printMessage(String message) {
        System.out.println(message);
    }
    
    // Method with variable arguments
    public int sum(int... numbers) {
        int total = 0;
        for (int num : numbers) {
            total += num;
        }
        return total;
    }
    
    // Static method
    public static double calculateArea(double radius) {
        return Math.PI * radius * radius;
    }
}
```

### Method Overloading
```java
public class MathUtils {
    public int max(int a, int b) {
        return (a > b) ? a : b;
    }
    
    public double max(double a, double b) {
        return (a > b) ? a : b;
    }
    
    public int max(int a, int b, int c) {
        return max(max(a, b), c);
    }
}
```

## Object-Oriented Programming

### Classes and Objects
```java
public class Person {
    // Fields (instance variables)
    private String name;
    private int age;
    
    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Default constructor
    public Person() {
        this("Unknown", 0);
    }
    
    // Getter methods
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    // Setter methods
    public void setName(String name) {
        this.name = name;
    }
    
    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        }
    }
    
    // toString method
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + "}";
    }
}

// Usage
Person person = new Person("Alice", 30);
System.out.println(person.getName());
System.out.println(person);
```

### Inheritance
```java
// Base class
public class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public void makeSound() {
        System.out.println("Some generic sound");
    }
    
    public void info() {
        System.out.println("I am " + name);
    }
}

// Derived class
public class Dog extends Animal {
    private String breed;
    
    public Dog(String name, String breed) {
        super(name);  // Call parent constructor
        this.breed = breed;
    }
    
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }
    
    @Override
    public void info() {
        super.info();  // Call parent method
        System.out.println("I am a " + breed);
    }
}
```

### Polymorphism
```java
// Using inheritance polymorphism
Animal[] animals = {
    new Dog("Buddy", "Golden Retriever"),
    new Cat("Whiskers", "Persian"),
    new Animal("Generic")
};

for (Animal animal : animals) {
    animal.makeSound();  // Polymorphic call
}

// Interface polymorphism
interface Drawable {
    void draw();
}

class Circle implements Drawable {
    public void draw() {
        System.out.println("Drawing a circle");
    }
}

class Rectangle implements Drawable {
    public void draw() {
        System.out.println("Drawing a rectangle");
    }
}
```

### Abstract Classes and Interfaces
```java
// Abstract class
public abstract class Shape {
    protected String color;
    
    public Shape(String color) {
        this.color = color;
    }
    
    // Abstract method
    public abstract double getArea();
    
    // Concrete method
    public void displayColor() {
        System.out.println("Color: " + color);
    }
}

// Interface
public interface Drawable {
    void draw();
    
    // Default method (Java 8+)
    default void highlight() {
        System.out.println("Highlighting shape");
    }
    
    // Static method (Java 8+)
    static void printInfo() {
        System.out.println("This is a drawable shape");
    }
}

// Implementation
public class Circle extends Shape implements Drawable {
    private double radius;
    
    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }
    
    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a circle");
    }
}
```

## Arrays

### Array Declaration and Initialization
```java
// Declaration
int[] numbers;
String[] names;

// Initialization
numbers = new int[5];  // Array of 5 integers
names = new String[3]; // Array of 3 strings

// Declaration and initialization
int[] values = {1, 2, 3, 4, 5};
String[] colors = {"red", "green", "blue"};
int[] data = new int[]{10, 20, 30};

// Array properties
int length = numbers.length;  // Array length
```

### Array Operations
```java
int[] numbers = {1, 2, 3, 4, 5};

// Access elements
int first = numbers[0];
int last = numbers[numbers.length - 1];

// Modify elements
numbers[0] = 10;

// Iterate through array
for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}

// Enhanced for loop
for (int num : numbers) {
    System.out.println(num);
}

// Array utilities
import java.util.Arrays;
Arrays.sort(numbers);  // Sort array
String str = Arrays.toString(numbers);  // Convert to string
int[] copy = Arrays.copyOf(numbers, numbers.length);  // Copy array
```

### Multi-dimensional Arrays
```java
// 2D array
int[][] matrix = new int[3][3];
int[][] values = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

// Access elements
int element = matrix[1][2];

// Iterate through 2D array
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();
}

// Enhanced for loop for 2D array
for (int[] row : matrix) {
    for (int element : row) {
        System.out.print(element + " ");
    }
    System.out.println();
}
```

## Strings

### String Operations
```java
String str = "Hello, World!";

// String methods
int length = str.length();
char ch = str.charAt(0);
String upper = str.toUpperCase();
String lower = str.toLowerCase();
String trimmed = str.trim();
String replaced = str.replace("World", "Java");
String[] parts = str.split(",");
boolean starts = str.startsWith("Hello");
boolean ends = str.endsWith("!");
int index = str.indexOf("World");
String substring = str.substring(0, 5);
```

### String Comparison
```java
String str1 = "Hello";
String str2 = "Hello";
String str3 = new String("Hello");

// Reference comparison
boolean same = (str1 == str2);     // true (string pool)
boolean different = (str1 == str3); // false (different objects)

// Content comparison
boolean equal = str1.equals(str2);        // true
boolean equalIgnoreCase = str1.equalsIgnoreCase("HELLO"); // true
int comparison = str1.compareTo(str2);     // 0 (equal)
```

### String Building
```java
// StringBuilder (mutable)
StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" ");
sb.append("World");
String result = sb.toString();

// StringBuffer (thread-safe)
StringBuffer buffer = new StringBuffer();
buffer.append("Thread-safe");
buffer.append(" string building");

// String formatting
String formatted = String.format("Name: %s, Age: %d", "Alice", 30);
```

## Collections Framework

### List Interface
```java
import java.util.*;

// ArrayList
List<String> list = new ArrayList<>();
list.add("Apple");
list.add("Banana");
list.add("Cherry");

// LinkedList
List<Integer> linkedList = new LinkedList<>();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);

// List operations
String first = list.get(0);
list.set(0, "Apricot");
list.remove(1);
boolean contains = list.contains("Cherry");
int size = list.size();

// Iteration
for (String item : list) {
    System.out.println(item);
}

// Lambda expression (Java 8+)
list.forEach(System.out::println);
```

### Set Interface
```java
// HashSet
Set<String> set = new HashSet<>();
set.add("Apple");
set.add("Banana");
set.add("Apple");  // Duplicate, won't be added

// TreeSet (sorted)
Set<Integer> treeSet = new TreeSet<>();
treeSet.add(3);
treeSet.add(1);
treeSet.add(2);  // Will be stored as [1, 2, 3]

// Set operations
boolean added = set.add("Cherry");
boolean removed = set.remove("Banana");
boolean contains = set.contains("Apple");
```

### Map Interface
```java
// HashMap
Map<String, Integer> map = new HashMap<>();
map.put("apple", 5);
map.put("banana", 3);
map.put("cherry", 8);

// TreeMap (sorted by keys)
Map<String, Integer> treeMap = new TreeMap<>();

// Map operations
Integer value = map.get("apple");
Integer defaultValue = map.getOrDefault("grape", 0);
boolean containsKey = map.containsKey("banana");
boolean containsValue = map.containsValue(5);
map.remove("cherry");

// Iteration
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// Lambda iteration (Java 8+)
map.forEach((key, value) -> System.out.println(key + ": " + value));
```

### Queue Interface
```java
// LinkedList as Queue
Queue<String> queue = new LinkedList<>();
queue.offer("First");
queue.offer("Second");
queue.offer("Third");

String head = queue.poll();  // Remove and return head
String peek = queue.peek();  // Return head without removing

// PriorityQueue
Queue<Integer> priorityQueue = new PriorityQueue<>();
priorityQueue.offer(3);
priorityQueue.offer(1);
priorityQueue.offer(2);
// Elements will be retrieved in sorted order
```

## Exception Handling

### Try-Catch-Finally
```java
try {
    int result = 10 / 0;
    System.out.println(result);
} catch (ArithmeticException e) {
    System.out.println("Division by zero: " + e.getMessage());
} catch (Exception e) {
    System.out.println("General exception: " + e.getMessage());
} finally {
    System.out.println("This always executes");
}
```

### Custom Exceptions
```java
public class CustomException extends Exception {
    public CustomException(String message) {
        super(message);
    }
}

public class ValidationException extends RuntimeException {
    public ValidationException(String message) {
        super(message);
    }
}

// Usage
public void validateAge(int age) throws CustomException {
    if (age < 0) {
        throw new CustomException("Age cannot be negative");
    }
    if (age > 150) {
        throw new CustomException("Age seems unrealistic");
    }
}
```

### Try-with-Resources
```java
import java.io.*;

// Automatic resource management
try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}
// reader is automatically closed
```

## File I/O

### File Operations
```java
import java.io.*;
import java.nio.file.*;

// Reading files
try {
    // Read entire file
    String content = new String(Files.readAllBytes(Paths.get("file.txt")));
    
    // Read lines
    List<String> lines = Files.readAllLines(Paths.get("file.txt"));
    
    // Read with BufferedReader
    try (BufferedReader reader = Files.newBufferedReader(Paths.get("file.txt"))) {
        String line;
        while ((line = reader.readLine()) != null) {
            System.out.println(line);
        }
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

### Writing Files
```java
import java.io.*;
import java.nio.file.*;

// Writing files
try {
    // Write string to file
    Files.write(Paths.get("output.txt"), "Hello, World!".getBytes());
    
    // Write lines to file
    List<String> lines = Arrays.asList("Line 1", "Line 2", "Line 3");
    Files.write(Paths.get("output.txt"), lines);
    
    // Write with BufferedWriter
    try (BufferedWriter writer = Files.newBufferedWriter(Paths.get("output.txt"))) {
        writer.write("Hello, World!");
        writer.newLine();
        writer.write("Second line");
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

## Generics

### Generic Classes
```java
public class Box<T> {
    private T content;
    
    public void set(T content) {
        this.content = content;
    }
    
    public T get() {
        return content;
    }
}

// Usage
Box<String> stringBox = new Box<>();
stringBox.set("Hello");
String value = stringBox.get();

Box<Integer> intBox = new Box<>();
intBox.set(42);
Integer number = intBox.get();
```

### Generic Methods
```java
public class Utility {
    public static <T> void swap(T[] array, int i, int j) {
        T temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
    public static <T extends Comparable<T>> T max(T a, T b) {
        return (a.compareTo(b) > 0) ? a : b;
    }
}

// Usage
String[] strings = {"apple", "banana", "cherry"};
Utility.swap(strings, 0, 2);

String max = Utility.max("apple", "banana");
```

### Wildcards
```java
// Upper bounded wildcard
List<? extends Number> numbers = new ArrayList<Integer>();

// Lower bounded wildcard
List<? super Integer> integers = new ArrayList<Number>();

// Unbounded wildcard
List<?> objects = new ArrayList<String>();

// Generic method with wildcards
public static void printList(List<?> list) {
    for (Object item : list) {
        System.out.println(item);
    }
}
```

## Lambda Expressions and Streams

### Lambda Expressions
```java
// Traditional anonymous class
Runnable r1 = new Runnable() {
    @Override
    public void run() {
        System.out.println("Hello");
    }
};

// Lambda expression
Runnable r2 = () -> System.out.println("Hello");

// Lambda with parameters
Comparator<String> comp = (s1, s2) -> s1.compareTo(s2);

// Method reference
Comparator<String> comp2 = String::compareTo;
```

### Streams
```java
import java.util.stream.*;

List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Filter and collect
List<Integer> evens = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());

// Map and reduce
int sum = numbers.stream()
    .mapToInt(Integer::intValue)
    .sum();

// Complex operations
List<String> words = Arrays.asList("apple", "banana", "cherry");
List<String> result = words.stream()
    .filter(word -> word.length() > 5)
    .map(String::toUpperCase)
    .sorted()
    .collect(Collectors.toList());

// Parallel streams
long count = numbers.parallelStream()
    .filter(n -> n > 5)
    .count();
```

## Multithreading

### Thread Creation
```java
// Extending Thread class
class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Thread running: " + getName());
    }
}

// Implementing Runnable interface
class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("Runnable running: " + Thread.currentThread().getName());
    }
}

// Usage
Thread thread1 = new MyThread();
Thread thread2 = new Thread(new MyRunnable());
Thread thread3 = new Thread(() -> System.out.println("Lambda thread"));

thread1.start();
thread2.start();
thread3.start();
```

### Thread Synchronization
```java
public class Counter {
    private int count = 0;
    
    // Synchronized method
    public synchronized void increment() {
        count++;
    }
    
    // Synchronized block
    public void increment2() {
        synchronized (this) {
            count++;
        }
    }
    
    public int getCount() {
        return count;
    }
}

// Using locks
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class LockCounter {
    private int count = 0;
    private final Lock lock = new ReentrantLock();
    
    public void increment() {
        lock.lock();
        try {
            count++;
        } finally {
            lock.unlock();
        }
    }
}
```

### Executor Framework
```java
import java.util.concurrent.*;

// Create thread pool
ExecutorService executor = Executors.newFixedThreadPool(5);

// Submit tasks
Future<String> future = executor.submit(() -> {
    Thread.sleep(1000);
    return "Task completed";
});

// Get result
try {
    String result = future.get();
    System.out.println(result);
} catch (InterruptedException | ExecutionException e) {
    e.printStackTrace();
}

// Shutdown executor
executor.shutdown();
```

## Package and Module System

### Package Declaration
```java
// File: com/example/util/StringUtils.java
package com.example.util;

public class StringUtils {
    public static String reverse(String str) {
        return new StringBuilder(str).reverse().toString();
    }
}
```

### Import Statements
```java
// Specific import
import com.example.util.StringUtils;

// Wildcard import
import java.util.*;

// Static import
import static java.lang.Math.PI;
import static java.lang.Math.sqrt;

// Usage
double area = PI * sqrt(25);
```

### Module System (Java 9+)
```java
// module-info.java
module com.example.app {
    requires java.base;
    requires java.logging;
    exports com.example.app.api;
    opens com.example.app.model to gson;
}
```

## Best Practices

### Code Organization
```java
// Good class structure
public class Employee {
    // Constants
    private static final String COMPANY_NAME = "TechCorp";
    
    // Class variables
    private static int employeeCount = 0;
    
    // Instance variables
    private String name;
    private int id;
    private double salary;
    
    // Constructor
    public Employee(String name, int id, double salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
        employeeCount++;
    }
    
    // Getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    // Business methods
    public void work() {
        System.out.println(name + " is working");
    }
    
    // Static methods
    public static int getEmployeeCount() {
        return employeeCount;
    }
    
    // Override methods
    @Override
    public String toString() {
        return String.format("Employee{name='%s', id=%d, salary=%.2f}", 
                           name, id, salary);
    }
}
```

### Documentation
```java
/**
 * Represents a geometric circle with radius and center point.
 * 
 * @author John Doe
 * @version 1.0
 * @since 2024-01-01
 */
public class Circle {
    private double radius;
    
    /**
     * Creates a new circle with the specified radius.
     * 
     * @param radius the radius of the circle
     * @throws IllegalArgumentException if radius is negative
     */
    public Circle(double radius) {
        if (radius < 0) {
            throw new IllegalArgumentException("Radius cannot be negative");
        }
        this.radius = radius;
    }
    
    /**
     * Calculates and returns the area of the circle.
     * 
     * @return the area of the circle
     */
    public double getArea() {
        return Math.PI * radius * radius;
    }
}
```

## Build Tools

### Maven
```xml
<!-- pom.xml -->
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>my-app</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>jar</packaging>
    
    <properties>
        <maven.compiler.source>11</maven.compiler.source>
        <maven.compiler.target>11</maven.compiler.target>
    </properties>
    
    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.13.2</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```

### Gradle
```gradle
// build.gradle
plugins {
    id 'java'
    id 'application'
}

java {
    sourceCompatibility = JavaVersion.VERSION_11
    targetCompatibility = JavaVersion.VERSION_11
}

repositories {
    mavenCentral()
}

dependencies {
    testImplementation 'junit:junit:4.13.2'
    implementation 'com.google.gson:gson:2.8.9'
}

application {
    mainClass = 'com.example.Main'
}
```

## Testing

### JUnit
```java
import org.junit.*;
import static org.junit.Assert.*;

public class CalculatorTest {
    private Calculator calculator;
    
    @Before
    public void setUp() {
        calculator = new Calculator();
    }
    
    @Test
    public void testAdd() {
        assertEquals(5, calculator.add(2, 3));
        assertEquals(0, calculator.add(-1, 1));
    }
    
    @Test(expected = IllegalArgumentException.class)
    public void testDivideByZero() {
        calculator.divide(10, 0);
    }
    
    @Test
    public void testMultiply() {
        assertEquals(6, calculator.multiply(2, 3));
        assertEquals(0, calculator.multiply(0, 5));
    }
    
    @After
    public void tearDown() {
        calculator = null;
    }
}
```

### JUnit 5
```java
import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {
    private Calculator calculator;
    
    @BeforeEach
    void setUp() {
        calculator = new Calculator();
    }
    
    @Test
    void testAdd() {
        assertEquals(5, calculator.add(2, 3));
        assertEquals(0, calculator.add(-1, 1));
    }
    
    @Test
    void testDivideByZero() {
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.divide(10, 0);
        });
    }
    
    @ParameterizedTest
    @ValueSource(ints = {1, 2, 3, 4, 5})
    void testIsPositive(int number) {
        assertTrue(calculator.isPositive(number));
    }
}
```

## Performance and Memory

### Memory Management
```java
// Weak references
import java.lang.ref.WeakReference;

WeakReference<Object> weakRef = new WeakReference<>(new Object());
Object obj = weakRef.get();  // May return null if GC collected

// String intern
String str1 = new String("Hello").intern();
String str2 = "Hello";
boolean same = (str1 == str2);  // true

// Object pooling
public class ObjectPool<T> {
    private final Queue<T> pool = new ConcurrentLinkedQueue<>();
    private final Supplier<T> factory;
    
    public ObjectPool(Supplier<T> factory) {
        this.factory = factory;
    }
    
    public T acquire() {
        T object = pool.poll();
        return (object != null) ? object : factory.get();
    }
    
    public void release(T object) {
        pool.offer(object);
    }
}
```

### Performance Tips
```java
// Use StringBuilder for string concatenation
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append("Item ").append(i).append("\n");
}
String result = sb.toString();

// Use appropriate collection types
List<String> list = new ArrayList<>();  // Random access
List<String> linkedList = new LinkedList<>();  // Frequent insertions/deletions

// Use primitive collections when possible
import java.util.stream.IntStream;
IntStream.range(0, 1000).sum();  // Primitive stream
```

## Quick Reference

### Common Classes
```java
// Object class methods
equals(Object obj)
hashCode()
toString()
getClass()
clone()

// String class methods
length()
charAt(int index)
substring(int start, int end)
indexOf(String str)
toLowerCase()
toUpperCase()
trim()
split(String regex)
replace(char oldChar, char newChar)

// Math class methods
Math.abs(int a)
Math.max(int a, int b)
Math.min(int a, int b)
Math.sqrt(double a)
Math.pow(double a, double b)
Math.random()
Math.PI
Math.E
```

### Collection Methods
```java
// List methods
add(element)
get(int index)
set(int index, element)
remove(int index)
size()
isEmpty()
contains(element)
indexOf(element)
clear()

// Map methods
put(key, value)
get(key)
remove(key)
containsKey(key)
containsValue(value)
keySet()
values()
entrySet()
size()
```

### Access Modifiers
```java
public      // Accessible from anywhere
protected   // Accessible within package and subclasses
default     // Accessible within package (no modifier)
private     // Accessible only within class
```

## See Also

- [Oracle Java Documentation](https://docs.oracle.com/en/java/) - Official documentation
- [OpenJDK](https://openjdk.java.net/) - Open source implementation
- [Spring Framework](https://spring.io/) - Popular Java framework
- [Apache Maven](https://maven.apache.org/) - Build tool
- [Gradle](https://gradle.org/) - Build tool
- `javadoc` - Documentation generator
- `jdb` - Java debugger