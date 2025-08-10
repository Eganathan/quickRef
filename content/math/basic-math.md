---
title: "BasicMath"
date: 2024-01-01T00:00:00Z
draft: false
description: "Comprehensive reference for basic mathematics covering number systems, arithmetic operations, BODMAS, GCF/LCM, and problem-solving fundamentals."
categories: ["math"]
tags: ["mathematics", "arithmetic", "bodmas", "numbers", "gcf", "lcm", "operations", "basics"]
---

## Prerequisites

**None** - This is the starting point for all mathematics.

## Overview

BasicMath provides a complete foundation for mathematical understanding, from basic number concepts to solving complex problems. This guide follows a natural learning progression: understanding numbers, mastering basic operations, applying order of operations rules, and solving real-world problems.

Whether you're refreshing your knowledge or learning for the first time, this reference will give you the confidence to tackle any basic arithmetic problem.

## Number Systems

Understanding different types of numbers is the foundation of all mathematics. Let's explore how numbers are classified and used.

### Natural Numbers (N)
The counting numbers we use every day, starting from 1.
```
N = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, ...}

Examples: 7, 25, 156, 999
Used for: Counting objects, ages, quantities
```

### Whole Numbers (W)
Natural numbers plus zero.
```
W = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...}

Examples: 0, 15, 100, 456
Used for: Counting with the possibility of "none"
```

### Integers (Z)
Whole numbers and their negative counterparts.
```
Z = {..., -3, -2, -1, 0, 1, 2, 3, 4, 5, ...}

Examples: -45, -7, 0, 23, 100
Used for: Temperatures, elevations, bank balances
```

### Rational Numbers (Q)
Numbers that can be written as fractions (one integer divided by another, non-zero integer).
```
Q = {a/b : a and b are integers, b ≠ 0}

Examples: 
• 1/2 = 0.5
• 3/4 = 0.75
• -2/5 = -0.4
• 7 = 7/1 (whole numbers are also rational)
• 0.333... = 1/3 (repeating decimals)

Used for: Measurements, parts of wholes, precise calculations
```

### Irrational Numbers
Numbers that cannot be written as simple fractions - their decimal representations never end or repeat.
```
Examples:
• π (pi) ≈ 3.14159265...
• √2 ≈ 1.41421356...
• √3 ≈ 1.73205081...
• e ≈ 2.71828183...

Used for: Geometry, advanced mathematics, scientific calculations
```

### Real Numbers (R)
All rational and irrational numbers combined - essentially every number you can think of on a number line.
```
Real Numbers = Rational Numbers + Irrational Numbers

Examples: -100, -0.5, 0, 1/3, π, √5, 42.7
```

## Sets

Sets are collections of objects and provide a fundamental way to organize and work with groups of numbers or items. Understanding sets helps with organizing data, solving problems, and forms the foundation for more advanced mathematics.

### What is a Set?

A **set** is a well-defined collection of distinct objects, called **elements** or **members**.

```
Examples of sets:
• A = {1, 2, 3, 4, 5} (set of first five natural numbers)
• B = {red, blue, green} (set of primary colors)
• C = {2, 4, 6, 8, 10} (set of first five even numbers)
• D = {} or ∅ (empty set - contains no elements)

Notation:
• Use curly braces { }
• List elements separated by commas
• Order doesn't matter: {1, 2, 3} = {3, 1, 2}
• Each element appears only once: {1, 2, 2, 3} = {1, 2, 3}
```

### Set Membership

We use special symbols to show whether elements belong to sets.

```
Symbols:
• ∈ means "is an element of" or "belongs to"
• ∉ means "is not an element of" or "does not belong to"

Examples: A = {1, 2, 3, 4, 5}
• 3 ∈ A (3 is an element of A)
• 7 ∉ A (7 is not an element of A)
• 2 ∈ A (2 belongs to set A)
```

### Ways to Describe Sets

#### Roster Method (Listing)
List all elements explicitly.
```
A = {1, 2, 3, 4, 5}
B = {Monday, Tuesday, Wednesday, Thursday, Friday}
C = {red, green, blue}
```

