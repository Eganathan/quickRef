---
title: "Calculus"
date: 2023-01-01T00:00:00Z
draft: false
description: "Comprehensive calculus guide covering limits, derivatives, integrals, applications, and multivariable calculus fundamentals."
categories: ["math"]
tags: ["calculus", "derivatives", "integrals", "limits", "optimization", "differential-equations", "multivariable"]
---

## Prerequisites

**Required:**
- **[Pre-Calculus](../pre-calculus)** - All topics, especially functions, limits, trigonometry
- **[Algebra](../algebra)** - Strong foundation in all algebraic manipulation

**Helpful:**
- **[Geometry](../geometry)** - For geometric applications and interpretations

## Overview

Calculus is the mathematics of change and motion. It provides tools to analyze rates of change (derivatives) and accumulation of quantities (integrals). Calculus is fundamental to physics, engineering, economics, biology, and virtually all quantitative sciences.

This comprehensive guide covers differential calculus (derivatives and their applications), integral calculus (antiderivatives and definite integrals), and introduces multivariable calculus concepts essential for applied mathematics.

## Limits

### Intuitive Understanding
A limit describes the behavior of a function as its input approaches a particular value.

```
lim[x→c] f(x) = L means:
"As x gets closer to c, f(x) gets closer to L"

Example: lim[x→2] (x² + 1) = 5
As x approaches 2, x² + 1 approaches 5
```

### Formal Definition (ε-δ Definition)
```
lim[x→c] f(x) = L if:
For every ε > 0, there exists δ > 0 such that
if 0 < |x - c| < δ, then |f(x) - L| < ε

This makes precise the idea of "getting arbitrarily close"
```

### Types of Limits

#### One-Sided Limits
```
Right-hand limit: lim[x→c⁺] f(x)
Left-hand limit: lim[x→c⁻] f(x)

Example: f(x) = |x|/x
lim[x→0⁺] |x|/x = 1 (from right)
lim[x→0⁻] |x|/x = -1 (from left)

Since one-sided limits differ, lim[x→0] |x|/x does not exist
```

#### Limits at Infinity
```
Horizontal asymptotes:
lim[x→∞] f(x) = L means y = L is a horizontal asymptote

Example: lim[x→∞] 1/x = 0
Example: lim[x→∞] (3x² + 2x)/(x² - 1) = 3
```

#### Infinite Limits
```
Vertical asymptotes:
lim[x→c] f(x) = ∞ means f(x) grows without bound as x → c

Example: lim[x→0⁺] 1/x = ∞
Example: lim[x→2] 1/(x-2)² = ∞
```

### Limit Laws
```
If lim[x→c] f(x) = L and lim[x→c] g(x) = M, then:

1. lim[x→c] [f(x) + g(x)] = L + M
2. lim[x→c] [f(x) - g(x)] = L - M  
3. lim[x→c] [f(x) · g(x)] = L · M
4. lim[x→c] [f(x)/g(x)] = L/M (if M ≠ 0)
5. lim[x→c] [f(x)]ⁿ = Lⁿ
6. lim[x→c] ⁿ√[f(x)] = ⁿ√L (if appropriate)
```

### Evaluating Limits

#### Direct Substitution
```
If f is continuous at c, then lim[x→c] f(x) = f(c)

Example: lim[x→3] (x² + 2x - 1) = 9 + 6 - 1 = 14
```

#### Factoring
```
For rational functions with 0/0 form:

Example: lim[x→2] (x² - 4)/(x - 2)
= lim[x→2] [(x-2)(x+2)]/(x-2)
= lim[x→2] (x + 2) = 4
```

#### Rationalization
```
For expressions with radicals:

Example: lim[x→0] (√(x+1) - 1)/x
Multiply by (√(x+1) + 1)/(√(x+1) + 1):
= lim[x→0] [(x+1) - 1]/[x(√(x+1) + 1)]
= lim[x→0] x/[x(√(x+1) + 1)]
= lim[x→0] 1/(√(x+1) + 1) = 1/2
```

#### L'Hôpital's Rule
```
For indeterminate forms 0/0 or ∞/∞:
lim[x→c] f(x)/g(x) = lim[x→c] f'(x)/g'(x)

Example: lim[x→0] sin(x)/x
= lim[x→0] cos(x)/1 = 1
```

