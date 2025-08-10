---
title: "BasicMath"
date: 2024-01-01T00:00:00Z
draft: false
description: "Comprehensive reference for basic mathematics operations, BODMAS, number systems, GCF/LCM, and fundamental arithmetic concepts."
categories: ["math"]
tags: ["mathematics", "arithmetic", "bodmas", "numbers", "gcf", "lcm", "operations", "basics"]
---

## Overview

BasicMath covers fundamental mathematical concepts essential for everyday calculations and advanced mathematics. This reference includes order of operations (BODMAS/PEMDAS), number systems, greatest common factor (GCF), least common multiple (LCM), and all basic arithmetic operations.

## Order of Operations (BODMAS/PEMDAS)

### BODMAS Rule
**B**rackets, **O**rders (Exponents/Powers), **D**ivision, **M**ultiplication, **A**ddition, **S**ubtraction

**PEMDAS Alternative**: **P**arentheses, **E**xponents, **M**ultiplication, **D**ivision, **A**ddition, **S**ubtraction

### Step-by-Step Process
1. **Brackets/Parentheses** first: ( )
2. **Orders/Exponents** next: powers, roots, etc.
3. **Division and Multiplication** (left to right)
4. **Addition and Subtraction** (left to right)

### Examples

#### Example 1: Basic BODMAS
```
Calculate: 15 + 3 × 4 - 2
Step 1: 3 × 4 = 12        (Multiplication first)
Step 2: 15 + 12 - 2       (Left to right for addition/subtraction)
Step 3: 27 - 2 = 25
Answer: 25
```

#### Example 2: With Brackets
```
Calculate: (8 + 2) × 3 - 5
Step 1: (8 + 2) = 10      (Brackets first)
Step 2: 10 × 3 = 30       (Multiplication)
Step 3: 30 - 5 = 25       (Subtraction)
Answer: 25
```

#### Example 3: With Exponents
```
Calculate: 2³ + 4 × (6 - 3)
Step 1: (6 - 3) = 3       (Brackets first)
Step 2: 2³ = 8            (Exponents/Orders)
Step 3: 4 × 3 = 12        (Multiplication)
Step 4: 8 + 12 = 20       (Addition)
Answer: 20
```

#### Example 4: Complex Expression
```
Calculate: 48 ÷ 6 + 2² × (10 - 7) - 3
Step 1: (10 - 7) = 3      (Brackets)
Step 2: 2² = 4            (Orders/Exponents)
Step 3: 48 ÷ 6 = 8        (Division)
Step 4: 4 × 3 = 12        (Multiplication)
Step 5: 8 + 12 - 3        (Left to right)
Step 6: 20 - 3 = 17
Answer: 17
```

#### Example 5: Multiple Brackets
```
Calculate: (15 - 3) ÷ (2 + 2) × 3
Step 1: (15 - 3) = 12     (First bracket)
Step 2: (2 + 2) = 4       (Second bracket)
Step 3: 12 ÷ 4 = 3        (Division)
Step 4: 3 × 3 = 9         (Multiplication)
Answer: 9
```

### Common Mistakes to Avoid
```
❌ WRONG: 6 + 2 × 3 = 8 × 3 = 24
✅ CORRECT: 6 + 2 × 3 = 6 + 6 = 12

❌ WRONG: 20 - 4 × 2 = 16 × 2 = 32
✅ CORRECT: 20 - 4 × 2 = 20 - 8 = 12

❌ WRONG: (5 + 3) × 2² = 8 × 2² = 16²
✅ CORRECT: (5 + 3) × 2² = 8 × 4 = 32
```

## Number Systems

### Natural Numbers (N)
Counting numbers starting from 1
```
N = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...}
Examples: 42, 156, 999
```

### Whole Numbers (W)
Natural numbers including zero
```
W = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...}
Examples: 0, 25, 100
```

### Integers (Z)
Whole numbers and their negative counterparts
```
Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}
Examples: -45, 0, 23, -100
```

### Rational Numbers (Q)
Numbers that can be expressed as a fraction a/b where b ≠ 0
```
Q = {a/b : a ∈ Z, b ∈ Z, b ≠ 0}
Examples: 
- 3/4 = 0.75
- -2/5 = -0.4
- 7 = 7/1
- 0.333... = 1/3
```

### Irrational Numbers
Numbers that cannot be expressed as a simple fraction
```
Examples:
- π (pi) ≈ 3.14159...
- √2 ≈ 1.41421...
- e ≈ 2.71828...
- √3 ≈ 1.73205...
```