#### Set-Builder Notation
Describe the properties that elements must have.
```
A = {x | x is a natural number and 1 ≤ x ≤ 5}
Read as: "A is the set of all x such that x is a natural number and x is between 1 and 5"

B = {x | x is even and 0 < x < 11}
This gives us B = {2, 4, 6, 8, 10}

C = {x | x = 2n, n ∈ N}
This describes the set of all even natural numbers
```

### Types of Sets

#### Finite and Infinite Sets
```
Finite Sets: Have a specific number of elements
• A = {1, 2, 3} has 3 elements
• B = {vowels in English} = {a, e, i, o, u} has 5 elements

Infinite Sets: Have unlimited elements  
• N = {1, 2, 3, 4, 5, ...} (natural numbers)
• E = {2, 4, 6, 8, 10, ...} (even numbers)
• R = all real numbers
```

#### Empty Set
```
The empty set (∅ or {}) contains no elements

Examples:
• Set of months with 32 days = ∅
• {x | x is a real number and x² = -1} = ∅
• Set of even numbers that are odd = ∅
```

#### Universal Set
```
The universal set (U) contains all elements under consideration for a particular discussion

Examples:
• When discussing digits: U = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
• When discussing days: U = {Mon, Tue, Wed, Thu, Fri, Sat, Sun}
• When discussing students in a class: U = {all students in the class}
```

### Set Operations

#### Union (∪)
The union of two sets contains all elements from both sets.
```
A ∪ B = {x | x ∈ A or x ∈ B}

Example: A = {1, 2, 3}, B = {3, 4, 5}
A ∪ B = {1, 2, 3, 4, 5}

Note: Common elements appear only once in the union
```

#### Intersection (∩)
The intersection contains only elements common to both sets.
```
A ∩ B = {x | x ∈ A and x ∈ B}

Example: A = {1, 2, 3, 4}, B = {3, 4, 5, 6}
A ∩ B = {3, 4}

If A ∩ B = ∅, the sets are called disjoint (no common elements)
```

#### Difference (-)
The difference A - B contains elements in A but not in B.
```
A - B = {x | x ∈ A and x ∉ B}

Example: A = {1, 2, 3, 4, 5}, B = {3, 4, 5, 6, 7}
A - B = {1, 2}
B - A = {6, 7}

Note: A - B ≠ B - A (order matters)
```

#### Complement (')
The complement A' contains all elements in the universal set U that are not in A.
```
A' = {x | x ∈ U and x ∉ A}

Example: U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
A = {2, 4, 6, 8, 10}
A' = {1, 3, 5, 7, 9}
```

### Set Relationships

#### Subset (⊆)
A is a subset of B if every element of A is also in B.
```
A ⊆ B means: if x ∈ A, then x ∈ B

Examples:
• {1, 2} ⊆ {1, 2, 3, 4} ✓
• {a, b} ⊆ {a, b, c, d} ✓
• {1, 5} ⊆ {2, 3, 4} ✗ (5 is not in the second set)

Properties:
• Every set is a subset of itself: A ⊆ A
• The empty set is a subset of every set: ∅ ⊆ A
• If A ⊆ B and B ⊆ A, then A = B
```

#### Proper Subset (⊂)
A is a proper subset of B if A ⊆ B and A ≠ B.
```
A ⊂ B means A is contained in B but A is not equal to B

Examples:
• {1, 2} ⊂ {1, 2, 3} ✓
• {1, 2, 3} ⊂ {1, 2, 3} ✗ (not proper - they're equal)
• ∅ ⊂ {1, 2, 3} ✓
```

#### Equal Sets
Two sets are equal if they contain exactly the same elements.
```
A = B if and only if A ⊆ B and B ⊆ A

Examples:
• {1, 2, 3} = {3, 2, 1} ✓ (order doesn't matter)
• {1, 2, 3} = {1, 1, 2, 3} ✓ (repetition doesn't matter)
• {1, 2} = {1, 2, 3} ✗ (different elements)
```

### Cardinality

The **cardinality** of a set is the number of elements in it, denoted |A| or n(A).

```
Examples:
• A = {1, 2, 3, 4} → |A| = 4
• B = {a, e, i, o, u} → |B| = 5  
• C = {} → |C| = 0
• D = {x, y, z, x} → |D| = 3 (x counted once)

For infinite sets:
• |N| = ∞ (countably infinite)
• |R| = ∞ (uncountably infinite)
```

### Venn Diagrams

Visual representations of sets using circles or other shapes.

