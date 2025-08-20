---
title: "Kotlin"
date: 2023-01-01T00:00:00Z
draft: false
description: "Kotlin programming language reference covering syntax, null safety, coroutines, and Android development."
categories: ["programming"]
tags: ["kotlin", "programming", "android", "jvm", "multiplatform"]
---

## Overview

Kotlin is a statically typed programming language that runs on the JVM, Android, and can be compiled to JavaScript or native code. Developed by JetBrains, it's designed to be concise, safe, and fully interoperable with Java.

## Installation

### Kotlin Installation
```bash
# Using SDKMAN
sdk install kotlin

# macOS with Homebrew
brew install kotlin

# Manual installation
# Download from https://kotlinlang.org/docs/command-line.html

# Verify installation
kotlin -version
kotlinc -version
```

### IDE Setup
```bash
# IntelliJ IDEA (recommended)
# Built-in Kotlin support

# Android Studio
# Built-in Kotlin support

# VS Code
# Install Kotlin extension
```

## Basic Syntax

### Hello World
```kotlin
fun main() {
    println("Hello, World!")
}

// Or with arguments
fun main(args: Array<String>) {
    println("Hello, ${args.getOrNull(0) ?: "World"}!")
}
```

### Running Kotlin
```bash
# Compile and run
kotlinc hello.kt -include-runtime -d hello.jar
java -jar hello.jar

# Direct execution
kotlin hello.kt

# Interactive shell
kotlinc
```

## Data Types

### Basic Types
```kotlin
// Numbers
val byte: Byte = 127
val short: Short = 32767
val int: Int = 2147483647
val long: Long = 9223372036854775807L

// Unsigned numbers
val uByte: UByte = 255u
val uShort: UShort = 65535u
val uInt: UInt = 4294967295u
val uLong: ULong = 18446744073709551615uL

// Floating point
val float: Float = 3.14f
val double: Double = 3.141592653589793

// Character
val char: Char = 'K'

// Boolean
val isKotlin: Boolean = true

// String
val text: String = "Hello, Kotlin!"
val multiline = """
    This is a
    multi-line string
""".trimIndent()
```

### Type Inference
```kotlin
// Type inference
val name = "John"        // String
val age = 30            // Int
val height = 5.9        // Double
val isActive = true     // Boolean

// Explicit types
val explicitName: String = "John"
val explicitAge: Int = 30
```

### Null Safety
```kotlin
// Non-null types
var name: String = "John"
// name = null // Compilation error

// Nullable types
var nullableName: String? = "John"
nullableName = null // OK

// Safe call operator
val length = nullableName?.length

// Elvis operator
val length2 = nullableName?.length ?: 0

// Not-null assertion
val length3 = nullableName!!.length // Throws NPE if null
```

## Variables and Constants

### Variable Declaration
```kotlin
// Mutable variable
var name = "John"
name = "Jane" // OK

// Immutable variable (read-only)
val age = 30
// age = 31 // Compilation error

// Late initialization
lateinit var lateInitVar: String

// Lazy initialization
val lazyValue: String by lazy {
    "Computed only when first accessed"
}
```

### Constants
```kotlin
// Compile-time constants
const val PI = 3.14159
const val MAX_COUNT = 100

// Runtime constants
val currentTime = System.currentTimeMillis()

// Top-level constants
const val API_URL = "https://api.example.com"
```

## Functions

### Function Declaration
```kotlin
// Basic function
fun greet(name: String): String {
    return "Hello, $name!"
}

// Single expression function
fun add(a: Int, b: Int) = a + b

// Function with default parameters
fun greet(name: String = "World", prefix: String = "Hello") = "$prefix, $name!"

// Named parameters
greet(prefix = "Hi", name = "John")

// Variable number of arguments
fun sum(vararg numbers: Int): Int {
    return numbers.sum()
}
```

### Higher-Order Functions
```kotlin
// Function as parameter
fun calculate(x: Int, y: Int, operation: (Int, Int) -> Int): Int {
    return operation(x, y)
}

// Usage
val result = calculate(5, 3) { a, b -> a + b }

// Function returning function
fun multiplier(factor: Int): (Int) -> Int {
    return { number -> number * factor }
}

val doubler = multiplier(2)
println(doubler(5)) // 10
```