### Real Numbers (R)
All rational and irrational numbers combined
```
R = Q ∪ Irrational Numbers
Examples: -5, 0, 1/2, π, √7, 3.14
```

## Greatest Common Factor (GCF)

### Definition
The **Greatest Common Factor** (also called Greatest Common Divisor - GCD) is the largest positive integer that divides two or more numbers without remainder.

### Methods to Find GCF

#### Method 1: Listing Factors
```
Find GCF of 12 and 18:
Factors of 12: 1, 2, 3, 4, 6, 12
Factors of 18: 1, 2, 3, 6, 9, 18
Common factors: 1, 2, 3, 6
GCF = 6 (largest common factor)
```

#### Method 2: Prime Factorization
```
Find GCF of 24 and 36:
24 = 2³ × 3¹
36 = 2² × 3²
GCF = 2² × 3¹ = 4 × 3 = 12
(Take lowest powers of common prime factors)
```

#### Method 3: Euclidean Algorithm
```
Find GCF of 48 and 18:
48 = 18 × 2 + 12
18 = 12 × 1 + 6
12 = 6 × 2 + 0
GCF = 6 (last non-zero remainder)
```

### Examples and Applications

#### Example 1: Simplifying Fractions
```
Simplify 15/25:
GCF of 15 and 25:
15 = 3 × 5
25 = 5²
GCF = 5

15/25 = (15÷5)/(25÷5) = 3/5
```

#### Example 2: Word Problem
```
Problem: A baker has 36 cookies and 48 cupcakes. 
He wants to package them in identical boxes with 
no items left over. What's the maximum number 
of items per box?

Solution: Find GCF of 36 and 48
36 = 2² × 3²
48 = 2⁴ × 3¹
GCF = 2² × 3¹ = 12

Maximum 12 items per box
(3 cookies and 4 cupcakes per box)
```

#### Example 3: Three Numbers
```
Find GCF of 18, 24, and 30:
18 = 2¹ × 3²
24 = 2³ × 3¹
30 = 2¹ × 3¹ × 5¹
GCF = 2¹ × 3¹ = 6
```

## Least Common Multiple (LCM)

### Definition
The **Least Common Multiple** is the smallest positive integer that is divisible by two or more given numbers.

### Methods to Find LCM

#### Method 1: Listing Multiples
```
Find LCM of 6 and 8:
Multiples of 6: 6, 12, 18, 24, 30, 36, 42, 48...
Multiples of 8: 8, 16, 24, 32, 40, 48...
Common multiples: 24, 48, 72...
LCM = 24 (smallest common multiple)
```

#### Method 2: Prime Factorization
```
Find LCM of 12 and 18:
12 = 2² × 3¹
18 = 2¹ × 3²
LCM = 2² × 3² = 4 × 9 = 36
(Take highest powers of all prime factors)
```

#### Method 3: Using GCF Formula
```
LCM(a,b) = (a × b) ÷ GCF(a,b)

Find LCM of 15 and 20:
GCF(15,20) = 5
LCM = (15 × 20) ÷ 5 = 300 ÷ 5 = 60
```

### Examples and Applications

#### Example 1: Adding Fractions
```
Add: 1/6 + 1/4
Need common denominator = LCM of 6 and 4
6 = 2¹ × 3¹
4 = 2²
LCM = 2² × 3¹ = 12

1/6 + 1/4 = 2/12 + 3/12 = 5/12
```

#### Example 2: Word Problem
```
Problem: Red lights flash every 12 seconds, 
green lights every 18 seconds. If they flash 
together now, when will they flash together again?

Solution: Find LCM of 12 and 18
12 = 2² × 3¹
18 = 2¹ × 3²
LCM = 2² × 3² = 36

They will flash together again after 36 seconds
```

#### Example 3: Three Numbers
```
Find LCM of 4, 6, and 8:
4 = 2²
6 = 2¹ × 3¹
8 = 2³
LCM = 2³ × 3¹ = 8 × 3 = 24
```

## Basic Arithmetic Operations

### Addition (+)

#### Whole Numbers
```
Basic Addition:
  234
+ 567
-----
  801

Multi-digit with carrying:
  789
+ 456
-----
 1245
```

#### Adding Decimals
```
Align decimal points:
  12.45
+  3.78
-------
  16.23

Mixed decimals:
  25.6
+  7.89
-------
  33.49
```

