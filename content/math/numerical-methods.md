---
title: "Numerical Methods"
date: 2024-01-01T00:00:00Z
draft: false
description: "Comprehensive guide to numerical methods covering root finding, numerical integration, differential equations, linear systems, and computational mathematics."
categories: ["math"]
tags: ["numerical-methods", "root-finding", "numerical-integration", "odes", "linear-systems", "interpolation", "computational-mathematics"]
---

## Prerequisites

**Required:**
- **[Calculus](../calculus)** - Derivatives, integrals, Taylor series, limits
- **[Algebra](../algebra)** - Linear equations, polynomials, functions
- **[Matrices](../matrices)** - Matrix operations, linear systems

**Helpful:**
- **[Differential Equations](../differential-equations)** - For numerical ODE methods
- Programming experience (any language)
- Understanding of floating-point arithmetic

## Overview

Numerical methods provide computational techniques for solving mathematical problems that cannot be solved analytically or when exact solutions are impractical. These methods form the foundation of scientific computing, engineering simulation, data analysis, and mathematical modeling.

This guide covers essential numerical algorithms including root finding, numerical integration and differentiation, solving systems of linear equations, interpolation, and numerical solutions to differential equations. Each method includes error analysis, implementation considerations, and practical applications.

## Error Analysis and Floating Point Arithmetic

### Types of Errors

```
Absolute Error: |true value - approximate value|
Relative Error: |true value - approximate value| / |true value|
Percentage Error: Relative Error × 100%

Example: True value = 3.14159, Approximation = 3.14
Absolute error = |3.14159 - 3.14| = 0.00159
Relative error = 0.00159/3.14159 ≈ 0.000506 ≈ 0.0506%

Sources of Error:
1. Truncation Error: From approximating infinite processes
2. Round-off Error: From finite precision arithmetic
3. Data Error: From measurement inaccuracies
4. Modeling Error: From simplifying assumptions
```

### Floating Point Representation

```
IEEE 754 Standard for double precision (64-bit):
1 sign bit + 11 exponent bits + 52 mantissa bits

Machine Epsilon (ε): Smallest number such that 1 + ε > 1
For double precision: ε ≈ 2.22 × 10⁻¹⁶

Consequences:
• Not all real numbers can be represented exactly
• Addition/subtraction of very different magnitudes loses precision
• Multiplication/division generally more stable than addition/subtraction

Example of precision loss:
x = 1.0
y = 1.0e-16
z = x + y - x  // Should be 1.0e-16, might be 0 due to roundoff
```

### Condition Numbers and Stability

```
Condition Number: Measures sensitivity of solution to input perturbations

For function f(x): κ = |xf'(x)/f(x)|

Well-conditioned: κ small (solution not sensitive to input changes)
Ill-conditioned: κ large (small input changes cause large output changes)

Algorithm Stability:
• Stable: Errors don't grow significantly
• Unstable: Small errors amplify dramatically

Example: Solving (x - 1)(x - 2) = 0 vs x² - 3x + 2 = 0
Same roots mathematically, but different numerical behavior
```

## Root Finding Methods

### Bisection Method

```
Finds root of f(x) = 0 on interval [a,b] where f(a) and f(b) have opposite signs

Algorithm:
1. Check f(a)·f(b) < 0
2. c = (a + b)/2
3. If f(c) = 0, root found
4. If f(a)·f(c) < 0, set b = c
5. Else set a = c
6. Repeat until |b - a| < tolerance

Example: Find root of f(x) = x³ - x - 1 on [1, 2]
f(1) = -1, f(2) = 5, so root exists

Iteration 1: c = 1.5, f(1.5) = 0.875 > 0, so [1, 1.5]
Iteration 2: c = 1.25, f(1.25) = -0.297 < 0, so [1.25, 1.5]
Iteration 3: c = 1.375, f(1.375) = 0.224 > 0, so [1.25, 1.375]
...continues until desired precision

Properties:
• Always converges if root exists in interval
• Slow convergence (linear): error halves each iteration
• Requires sign change in interval
• Very robust method
```

### Newton-Raphson Method