### Lambda Expressions
```kotlin
// Lambda syntax
val square = { x: Int -> x * x }
val isEven = { x: Int -> x % 2 == 0 }

// Lambda with it parameter
val numbers = listOf(1, 2, 3, 4, 5)
numbers.filter { it > 3 }

// Multiple parameters
val add = { x: Int, y: Int -> x + y }

// Lambda with receiver
val string = StringBuilder().apply {
    append("Hello, ")
    append("World!")
}.toString()
```

## Control Flow

### Conditionals
```kotlin
// if expression
val max = if (a > b) a else b

// when expression
when (x) {
    1 -> println("One")
    2, 3 -> println("Two or Three")
    in 4..10 -> println("Between 4 and 10")
    is String -> println("It's a string")
    else -> println("Unknown")
}

// when without argument
when {
    x > 0 -> println("Positive")
    x < 0 -> println("Negative")
    else -> println("Zero")
}
```

### Loops
```kotlin
// for loop
for (i in 1..5) {
    println(i)
}

// for with step
for (i in 1..10 step 2) {
    println(i)
}

// for downTo
for (i in 10 downTo 1) {
    println(i)
}

// for with collections
val items = listOf("apple", "banana", "cherry")
for (item in items) {
    println(item)
}

// for with index
for ((index, item) in items.withIndex()) {
    println("$index: $item")
}

// while loop
var i = 0
while (i < 5) {
    println(i)
    i++
}

// do-while loop
do {
    println(i)
    i++
} while (i < 10)
```

### Control Flow Statements
```kotlin
// break and continue
for (i in 1..10) {
    if (i == 5) continue
    if (i == 8) break
    println(i)
}

// labeled break
loop@ for (i in 1..3) {
    for (j in 1..3) {
        if (i == 2 && j == 2) break@loop
        println("$i, $j")
    }
}

// return from lambda
fun processNumbers(numbers: List<Int>) {
    numbers.forEach { number ->
        if (number < 0) return@forEach // continue
        println(number)
    }
}
```

## Classes and Objects

### Class Declaration
```kotlin
class Person(val name: String, var age: Int) {
    // Secondary constructor
    constructor(name: String) : this(name, 0)
    
    // Init block
    init {
        println("Person created: $name")
    }
    
    // Methods
    fun greet() {
        println("Hello, I'm $name")
    }
    
    fun haveBirthday() {
        age++
    }
}

// Usage
val person = Person("John", 30)
person.greet()
person.haveBirthday()
```

### Properties
```kotlin
class Rectangle {
    var width: Double = 0.0
        set(value) {
            if (value > 0) field = value
        }
    
    var height: Double = 0.0
        set(value) {
            if (value > 0) field = value
        }
    
    val area: Double
        get() = width * height
    
    var color: String = "white"
        private set // Private setter
}
```

### Visibility Modifiers
```kotlin
class Example {
    private val privateProperty = "Private"
    protected val protectedProperty = "Protected"
    internal val internalProperty = "Internal"
    public val publicProperty = "Public" // Default
    
    private fun privateFunction() {}
    protected fun protectedFunction() {}
    internal fun internalFunction() {}
    public fun publicFunction() {} // Default
}
```

## Inheritance

### Basic Inheritance
```kotlin
// Base class (must be open)
open class Animal(val name: String) {
    open fun makeSound() {
        println("$name makes a sound")
    }
}

// Derived class
class Dog(name: String, val breed: String) : Animal(name) {
    override fun makeSound() {
        println("$name barks")
    }
    
    fun wagTail() {
        println("$name wags tail")
    }
}

// Abstract class
abstract class Shape {
    abstract fun area(): Double
    
    fun describe() {
        println("This shape has area: ${area()}")
    }
}

class Circle(val radius: Double) : Shape() {
    override fun area() = Math.PI * radius * radius
}
```

### Interfaces
```kotlin
interface Drawable {
    fun draw()
    
    // Interface with default implementation
    fun printInfo() {
        println("This is drawable")
    }
}

interface Clickable {
    fun click()
    
    // Default implementation
    fun showClick() = println("Clicked!")
}

class Button : Drawable, Clickable {
    override fun draw() {
        println("Drawing button")
    }
    
    override fun click() {
        println("Button clicked")
    }
}
```

## Data Classes

### Data Class
```kotlin
data class User(val name: String, val age: Int, val email: String)

// Automatically generated:
// - equals() and hashCode()
// - toString()
// - componentN() functions
// - copy() function

val user = User("John", 30, "john@example.com")
println(user) // User(name=John, age=30, email=john@example.com)

// Destructuring
val (name, age, email) = user

// Copy with modifications
val olderUser = user.copy(age = 31)
```