```
Basic Venn Diagram Rules:
• Rectangle represents universal set U
• Circles represent individual sets
• Overlapping regions show intersections
• Non-overlapping regions show differences

Two-Set Venn Diagram regions:
1. A only: A - B
2. B only: B - A  
3. Both A and B: A ∩ B
4. Neither A nor B: (A ∪ B)'

Applications:
• Visualizing set operations
• Solving word problems
• Understanding logical relationships
• Organizing data analysis
```

### Set Applications and Word Problems

#### Example 1: Survey Problem
```
Problem: In a class of 30 students:
• 18 students like pizza
• 15 students like burgers  
• 8 students like both pizza and burgers
How many students like neither?

Solution using sets:
Let P = students who like pizza, B = students who like burgers
|P| = 18, |B| = 15, |P ∩ B| = 8, |U| = 30

Students who like pizza only: |P - B| = |P| - |P ∩ B| = 18 - 8 = 10
Students who like burgers only: |B - P| = |B| - |P ∩ B| = 15 - 8 = 7
Students who like both: |P ∩ B| = 8
Students who like at least one: 10 + 7 + 8 = 25
Students who like neither: 30 - 25 = 5

Answer: 5 students like neither pizza nor burgers
```

#### Example 2: Number Classifications
```
Problem: Classify the numbers 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 into:
E = even numbers, P = prime numbers, S = perfect squares

Solution:
E = {2, 4, 6, 8, 10}
P = {2, 3, 5, 7} 
S = {1, 4, 9}

Intersections:
E ∩ P = {2} (even and prime)
E ∩ S = {4} (even and perfect square)
P ∩ S = {} (no numbers are both prime and perfect square in this range)
E ∩ P ∩ S = {} (no numbers satisfy all three)
```

### Set Laws and Properties

#### Commutative Laws
```
A ∪ B = B ∪ A
A ∩ B = B ∩ A
```

#### Associative Laws
```
(A ∪ B) ∪ C = A ∪ (B ∪ C)
(A ∩ B) ∩ C = A ∩ (B ∩ C)
```

#### Distributive Laws
```
A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)
A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)
```

#### De Morgan's Laws
```
(A ∪ B)' = A' ∩ B'
(A ∩ B)' = A' ∪ B'

In words:
• The complement of a union is the intersection of complements
• The complement of an intersection is the union of complements
```

#### Identity Laws
```
A ∪ ∅ = A (union with empty set)
A ∩ U = A (intersection with universal set)
A ∪ U = U (union with universal set)
A ∩ ∅ = ∅ (intersection with empty set)
```

#### Complement Laws
```
A ∪ A' = U
A ∩ A' = ∅
(A')' = A (complement of complement is original set)
U' = ∅
∅' = U
```

## Basic Arithmetic Operations

Now that we understand numbers and sets, let's learn how to work with them. These four operations are the building blocks of all mathematics.

### Addition (+)

Addition means combining quantities or finding the total.

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
(carry the 1 when digits sum to 10 or more)
```

#### Adding Decimals
```
Align decimal points vertically:
  12.45
+  3.78
-------
  16.23

Different decimal places:
  25.6   →  25.60
+  7.89  →   7.89
-------    -------
           33.49
```

#### Adding Fractions
```
Same denominator (bottom number):
2/7 + 3/7 = (2+3)/7 = 5/7

Different denominators:
1/3 + 1/4
Find common denominator (LCM of 3 and 4 = 12):
1/3 = 4/12 and 1/4 = 3/12
So: 4/12 + 3/12 = 7/12
```

### Subtraction (-)

Subtraction means taking away or finding the difference between numbers.

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
(borrow from the next column when needed)
```

#### Subtracting Decimals
```
Align decimal points:
  15.67
-  8.29
-------
   7.38

Different decimal places:
  20.5   →  20.50
-  7.25  →   7.25
-------    -------
           13.25
```

#### Subtracting Fractions
```
Same denominator:
5/8 - 3/8 = (5-3)/8 = 2/8 = 1/4

Different denominators:
3/4 - 1/6
Common denominator (LCM of 4 and 6 = 12):
3/4 = 9/12 and 1/6 = 2/12
So: 9/12 - 2/12 = 7/12
```

### Multiplication (×)

Multiplication means repeated addition or finding the total when you have equal groups.