```
Uses tangent line approximation: x_{n+1} = x_n - f(x_n)/f'(x_n)

Geometric interpretation: Follow tangent to x-axis

Algorithm:
1. Choose initial guess x₀
2. Compute x_{n+1} = x_n - f(x_n)/f'(x_n)
3. Stop when |x_{n+1} - x_n| < tolerance

Example: Find root of f(x) = x² - 2 (i.e., √2)
f'(x) = 2x
x_{n+1} = x_n - (x_n² - 2)/(2x_n) = (x_n + 2/x_n)/2

Starting with x₀ = 1:
x₁ = (1 + 2/1)/2 = 1.5
x₂ = (1.5 + 2/1.5)/2 = 1.41667
x₃ = (1.41667 + 2/1.41667)/2 = 1.41422
x₄ = 1.41421... (converges to √2)

Properties:
• Quadratic convergence (very fast when it works)
• Requires derivative calculation
• May diverge or oscillate with poor initial guess
• Problems with f'(x) = 0 (horizontal tangent)
```

### Secant Method

```
Approximates derivative using two points: x_{n+1} = x_n - f(x_n)(x_n - x_{n-1})/(f(x_n) - f(x_{n-1}))

Similar to Newton's method but doesn't need derivative

Algorithm:
1. Choose two initial guesses x₀ and x₁
2. Compute x_{n+1} using secant formula
3. Continue until convergence

Example: Same function f(x) = x² - 2
x₀ = 1, x₁ = 2
f(1) = -1, f(2) = 2
x₂ = 2 - 2(2-1)/(2-(-1)) = 2 - 2/3 = 1.333
Continue iterating...

Properties:
• Superlinear convergence (between linear and quadratic)
• No derivative needed
• Requires two initial points
• Can fail if secant becomes horizontal
```

### Fixed Point Iteration

```
Converts f(x) = 0 to x = g(x) form, then iterates x_{n+1} = g(x_n)

Example: x² - x - 1 = 0 becomes x = √(x + 1)
Iteration: x_{n+1} = √(x_n + 1)

Starting with x₀ = 1:
x₁ = √(1 + 1) = √2 ≈ 1.414
x₂ = √(1.414 + 1) ≈ 1.553
x₃ = √(1.553 + 1) ≈ 1.598
...converges to golden ratio φ ≈ 1.618

Convergence condition: |g'(x)| < 1 near the root

Different rearrangements give different g(x):
x² - x - 1 = 0 can become:
• x = (x² - 1) (diverges)
• x = √(x + 1) (converges)
• x = 1 + 1/x (converges)
```

## Numerical Integration

### Trapezoidal Rule

```
Approximates ∫[a to b] f(x) dx by connecting points with straight lines

Single application: ∫[a to b] f(x) dx ≈ (b-a)/2 [f(a) + f(b)]

Multiple applications with n intervals:
h = (b-a)/n
∫[a to b] f(x) dx ≈ h/2 [f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(x_{n-1}) + f(x_n)]

Example: ∫[0 to 1] e^x dx with h = 0.25
x values: 0, 0.25, 0.5, 0.75, 1
f values: 1, 1.284, 1.649, 2.117, 2.718
Approximation = 0.25/2 [1 + 2(1.284) + 2(1.649) + 2(2.117) + 2.718]
               = 0.125 × 13.818 = 1.727

True value: e - 1 = 1.718
Error: |1.718 - 1.727| = 0.009

Error bound: |E| ≤ (b-a)³/(12n²) max|f''(x)|
```

### Simpson's 1/3 Rule

```
Uses parabolic approximation through three points

Single application: ∫[a to b] f(x) dx ≈ (b-a)/6 [f(a) + 4f((a+b)/2) + f(b)]

Multiple applications (n must be even):
h = (b-a)/n
∫[a to b] f(x) dx ≈ h/3 [f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ... + f(x_n)]

Pattern: 1, 4, 2, 4, 2, ..., 2, 4, 1

Example: Same integral ∫[0 to 1] e^x dx with n = 4
h = 0.25
Approximation = 0.25/3 [1 + 4(1.284) + 2(1.649) + 4(2.117) + 2.718]
               = 0.25/3 × 20.582 = 1.7152

Error: |1.718 - 1.715| = 0.003 (much better than trapezoidal!)

Error bound: |E| ≤ (b-a)⁵/(180n⁴) max|f⁽⁴⁾(x)|
```