### Enum Classes
```kotlin
enum class Direction {
    NORTH, SOUTH, EAST, WEST
}

enum class Color(val rgb: Int) {
    RED(0xFF0000),
    GREEN(0x00FF00),
    BLUE(0x0000FF);
    
    fun containsRed() = (this.rgb and 0xFF0000 != 0)
}

// Usage
val direction = Direction.NORTH
val color = Color.RED
println(color.rgb)
```

### Sealed Classes
```kotlin
sealed class Result<out T>
data class Success<T>(val data: T) : Result<T>()
data class Error(val message: String) : Result<Nothing>()
object Loading : Result<Nothing>()

// Usage with when
fun handleResult(result: Result<String>) {
    when (result) {
        is Success -> println("Data: ${result.data}")
        is Error -> println("Error: ${result.message}")
        Loading -> println("Loading...")
    }
}
```

## Collections

### Lists
```kotlin
// Immutable list
val readOnlyList = listOf("apple", "banana", "cherry")

// Mutable list
val mutableList = mutableListOf("apple", "banana")
mutableList.add("cherry")
mutableList.remove("banana")

// List operations
val numbers = listOf(1, 2, 3, 4, 5)
val doubled = numbers.map { it * 2 }
val filtered = numbers.filter { it > 3 }
val first = numbers.first()
val last = numbers.last()
```

### Sets
```kotlin
// Immutable set
val readOnlySet = setOf("apple", "banana", "cherry")

// Mutable set
val mutableSet = mutableSetOf("apple", "banana")
mutableSet.add("cherry")
mutableSet.remove("banana")

// Set operations
val set1 = setOf(1, 2, 3)
val set2 = setOf(3, 4, 5)
val union = set1 union set2
val intersection = set1 intersect set2
val difference = set1 subtract set2
```

### Maps
```kotlin
// Immutable map
val readOnlyMap = mapOf("a" to 1, "b" to 2, "c" to 3)

// Mutable map
val mutableMap = mutableMapOf("a" to 1, "b" to 2)
mutableMap["c"] = 3
mutableMap.remove("b")

// Map operations
val map = mapOf("name" to "John", "age" to "30")
val name = map["name"]
val age = map.getValue("age")
val keys = map.keys
val values = map.values
```

### Collection Operations
```kotlin
val numbers = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// Transformations
val doubled = numbers.map { it * 2 }
val strings = numbers.map { "Number: $it" }

// Filtering
val evens = numbers.filter { it % 2 == 0 }
val odds = numbers.filterNot { it % 2 == 0 }

// Aggregation
val sum = numbers.sum()
val average = numbers.average()
val max = numbers.maxOrNull()
val min = numbers.minOrNull()

// Grouping
val grouped = numbers.groupBy { it % 3 }

// Sorting
val sorted = numbers.sorted()
val sortedDesc = numbers.sortedDescending()
```

## Coroutines

### Basic Coroutines
```kotlin
import kotlinx.coroutines.*

// Simple coroutine
fun main() = runBlocking {
    launch {
        delay(1000L)
        println("World!")
    }
    println("Hello,")
}

// Async coroutine
fun main() = runBlocking {
    val deferred = async {
        delay(1000L)
        "Hello"
    }
    println("${deferred.await()}, World!")
}
```

### Suspending Functions
```kotlin
suspend fun fetchData(): String {
    delay(1000L) // Simulate network call
    return "Data"
}

suspend fun processData(data: String): String {
    delay(500L) // Simulate processing
    return "Processed: $data"
}

// Usage
fun main() = runBlocking {
    val data = fetchData()
    val processed = processData(data)
    println(processed)
}
```

### Coroutine Builders
```kotlin
// runBlocking - blocks current thread
runBlocking {
    // coroutine code
}

// launch - fire and forget
launch {
    // coroutine code
}

// async - concurrent execution with result
val deferred = async {
    // return some value
}
val result = deferred.await()

// withContext - change context
withContext(Dispatchers.IO) {
    // IO operations
}
```

### Channels
```kotlin
import kotlinx.coroutines.channels.*

// Channel for communication
val channel = Channel<Int>()

launch {
    for (x in 1..5) {
        channel.send(x * x)
    }
    channel.close()
}

launch {
    for (y in channel) {
        println(y)
    }
}

// Produce builder
val squares = produce<Int> {
    for (x in 1..5) {
        send(x * x)
    }
}
```