### Special Limits
```
Important limits to remember:
lim[x→0] sin(x)/x = 1
lim[x→0] (1 - cos(x))/x = 0
lim[x→0] (1 + x)^(1/x) = e
lim[x→∞] (1 + 1/x)^x = e
lim[x→0] (e^x - 1)/x = 1
lim[x→0] ln(1 + x)/x = 1
```

## Derivatives

### Definition
The derivative of f at x is the instantaneous rate of change:
```
f'(x) = lim[h→0] [f(x+h) - f(x)]/h

Geometric interpretation: slope of tangent line
Physical interpretation: instantaneous velocity
```

### Basic Derivative Rules

#### Power Rule
```
d/dx [x^n] = nx^(n-1)

Examples:
d/dx [x³] = 3x²
d/dx [x^(-2)] = -2x^(-3)
d/dx [√x] = d/dx [x^(1/2)] = (1/2)x^(-1/2) = 1/(2√x)
```

#### Constant and Linear Rules
```
d/dx [c] = 0 (constant)
d/dx [cx] = c (constant multiple)
d/dx [f(x) + g(x)] = f'(x) + g'(x) (sum)
d/dx [f(x) - g(x)] = f'(x) - g'(x) (difference)
```

### Advanced Derivative Rules

#### Product Rule
```
d/dx [f(x)g(x)] = f'(x)g(x) + f(x)g'(x)

Example: d/dx [x²sin(x)]
= 2x·sin(x) + x²·cos(x)
= 2x sin(x) + x² cos(x)
```

#### Quotient Rule
```
d/dx [f(x)/g(x)] = [f'(x)g(x) - f(x)g'(x)]/[g(x)]²

Example: d/dx [sin(x)/x²]
= [cos(x)·x² - sin(x)·2x]/(x²)²
= [x²cos(x) - 2x sin(x)]/x⁴
= [x cos(x) - 2 sin(x)]/x³
```

#### Chain Rule
```
d/dx [f(g(x))] = f'(g(x))·g'(x)

Example: d/dx [sin(x²)]
= cos(x²)·2x = 2x cos(x²)

Example: d/dx [(3x + 1)⁵]
= 5(3x + 1)⁴·3 = 15(3x + 1)⁴
```

### Derivatives of Special Functions

#### Trigonometric Functions
```
d/dx [sin(x)] = cos(x)
d/dx [cos(x)] = -sin(x)
d/dx [tan(x)] = sec²(x)
d/dx [sec(x)] = sec(x)tan(x)
d/dx [csc(x)] = -csc(x)cot(x)
d/dx [cot(x)] = -csc²(x)
```

#### Exponential and Logarithmic Functions
```
d/dx [e^x] = e^x
d/dx [a^x] = a^x ln(a)
d/dx [ln(x)] = 1/x
d/dx [log_a(x)] = 1/(x ln(a))
```

#### Inverse Trigonometric Functions
```
d/dx [arcsin(x)] = 1/√(1-x²)
d/dx [arccos(x)] = -1/√(1-x²)
d/dx [arctan(x)] = 1/(1+x²)
```

### Implicit Differentiation
When y is defined implicitly by an equation F(x,y) = 0:

```
Example: x² + y² = 25
Differentiate both sides:
2x + 2y(dy/dx) = 0
Solve for dy/dx:
dy/dx = -x/y

Example: xy + sin(y) = 1
d/dx[xy] + d/dx[sin(y)] = d/dx[1]
y + x(dy/dx) + cos(y)(dy/dx) = 0
dy/dx = -y/(x + cos(y))
```

### Higher-Order Derivatives
```
f'(x) or f^(1)(x) = first derivative
f''(x) or f^(2)(x) = second derivative
f'''(x) or f^(3)(x) = third derivative
f^(n)(x) = nth derivative

Example: f(x) = x⁴
f'(x) = 4x³
f''(x) = 12x²
f'''(x) = 24x
f^(4)(x) = 24
f^(5)(x) = 0
```

## Applications of Derivatives

### Related Rates
When quantities are related by an equation, their rates of change are related by the derivative of that equation.