### Gaussian Quadrature

```
Chooses optimal points and weights for maximum accuracy

Two-point Gaussian quadrature:
∫[-1 to 1] f(x) dx ≈ f(-1/√3) + f(1/√3)

For general interval [a,b], transform: x = (b-a)t/2 + (b+a)/2
∫[a to b] f(x) dx ≈ (b-a)/2 [f(x₁) + f(x₂)]

where x₁ = (b-a)(-1/√3)/2 + (b+a)/2, x₂ = (b-a)(1/√3)/2 + (b+a)/2

Example: ∫[0 to 1] e^x dx
Transform to [-1,1]: x = (t+1)/2, dx = dt/2
∫[0 to 1] e^x dx = 1/2 ∫[-1 to 1] e^((t+1)/2) dt

Evaluate at t = ±1/√3:
≈ 1/2 [e^((1-1/√3)/2) + e^((1+1/√3)/2)]
≈ 1/2 [e^0.211 + e^0.789] = 1/2 [1.235 + 2.201] = 1.718

Exact answer with just 2 function evaluations!

Higher-order Gaussian quadrature uses more points for even better accuracy
```

### Adaptive Integration

```
Automatically adjusts step size based on local error estimates

Algorithm:
1. Compute integral estimate I₁ with step size h
2. Compute integral estimate I₂ with step size h/2  
3. Estimate error: E ≈ |I₂ - I₁|/15 (for Simpson's rule)
4. If E < tolerance, accept I₂
5. If E ≥ tolerance, subdivide interval and repeat

Example implementation concept:
def adaptive_simpson(f, a, b, tol):
    c = (a + b) / 2
    S1 = simpson_single(f, a, b)  # Whole interval
    S2 = simpson_single(f, a, c) + simpson_single(f, c, b)  # Two halves
    
    if abs(S2 - S1) < 15 * tol:
        return S2
    else:
        return adaptive_simpson(f, a, c, tol/2) + adaptive_simpson(f, c, b, tol/2)

Benefits:
• Automatic error control
• Efficient use of function evaluations
• Handles irregular functions well
```

## Numerical Differentiation

### Forward, Backward, and Central Differences

```
Forward difference: f'(x) ≈ (f(x+h) - f(x))/h
Backward difference: f'(x) ≈ (f(x) - f(x-h))/h
Central difference: f'(x) ≈ (f(x+h) - f(x-h))/(2h)

Example: f(x) = x² at x = 2
True derivative: f'(2) = 4

With h = 0.1:
Forward: (2.1² - 2²)/0.1 = (4.41 - 4)/0.1 = 4.1
Backward: (2² - 1.9²)/0.1 = (4 - 3.61)/0.1 = 3.9
Central: (2.1² - 1.9²)/(2×0.1) = (4.41 - 3.61)/0.2 = 4.0

Central difference is most accurate!

Error analysis:
Forward/Backward: O(h) error
Central: O(h²) error (much better)
```

### Higher-Order Derivatives

```
Second derivative (central): f''(x) ≈ (f(x+h) - 2f(x) + f(x-h))/h²

Example: f(x) = x³ at x = 1
True: f''(1) = 6

With h = 0.1:
f''(1) ≈ (1.1³ - 2(1³) + 0.9³)/(0.1)²
       = (1.331 - 2 + 0.729)/0.01
       = 0.06/0.01 = 6.0

Higher derivatives use more points:
f'''(x) ≈ (f(x+2h) - 2f(x+h) + 2f(x-h) - f(x-2h))/(2h³)
```

### Richardson Extrapolation

```
Uses multiple step sizes to improve accuracy

For central difference with step sizes h and h/2:
D(h) = (f(x+h) - f(x-h))/(2h)
D(h/2) = (f(x+h/2) - f(x-h/2))/h

Richardson extrapolation:
D_improved = D(h/2) + (D(h/2) - D(h))/3

This removes the leading error term, improving accuracy from O(h²) to O(h⁴)

Example: f(x) = sin(x) at x = 1
True: f'(1) = cos(1) ≈ 0.540302

h = 0.2: D(h) = (sin(1.2) - sin(0.8))/0.4 ≈ 0.544021
h = 0.1: D(h/2) = (sin(1.1) - sin(0.9))/0.2 ≈ 0.541253

Richardson: 0.541253 + (0.541253 - 0.544021)/3 ≈ 0.540330

Much closer to true value!
```

