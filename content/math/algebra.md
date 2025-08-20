---
title: "Algebra"
date: 2023-01-01T00:00:00Z
draft: false
description: "Comprehensive guide to algebra covering variables, equations, functions, graphing, and algebraic problem-solving techniques."
categories: ["math"]
tags: ["algebra", "variables", "equations", "functions", "graphing", "polynomials", "factoring"]
---

## Prerequisites

**Required:**
- **[BasicMath](../basic-math)** - All arithmetic operations, fractions, order of operations (BODMAS)

**Helpful:**
- Comfort with negative numbers and basic problem-solving

## Overview

Algebra is the branch of mathematics that uses letters and symbols to represent numbers and quantities in formulas and equations. It's the bridge between basic arithmetic and advanced mathematics, teaching us to work with unknown values and solve complex problems systematically.

This guide progresses from basic variable concepts through equation solving, graphing, and advanced algebraic techniques. Master these fundamentals to unlock higher mathematics and practical problem-solving skills.

## Variables and Expressions

### Understanding Variables

A **variable** is a letter or symbol that represents an unknown number or a number that can change.

```
Examples:
• x, y, z (most common variables)
• a, b, c (often used for constants)
• n (often used for counting)
• t (often used for time)
```

#### Why Use Variables?
```
Instead of: "A number plus 5 equals 12"
We write: x + 5 = 12

Variables let us:
• Represent unknown quantities
• Write general formulas
• Solve problems systematically
```

### Algebraic Expressions

An **algebraic expression** combines variables, numbers, and operations.

#### Basic Terms
```
Expression: 3x + 5
• 3x is a "term" (coefficient 3, variable x)
• 5 is a "constant term"
• + is the "operation"

Expression: 2x² - 4x + 7
• 2x² (coefficient 2, variable x squared)
• -4x (coefficient -4, variable x) 
• 7 (constant term)
```

#### Like Terms
Terms that have the same variable raised to the same power.
```
Like terms (can be combined):
• 3x and 7x → 10x
• 5y² and -2y² → 3y²
• 8 and -3 → 5

Unlike terms (cannot be combined):
• 3x and 5y (different variables)
• 2x and 4x² (different powers)
```

### Simplifying Expressions

#### Combining Like Terms
```
Example 1: 3x + 5x - 2x
= (3 + 5 - 2)x
= 6x

Example 2: 4x² + 2x - 3x² + 7x - 1
= 4x² - 3x² + 2x + 7x - 1
= x² + 9x - 1
```

#### Distributive Property
```
a(b + c) = ab + ac

Examples:
3(x + 4) = 3x + 12
-2(3y - 5) = -6y + 10
x(x + 3) = x² + 3x

Complex example:
2(3x + 1) - 4(x - 2)
= 6x + 2 - 4x + 8
= 2x + 10
```

### Evaluating Expressions

Substitute numbers for variables and calculate.

```
Expression: 2x + 3y - 5
If x = 4 and y = -1:
2(4) + 3(-1) - 5
= 8 - 3 - 5
= 0

Expression: x² - 4x + 3
If x = 5:
(5)² - 4(5) + 3
= 25 - 20 + 3
= 8
```

## Equations

An **equation** states that two expressions are equal. Our goal is to find the value(s) of the variable that make the equation true.

### Linear Equations

#### One-Step Equations
```
x + 7 = 12
Subtract 7 from both sides:
x = 5

3x = 21
Divide both sides by 3:
x = 7

x/4 = 6
Multiply both sides by 4:
x = 24
```

#### Two-Step Equations
```
2x + 5 = 13
Subtract 5: 2x = 8
Divide by 2: x = 4

Check: 2(4) + 5 = 8 + 5 = 13 ✓
```

