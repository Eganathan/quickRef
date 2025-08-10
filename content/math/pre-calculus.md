---
title: "Pre-Calculus"
date: 2024-01-01T00:00:00Z
draft: false
description: "Comprehensive pre-calculus guide covering advanced functions, trigonometry, sequences, limits, and mathematical analysis fundamentals."
categories: ["math"]
tags: ["pre-calculus", "functions", "trigonometry", "limits", "sequences", "logarithms", "exponentials", "conic-sections"]
---

## Prerequisites

**Required:**
- **[Algebra](../algebra)** - All topics including functions, graphing, polynomials, factoring
- **[Geometry](../geometry)** - For trigonometry and coordinate geometry

**Helpful:**
- Strong comfort with algebraic manipulation
- Understanding of basic geometric relationships

## Overview

Pre-Calculus bridges the gap between Algebra and Calculus, focusing on advanced functions and mathematical analysis. It develops the sophisticated understanding of functions, their behavior, and their relationships that forms the foundation for calculus and higher mathematics.

This comprehensive guide covers polynomial and rational functions, exponential and logarithmic functions, trigonometry, sequences and series, and introduces the concept of limits. Master these concepts to succeed in calculus and apply mathematics to science, engineering, and advanced problem-solving.

## Advanced Functions

### Function Composition and Operations

#### Function Operations
```
Given f(x) and g(x):

Addition: (f + g)(x) = f(x) + g(x)
Subtraction: (f - g)(x) = f(x) - g(x)
Multiplication: (f · g)(x) = f(x) · g(x)
Division: (f/g)(x) = f(x)/g(x), where g(x) ≠ 0

Example: f(x) = x² + 1, g(x) = 2x - 3
(f + g)(x) = x² + 1 + 2x - 3 = x² + 2x - 2
(f · g)(x) = (x² + 1)(2x - 3) = 2x³ - 3x² + 2x - 3
```

#### Function Composition
```
(f ∘ g)(x) = f(g(x))
Read as "f composed with g" or "f of g of x"

Example: f(x) = x² + 1, g(x) = 2x - 3
(f ∘ g)(x) = f(2x - 3) = (2x - 3)² + 1 = 4x² - 12x + 9 + 1 = 4x² - 12x + 10

Order matters:
(g ∘ f)(x) = g(x² + 1) = 2(x² + 1) - 3 = 2x² + 2 - 3 = 2x² - 1
```

#### Inverse Functions
```
f⁻¹ is the inverse of f if:
f(f⁻¹(x)) = x and f⁻¹(f(x)) = x

To find inverse:
1. Replace f(x) with y
2. Swap x and y  
3. Solve for y
4. Replace y with f⁻¹(x)

Example: f(x) = 2x + 3
Step 1: y = 2x + 3
Step 2: x = 2y + 3
Step 3: x - 3 = 2y, so y = (x - 3)/2
Step 4: f⁻¹(x) = (x - 3)/2

Verification: f(f⁻¹(x)) = f((x-3)/2) = 2((x-3)/2) + 3 = x - 3 + 3 = x ✓
```

#### Properties of Inverse Functions
```
• Graphs are reflections across y = x
• Domain of f = Range of f⁻¹
• Range of f = Domain of f⁻¹
• Only one-to-one functions have inverses
• Horizontal Line Test: each horizontal line intersects graph at most once
```

### Polynomial Functions

#### General Form and Behavior
```
P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀
where aₙ ≠ 0, n is the degree

Leading coefficient: aₙ
Constant term: a₀

End behavior depends on degree and leading coefficient:
• Even degree, positive leading coefficient: both ends up
• Even degree, negative leading coefficient: both ends down  
• Odd degree, positive leading coefficient: left down, right up
• Odd degree, negative leading coefficient: left up, right down
```

#### Zeros and Factoring
```
Fundamental Theorem of Algebra:
A polynomial of degree n has exactly n complex zeros (counting multiplicity)

Factor Theorem: (x - a) is a factor of P(x) if and only if P(a) = 0

Rational Root Theorem: If p/q is a rational zero of P(x), then:
• p divides the constant term
• q divides the leading coefficient

Example: P(x) = 2x³ - 5x² + x + 2
Possible rational zeros: ±1, ±2, ±1/2
Test P(2) = 16 - 20 + 2 + 2 = 0, so (x - 2) is a factor
```