## Systems of Linear Equations

### Gaussian Elimination

```
Transforms system Ax = b to upper triangular form, then uses back substitution

Example: 
2x + 3y + z = 11
x + y + z = 6  
x + 2y + 2z = 10

Augmented matrix:
[2  3  1 | 11]
[1  1  1 |  6]
[1  2  2 | 10]

Forward elimination:
Step 1: R₂ = R₂ - (1/2)R₁, R₃ = R₃ - (1/2)R₁
[2   3   1  | 11]
[0  -0.5 0.5|  0.5]
[0   0.5 1.5|  4.5]

Step 2: R₃ = R₃ + R₂  
[2   3   1  | 11]
[0  -0.5 0.5|  0.5]
[0   0   2  |  5]

Back substitution:
z = 5/2 = 2.5
y = (0.5 - 0.5z)/(-0.5) = (0.5 - 1.25)/(-0.5) = 1.5
x = (11 - 3y - z)/2 = (11 - 4.5 - 2.5)/2 = 2

Solution: x = 2, y = 1.5, z = 2.5
```

### LU Decomposition

```
Factors A = LU where L is lower triangular, U is upper triangular

Once computed, solving Ax = b becomes:
1. Solve Ly = b (forward substitution)
2. Solve Ux = y (back substitution)

Example: A = [2  1]
             [4  3]

Find L and U such that LU = A:
L = [1   0]  U = [2  1]
    [l₂₁ 1]      [0  u₂₂]

From LU = A:
2 = 2, 1 = 1
4 = l₂₁ × 2 → l₂₁ = 2
3 = l₂₁ × 1 + u₂₂ = 2 + u₂₂ → u₂₂ = 1

So: L = [1  0]  U = [2  1]
        [2  1]      [0  1]

Verification: LU = [1×2+0×0  1×1+0×1] = [2  1] = A ✓
                   [2×2+1×0  2×1+1×1]   [4  3]

Benefits:
• Solve multiple systems with same A efficiently
• More stable than direct Gaussian elimination
• Foundation for many other algorithms
```

### Iterative Methods

#### Jacobi Method

```
For Ax = b, rearrange to x = Dx⁻¹(b - (L+U)x)
where A = D + L + U (diagonal + lower + upper)

Algorithm:
x_i^(k+1) = (b_i - Σ(j≠i) a_ij x_j^(k))/a_ii

Example: 
4x + y = 15
x + 3y = 10

Rearrange:
x = (15 - y)/4
y = (10 - x)/3

Iteration with initial guess (0,0):
k=0: x⁽¹⁾ = (15-0)/4 = 3.75, y⁽¹⁾ = (10-0)/3 = 3.33
k=1: x⁽²⁾ = (15-3.33)/4 = 2.92, y⁽²⁾ = (10-3.75)/3 = 2.08
k=2: x⁽³⁾ = (15-2.08)/4 = 3.23, y⁽³⁾ = (10-2.92)/3 = 2.36
...
Converges to x ≈ 3, y ≈ 2 (exact solution)

Convergence condition: A must be diagonally dominant
|a_ii| > Σ(j≠i) |a_ij| for all i
```

#### Gauss-Seidel Method

```
Uses updated values immediately (generally faster than Jacobi)

x_i^(k+1) = (b_i - Σ(j<i) a_ij x_j^(k+1) - Σ(j>i) a_ij x_j^(k))/a_ii

Same example:
k=0: x⁽¹⁾ = (15-0)/4 = 3.75
     y⁽¹⁾ = (10-3.75)/3 = 2.08 (uses updated x value)
k=1: x⁽²⁾ = (15-2.08)/4 = 3.23
     y⁽²⁾ = (10-3.23)/3 = 2.26
...

Generally converges faster than Jacobi
```

## Interpolation and Approximation

### Polynomial Interpolation