#### Multi-Step Equations
```
3(x - 2) + 4x = 22
Step 1: Distribute
3x - 6 + 4x = 22
Step 2: Combine like terms
7x - 6 = 22
Step 3: Add 6
7x = 28
Step 4: Divide by 7
x = 4

Check: 3(4 - 2) + 4(4) = 6 + 16 = 22 ✓
```

#### Equations with Variables on Both Sides
```
5x - 3 = 2x + 9
Step 1: Subtract 2x from both sides
3x - 3 = 9
Step 2: Add 3 to both sides
3x = 12
Step 3: Divide by 3
x = 4
```

### Solving Strategy
1. **Simplify** both sides (distribute, combine like terms)
2. **Collect** variable terms on one side
3. **Collect** constants on the other side
4. **Divide** by the coefficient of the variable
5. **Check** your answer

## Systems of Equations

When you have multiple equations with multiple variables.

### Two-Variable Systems

#### Substitution Method
```
System:
y = 2x + 1    ... (1)
3x + y = 11   ... (2)

Step 1: Substitute (1) into (2)
3x + (2x + 1) = 11
5x + 1 = 11
5x = 10
x = 2

Step 2: Find y using equation (1)
y = 2(2) + 1 = 5

Solution: (2, 5)

Check: 3(2) + 5 = 6 + 5 = 11 ✓
```

#### Elimination Method
```
System:
2x + 3y = 7   ... (1)
4x - 3y = 5   ... (2)

Step 1: Add equations (y-terms cancel)
6x = 12
x = 2

Step 2: Substitute back
2(2) + 3y = 7
4 + 3y = 7
3y = 3
y = 1

Solution: (2, 1)
```

### Word Problems with Systems
```
Problem: Concert tickets cost $15 for adults and $8 for children. 
120 tickets were sold for $1350 total. How many of each type?

Let: a = adult tickets, c = child tickets

Equations:
a + c = 120        (total tickets)
15a + 8c = 1350   (total money)

From first equation: c = 120 - a
Substitute: 15a + 8(120 - a) = 1350
15a + 960 - 8a = 1350
7a = 390
a = 60

Therefore: c = 120 - 60 = 60

Answer: 60 adult tickets, 60 child tickets
```

## Quadratic Equations

Equations where the highest power of the variable is 2.

### Standard Form
```
ax² + bx + c = 0
where a ≠ 0

Examples:
x² - 5x + 6 = 0
2x² + 3x - 2 = 0
x² - 4 = 0
```

### Solving Methods

#### Factoring
```
x² - 5x + 6 = 0
Factor: (x - 2)(x - 3) = 0
Solutions: x = 2 or x = 3

x² - 9 = 0
Factor: (x + 3)(x - 3) = 0
Solutions: x = -3 or x = 3
```

#### Quadratic Formula
```
For ax² + bx + c = 0:

x = (-b ± √(b² - 4ac)) / (2a)

Example: 2x² + 5x - 3 = 0
a = 2, b = 5, c = -3

x = (-5 ± √(25 - 4(2)(-3))) / (2(2))
x = (-5 ± √(25 + 24)) / 4
x = (-5 ± √49) / 4
x = (-5 ± 7) / 4

Solutions: x = 2/4 = 1/2 or x = -12/4 = -3
```

#### Completing the Square
```
x² + 6x + 5 = 0
Step 1: Move constant
x² + 6x = -5
Step 2: Complete the square
x² + 6x + 9 = -5 + 9
(x + 3)² = 4
Step 3: Take square root
x + 3 = ±2
x = -3 ± 2
Solutions: x = -1 or x = -5
```

## Functions

A **function** is a rule that assigns exactly one output to each input.

### Function Notation
```
f(x) = 2x + 3

Read as: "f of x equals 2x plus 3"
• x is the input (independent variable)
• f(x) is the output (dependent variable)

To find f(4):
f(4) = 2(4) + 3 = 11
```

### Types of Functions

#### Linear Functions
```
f(x) = mx + b
• m is the slope
• b is the y-intercept
• Graph is a straight line

Example: f(x) = 2x - 1
Slope = 2, y-intercept = -1
```