#### Multiplicity of Zeros
```
If (x - a)ᵏ is a factor of P(x), then a has multiplicity k:

• Odd multiplicity: graph crosses x-axis at zero
• Even multiplicity: graph touches x-axis but doesn't cross

Example: P(x) = (x - 1)²(x + 2)³
• Zero at x = 1 with multiplicity 2 (touches x-axis)
• Zero at x = -2 with multiplicity 3 (crosses x-axis)
```

### Rational Functions

#### General Form
```
R(x) = P(x)/Q(x)
where P(x) and Q(x) are polynomials, Q(x) ≠ 0

Domain: All real numbers except zeros of Q(x)

Example: R(x) = (x² - 1)/(x² - 4)
Domain: x ≠ ±2 (since x² - 4 = 0 when x = ±2)
```

#### Vertical Asymptotes
```
Occur at zeros of denominator that are not zeros of numerator

Example: R(x) = (x + 1)/((x - 2)(x + 3))
Vertical asymptotes at x = 2 and x = -3

Behavior near vertical asymptote:
• Function approaches +∞ or -∞
• Check signs on either side to determine direction
```

#### Horizontal Asymptotes
```
Depend on degrees of numerator (m) and denominator (n):

Case 1: m < n → Horizontal asymptote at y = 0
Case 2: m = n → Horizontal asymptote at y = aₘ/bₙ (ratio of leading coefficients)  
Case 3: m > n → No horizontal asymptote (but may have oblique asymptote)

Example 1: R(x) = (2x + 1)/(x² + 3x - 1)
m = 1 < n = 2, so horizontal asymptote at y = 0

Example 2: R(x) = (3x² + 2x - 1)/(2x² - x + 5)  
m = n = 2, so horizontal asymptote at y = 3/2
```

#### Holes vs. Vertical Asymptotes
```
If (x - a) is a factor of both numerator and denominator:
• Cancel the common factor
• Result is a hole at x = a, not a vertical asymptote

Example: R(x) = (x² - 1)/(x - 1) = (x + 1)(x - 1)/(x - 1) = x + 1 (x ≠ 1)
Hole at (1, 2), not a vertical asymptote
```

## Exponential and Logarithmic Functions

### Exponential Functions

#### Definition and Properties
```
f(x) = aˣ where a > 0, a ≠ 1

Properties:
• Domain: (-∞, ∞)
• Range: (0, ∞)
• y-intercept: (0, 1) since a⁰ = 1
• Horizontal asymptote: y = 0

If a > 1: increasing function (growth)
If 0 < a < 1: decreasing function (decay)
```

#### Natural Exponential Function
```
f(x) = eˣ where e ≈ 2.71828...

e is defined as: lim(n→∞)(1 + 1/n)ⁿ

Properties:
• Base of natural logarithm
• Rate of change equals the function value
• Appears naturally in growth/decay problems
• Most important exponential function in calculus
```

#### Exponential Growth and Decay
```
General model: A(t) = A₀e^(kt)
• A₀ = initial amount
• k = growth rate (k > 0) or decay rate (k < 0)
• t = time

Applications:
• Population growth: P(t) = P₀e^(rt)
• Radioactive decay: N(t) = N₀e^(-λt)
• Compound interest: A = Pe^(rt)
• Newton's law of cooling: T(t) = Tₐ + (T₀ - Tₐ)e^(-kt)
```

### Logarithmic Functions

#### Definition
```
y = logₐ(x) if and only if aʸ = x
where a > 0, a ≠ 1, x > 0

Common logarithms: log(x) = log₁₀(x)
Natural logarithms: ln(x) = logₑ(x)
```