#### Adding Fractions
```
Same denominator:
2/7 + 3/7 = 5/7

Different denominators:
1/3 + 1/4 = 4/12 + 3/12 = 7/12
(Find LCM of denominators)
```

### Subtraction (-)

#### Whole Numbers
```
Basic Subtraction:
  567
- 234
-----
  333

With borrowing:
  1000
-  234
------
   766
```

#### Subtracting Decimals
```
Align decimal points:
  15.67
-  8.29
-------
   7.38

With different decimal places:
  20.5
-  7.25
-------
  13.25
```

#### Subtracting Fractions
```
Same denominator:
5/8 - 3/8 = 2/8 = 1/4

Different denominators:
3/4 - 1/6 = 9/12 - 2/12 = 7/12
```

### Multiplication (×)

#### Whole Numbers
```
Single digit:
  345
×   7
-----
 2415

Multi-digit:
  234
×  56
-----
 1404  (234 × 6)
11700  (234 × 50)
-----
13104
```

#### Multiplying Decimals
```
  2.45
× 1.3
-----
  735
 2450
-----
 3.185

Rule: Count decimal places in both numbers,
place that many decimal places in answer
```

#### Multiplying Fractions
```
2/3 × 4/5 = (2×4)/(3×5) = 8/15

Mixed numbers:
2¼ × 1⅓ = 9/4 × 4/3 = 36/12 = 3
```

### Division (÷)

#### Whole Numbers
```
Long Division:
154 ÷ 7 = 22

    22
  -----
7 | 154
    14
    ---
     14
     14
     ---
      0
```

#### Dividing Decimals
```
15.6 ÷ 2.4 = 156 ÷ 24 = 6.5
(Move decimal points same number of places)

Convert to whole numbers then divide:
15.6 ÷ 2.4 → 156 ÷ 24 = 6.5
```

#### Dividing Fractions
```
2/3 ÷ 1/4 = 2/3 × 4/1 = 8/3 = 2⅔
(Multiply by reciprocal)
```

## Mixed Operations and Problem Solving

### Order of Operations in Complex Problems

#### Example 1: Multi-step Word Problem
```
Problem: A store has 144 apples. They sell 1/3 in 
the morning and 1/4 of the remainder in the afternoon. 
How many apples are left?

Solution:
Step 1: Morning sales = 1/3 × 144 = 48 apples
Step 2: Remaining after morning = 144 - 48 = 96 apples
Step 3: Afternoon sales = 1/4 × 96 = 24 apples
Step 4: Final remaining = 96 - 24 = 72 apples

Answer: 72 apples left
```

#### Example 2: Mixed Number Operations
```
Calculate: 2½ + 1¾ × 2 - ⅓

Step 1: Convert mixed numbers
2½ = 5/2, 1¾ = 7/4

Step 2: Apply BODMAS (multiplication first)
1¾ × 2 = 7/4 × 2 = 14/4 = 7/2

Step 3: Convert to common denominator
5/2 + 7/2 - 1/3 = 12/2 - 1/3 = 6 - 1/3

Step 4: Final calculation
6 - 1/3 = 18/3 - 1/3 = 17/3 = 5⅔

Answer: 5⅔
```

#### Example 3: Percentage and Fractions
```
Problem: In a class of 30 students, 2/5 are boys. 
Of the boys, 25% wear glasses. How many boys wear glasses?

Solution:
Step 1: Number of boys = 2/5 × 30 = 12 boys
Step 2: Boys with glasses = 25% of 12 = 0.25 × 12 = 3 boys

Answer: 3 boys wear glasses
```

### Working with Different Number Forms

#### Converting Between Forms
```
Fraction to Decimal:
3/4 = 3 ÷ 4 = 0.75

Decimal to Percentage:
0.75 = 75%

Percentage to Fraction:
75% = 75/100 = 3/4
```

#### Comparing Numbers
```
Compare: 3/4, 0.8, 70%
Convert all to decimals:
3/4 = 0.75
0.8 = 0.8
70% = 0.70

Order: 70% < 3/4 < 0.8
```

## Special Cases and Tips

### Working with Zero
```
Addition: a + 0 = a
Subtraction: a - 0 = a, 0 - a = -a  
Multiplication: a × 0 = 0
Division: 0 ÷ a = 0, a ÷ 0 = undefined
```

### Working with One
```
Multiplication: a × 1 = a
Division: a ÷ 1 = a, 1 ÷ a = 1/a
```