#### Quadratic Functions
```
f(x) = ax² + bx + c
• Graph is a parabola
• Opens up if a > 0, down if a < 0

Example: f(x) = x² - 4x + 3
Vertex form: f(x) = (x - 2)² - 1
Vertex at (2, -1)
```

#### Exponential Functions
```
f(x) = abˣ
• a is initial value
• b is growth factor

Example: f(x) = 2 · 3ˣ
Starts at 2, triples each time x increases by 1
```

### Domain and Range

**Domain**: All possible input values (x-values)
**Range**: All possible output values (y-values)

```
f(x) = √x
Domain: x ≥ 0 (can't take square root of negative)
Range: f(x) ≥ 0 (square root is always non-negative)

f(x) = 1/x
Domain: x ≠ 0 (can't divide by zero)
Range: f(x) ≠ 0 (fraction never equals zero)
```

## Graphing

### Coordinate Plane

Points are located using (x, y) coordinates.
```
Quadrants:
I: (+, +)    II: (-, +)
III: (-, -)  IV: (+, -)

Important lines:
x-axis: y = 0
y-axis: x = 0
Origin: (0, 0)
```

### Graphing Linear Equations

#### Slope-Intercept Form
```
y = mx + b
• m = slope (rise/run)
• b = y-intercept

Example: y = 2x - 3
1. Start at y-intercept: (0, -3)
2. Use slope 2 = 2/1: up 2, right 1
3. Plot points and draw line
```

#### Finding Slope
```
Slope = (y₂ - y₁)/(x₂ - x₁)

Between points (1, 3) and (4, 9):
m = (9 - 3)/(4 - 1) = 6/3 = 2
```

#### Graphing by Intercepts
```
For 2x + 3y = 6:

x-intercept (set y = 0):
2x + 3(0) = 6
x = 3
Point: (3, 0)

y-intercept (set x = 0):
2(0) + 3y = 6
y = 2
Point: (0, 2)

Draw line through both points
```

### Graphing Quadratic Functions

```
f(x) = x² - 4x + 3

Method 1: Make a table
x | -1 | 0 | 1 | 2 | 3 | 4 | 5
y |  8 | 3 | 0 |-1 | 0 | 3 | 8

Method 2: Find vertex and axis of symmetry
Vertex x = -b/(2a) = -(-4)/(2·1) = 2
f(2) = 4 - 8 + 3 = -1
Vertex: (2, -1)
Axis of symmetry: x = 2
```

## Polynomials

### Polynomial Operations

#### Adding and Subtracting
```
(3x² + 2x - 1) + (x² - 4x + 3)
= 3x² + x² + 2x - 4x - 1 + 3
= 4x² - 2x + 2

(5x² - 3x + 2) - (2x² + x - 4)
= 5x² - 3x + 2 - 2x² - x + 4
= 3x² - 4x + 6
```

#### Multiplying
```
3x(x² - 2x + 1) = 3x³ - 6x² + 3x

(x + 2)(x + 3)
= x² + 3x + 2x + 6
= x² + 5x + 6

(2x - 1)(x² + 3x - 2)
= 2x(x² + 3x - 2) - 1(x² + 3x - 2)
= 2x³ + 6x² - 4x - x² - 3x + 2
= 2x³ + 5x² - 7x + 2
```

### Factoring

#### Greatest Common Factor
```
6x³ + 9x² - 3x
GCF = 3x
= 3x(2x² + 3x - 1)
```

#### Factoring Quadratics
```
x² + 7x + 12
Find two numbers that multiply to 12 and add to 7: 3 and 4
= (x + 3)(x + 4)

2x² - 5x - 3
Find factors of ac = -6 that add to -5: -6 and 1
= 2x² - 6x + x - 3
= 2x(x - 3) + 1(x - 3)
= (2x + 1)(x - 3)
```