#### Properties of Logarithms
```
Product rule: logₐ(xy) = logₐ(x) + logₐ(y)
Quotient rule: logₐ(x/y) = logₐ(x) - logₐ(y)
Power rule: logₐ(xⁿ) = n·logₐ(x)

Special values:
logₐ(1) = 0 (since a⁰ = 1)
logₐ(a) = 1 (since a¹ = a)
logₐ(aˣ) = x (inverse property)
a^(logₐ(x)) = x (inverse property)
```

#### Change of Base Formula
```
logₐ(x) = logᵦ(x)/logᵦ(a) = ln(x)/ln(a) = log(x)/log(a)

Example: log₃(17) = ln(17)/ln(3) ≈ 2.833/1.099 ≈ 2.58
```

#### Solving Exponential and Logarithmic Equations
```
Exponential equations:
aˣ = b → x = logₐ(b)

Example: 3ˣ = 81
3ˣ = 3⁴
x = 4

Or: 2ˣ = 10
x = log₂(10) = ln(10)/ln(2) ≈ 3.32

Logarithmic equations:
logₐ(x) = b → x = aᵇ

Example: log₂(x) = 5
x = 2⁵ = 32

Complex example: log(x + 1) + log(x - 1) = log(8)
log((x + 1)(x - 1)) = log(8)
x² - 1 = 8
x² = 9
x = 3 (x = -3 invalid since x > 1 required)
```

## Trigonometry

### Angle Measurement

#### Degrees vs. Radians
```
1 complete revolution = 360° = 2π radians

Conversion formulas:
Degrees to radians: multiply by π/180
Radians to degrees: multiply by 180/π

Common angles:
30° = π/6 radians    60° = π/3 radians    90° = π/2 radians
45° = π/4 radians    120° = 2π/3 radians   180° = π radians
```

#### Arc Length and Sector Area
```
For central angle θ (in radians) and radius r:
Arc length: s = rθ
Sector area: A = ½r²θ

Example: Circle with radius 8, central angle 3π/4
Arc length = 8 · (3π/4) = 6π
Sector area = ½ · 64 · (3π/4) = 24π
```

### Trigonometric Functions

#### Right Triangle Definitions
```
For acute angle θ in right triangle:

sin(θ) = opposite/hypotenuse
cos(θ) = adjacent/hypotenuse
tan(θ) = opposite/adjacent

csc(θ) = 1/sin(θ) = hypotenuse/opposite
sec(θ) = 1/cos(θ) = hypotenuse/adjacent
cot(θ) = 1/tan(θ) = adjacent/opposite
```

#### Unit Circle Definitions
```
For angle θ in standard position (vertex at origin, initial side on positive x-axis):
Point on unit circle: (cos(θ), sin(θ))

sin(θ) = y-coordinate
cos(θ) = x-coordinate  
tan(θ) = sin(θ)/cos(θ) = y/x

This extends definitions to all real numbers, not just acute angles
```

#### Special Angle Values
```
θ        sin(θ)    cos(θ)    tan(θ)
0°/0      0         1         0
30°/π/6   1/2       √3/2      √3/3
45°/π/4   √2/2      √2/2      1
60°/π/3   √3/2      1/2       √3
90°/π/2   1         0         undefined

These form the foundation for all other angle calculations
```

#### Signs of Trig Functions by Quadrant
```
Quadrant I (0° to 90°): All positive
Quadrant II (90° to 180°): sin positive, cos and tan negative
Quadrant III (180° to 270°): tan positive, sin and cos negative  
Quadrant IV (270° to 360°): cos positive, sin and tan negative

Memory device: "All Students Take Calculus"
```

### Trigonometric Identities

#### Fundamental Identities
```
Pythagorean identities:
sin²(θ) + cos²(θ) = 1
1 + tan²(θ) = sec²(θ)
1 + cot²(θ) = csc²(θ)

Reciprocal identities:
csc(θ) = 1/sin(θ)
sec(θ) = 1/cos(θ)
cot(θ) = 1/tan(θ)

Quotient identities:
tan(θ) = sin(θ)/cos(θ)
cot(θ) = cos(θ)/sin(θ)
```