## Extension Functions

### Basic Extensions
```kotlin
// Extension function for String
fun String.isPalindrome(): Boolean {
    return this == this.reversed()
}

// Usage
val text = "racecar"
println(text.isPalindrome()) // true

// Extension property
val String.lastChar: Char
    get() = this[length - 1]

// Extension with receiver
fun StringBuilder.appendLine(text: String) = this.append("$text\n")
```

### Generic Extensions
```kotlin
// Generic extension function
fun <T> List<T>.second(): T {
    if (size < 2) throw IndexOutOfBoundsException()
    return this[1]
}

// Usage
val numbers = listOf(1, 2, 3, 4, 5)
println(numbers.second()) // 2
```

## Delegation

### Class Delegation
```kotlin
interface Base {
    fun print()
}

class BaseImpl(val x: Int) : Base {
    override fun print() { println(x) }
}

class Derived(b: Base) : Base by b

// Usage
val base = BaseImpl(10)
val derived = Derived(base)
derived.print() // 10
```

### Property Delegation
```kotlin
import kotlin.properties.Delegates

class User {
    // Lazy property
    val name: String by lazy {
        println("Computed!")
        "John"
    }
    
    // Observable property
    var age: Int by Delegates.observable(0) { property, oldValue, newValue ->
        println("${property.name} changed from $oldValue to $newValue")
    }
    
    // Vetoable property
    var salary: Double by Delegates.vetoable(0.0) { property, oldValue, newValue ->
        newValue >= 0.0
    }
}
```

## Type System

### Generics
```kotlin
// Generic class
class Box<T>(val value: T)

// Generic function
fun <T> singletonList(item: T): List<T> {
    return listOf(item)
}

// Multiple type parameters
class Pair<A, B>(val first: A, val second: B)

// Bounded type parameters
fun <T : Comparable<T>> sort(list: List<T>): List<T> {
    return list.sorted()
}
```

### Variance
```kotlin
// Covariance (out)
interface Producer<out T> {
    fun produce(): T
}

// Contravariance (in)
interface Consumer<in T> {
    fun consume(item: T)
}

// Invariance (default)
interface Processor<T> {
    fun process(item: T): T
}
```

### Type Aliases
```kotlin
typealias UserId = String
typealias UserMap = Map<UserId, String>

// Function type alias
typealias Predicate<T> = (T) -> Boolean

// Usage
val isEven: Predicate<Int> = { it % 2 == 0 }
```

## Standard Library

### String Operations
```kotlin
val text = "Hello, Kotlin!"

// String templates
val name = "John"
val greeting = "Hello, $name!"
val info = "Name: ${name.uppercase()}"

// String operations
text.uppercase()
text.lowercase()
text.substring(0, 5)
text.replace("Kotlin", "World")
text.split(", ")

// String builder
val sb = StringBuilder()
sb.append("Hello")
sb.append(", ")
sb.append("World!")
val result = sb.toString()
```

### File Operations
```kotlin
import java.io.File

// Read file
val file = File("example.txt")
val content = file.readText()
val lines = file.readLines()

// Write file
file.writeText("Hello, World!")
file.appendText("\nNew line")

// File operations
if (file.exists()) {
    println("File size: ${file.length()}")
}

// Working with paths
val path = file.toPath()
val absolutePath = file.absolutePath
```

### Date and Time
```kotlin
import java.time.*
import java.time.format.DateTimeFormatter

// Current time
val now = LocalDateTime.now()
val today = LocalDate.now()
val currentTime = LocalTime.now()

// Creating dates
val specificDate = LocalDate.of(2023, 12, 25)
val specificTime = LocalTime.of(14, 30, 0)

// Formatting
val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")
val formatted = now.format(formatter)

// Parsing
val parsed = LocalDateTime.parse("2023-12-25 14:30:00", formatter)
```

## Testing

### Unit Testing
```kotlin
import org.junit.Test
import org.junit.Assert.*

class CalculatorTest {
    
    @Test
    fun testAddition() {
        val calculator = Calculator()
        val result = calculator.add(2, 3)
        assertEquals(5, result)
    }
    
    @Test
    fun testDivision() {
        val calculator = Calculator()
        val result = calculator.divide(10, 2)
        assertEquals(5.0, result, 0.001)
    }
    
    @Test(expected = IllegalArgumentException::class)
    fun testDivisionByZero() {
        val calculator = Calculator()
        calculator.divide(10, 0)
    }
}
```