### Negative Numbers
```
Addition: (-5) + (-3) = -8, (-5) + 3 = -2
Subtraction: (-5) - (-3) = -5 + 3 = -2
Multiplication: (-5) × (-3) = 15, (-5) × 3 = -15
Division: (-15) ÷ (-3) = 5, (-15) ÷ 3 = -5
```

### Mental Math Tricks

#### Multiplication by Powers of 10
```
45 × 10 = 450 (add one zero)
45 × 100 = 4500 (add two zeros)
3.7 × 10 = 37 (move decimal right)
```

#### Multiplication by 5
```
24 × 5 = 24 × 10 ÷ 2 = 240 ÷ 2 = 120
```

#### Squaring Numbers Ending in 5
```
25² = (2×3)×100 + 25 = 600 + 25 = 625
35² = (3×4)×100 + 25 = 1200 + 25 = 1225
45² = (4×5)×100 + 25 = 2000 + 25 = 2025
```

### Common Fraction Equivalents
```
1/2 = 0.5 = 50%
1/3 = 0.333... = 33.33%
1/4 = 0.25 = 25%
1/5 = 0.2 = 20%
1/8 = 0.125 = 12.5%
1/10 = 0.1 = 10%
```

## Practice Problems

### BODMAS Practice
```
1. 8 + 2 × 5 - 3 = ?
2. (12 - 4) × 2 + 5 = ?
3. 15 ÷ 3 + 2² × 4 = ?
4. 20 - (8 + 2) ÷ 5 × 3 = ?
5. 2³ + 4 × (9 - 6) - 10 = ?
```

### GCF and LCM Practice
```
1. Find GCF of 24 and 36
2. Find LCM of 12 and 15  
3. Find GCF of 45, 60, and 75
4. Find LCM of 8, 12, and 16
5. Simplify: 18/24
```

### Mixed Operations
```
1. 2¾ + 1⅓ - ½ = ?
2. 0.25 × 8 + 1.75 = ?
3. 15% of 80 + 2/5 of 30 = ?
4. (3/4 ÷ 1/2) × 2⅔ = ?
5. 144 ÷ 12 + 3² - 2 × 4 = ?
```

## Answers to Practice Problems

### BODMAS Answers
```
1. 8 + 2 × 5 - 3 = 8 + 10 - 3 = 15
2. (12 - 4) × 2 + 5 = 8 × 2 + 5 = 21
3. 15 ÷ 3 + 2² × 4 = 5 + 4 × 4 = 21
4. 20 - (8 + 2) ÷ 5 × 3 = 20 - 10 ÷ 5 × 3 = 14
5. 2³ + 4 × (9 - 6) - 10 = 8 + 12 - 10 = 10
```

### GCF and LCM Answers
```
1. GCF of 24 and 36 = 12
2. LCM of 12 and 15 = 60
3. GCF of 45, 60, and 75 = 15
4. LCM of 8, 12, and 16 = 48
5. 18/24 = 3/4
```

### Mixed Operations Answers
```
1. 2¾ + 1⅓ - ½ = 3⁷⁄₁₂
2. 0.25 × 8 + 1.75 = 3.75
3. 15% of 80 + 2/5 of 30 = 24
4. (3/4 ÷ 1/2) × 2⅔ = 4
5. 144 ÷ 12 + 3² - 2 × 4 = 13
```

## Quick Reference

### Order of Operations
1. **B**rackets/Parentheses
2. **O**rders/Exponents  
3. **D**ivision and **M**ultiplication (left to right)
4. **A**ddition and **S**ubtraction (left to right)

### GCF and LCM Formulas
```
GCF: Largest common factor
LCM: Smallest common multiple
LCM(a,b) = (a × b) ÷ GCF(a,b)
```

### Basic Operations
```
Addition: a + b
Subtraction: a - b  
Multiplication: a × b
Division: a ÷ b
```

### Number Classifications
```
Natural: 1, 2, 3, 4, ...
Whole: 0, 1, 2, 3, 4, ...
Integers: ..., -2, -1, 0, 1, 2, ...
Rational: Can be written as a/b
Real: All rational and irrational numbers
```

## See Also

- **Algebra**: Next level after basic math
- **Geometry**: Shapes, areas, and measurements  
- **Statistics**: Data analysis and probability
- **Trigonometry**: Angles and triangles
- **Calculus**: Advanced mathematical concepts