#### Sum and Difference Formulas
```
sin(A ± B) = sin(A)cos(B) ± cos(A)sin(B)
cos(A ± B) = cos(A)cos(B) ∓ sin(A)sin(B)
tan(A ± B) = (tan(A) ± tan(B))/(1 ∓ tan(A)tan(B))

Example: sin(75°) = sin(45° + 30°)
= sin(45°)cos(30°) + cos(45°)sin(30°)
= (√2/2)(√3/2) + (√2/2)(1/2)
= (√6 + √2)/4
```

#### Double Angle Formulas
```
sin(2θ) = 2sin(θ)cos(θ)
cos(2θ) = cos²(θ) - sin²(θ) = 2cos²(θ) - 1 = 1 - 2sin²(θ)
tan(2θ) = 2tan(θ)/(1 - tan²(θ))

Example: If sin(θ) = 3/5 and θ in Quadrant I:
cos(θ) = 4/5 (from Pythagorean theorem)
sin(2θ) = 2(3/5)(4/5) = 24/25
cos(2θ) = (4/5)² - (3/5)² = 16/25 - 9/25 = 7/25
```

#### Half Angle Formulas
```
sin(θ/2) = ±√((1 - cos(θ))/2)
cos(θ/2) = ±√((1 + cos(θ))/2)
tan(θ/2) = ±√((1 - cos(θ))/(1 + cos(θ))) = sin(θ)/(1 + cos(θ))

Sign depends on quadrant of θ/2
```

### Graphs of Trigonometric Functions

#### Sine and Cosine Functions
```
f(x) = A sin(Bx + C) + D
g(x) = A cos(Bx + C) + D

• A = amplitude (vertical stretch)
• B affects period: Period = 2π/|B|
• C affects phase shift: shift = -C/B  
• D = vertical shift

Example: f(x) = 3sin(2x - π) + 1
• Amplitude = 3
• Period = 2π/2 = π
• Phase shift = -(-π)/2 = π/2 right
• Vertical shift = 1 up
```

#### Tangent Function
```
f(x) = A tan(Bx + C) + D

• Period = π/|B|
• Vertical asymptotes where cos(Bx + C) = 0
• No amplitude (function has infinite range)

Example: f(x) = 2tan(x/2)
• Period = π/(1/2) = 2π
• Vertical asymptotes at x = π + 2πn
```

### Inverse Trigonometric Functions
```
y = arcsin(x) or sin⁻¹(x): Domain [-1,1], Range [-π/2, π/2]
y = arccos(x) or cos⁻¹(x): Domain [-1,1], Range [0, π]
y = arctan(x) or tan⁻¹(x): Domain (-∞,∞), Range (-π/2, π/2)

Example: arcsin(1/2) = π/6 = 30°
arccos(√2/2) = π/4 = 45°
arctan(√3) = π/3 = 60°

Note: These give principal values (specific ranges)
```

## Sequences and Series

### Sequences

#### Arithmetic Sequences
```
Definition: Constant difference between consecutive terms

General term: aₙ = a₁ + (n-1)d
where a₁ = first term, d = common difference

Example: 3, 7, 11, 15, 19, ...
a₁ = 3, d = 4
aₙ = 3 + (n-1)4 = 4n - 1
a₁₀ = 4(10) - 1 = 39
```

#### Geometric Sequences  
```
Definition: Constant ratio between consecutive terms

General term: aₙ = a₁ · r^(n-1)
where a₁ = first term, r = common ratio

Example: 2, 6, 18, 54, 162, ...
a₁ = 2, r = 3
aₙ = 2 · 3^(n-1)
a₆ = 2 · 3⁵ = 2 · 243 = 486
```

### Series

#### Arithmetic Series
```
Sum of arithmetic sequence:
Sₙ = n/2(a₁ + aₙ) = n/2(2a₁ + (n-1)d)

Example: Sum of first 20 terms of 3, 7, 11, 15, ...
S₂₀ = 20/2(2·3 + (20-1)·4) = 10(6 + 76) = 820

Or: a₂₀ = 4(20) - 1 = 79
S₂₀ = 20/2(3 + 79) = 10(82) = 820
```