```
Example: Balloon Problem
A spherical balloon's radius increases at 2 cm/min. 
How fast is volume increasing when r = 10 cm?

Given: dr/dt = 2 cm/min
Find: dV/dt when r = 10

Volume formula: V = (4/3)πr³
Differentiate: dV/dt = 4πr²(dr/dt)
Substitute: dV/dt = 4π(10)²(2) = 800π cm³/min
```

### Optimization Problems
Find maximum or minimum values using calculus.

#### Process:
1. Define variables and constraints
2. Express the quantity to optimize as a function
3. Find critical points (where f'(x) = 0)
4. Use first or second derivative test
5. Check endpoints if applicable

```
Example: Fence Problem
Farmer has 1000 feet of fence to enclose rectangular area.
What dimensions maximize the area?

Let x = width, y = length
Constraint: 2x + 2y = 1000, so y = 500 - x
Area: A(x) = xy = x(500 - x) = 500x - x²

Find critical points:
A'(x) = 500 - 2x = 0
x = 250 feet

Therefore: y = 500 - 250 = 250 feet
Maximum area = 250 × 250 = 62,500 square feet
```

### Linear Approximation and Differentials
```
Linear approximation (tangent line approximation):
f(x) ≈ f(a) + f'(a)(x - a)

Example: Approximate √26
Let f(x) = √x, a = 25
f'(x) = 1/(2√x), so f'(25) = 1/10

√26 ≈ √25 + (1/10)(26 - 25) = 5 + 0.1 = 5.1
(Actual value: √26 ≈ 5.099...)

Differential: dy = f'(x)dx represents change in y
```

### Motion Problems
```
If position is s(t):
• Velocity: v(t) = s'(t)
• Acceleration: a(t) = v'(t) = s''(t)
• Speed: |v(t)|

Example: s(t) = t³ - 6t² + 9t + 1
v(t) = 3t² - 12t + 9
a(t) = 6t - 12

When is particle at rest? v(t) = 0
3t² - 12t + 9 = 0
3(t² - 4t + 3) = 0
3(t - 1)(t - 3) = 0
At rest when t = 1 and t = 3
```

### Curve Sketching
Use derivatives to analyze function behavior:

#### First Derivative Test
```
• f'(x) > 0: function increasing
• f'(x) < 0: function decreasing
• f'(x) = 0: critical points (potential extrema)
• f'(x) changes sign: local maximum or minimum
```

#### Second Derivative Test
```
• f''(x) > 0: concave up (cup shape)
• f''(x) < 0: concave down (cap shape)
• f''(x) = 0: potential inflection point
• f''(c) = 0 and f''(x) changes sign at c: inflection point

For critical point c where f'(c) = 0:
• f''(c) > 0: local minimum
• f''(c) < 0: local maximum
• f''(c) = 0: test is inconclusive
```

## Integrals

### Antiderivatives
An antiderivative of f(x) is a function F(x) such that F'(x) = f(x).

```
∫ f(x) dx = F(x) + C

where C is the constant of integration

Example: ∫ 2x dx = x² + C
Verification: d/dx[x² + C] = 2x ✓
```

### Basic Integration Rules

#### Power Rule
```
∫ x^n dx = x^(n+1)/(n+1) + C  (n ≠ -1)

Examples:
∫ x³ dx = x⁴/4 + C
∫ √x dx = ∫ x^(1/2) dx = (2/3)x^(3/2) + C
∫ 1/x² dx = ∫ x^(-2) dx = -x^(-1) + C = -1/x + C
```

#### Basic Integrals
```
∫ k dx = kx + C  (constant)
∫ [f(x) + g(x)] dx = ∫ f(x) dx + ∫ g(x) dx
∫ kf(x) dx = k∫ f(x) dx

∫ e^x dx = e^x + C
∫ 1/x dx = ln|x| + C
∫ sin(x) dx = -cos(x) + C
∫ cos(x) dx = sin(x) + C
∫ sec²(x) dx = tan(x) + C
```

### Integration Techniques

#### Substitution (u-substitution)
```
∫ f(g(x))g'(x) dx = ∫ f(u) du  where u = g(x)

Example: ∫ 2x cos(x²) dx
Let u = x², then du = 2x dx
∫ cos(u) du = sin(u) + C = sin(x²) + C

Example: ∫ (3x + 1)⁴ dx
Let u = 3x + 1, then du = 3 dx, so dx = du/3
∫ u⁴ · (du/3) = (1/3) ∫ u⁴ du = (1/3) · u⁵/5 + C = (3x + 1)⁵/15 + C
```

#### Integration by Parts
```
∫ u dv = uv - ∫ v du

Choose u and dv so that ∫ v du is simpler than ∫ u dv

Example: ∫ x e^x dx
Let u = x, dv = e^x dx
Then du = dx, v = e^x
∫ x e^x dx = x·e^x - ∫ e^x dx = xe^x - e^x + C = e^x(x - 1) + C
```

### Definite Integrals

#### Fundamental Theorem of Calculus
```
Part 1: If f is continuous on [a,b] and F'(x) = f(x), then:
∫[a to b] f(x) dx = F(b) - F(a)

Part 2: If f is continuous on [a,b], then:
d/dx ∫[a to x] f(t) dt = f(x)
```

#### Evaluation
```
∫[a to b] f(x) dx = [F(x)][a to b] = F(b) - F(a)

Example: ∫[1 to 4] x² dx
= [x³/3][1 to 4] = 64/3 - 1/3 = 63/3 = 21
```

#### Properties
```
∫[a to a] f(x) dx = 0
∫[a to b] f(x) dx = -∫[b to a] f(x) dx
∫[a to b] f(x) dx + ∫[b to c] f(x) dx = ∫[a to c] f(x) dx
∫[a to b] [f(x) + g(x)] dx = ∫[a to b] f(x) dx + ∫[a to b] g(x) dx
∫[a to b] kf(x) dx = k∫[a to b] f(x) dx
```

### Applications of Integration

#### Area Under Curves
```
Area between f(x) and x-axis from a to b:
A = ∫[a to b] |f(x)| dx

Area between curves f(x) and g(x):
A = ∫[a to b] |f(x) - g(x)| dx

Example: Area between y = x² and y = 4
Intersection points: x² = 4, so x = ±2
A = ∫[-2 to 2] (4 - x²) dx = [4x - x³/3][-2 to 2] = 32/3
```

#### Volume of Revolution

**Disk Method:**
```
V = π∫[a to b] [f(x)]² dx

Example: Volume when y = √x is revolved around x-axis from x = 0 to x = 4
V = π∫[0 to 4] (√x)² dx = π∫[0 to 4] x dx = π[x²/2][0 to 4] = 8π
```

**Washer Method:**
```
V = π∫[a to b] ([R(x)]² - [r(x)]²) dx

where R(x) is outer radius, r(x) is inner radius
```

#### Average Value
```
Average value of f on [a,b]:
f_avg = (1/(b-a)) ∫[a to b] f(x) dx

Example: Average value of f(x) = x² on [0,3]
f_avg = (1/3) ∫[0 to 3] x² dx = (1/3) · [x³/3][0 to 3] = (1/3) · 9 = 3
```

## Multivariable Calculus Introduction

### Functions of Several Variables
```
z = f(x,y) represents a surface in 3D space

Examples:
f(x,y) = x² + y² (paraboloid)
f(x,y) = sin(x)cos(y) (wave surface)
f(x,y) = √(9 - x² - y²) (upper hemisphere)
```

### Partial Derivatives
```
∂f/∂x: derivative with respect to x, treating y as constant
∂f/∂y: derivative with respect to y, treating x as constant

Example: f(x,y) = x²y + 3xy²
∂f/∂x = 2xy + 3y²
∂f/∂y = x² + 6xy

Geometric interpretation:
∂f/∂x gives slope in x-direction
∂f/∂y gives slope in y-direction
```

### Multiple Integrals
```
Double integral: ∫∫[R] f(x,y) dA

Represents volume under surface z = f(x,y) over region R

Example: ∫[0 to 2] ∫[0 to 1] (x + y) dy dx
= ∫[0 to 2] [xy + y²/2][0 to 1] dx
= ∫[0 to 2] (x + 1/2) dx
= [x²/2 + x/2][0 to 2] = 2 + 1 = 3
```

## Practice Problems

### Limits
```
1. lim[x→3] (x² - 9)/(x - 3)
2. lim[x→0] sin(5x)/x
3. lim[x→∞] (2x² + 3x)/(x² - 1)
```

### Derivatives
```
1. Find dy/dx: y = x³ sin(x)
2. Find dy/dx using implicit differentiation: x² + xy + y² = 7
3. Find the equation of the tangent line to y = e^x at x = 0
```

### Applications
```
1. A ladder 25 feet long leans against a wall. The bottom slides away at 3 ft/sec. How fast is the top sliding down when the bottom is 15 feet from the wall?

2. Find the maximum area of a rectangle inscribed in the ellipse x²/9 + y²/4 = 1

3. Find the critical points of f(x) = x³ - 3x² - 9x + 5
```

### Integration
```
1. ∫ (3x² - 2x + 1) dx
2. ∫ x cos(x²) dx
3. ∫[0 to π/2] sin(x) dx
4. Find the area between y = x² and y = 2x
```

## Answer Key

### Limits
```
1. lim[x→3] (x² - 9)/(x - 3) = lim[x→3] (x + 3) = 6
2. lim[x→0] sin(5x)/x = 5·lim[x→0] sin(5x)/(5x) = 5·1 = 5
3. lim[x→∞] (2x² + 3x)/(x² - 1) = 2
```

### Derivatives
```
1. dy/dx = 3x² sin(x) + x³ cos(x)
2. 2x + y + x(dy/dx) + 2y(dy/dx) = 0
   dy/dx = -(2x + y)/(x + 2y)
3. y = e^x, y' = e^x, at x = 0: point (0,1), slope = 1
   Tangent line: y = x + 1
```

### Applications
```
1. Using Pythagorean theorem: x² + y² = 625
   2x(dx/dt) + 2y(dy/dt) = 0
   When x = 15, y = 20, dx/dt = 3
   dy/dt = -xy(dx/dt)/y = -15(3)/20 = -2.25 ft/sec

2. Rectangle vertices at (±x, ±y) where x²/9 + y²/4 = 1
   Area A = 4xy, y = 2√(1 - x²/9)
   A(x) = 8x√(1 - x²/9), A'(x) = 0 gives x = 3/√2
   Maximum area = 12

3. f'(x) = 3x² - 6x - 9 = 3(x² - 2x - 3) = 3(x - 3)(x + 1)
   Critical points: x = -1, x = 3
```

### Integration
```
1. ∫ (3x² - 2x + 1) dx = x³ - x² + x + C
2. ∫ x cos(x²) dx = (1/2) sin(x²) + C
3. ∫[0 to π/2] sin(x) dx = [-cos(x)][0 to π/2] = 1
4. Intersection: x² = 2x gives x = 0, 2
   Area = ∫[0 to 2] (2x - x²) dx = 4/3
```

## Quick Reference

### Derivative Rules
- Power Rule: d/dx[x^n] = nx^(n-1)
- Product Rule: d/dx[fg] = f'g + fg'
- Quotient Rule: d/dx[f/g] = (f'g - fg')/g²
- Chain Rule: d/dx[f(g(x))] = f'(g(x))·g'(x)

### Integration Rules
- Power Rule: ∫x^n dx = x^(n+1)/(n+1) + C
- ∫e^x dx = e^x + C
- ∫sin(x) dx = -cos(x) + C
- ∫cos(x) dx = sin(x) + C

### Fundamental Theorem
- ∫[a to b] f(x) dx = F(b) - F(a) where F'(x) = f(x)

## See Also

- **[BasicMath](../basic-math)** - Number systems and arithmetic foundations
- **[Algebra](../algebra)** - Algebraic manipulation required for calculus
- **[Pre-Calculus](../pre-calculus)** - Essential preparation for calculus - direct prerequisite
- **[Differential Equations](../differential-equations)** - Applications of calculus
- **[Matrices](../matrices)** - Multivariable calculus and Jacobian matrices
- **[Complex Numbers](../complex-numbers)** - Advanced mathematical analysis
- **[Numerical Methods](../numerical-methods)** - Computational approaches to calculus problems
- **[Mathematical Modeling](../mathematical-modeling)** - Real-world applications of calculus