#### Special Patterns
```
Difference of squares: a² - b² = (a + b)(a - b)
x² - 9 = (x + 3)(x - 3)

Perfect square trinomials:
a² + 2ab + b² = (a + b)²
x² + 6x + 9 = (x + 3)²

a² - 2ab + b² = (a - b)²
x² - 10x + 25 = (x - 5)²
```

## Inequalities

Similar to equations, but with inequality symbols: <, >, ≤, ≥

### Solving Linear Inequalities
```
3x + 5 > 14
Subtract 5: 3x > 9
Divide by 3: x > 3

Solution: All numbers greater than 3
Graph: Open circle at 3, arrow to the right
```

### Important Rule
When multiplying or dividing by a negative number, flip the inequality sign.
```
-2x > 6
Divide by -2 (flip sign): x < -3
```

### Compound Inequalities
```
-3 < 2x + 1 ≤ 7
Subtract 1: -4 < 2x ≤ 6
Divide by 2: -2 < x ≤ 3

Solution: x is between -2 and 3 (including 3)
```

### Absolute Value Inequalities
```
|x - 2| < 5
Means: -5 < x - 2 < 5
Add 2: -3 < x < 7

|x + 1| ≥ 4
Means: x + 1 ≤ -4 or x + 1 ≥ 4
Solutions: x ≤ -5 or x ≥ 3
```

## Word Problems and Applications

### Translation Guide
```
Phrase → Mathematical Expression
"5 more than a number" → x + 5
"3 less than a number" → x - 3
"twice a number" → 2x
"half of a number" → x/2
"5 more than twice a number" → 2x + 5
"the sum of two consecutive integers" → x + (x + 1)
```

### Problem-Solving Strategy
1. **Read** the problem carefully
2. **Identify** what you're looking for
3. **Define** variables
4. **Write** an equation
5. **Solve** the equation
6. **Check** if your answer makes sense
7. **Answer** the question in words

### Example Problems

#### Age Problem
```
Problem: Sarah is 3 times as old as her brother. In 5 years, 
she will be twice as old as he will be. How old are they now?

Let x = brother's current age
Then 3x = Sarah's current age

In 5 years:
Brother's age: x + 5
Sarah's age: 3x + 5

Equation: 3x + 5 = 2(x + 5)
3x + 5 = 2x + 10
x = 5

Answer: Brother is 5, Sarah is 15
```

#### Distance-Rate-Time Problem
```
Problem: Two cars leave from the same point traveling in opposite 
directions. One travels at 60 mph, the other at 70 mph. 
After how many hours will they be 390 miles apart?

Let t = time in hours
Distance = rate × time

Car 1 distance: 60t
Car 2 distance: 70t
Total distance apart: 60t + 70t = 130t

Equation: 130t = 390
t = 3

Answer: After 3 hours
```

#### Work Problem
```
Problem: John can paint a fence in 4 hours. Mike can paint 
the same fence in 6 hours. How long will it take if they work together?

John's rate: 1/4 fence per hour
Mike's rate: 1/6 fence per hour
Combined rate: 1/4 + 1/6 = 3/12 + 2/12 = 5/12 fence per hour

Time = Work ÷ Rate = 1 ÷ (5/12) = 12/5 = 2.4 hours

Answer: 2 hours 24 minutes
```

## Advanced Topics

### Rational Expressions

#### Simplifying
```
(x² - 4)/(x + 2) = (x + 2)(x - 2)/(x + 2) = x - 2
(provided x ≠ -2)
```

#### Operations
```
Addition: a/b + c/d = (ad + bc)/(bd)
2/x + 3/(x-1) = (2(x-1) + 3x)/(x(x-1)) = (5x-2)/(x(x-1))

Multiplication: (a/b) × (c/d) = ac/bd
(x+1)/x × x/(x+3) = (x+1)/(x+3)
```

### Radical Expressions