#### Geometric Series
```
Sum of finite geometric series:
Sₙ = a₁(1 - rⁿ)/(1 - r) where r ≠ 1

Sum of infinite geometric series (|r| < 1):
S∞ = a₁/(1 - r)

Example 1: Sum of 2 + 6 + 18 + 54 + 162
S₅ = 2(1 - 3⁵)/(1 - 3) = 2(-242)/(-2) = 242

Example 2: Sum of 1 + 1/2 + 1/4 + 1/8 + ...
S∞ = 1/(1 - 1/2) = 1/(1/2) = 2
```

### Applications of Series
```
Compound Interest: A = P(1 + r)ⁿ forms geometric sequence
Depreciation: Value forms geometric sequence with r < 1
Population Growth: Often modeled as geometric sequence
Fractals: Self-similar patterns use geometric series
```

## Conic Sections

### Circle
```
Standard form: (x - h)² + (y - k)² = r²
Center: (h, k), Radius: r

General form: x² + y² + Dx + Ey + F = 0
Complete the square to convert to standard form

Example: x² + y² - 6x + 4y - 3 = 0
(x² - 6x + 9) + (y² + 4y + 4) = 3 + 9 + 4
(x - 3)² + (y + 2)² = 16
Center: (3, -2), Radius: 4
```

### Parabola
```
Vertex form: (x - h)² = 4p(y - k) [opens up/down]
            (y - k)² = 4p(x - h) [opens left/right]

Vertex: (h, k)
Focus: (h, k + p) or (h + p, k)  
Directrix: y = k - p or x = h - p

Example: x² = 8y
4p = 8, so p = 2
Vertex: (0, 0), Focus: (0, 2), Directrix: y = -2
```

### Ellipse
```
Standard form: (x - h)²/a² + (y - k)²/b² = 1
Center: (h, k)

If a > b: horizontal major axis
• Vertices: (h ± a, k)
• Co-vertices: (h, k ± b)  
• Foci: (h ± c, k) where c² = a² - b²

If b > a: vertical major axis
• Vertices: (h, k ± b)
• Co-vertices: (h ± a, k)
• Foci: (h, k ± c) where c² = b² - a²

Eccentricity: e = c/a (for major axis), measures how "stretched"
```

### Hyperbola
```
Standard form: (x - h)²/a² - (y - k)²/b² = 1 [horizontal]
              (y - k)²/a² - (x - h)²/b² = 1 [vertical]

Center: (h, k)
Vertices: (h ± a, k) [horizontal] or (h, k ± a) [vertical]
Foci: (h ± c, k) or (h, k ± c) where c² = a² + b²
Asymptotes: y - k = ±(b/a)(x - h)

Example: x²/9 - y²/16 = 1
a² = 9, b² = 16, so a = 3, b = 4, c = 5
Vertices: (±3, 0), Foci: (±5, 0)
Asymptotes: y = ±(4/3)x
```

## Limits and Continuity

### Limit Concept
```
lim[x→c] f(x) = L means:
"As x approaches c, f(x) approaches L"

This may or may not equal f(c)

Types of limits:
• Two-sided: lim[x→c] f(x)
• Left-sided: lim[x→c⁻] f(x) 
• Right-sided: lim[x→c⁺] f(x)
• At infinity: lim[x→∞] f(x)
```

#### Evaluating Limits
```
Method 1: Direct substitution (if function is continuous)
lim[x→2] (x² + 3x - 1) = 4 + 6 - 1 = 9

Method 2: Factoring (for rational functions)
lim[x→3] (x² - 9)/(x - 3) = lim[x→3] (x + 3)(x - 3)/(x - 3) = lim[x→3] (x + 3) = 6

Method 3: Rationalize (for expressions with radicals)
lim[x→0] (√(x + 1) - 1)/x 
Multiply by (√(x + 1) + 1)/(√(x + 1) + 1):
= lim[x→0] ((x + 1) - 1)/(x(√(x + 1) + 1)) = lim[x→0] x/(x(√(x + 1) + 1)) = 1/2
```