#### Lagrange Interpolation

```
For n+1 points (x₀,y₀), (x₁,y₁), ..., (xₙ,yₙ), the interpolating polynomial is:

P(x) = Σᵢ yᵢ Lᵢ(x)

where Lᵢ(x) = Π(j≠i) (x-xⱼ)/(xᵢ-xⱼ)

Example: Find polynomial through (0,1), (1,4), (2,1)

L₀(x) = (x-1)(x-2)/((0-1)(0-2)) = (x-1)(x-2)/2
L₁(x) = (x-0)(x-2)/((1-0)(1-2)) = x(x-2)/(-1) = -x(x-2)
L₂(x) = (x-0)(x-1)/((2-0)(2-1)) = x(x-1)/2

P(x) = 1·L₀(x) + 4·L₁(x) + 1·L₂(x)
     = (x-1)(x-2)/2 - 4x(x-2) + x(x-1)/2
     = (x² - 3x + 2)/2 - 4x² + 8x + (x² - x)/2
     = -3x² + 6x + 1

Check: P(0) = 1 ✓, P(1) = 4 ✓, P(2) = 1 ✓
```

#### Newton's Divided Differences

```
More efficient for adding new points

P(x) = f[x₀] + f[x₀,x₁](x-x₀) + f[x₀,x₁,x₂](x-x₀)(x-x₁) + ...

Divided differences:
f[xᵢ] = f(xᵢ)
f[xᵢ,xⱼ] = (f[xⱼ] - f[xᵢ])/(xⱼ - xᵢ)
f[xᵢ,xⱼ,xₖ] = (f[xⱼ,xₖ] - f[xᵢ,xⱼ])/(xₖ - xᵢ)

Example: Same points (0,1), (1,4), (2,1)

Divided difference table:
x  | f(x) | f[,] | f[,,]
0  | 1    |      |
   |      | 3    |
1  | 4    |      | -4
   |      | -3   |
2  | 1    |      |

P(x) = 1 + 3(x-0) + (-4)(x-0)(x-1)
     = 1 + 3x - 4x(x-1)
     = 1 + 3x - 4x² + 4x
     = -4x² + 7x + 1

Wait - different from Lagrange? Let me recalculate...
Actually: P(x) = 1 + 3x - 4x² + 4x = -4x² + 7x + 1
This doesn't match our points. Error in calculation.

Correct: f[x₀,x₁,x₂] = (f[x₁,x₂] - f[x₀,x₁])/(x₂ - x₀) = (-3-3)/(2-0) = -3
P(x) = 1 + 3x - 3x(x-1) = 1 + 3x - 3x² + 3x = -3x² + 6x + 1

This matches the Lagrange result!
```

### Spline Interpolation

```
Uses piecewise polynomials for smoother interpolation

Cubic splines: third-degree polynomials between each pair of points
Constraints:
• Continuous function values
• Continuous first derivatives  
• Continuous second derivatives
• Natural spline: second derivatives = 0 at endpoints

Example: Points (0,1), (1,2), (2,0)
Need two cubic polynomials:
S₁(x) = a₁x³ + b₁x² + c₁x + d₁ for x ∈ [0,1]
S₂(x) = a₂(x-1)³ + b₂(x-1)² + c₂(x-1) + d₂ for x ∈ [1,2]

Eight unknowns, need eight conditions:
1. S₁(0) = 1    5. S₁'(1) = S₂'(1)
2. S₁(1) = 2    6. S₁''(1) = S₂''(1)  
3. S₂(1) = 2    7. S₁''(0) = 0 (natural)
4. S₂(2) = 0    8. S₂''(2) = 0 (natural)

Solving this system gives smooth spline interpolation
```

### Least Squares Approximation