#### Understanding Multiplication
```
4 × 3 means "4 groups of 3" or "add 3 four times"
4 × 3 = 3 + 3 + 3 + 3 = 12
```

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
11700  (234 × 50, note the zero)
-----
13104
```

#### Multiplying Decimals
```
  2.45
× 1.3
-----
  735   (2.45 × 3)
2450    (2.45 × 10)
-----
3.185

Rule: Count total decimal places in both numbers,
place that many decimal places in the answer.
(2.45 has 2 places, 1.3 has 1 place = 3 places total)
```

#### Multiplying Fractions
```
Multiply numerators, multiply denominators:
2/3 × 4/5 = (2×4)/(3×5) = 8/15

Mixed numbers (convert to improper fractions first):
2¼ × 1⅓ = 9/4 × 4/3 = 36/12 = 3
```

### Division (÷)

Division means splitting into equal groups or finding how many times one number fits into another.

#### Understanding Division
```
12 ÷ 3 means "split 12 into 3 equal groups" 
or "how many 3s fit into 12?"
Answer: 4 (because 3 + 3 + 3 + 3 = 12)
```

#### Whole Numbers
```
Long Division Example: 154 ÷ 7
    22
  -----
7 | 154
    14↓   (7 × 2 = 14)
    ---
     14   (bring down the 4)
     14   (7 × 2 = 14)
     ---
      0   (remainder is 0)
Answer: 22
```

#### Dividing Decimals
```
Method: Move decimal points to make divisor a whole number
15.6 ÷ 2.4 → 156 ÷ 24 = 6.5

Step by step:
2.4 → 24 (moved decimal 1 place right)
15.6 → 156 (moved decimal 1 place right)
156 ÷ 24 = 6.5
```

#### Dividing Fractions
```
"Multiply by the reciprocal" (flip the second fraction):
2/3 ÷ 1/4 = 2/3 × 4/1 = 8/3 = 2⅔

Why this works: 
Dividing by 1/4 is the same as asking "how many 1/4s fit in 2/3?"
```

## Order of Operations (BODMAS/PEMDAS)

Now that you know the basic operations, you need to know the correct order to perform them when you have multiple operations in one problem.

### The Rule: BODMAS
**B**rackets, **O**rders (Exponents/Powers), **D**ivision, **M**ultiplication, **A**ddition, **S**ubtraction

**Alternative: PEMDAS**
**P**arentheses, **E**xponents, **M**ultiplication, **D**ivision, **A**ddition, **S**ubtraction

### Step-by-Step Process
1. **Brackets/Parentheses** first: ( )
2. **Orders/Exponents** next: x², x³, √x, etc.
3. **Division and Multiplication** (left to right - same priority)
4. **Addition and Subtraction** (left to right - same priority)

### Why Order Matters
```
Without BODMAS: 6 + 2 × 3 = 8 × 3 = 24 ❌
With BODMAS: 6 + 2 × 3 = 6 + 6 = 12 ✅

The correct answer is 12 because multiplication comes before addition.
```

### Examples with Explanations

#### Example 1: Basic BODMAS
```
Calculate: 15 + 3 × 4 - 2

Step 1: 3 × 4 = 12        (Multiplication first)
Step 2: 15 + 12 - 2       (Now addition and subtraction, left to right)
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

Step 1: (10 - 7) = 3      (Brackets first)
Step 2: 2² = 4            (Orders/Exponents)
Step 3: 48 ÷ 6 = 8        (Division, left to right)
Step 4: 4 × 3 = 12        (Multiplication)
Step 5: 8 + 12 - 3        (Addition and subtraction, left to right)
Step 6: 20 - 3 = 17
Answer: 17
```

### Common BODMAS Mistakes
```
❌ WRONG: 20 - 4 × 2 = 16 × 2 = 32
✅ CORRECT: 20 - 4 × 2 = 20 - 8 = 12

❌ WRONG: (5 + 3) × 2² = 8 × 2² = 16²  = 256
✅ CORRECT: (5 + 3) × 2² = 8 × 4 = 32