### Coroutine Testing
```kotlin
import kotlinx.coroutines.test.*

class CoroutineTest {
    
    @Test
    fun testSuspendFunction() = runTest {
        val result = suspendingFunction()
        assertEquals("Expected", result)
    }
    
    @Test
    fun testWithDelay() = runTest {
        val startTime = currentTime
        delay(1000)
        val endTime = currentTime
        assertEquals(1000, endTime - startTime)
    }
}
```

## Best Practices

### Null Safety
```kotlin
// Use safe calls
val length = text?.length

// Use elvis operator for defaults
val length = text?.length ?: 0

// Use let for null checks
text?.let { nonNullText ->
    println(nonNullText.uppercase())
}

// Use requireNotNull for validation
fun processText(text: String?) {
    val nonNullText = requireNotNull(text) { "Text cannot be null" }
    // Process non-null text
}
```

### Immutability
```kotlin
// Prefer val over var
val immutableList = listOf(1, 2, 3)
val immutableMap = mapOf("a" to 1, "b" to 2)

// Use data classes for immutable data
data class User(val name: String, val age: Int)

// Use copy for modifications
val originalUser = User("John", 30)
val modifiedUser = originalUser.copy(age = 31)
```

### Functional Programming
```kotlin
// Use higher-order functions
val numbers = listOf(1, 2, 3, 4, 5)
val doubled = numbers.map { it * 2 }
val filtered = numbers.filter { it > 3 }

// Use sequences for large collections
val result = numbers.asSequence()
    .filter { it > 2 }
    .map { it * 2 }
    .toList()

// Use apply, let, run, also, with
val user = User("John", 30).apply {
    // Configure object
}
```

## Android Development

### Activity
```kotlin
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        // Initialize views
        val button = findViewById<Button>(R.id.button)
        button.setOnClickListener {
            // Handle click
        }
    }
}
```

### ViewBinding
```kotlin
class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        
        binding.button.setOnClickListener {
            binding.textView.text = "Button clicked!"
        }
    }
}
```

### Room Database
```kotlin
@Entity
data class User(
    @PrimaryKey val id: Int,
    val name: String,
    val email: String
)

@Dao
interface UserDao {
    @Query("SELECT * FROM user")
    suspend fun getAllUsers(): List<User>
    
    @Insert
    suspend fun insertUser(user: User)
    
    @Delete
    suspend fun deleteUser(user: User)
}

@Database(entities = [User::class], version = 1)
abstract class AppDatabase : RoomDatabase() {
    abstract fun userDao(): UserDao
}
```

## Quick Reference

### Variable Declaration
```kotlin
val immutable = "Cannot change"
var mutable = "Can change"
lateinit var lateInit: String
val lazy: String by lazy { "Computed when needed" }
```

### Function Declaration
```kotlin
fun functionName(param: Type): ReturnType {
    return value
}

fun singleExpression(x: Int) = x * 2
fun defaultParams(x: Int = 0) = x
fun varargs(vararg items: String) = items.toList()
```

### Classes
```kotlin
class ClassName(val property: Type) {
    fun method() {}
}

data class DataClass(val prop: Type)
object Singleton
sealed class SealedClass
```

### Collections
```kotlin
listOf(1, 2, 3)           // Immutable list
mutableListOf(1, 2, 3)    // Mutable list
setOf(1, 2, 3)            // Immutable set
mapOf("a" to 1, "b" to 2) // Immutable map
```

### Coroutines
```kotlin
runBlocking { /* code */ }
launch { /* fire and forget */ }
async { /* return value */ }
suspend fun name() { /* suspending function */ }
```

### Null Safety
```kotlin
var nullable: String? = null
val length = nullable?.length
val lengthOrZero = nullable?.length ?: 0
val definitelyNotNull = nullable!!
```

## See Also

- [Kotlin Documentation](https://kotlinlang.org/docs/) - Official documentation
- [Kotlin Koans](https://play.kotlinlang.org/koans/) - Interactive exercises
- [Android Kotlin Guide](https://developer.android.com/kotlin) - Android-specific Kotlin
- [Kotlin Coroutines Guide](https://kotlinlang.org/docs/coroutines-guide.html) - Coroutines documentation
- `kotlinc` - Kotlin compiler
- `kotlin` - Kotlin script runner