```
Finds best-fit function when exact interpolation isn't desired

Linear least squares: Fit y = ax + b to data points
Minimize: S = Σᵢ (yᵢ - axᵢ - b)²

Taking derivatives and setting to zero:
∂S/∂a = -2Σᵢ xᵢ(yᵢ - axᵢ - b) = 0
∂S/∂b = -2Σᵢ (yᵢ - axᵢ - b) = 0

Normal equations:
a Σᵢ xᵢ² + b Σᵢ xᵢ = Σᵢ xᵢyᵢ
a Σᵢ xᵢ + bn = Σᵢ yᵢ

Example: Data points (1,2), (2,3), (3,3), (4,6)
n = 4, Σx = 10, Σy = 14, Σx² = 30, Σxy = 39

Normal equations:
30a + 10b = 39
10a + 4b = 14

Solving: a = 1.1, b = 0.5
Best fit line: y = 1.1x + 0.5

Polynomial least squares extends to higher-degree polynomials
Matrix form: A^T A c = A^T b where c contains coefficients
```

## Numerical Solutions of ODEs

### Euler's Method

```
Simplest method: y_{n+1} = y_n + h·f(x_n, y_n)

Example: Solve y' = x + y, y(0) = 1 from x = 0 to x = 1 with h = 0.2

x₀ = 0, y₀ = 1
y₁ = y₀ + h·f(x₀,y₀) = 1 + 0.2(0 + 1) = 1.2

x₁ = 0.2, y₁ = 1.2  
y₂ = 1.2 + 0.2(0.2 + 1.2) = 1.2 + 0.28 = 1.48

x₂ = 0.4, y₂ = 1.48
y₃ = 1.48 + 0.2(0.4 + 1.48) = 1.48 + 0.376 = 1.856

Continue to x = 1...

Exact solution: y = 2e^x - x - 1
At x = 1: y(1) = 2e - 2 ≈ 3.437
Euler approximation will be less accurate due to accumulation of errors

Properties:
• Simple to implement
• First-order method: local error O(h²), global error O(h)
• Can be unstable for large h
```

### Runge-Kutta Methods

#### Second-Order (Heun's Method)

```
Uses average of slopes at beginning and end of interval:

k₁ = h·f(x_n, y_n)
k₂ = h·f(x_n + h, y_n + k₁)
y_{n+1} = y_n + (k₁ + k₂)/2

Example: Same ODE y' = x + y, y(0) = 1, h = 0.2

Step 1:
k₁ = 0.2·f(0,1) = 0.2(0+1) = 0.2
k₂ = 0.2·f(0.2, 1+0.2) = 0.2(0.2+1.2) = 0.28
y₁ = 1 + (0.2 + 0.28)/2 = 1.24

Much better than Euler's y₁ = 1.2!

Second-order accuracy: O(h²) local error, O(h²) global error
```

#### Fourth-Order Runge-Kutta (RK4)

```
Most popular ODE solver for single-step methods:

k₁ = h·f(x_n, y_n)
k₂ = h·f(x_n + h/2, y_n + k₁/2)  
k₃ = h·f(x_n + h/2, y_n + k₂/2)
k₄ = h·f(x_n + h, y_n + k₃)
y_{n+1} = y_n + (k₁ + 2k₂ + 2k₃ + k₄)/6

Example: y' = x + y, y(0) = 1, h = 0.2

Step 1:
k₁ = 0.2(0 + 1) = 0.2
k₂ = 0.2(0.1 + 1.1) = 0.24
k₃ = 0.2(0.1 + 1.12) = 0.244  
k₄ = 0.2(0.2 + 1.244) = 0.2888

y₁ = 1 + (0.2 + 2(0.24) + 2(0.244) + 0.2888)/6 = 1.2427

Very close to exact value!

Fourth-order accuracy: O(h⁴) local error, O(h⁴) global error
Excellent balance of accuracy and computational cost
```

### Multi-Step Methods

#### Adams-Bashforth Methods

```
Use information from multiple previous points

Second-order: y_{n+1} = y_n + h/2(3f_n - f_{n-1})
Third-order: y_{n+1} = y_n + h/12(23f_n - 16f_{n-1} + 5f_{n-2})

Require starting values from single-step method (e.g., RK4)

Benefits:
• More efficient (one function evaluation per step)
• Higher-order methods available

Drawbacks:
• Need starting procedure
• Can be unstable
• Fixed step size more restrictive
```

### Stiff Equations