#### Special Limits
```
lim[x→0] (sin x)/x = 1
lim[x→0] (1 - cos x)/x = 0
lim[x→∞] (1 + 1/x)ˣ = e
lim[x→0] (1 + x)^(1/x) = e

These are fundamental limits used in calculus
```

### Continuity
```
f(x) is continuous at x = c if:
1. f(c) exists
2. lim[x→c] f(x) exists  
3. lim[x→c] f(x) = f(c)

Types of discontinuities:
• Removable: hole in graph, limit exists
• Jump: left and right limits differ
• Infinite: vertical asymptote

Example: f(x) = (x² - 4)/(x - 2)
At x = 2: function undefined (hole)
lim[x→2] f(x) = 4, but f(2) doesn't exist
Removable discontinuity
```

## Mathematical Modeling

### Exponential Models
```
Growth: P(t) = P₀e^(rt) where r > 0
Decay: P(t) = P₀e^(-rt) where r > 0

Population Growth:
If population doubles every 10 years:
P(t) = P₀ · 2^(t/10)

Radioactive Decay:
Half-life model: N(t) = N₀ · (1/2)^(t/h)
where h is half-life
```

### Logarithmic Models
```
Logarithmic growth: y = a + b ln(x)
Common in:
• Learning curves
• Diminishing returns
• Psychological responses (Weber-Fechner law)

Example: Decibel scale
dB = 10 log₁₀(I/I₀)
where I is intensity, I₀ is reference intensity
```

### Trigonometric Models
```
Periodic phenomena: y = A sin(Bt + C) + D

Applications:
• Sound waves: amplitude, frequency, phase
• Seasonal temperature variations
• Tidal patterns  
• Economic cycles
• Biorhythms

Example: Average monthly temperature
T(t) = 15 sin(π(t - 4)/6) + 20
where t is month (January = 1)
```

### Logistic Models
```
Limited growth: P(t) = L/(1 + ae^(-bt))
where L is carrying capacity

Combines exponential growth (early stages) with 
leveling off (approaching limit)

Applications:
• Population growth with limited resources
• Technology adoption
• Spread of diseases
• Market penetration
```

## Practice Problems

### Functions
```
1. Given f(x) = x² - 3x + 2 and g(x) = 2x + 1, find:
   a) (f ∘ g)(x)
   b) (g ∘ f)(x)
   c) f⁻¹(x)

2. Find the domain of h(x) = √(x - 2)/(x² - 9)

3. Analyze the rational function R(x) = (x² - 1)/(x² - 4x + 3):
   Find vertical asymptotes, horizontal asymptotes, and holes.
```

### Exponential and Logarithmic
```
1. Solve: 3^(2x-1) = 27^(x+2)

2. If ln(a) = 2 and ln(b) = 3, find ln(a²√b)

3. A radioactive substance decays according to A(t) = A₀e^(-0.05t).
   How long until half the substance remains?
```

### Trigonometry
```
1. Find exact values:
   a) sin(7π/6)
   b) cos(5π/4)  
   c) tan(-π/3)

2. Verify the identity: (1 + cos θ)/(1 - cos θ) = (1 + sin θ)²/sin² θ

3. Solve: 2sin²x - 3sin x + 1 = 0 for 0 ≤ x < 2π
```

### Sequences and Series
```
1. Find the 15th term of the arithmetic sequence: 4, 7, 10, 13, ...

2. Find the sum of the geometric series: 3 + 1 + 1/3 + 1/9 + ...

3. A ball is dropped from 20 feet. Each bounce reaches 3/4 the previous height.
   What is the total distance traveled?
```

### Limits
```
1. Evaluate: lim[x→3] (x² - 9)/(x² - 5x + 6)

2. Evaluate: lim[x→0] (sin 3x)/x

3. Find: lim[x→∞] (2x³ - x + 1)/(x³ + 2x² - 5)
```

## Answer Key