❌ WRONG: 12 ÷ 3 + 1 = 12 ÷ 4 = 3
✅ CORRECT: 12 ÷ 3 + 1 = 4 + 1 = 5
```

## Greatest Common Factor (GCF)

The GCF is the largest number that divides evenly into two or more numbers. It's useful for simplifying fractions and solving real-world problems.

### Understanding GCF
Think of GCF as finding the biggest "size" that can divide all your numbers evenly, like finding the largest box size that can hold different quantities without anything left over.

### Methods to Find GCF

#### Method 1: Listing Factors
```
Find GCF of 12 and 18:

Factors of 12: 1, 2, 3, 4, 6, 12
Factors of 18: 1, 2, 3, 6, 9, 18

Common factors: 1, 2, 3, 6
GCF = 6 (the largest common factor)
```

#### Method 2: Prime Factorization
```
Find GCF of 24 and 36:

24 = 2³ × 3¹ = 2 × 2 × 2 × 3
36 = 2² × 3² = 2 × 2 × 3 × 3

GCF = 2² × 3¹ = 4 × 3 = 12
(Take the lowest power of each common prime factor)
```

#### Method 3: Euclidean Algorithm
```
Find GCF of 48 and 18:

48 = 18 × 2 + 12  (48 ÷ 18 = 2 remainder 12)
18 = 12 × 1 + 6   (18 ÷ 12 = 1 remainder 6)
12 = 6 × 2 + 0    (12 ÷ 6 = 2 remainder 0)

GCF = 6 (the last non-zero remainder)
```

### Real-World GCF Applications

#### Example 1: Simplifying Fractions
```
Simplify 15/25:

Find GCF of 15 and 25:
15 = 3 × 5
25 = 5²
GCF = 5

Simplify: 15/25 = (15÷5)/(25÷5) = 3/5
```

#### Example 2: Packaging Problem
```
A baker has 36 cookies and 48 cupcakes. She wants to make 
identical gift boxes with no leftovers. What's the maximum 
number of items she can put in each box?

Solution: Find GCF of 36 and 48
36 = 2² × 3²
48 = 2⁴ × 3¹
GCF = 2² × 3¹ = 12

Answer: 12 items per box maximum
(Each box would have 3 cookies and 4 cupcakes)
```

## Least Common Multiple (LCM)

The LCM is the smallest number that is divisible by two or more numbers. It's essential for adding fractions and solving timing problems.

### Understanding LCM
Think of LCM as finding when things "line up" again, like finding when two gears of different sizes will align, or when buses with different schedules will arrive together.

### Methods to Find LCM

#### Method 1: Listing Multiples
```
Find LCM of 6 and 8:

Multiples of 6: 6, 12, 18, 24, 30, 36, 42, 48, 54...
Multiples of 8: 8, 16, 24, 32, 40, 48, 56...

Common multiples: 24, 48, 72...
LCM = 24 (the smallest common multiple)
```

#### Method 2: Prime Factorization
```
Find LCM of 12 and 18:

12 = 2² × 3¹
18 = 2¹ × 3²

LCM = 2² × 3² = 4 × 9 = 36
(Take the highest power of each prime factor)
```

#### Method 3: Using GCF Formula
```
LCM(a,b) = (a × b) ÷ GCF(a,b)

Find LCM of 15 and 20:
GCF(15,20) = 5
LCM = (15 × 20) ÷ 5 = 300 ÷ 5 = 60
```

### Real-World LCM Applications

#### Example 1: Adding Fractions
```
Add: 1/6 + 1/4

Need common denominator = LCM of 6 and 4
6 = 2¹ × 3¹
4 = 2²
LCM = 2² × 3¹ = 12

Convert fractions:
1/6 = 2/12 and 1/4 = 3/12
Add: 2/12 + 3/12 = 5/12
```

#### Example 2: Scheduling Problem
```
Red traffic lights change every 12 seconds, green lights 
every 18 seconds. If they both change now, when will 
they change together again?

Solution: Find LCM of 12 and 18
12 = 2² × 3¹
18 = 2¹ × 3²
LCM = 2² × 3² = 36

Answer: They'll change together again in 36 seconds
```

## Mixed Operations and Problem Solving

Now let's combine everything we've learned to solve complex, real-world problems.

### Multi-Step Word Problems

#### Example 1: Shopping and Fractions
```
Problem: Sarah has $144. She spends 1/3 of it on groceries 
and 1/4 of the remainder on gas. How much money does she have left?