```
Equations where solution components have very different time scales

Example: y' = -100y + 100t, y(0) = 1
Solution: y = t + e^(-100t)

After small time, e^(-100t) term decays rapidly
Explicit methods require very small h for stability

Implicit methods needed:
Backward Euler: y_{n+1} = y_n + h·f(x_{n+1}, y_{n+1})

This requires solving nonlinear equation at each step but provides stability

MATLAB's ode15s, ode23s designed for stiff systems
```

## Advanced Topics

### Monte Carlo Methods

```
Use random sampling for numerical computation

Monte Carlo Integration:
∫[a to b] f(x) dx ≈ (b-a)/N Σᵢ f(xᵢ)
where xᵢ are random points in [a,b]

Example: Estimate π using unit circle
Generate random points (x,y) in [-1,1] × [-1,1]
Count points inside unit circle: x² + y² ≤ 1
π ≈ 4 × (points inside)/(total points)

import random
inside = 0
N = 1000000
for i in range(N):
    x = random.uniform(-1, 1)  
    y = random.uniform(-1, 1)
    if x*x + y*y <= 1:
        inside += 1
pi_estimate = 4 * inside / N

Benefits:
• Works in high dimensions
• Error decreases as 1/√N regardless of dimension
• Easy to parallelize

Drawbacks:  
• Slow convergence
• Requires good random number generator
```

### Finite Difference Methods for PDEs

```
Discretize partial derivatives using difference formulas

Example: Heat equation ∂u/∂t = α ∂²u/∂x²

Forward time, central space (FTCS):
(u_i^{n+1} - u_i^n)/Δt = α(u_{i+1}^n - 2u_i^n + u_{i-1}^n)/(Δx)²

Explicit formula:
u_i^{n+1} = u_i^n + r(u_{i+1}^n - 2u_i^n + u_{i-1}^n)

where r = αΔt/(Δx)²

Stability condition: r ≤ 1/2

Implementation creates grid in space-time and marches forward
```

### Optimization

#### Golden Section Search

```
Find minimum of unimodal function on interval [a,b]

Uses golden ratio φ = (1+√5)/2 ≈ 1.618

Algorithm:
1. Choose interior points: x₁ = a + (3-φ)(b-a), x₂ = a + (φ-1)(b-a)
2. Evaluate f(x₁) and f(x₂)
3. If f(x₁) > f(x₂), new interval is [x₁,b]
4. If f(x₁) < f(x₂), new interval is [a,x₂]
5. Repeat until interval small enough

Maintains golden ratio at each iteration
Requires only one new function evaluation per iteration
```

#### Newton's Method for Optimization

```
Find minimum by solving f'(x) = 0

x_{n+1} = x_n - f'(x_n)/f''(x_n)

For multivariable: x_{n+1} = x_n - H^{-1}∇f
where H is Hessian matrix (second derivatives)

Example: Minimize f(x) = x² + 4x + 3
f'(x) = 2x + 4, f''(x) = 2
x_{n+1} = x_n - (2x_n + 4)/2 = x_n - x_n - 2 = -2

Converges to minimum at x = -2 in one step!

Quadratic convergence but requires second derivatives
```

## Implementation and Software

### Programming Considerations

```
Numerical software should address:
• Convergence criteria
• Error handling
• Computational efficiency
• Numerical stability
• User-friendly interfaces

Example Python implementation of Newton's method:
def newton_method(f, df, x0, tol=1e-6, max_iter=100):
    x = x0
    for i in range(max_iter):
        fx = f(x)
        dfx = df(x) 
        
        if abs(dfx) < tol:  # Avoid division by zero
            print("Derivative too small")
            break
            
        x_new = x - fx/dfx
        
        if abs(x_new - x) < tol:  # Convergence check
            return x_new, i+1
            
        x = x_new
    
    print("Max iterations reached")
    return x, max_iter
```

### Software Libraries

```
Python:
• NumPy: Basic numerical operations
• SciPy: Comprehensive scientific computing  
• SymPy: Symbolic mathematics
• Matplotlib: Plotting

MATLAB: Commercial numerical computing environment
• Built-in functions for most numerical methods
• Excellent visualization
• Simulink for system simulation

Other languages:
• R: Statistical computing
• Julia: High-performance numerical computing
• Fortran: Still used for high-performance computing
• C/C++: For speed-critical applications
```

## Practice Problems