### Functions
```
1. a) (f ∘ g)(x) = (2x + 1)² - 3(2x + 1) + 2 = 4x² - 4x
   b) (g ∘ f)(x) = 2(x² - 3x + 2) + 1 = 2x² - 6x + 5
   c) f⁻¹(x) = (3 ± √(4x - 7))/2

2. Domain: x ≥ 2 and x ≠ ±3, so [2, ∞) ∩ (-∞,-3) ∪ (-3,3) ∪ (3,∞) = [2,3) ∪ (3,∞)

3. R(x) = (x-1)(x+1)/((x-1)(x-3)) = (x+1)/(x-3) for x ≠ 1
   Vertical asymptote: x = 3
   Horizontal asymptote: y = 1  
   Hole: (1, -1/2)
```

### Exponential and Logarithmic
```
1. 3^(2x-1) = (3³)^(x+2) = 3^(3x+6)
   2x - 1 = 3x + 6
   x = -7

2. ln(a²√b) = ln(a²) + ln(b^(1/2)) = 2ln(a) + (1/2)ln(b) = 2(2) + (1/2)(3) = 5.5

3. 0.5A₀ = A₀e^(-0.05t)
   0.5 = e^(-0.05t)
   ln(0.5) = -0.05t
   t = ln(0.5)/(-0.05) ≈ 13.86 time units
```

### Trigonometry
```
1. a) sin(7π/6) = -1/2
   b) cos(5π/4) = -√2/2
   c) tan(-π/3) = -√3

2. [Identity verification by algebraic manipulation]

3. Let u = sin x: 2u² - 3u + 1 = 0
   (2u - 1)(u - 1) = 0
   u = 1/2 or u = 1
   sin x = 1/2: x = π/6, 5π/6
   sin x = 1: x = π/2
```

### Sequences and Series
```
1. aₙ = 4 + (n-1)3 = 3n + 1
   a₁₅ = 3(15) + 1 = 46

2. S∞ = 3/(1-1/3) = 3/(2/3) = 9/2 = 4.5

3. Down: 20 + 20(3/4) + 20(3/4)² + ... = 20/(1-3/4) = 80
   Up: 20(3/4) + 20(3/4)² + ... = 60
   Total: 80 + 60 = 140 feet
```

### Limits
```
1. lim[x→3] (x-3)(x+3)/((x-2)(x-3)) = lim[x→3] (x+3)/(x-2) = 6/1 = 6

2. lim[x→0] (sin 3x)/x = 3 · lim[x→0] sin(3x)/(3x) = 3 · 1 = 3

3. lim[x→∞] (2x³ - x + 1)/(x³ + 2x² - 5) = 2/1 = 2
```

## Quick Reference

### Function Operations
- (f ∘ g)(x) = f(g(x))
- f⁻¹ exists if f is one-to-one
- Horizontal line test for one-to-one

### Exponential/Logarithmic
- logₐ(xy) = logₐ(x) + logₐ(y)
- logₐ(xⁿ) = n logₐ(x)  
- Change of base: logₐ(x) = ln(x)/ln(a)

### Trigonometry
- sin²θ + cos²θ = 1
- sin(A ± B) = sin A cos B ± cos A sin B
- Period of sin, cos: 2π; Period of tan: π

### Sequences/Series
- Arithmetic: aₙ = a₁ + (n-1)d; Sₙ = n(a₁ + aₙ)/2
- Geometric: aₙ = a₁rⁿ⁻¹; Sₙ = a₁(1-rⁿ)/(1-r)
- Infinite geometric: S∞ = a₁/(1-r) if |r| < 1

### Limits
- lim[x→c] f(x) = L if f(x) → L as x → c
- lim[x→0] (sin x)/x = 1
- Continuity: f(c) exists, lim exists, lim = f(c)

## See Also

- **[BasicMath](../basic-math)**: Foundation arithmetic and number systems
- **[Algebra](../algebra)**: Working with variables and equations - required foundation
- **[Geometry](../geometry)**: Shapes, areas, and spatial relationships - for trigonometry
- **[Statistics](../statistics)**: Data analysis and probability
- **[Calculus](../calculus)**: Next step - Pre-Calculus directly prepares for calculus
- **[Complex Numbers](../complex-numbers)**: Advanced applications of trigonometry and functions
- **[Matrices](../matrices)**: Advanced function and transformation concepts