Solution:
Step 1: Groceries = 1/3 × $144 = $48
Step 2: Remainder after groceries = $144 - $48 = $96
Step 3: Gas = 1/4 × $96 = $24  
Step 4: Final amount = $96 - $24 = $72

Answer: Sarah has $72 left
```

#### Example 2: Mixed Number Operations
```
Calculate: 2½ + 1¾ × 2 - ⅓

Step 1: Convert mixed numbers to improper fractions
2½ = 5/2, 1¾ = 7/4

Step 2: Apply BODMAS (multiplication first)
1¾ × 2 = 7/4 × 2 = 14/4 = 7/2

Step 3: Addition and subtraction (find common denominator)
5/2 + 7/2 - 1/3 = 12/2 - 1/3 = 6 - 1/3

Step 4: Convert to common denominator
6 = 18/3, so: 18/3 - 1/3 = 17/3 = 5⅔

Answer: 5⅔
```

#### Example 3: Percentage and Fraction Problem
```
Problem: A class of 30 students has 2/5 boys. Of the boys, 
25% wear glasses. How many boys wear glasses?

Solution:
Step 1: Number of boys = 2/5 × 30 = 60/5 = 12 boys
Step 2: Boys with glasses = 25% of 12 = 0.25 × 12 = 3 boys

Answer: 3 boys wear glasses
```

### Converting Between Number Forms

#### Fraction ↔ Decimal ↔ Percentage
```
Fraction to Decimal: Divide numerator by denominator
3/4 = 3 ÷ 4 = 0.75

Decimal to Percentage: Multiply by 100
0.75 = 0.75 × 100% = 75%

Percentage to Fraction: Put over 100 and simplify
75% = 75/100 = 3/4 (divide both by 25)

Complete circle: 3/4 = 0.75 = 75%
```

#### Comparing Different Forms
```
Compare: 3/4, 0.8, 70%

Convert all to decimals:
3/4 = 0.75
0.8 = 0.8  
70% = 0.70

Order from smallest to largest: 70% < 3/4 < 0.8
Or: 0.70 < 0.75 < 0.8
```

## Special Cases and Helpful Tips

### Working with Zero and One
```
Zero:
• a + 0 = a (adding zero doesn't change a number)
• a - 0 = a (subtracting zero doesn't change a number)  
• 0 - a = -a (zero minus a number gives the negative)
• a × 0 = 0 (anything times zero is zero)
• 0 ÷ a = 0 (zero divided by anything is zero)
• a ÷ 0 = undefined (never divide by zero!)

One:
• a × 1 = a (multiplying by one doesn't change a number)
• a ÷ 1 = a (dividing by one doesn't change a number)
• 1 ÷ a = 1/a (one divided by a number gives its reciprocal)
```

### Working with Negative Numbers
```
Addition:
(-5) + (-3) = -8 (both negative: add and keep negative sign)
(-5) + 3 = -2 (different signs: subtract and use sign of larger)

Multiplication and Division:
• Same signs = positive result
• Different signs = negative result

(-5) × (-3) = 15   (negative × negative = positive)
(-5) × 3 = -15     (negative × positive = negative)
(-15) ÷ (-3) = 5   (negative ÷ negative = positive)
(-15) ÷ 3 = -5     (negative ÷ positive = negative)
```

### Mental Math Shortcuts

#### Powers of 10
```
Multiplying by 10: Add one zero or move decimal right
45 × 10 = 450
3.7 × 10 = 37

Dividing by 10: Remove one zero or move decimal left  
450 ÷ 10 = 45
37 ÷ 10 = 3.7
```

#### Multiplying by 5
```
Trick: Multiply by 10, then divide by 2
24 × 5 = (24 × 10) ÷ 2 = 240 ÷ 2 = 120
```

#### Squaring Numbers Ending in 5
```
Pattern: (10a + 5)² = 100a(a+1) + 25

25² = (2 × 3) × 100 + 25 = 600 + 25 = 625
35² = (3 × 4) × 100 + 25 = 1200 + 25 = 1225
45² = (4 × 5) × 100 + 25 = 2000 + 25 = 2025
```

### Common Fraction Equivalents
```
1/2 = 0.5 = 50%      1/8 = 0.125 = 12.5%
1/3 = 0.333... = 33⅓%   1/10 = 0.1 = 10%
1/4 = 0.25 = 25%     2/3 = 0.666... = 66⅔%
1/5 = 0.2 = 20%      3/4 = 0.75 = 75%
```

## Practice Problems

### Number Systems and Sets
```
1. Which is larger: 7/8 or 0.9?
2. Convert 0.4 to a fraction in lowest terms
3. Given A = {1, 3, 5, 7, 9} and B = {2, 3, 6, 9, 12}, find:
   a) A ∪ B
   b) A ∩ B  
   c) A - B
4. What is 2/3 of 45?
5. Find: 144 ÷ 12 + 3² - 5
```

### BODMAS Practice
```
1. 8 + 2 × 5 - 3
2. (12 - 4) × 2 + 5  
3. 15 ÷ 3 + 2² × 4
4. 20 - (8 + 2) ÷ 5 × 3
5. 2³ + 4 × (9 - 6) - 10
```

### GCF and LCM
```
1. Find GCF of 24 and 36
2. Find LCM of 12 and 15
3. Simplify: 18/24
4. Add: 1/6 + 1/8
5. Find LCM of 8, 12, and 16
```

### Word Problems
```
1. A recipe calls for 2¾ cups of flour. If you want to make 
   1½ times the recipe, how much flour do you need?

2. Traffic lights change every 45 seconds and 60 seconds. 
   If they both change now, when will they change together again?

3. You have $180. You spend 1/3 on rent and 1/4 of the 
   remainder on food. How much do you have left?
```

## Answer Key

### Number Systems and Sets
```
1. 0.9 (since 7/8 = 0.875)
2. 0.4 = 4/10 = 2/5
3. a) A ∪ B = {1, 2, 3, 5, 6, 7, 9, 12}
   b) A ∩ B = {3, 9}
   c) A - B = {1, 5, 7}