### Root Finding
```
1. Find root of f(x) = x³ - 2x - 5 using:
   a) Bisection method on [2, 3]
   b) Newton's method starting at x₀ = 2

2. Find all roots of x⁴ - 10x² + 9 = 0

3. Use fixed point iteration to solve x = cos(x)
```

### Numerical Integration
```
1. Approximate ∫[0 to π] sin(x) dx using:
   a) Trapezoidal rule with n = 4
   b) Simpson's 1/3 rule with n = 4
   
2. Estimate ∫[0 to 1] e^(-x²) dx using Monte Carlo with 10,000 samples

3. Compare accuracy of different methods for ∫[0 to 1] 1/(1+x²) dx
```

### Linear Systems
```
1. Solve using Gaussian elimination:
   3x + 2y - z = 1
   2x + 3y + z = 11  
   x - y + 2z = 7

2. Use Jacobi iteration for:
   10x + y + z = 12
   x + 10y + z = 12
   x + y + 10z = 12
```

### ODEs
```
1. Solve y' = 2x + y, y(0) = 1 from x = 0 to x = 1 using:
   a) Euler's method with h = 0.2
   b) RK4 method with h = 0.2
   
2. Compare with exact solution

3. Solve system: y₁' = y₂, y₂' = -y₁, y₁(0) = 1, y₂(0) = 0
```

## Answer Key

### Root Finding
```
1a) Bisection on [2,3]: Root ≈ 2.094551
1b) Newton from x₀ = 2: x₁ = 2.1, x₂ ≈ 2.0946, converges quickly

2) x⁴ - 10x² + 9 = (x² - 1)(x² - 9) = (x-1)(x+1)(x-3)(x+3) = 0
   Roots: x = ±1, ±3

3) x = cos(x): Iterates converge to x ≈ 0.739085
```

### Numerical Integration
```
1a) Trapezoidal: ≈ 1.896 (true value = 2)
1b) Simpson's: ≈ 2.005 (much more accurate)

2) Monte Carlo estimate ≈ 0.747 (true value ≈ 0.7468)

3) True value = arctan(1) = π/4 ≈ 0.7854
   Various methods show different accuracy vs. computational cost
```

### Linear Systems
```
1) Solution: x = 2, y = 3, z = 1

2) Jacobi converges to x = y = z = 1
   (System is diagonally dominant, ensuring convergence)
```

### ODEs
```
1) Exact solution: y = 3e^x - 2x - 2

At x = 1:
a) Euler h=0.2: y ≈ 4.67 (exact: 6.15, significant error)
b) RK4 h=0.2: y ≈ 6.14 (very close to exact)

2) Exact: y₁ = cos(x), y₂ = -sin(x)
   RK4 maintains circular motion very well
```

## Quick Reference

### Error Types
- Truncation: from approximating infinite processes
- Round-off: from finite precision arithmetic  
- Condition number: sensitivity to input changes

### Root Finding
- Bisection: Always converges, slow (linear)
- Newton: Fast (quadratic) but may diverge
- Secant: No derivative needed, superlinear convergence

### Integration
- Trapezoidal: O(h²) error, easy to implement
- Simpson's: O(h⁴) error, excellent accuracy
- Gaussian: Optimal points/weights

### Linear Systems
- Direct: Gaussian elimination, LU decomposition
- Iterative: Jacobi, Gauss-Seidel (need diagonal dominance)

### ODEs
- Euler: Simple, O(h) accuracy
- RK4: Best single-step method, O(h⁴) accuracy
- Multi-step: More efficient but need starting values

## See Also

- **[BasicMath](../basic-math)** - Arithmetic foundations and number systems
- **[Algebra](../algebra)** - Polynomial equations and system solving
- **[Calculus](../calculus)** - Foundation for numerical differentiation and integration - required
- **[Matrices](../matrices)** - Linear algebra methods and systems - essential
- **[Statistics](../statistics)** - Error analysis and data fitting
- **[Differential Equations](../differential-equations)** - Analytical methods for comparison
- **[Complex Numbers](../complex-numbers)** - For roots of polynomials and advanced applications
- **[Mathematical Modeling](../mathematical-modeling)** - Computational solutions to real-world models