#### Simplifying Radicals
```
√72 = √(36 × 2) = 6√2
∛24 = ∛(8 × 3) = 2∛3
√(x⁸) = x⁴ (assuming x ≥ 0)
```

#### Operations with Radicals
```
√12 + √27 = 2√3 + 3√3 = 5√3
√6 × √10 = √60 = 2√15
(√5 + 2)(√5 - 3) = 5 - 3√5 + 2√5 - 6 = -1 - √5
```

### Exponential and Logarithmic Equations

#### Exponential Equations
```
2^x = 8
2^x = 2³
x = 3

3^(2x-1) = 27
3^(2x-1) = 3³
2x - 1 = 3
x = 2
```

## Practice Problems

### Linear Equations
```
1. Solve: 3(x - 2) + 4 = 2x + 5
2. Solve: 2x + 3 = 5x - 12
3. The sum of three consecutive integers is 78. Find the integers.
```

### Systems of Equations
```
1. Solve: x + y = 5, 2x - y = 1
2. Solve: 3x + 2y = 12, x - y = 1
3. Two numbers have a sum of 20 and a difference of 4. Find them.
```

### Quadratics
```
1. Solve by factoring: x² - 7x + 12 = 0
2. Solve using the quadratic formula: 2x² + 3x - 2 = 0
3. Find the vertex of f(x) = x² - 6x + 8
```

### Functions
```
1. If f(x) = 3x - 5, find f(-2)
2. Find the domain of f(x) = √(x - 3)
3. Graph y = 2x + 1
```

### Word Problems
```
1. The length of a rectangle is 3 more than twice its width. 
   If the perimeter is 36, find the dimensions.

2. A boat travels 20 miles downstream in the same time 
   it takes to travel 12 miles upstream. If the current 
   is 2 mph, find the boat's speed in still water.
```

## Answer Key

### Linear Equations
```
1. 3(x - 2) + 4 = 2x + 5 → x = 7
2. 2x + 3 = 5x - 12 → x = 5
3. Three consecutive integers: 25, 26, 27
```

### Systems of Equations
```
1. x + y = 5, 2x - y = 1 → (2, 3)
2. 3x + 2y = 12, x - y = 1 → (2, 3)
3. Two numbers: 12 and 8
```

### Quadratics
```
1. x² - 7x + 12 = 0 → x = 3 or x = 4
2. 2x² + 3x - 2 = 0 → x = 1/2 or x = -2
3. Vertex of f(x) = x² - 6x + 8 is (3, -1)
```

### Functions
```
1. f(-2) = 3(-2) - 5 = -11
2. Domain: x ≥ 3
3. Graph: Line with slope 2, y-intercept 1
```

### Word Problems
```
1. Rectangle: width = 5, length = 13
2. Boat speed: 8 mph in still water
```

## Quick Reference

### Equation Solving Steps
1. Simplify both sides
2. Collect variables on one side
3. Collect constants on the other side
4. Divide by coefficient
5. Check your answer

### Quadratic Formula
```
x = (-b ± √(b² - 4ac)) / (2a)
```

### Function Notation
- f(x): function notation
- Domain: all possible x-values
- Range: all possible y-values

### Slope Formula
```
m = (y₂ - y₁) / (x₂ - x₁)
```

### Common Factoring Patterns
- a² - b² = (a + b)(a - b)
- a² + 2ab + b² = (a + b)²
- a² - 2ab + b² = (a - b)²

## See Also

- **[BasicMath](../basic-math)**: Foundation arithmetic and number systems - required prerequisite
- **[Geometry](../geometry)**: Shapes, areas, and spatial relationships  
- **[Statistics](../statistics)**: Data analysis and probability
- **[Pre-Calculus](../pre-calculus)**: Advanced functions and mathematical analysis - next step
- **[Matrices](../matrices)**: Systems of equations and linear algebra applications
- **[Calculus](../calculus)**: Uses algebraic foundations for derivatives and integrals