4. 2/3 × 45 = 90/3 = 30
5. 144 ÷ 12 + 3² - 5 = 12 + 9 - 5 = 16
```

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
3. 18/24 = 3/4
4. 1/6 + 1/8 = 4/24 + 3/24 = 7/24
5. LCM of 8, 12, and 16 = 48
```

### Word Problem Answers
```
1. 2¾ × 1½ = 11/4 × 3/2 = 33/8 = 4⅛ cups
2. LCM of 45 and 60 = 180 seconds = 3 minutes
3. Rent: $60, Remainder: $120, Food: $30, Left: $90
```

## Quick Reference

### Order of Operations
**BODMAS**: Brackets, Orders, Division/Multiplication, Addition/Subtraction

### GCF and LCM
- **GCF**: Largest number that divides all given numbers
- **LCM**: Smallest number divisible by all given numbers
- **Formula**: LCM(a,b) = (a × b) ÷ GCF(a,b)

### Basic Operations
- **Addition**: Combining quantities
- **Subtraction**: Taking away or finding difference  
- **Multiplication**: Repeated addition or equal groups
- **Division**: Splitting into equal parts

### Number Types
- **Natural**: 1, 2, 3, 4, ... (counting numbers)
- **Whole**: 0, 1, 2, 3, 4, ... (natural + zero)
- **Integers**: ..., -2, -1, 0, 1, 2, ... (positive and negative whole numbers)
- **Rational**: Can be written as a/b (fractions and decimals)
- **Real**: All numbers on the number line

### Sets
- **Set**: Collection of distinct objects
- **Union**: A ∪ B (all elements from both sets)
- **Intersection**: A ∩ B (common elements only)
- **Difference**: A - B (elements in A but not B)
- **Subset**: A ⊆ B (all elements of A are in B)
- **Cardinality**: |A| (number of elements in set A)

### Common Conversions
```
1/2 = 0.5 = 50%    1/4 = 0.25 = 25%    1/5 = 0.2 = 20%
1/3 = 0.333... = 33⅓%    3/4 = 0.75 = 75%    1/10 = 0.1 = 10%
```

## See Also

- **[Algebra](../algebra)**: Working with variables and equations - next logical step
- **[Geometry](../geometry)**: Shapes, areas, and spatial relationships
- **[Statistics](../statistics)**: Data analysis and probability
- **[Pre-Calculus](../pre-calculus)**: Advanced functions and mathematical analysis
- **[Matrices](../matrices)**: Rectangular arrays of numbers and linear algebra