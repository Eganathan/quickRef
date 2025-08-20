---
title: "Differential Equations"
date: 2023-01-01T00:00:00Z
draft: false
description: "Comprehensive guide to ordinary and partial differential equations, solution methods, and applications in science and engineering."
categories: ["math"]
tags: ["differential-equations", "odes", "pdes", "modeling", "systems", "laplace-transforms", "series-solutions"]
---

## Prerequisites

**Required:**
- **[Calculus](../calculus)** - All topics including derivatives, integrals, and multivariable calculus basics
- **[Algebra](../algebra)** - Strong foundation in algebraic manipulation

**Helpful:**
- **[Matrices](../matrices)** - For systems of differential equations
- **[Complex Numbers](../complex-numbers)** - For advanced solution techniques

## Overview

Differential equations are mathematical equations that relate functions with their derivatives. They model how quantities change over time or space and are fundamental to describing natural phenomena, from population growth to heat transfer, from mechanical vibrations to electrical circuits.

This comprehensive guide covers ordinary differential equations (ODEs), systems of differential equations, solution methods, and introduces partial differential equations (PDEs) with applications throughout science and engineering.

## Introduction to Differential Equations

### What is a Differential Equation?
A differential equation is an equation involving an unknown function and its derivatives.

```
Examples:
dy/dx = 2x                    (first-order ODE)
d²y/dx² + y = 0              (second-order ODE)
∂u/∂t = k ∂²u/∂x²           (partial differential equation)

Components:
• Unknown function: y(x), u(x,t), etc.
• Independent variable(s): x, t, etc.
• Derivatives: dy/dx, d²y/dx², ∂u/∂t, etc.
• Given functions: coefficients, source terms
```

### Classification

#### By Type
```
Ordinary Differential Equation (ODE):
• One independent variable
• Example: dy/dx = 3x + 2y

Partial Differential Equation (PDE):  
• Multiple independent variables
• Example: ∂u/∂t = ∂²u/∂x²
```

#### By Order
```
Order = highest derivative in the equation

First-order: dy/dx = f(x, y)
Second-order: d²y/dx² = f(x, y, dy/dx)
nth-order: d^n y/dx^n = f(x, y, dy/dx, ..., d^(n-1)y/dx^(n-1))
```

#### By Linearity
```
Linear: coefficients depend only on independent variable
dy/dx + p(x)y = q(x)

Nonlinear: coefficients depend on y or its derivatives
dy/dx = y²
d²y/dx² + sin(y) = 0
```

### Solutions
```
General Solution: contains arbitrary constants
Example: y = Ce^x is general solution to dy/dx = y

Particular Solution: specific values for constants
Example: y = 3e^x satisfies dy/dx = y and y(0) = 3

Initial Value Problem (IVP): DE + initial conditions
dy/dx = 2x, y(0) = 1

Boundary Value Problem (BVP): DE + boundary conditions
d²y/dx² + y = 0, y(0) = 0, y(π) = 0
```

## First-Order ODEs

### Separable Equations
Form: dy/dx = f(x)g(y)

```
Method: Separate variables and integrate
dy/g(y) = f(x)dx
∫ dy/g(y) = ∫ f(x)dx

Example: dy/dx = xy
dy/y = x dx
∫ dy/y = ∫ x dx
ln|y| = x²/2 + C
y = Ae^(x²/2) where A = ±e^C

Example: dy/dx = (1 + y²)/(1 + x²)
dy/(1 + y²) = dx/(1 + x²)
∫ dy/(1 + y²) = ∫ dx/(1 + x²)
arctan(y) = arctan(x) + C
y = tan(arctan(x) + C)
```

### Linear First-Order ODEs
Form: dy/dx + P(x)y = Q(x)

```
Method: Integrating factor μ(x) = e^∫P(x)dx

Steps:
1. Find integrating factor μ(x) = e^∫P(x)dx
2. Multiply equation by μ(x): μ(dy/dx) + μP(x)y = μQ(x)
3. Left side is d/dx[μ(x)y]
4. Integrate: μ(x)y = ∫μ(x)Q(x)dx
5. Solve for y

Example: dy/dx + 2y = e^(-x)
P(x) = 2, Q(x) = e^(-x)
μ(x) = e^∫2dx = e^(2x)

Multiply by μ(x): e^(2x)dy/dx + 2e^(2x)y = e^(2x)e^(-x) = e^x
d/dx[e^(2x)y] = e^x
e^(2x)y = ∫e^x dx = e^x + C
y = e^(-x) + Ce^(-2x)
```

### Exact Equations
Form: M(x,y)dx + N(x,y)dy = 0 where ∂M/∂y = ∂N/∂x

```
Method: Find function F(x,y) such that ∂F/∂x = M and ∂F/∂y = N

Example: (2xy + 3)dx + (x² + 4y)dy = 0
Check exactness: ∂M/∂y = 2x, ∂N/∂x = 2x ✓

Find F(x,y):
∂F/∂x = 2xy + 3, so F = x²y + 3x + g(y)
∂F/∂y = x² + g'(y) = x² + 4y
Therefore g'(y) = 4y, so g(y) = 2y²

Solution: F(x,y) = x²y + 3x + 2y² = C
```

### Substitution Methods

#### Homogeneous Equations
Form: dy/dx = f(y/x)

```
Substitution: v = y/x, so y = vx and dy/dx = v + x(dv/dx)

Example: dy/dx = (y + x)/(y - x) = (y/x + 1)/(y/x - 1)
Let v = y/x: v + x(dv/dx) = (v + 1)/(v - 1)
x(dv/dx) = (v + 1)/(v - 1) - v = 2/(v - 1)
(v - 1)dv = 2dx/x
∫(v - 1)dv = 2∫dx/x
v²/2 - v = 2ln|x| + C
Substitute back: y²/(2x²) - y/x = 2ln|x| + C
```

### Applications of First-Order ODEs

#### Population Growth
```
Exponential Growth: dP/dt = kP
Solution: P(t) = P₀e^(kt)

Logistic Growth: dP/dt = kP(1 - P/K)
where K is carrying capacity
Solution: P(t) = K/(1 + Ae^(-kt))
```

#### Newton's Law of Cooling
```
dT/dt = -k(T - T_ambient)
Solution: T(t) = T_ambient + (T₀ - T_ambient)e^(-kt)
```

#### RC Circuits
```
Kirchhoff's Law: R(dI/dt) + I/C = V₀/R
where I is current, V₀ is applied voltage
```

## Second-Order Linear ODEs

### General Form
```
a(x)d²y/dx² + b(x)dy/dx + c(x)y = f(x)

Homogeneous: f(x) = 0
Non-homogeneous: f(x) ≠ 0

Solution structure: y = y_h + y_p
• y_h: homogeneous solution (general solution to homogeneous equation)
• y_p: particular solution (any solution to non-homogeneous equation)
```

### Constant Coefficient Homogeneous Equations
Form: ay'' + by' + cy = 0

```
Method: Assume solution y = e^(rx)
Characteristic equation: ar² + br + c = 0

Case 1: Two distinct real roots r₁, r₂
y = C₁e^(r₁x) + C₂e^(r₂x)

Case 2: One repeated real root r
y = (C₁ + C₂x)e^(rx)

Case 3: Complex roots r = α ± βi
y = e^(αx)(C₁cos(βx) + C₂sin(βx))

Example: y'' - 3y' + 2y = 0
Characteristic equation: r² - 3r + 2 = 0
(r - 1)(r - 2) = 0, so r₁ = 1, r₂ = 2
General solution: y = C₁e^x + C₂e^(2x)

Example: y'' + 4y' + 4y = 0
Characteristic equation: r² + 4r + 4 = 0
(r + 2)² = 0, so r = -2 (repeated)
General solution: y = (C₁ + C₂x)e^(-2x)

Example: y'' + y = 0
Characteristic equation: r² + 1 = 0
r = ±i = 0 ± 1·i, so α = 0, β = 1
General solution: y = C₁cos(x) + C₂sin(x)
```

### Method of Undetermined Coefficients
For non-homogeneous equations ay'' + by' + cy = f(x) where f(x) has specific forms.

```
Trial solutions based on f(x):

f(x) = polynomial → try polynomial
f(x) = e^(kx) → try Ae^(kx)
f(x) = sin(kx) or cos(kx) → try A sin(kx) + B cos(kx)
f(x) = x^n e^(kx) → try polynomial × e^(kx)

If trial solution matches homogeneous solution, multiply by x.

Example: y'' - 3y' + 2y = e^x
Homogeneous solution: y_h = C₁e^x + C₂e^(2x)
Since e^x appears in y_h, try y_p = Axe^x

y_p' = Ae^x + Axe^x
y_p'' = 2Ae^x + Axe^x

Substitute: (2A + Ax)e^x - 3(A + Ax)e^x + 2Axe^x = e^x
Simplify: (2A - 3A)e^x = e^x
-A = 1, so A = -1

Particular solution: y_p = -xe^x
General solution: y = C₁e^x + C₂e^(2x) - xe^x
```

### Variation of Parameters
General method for finding particular solutions when coefficients are not constant or f(x) doesn't fit standard forms.

```
For y'' + P(x)y' + Q(x)y = f(x):

If y_h = C₁y₁(x) + C₂y₂(x), then:
y_p = u₁(x)y₁(x) + u₂(x)y₂(x)

where u₁' and u₂' satisfy:
y₁u₁' + y₂u₂' = 0
y₁'u₁' + y₂'u₂' = f(x)

Solve using Cramer's rule:
u₁' = -y₂f(x)/W, u₂' = y₁f(x)/W
where W = y₁y₂' - y₁'y₂ (Wronskian)
```

### Applications of Second-Order ODEs

#### Simple Harmonic Motion
```
mx'' + kx = 0 (mass-spring system)
Solution: x(t) = A cos(ωt) + B sin(ωt) where ω = √(k/m)

Alternative form: x(t) = C cos(ωt + φ)
where C = amplitude, φ = phase angle
```

#### Damped Harmonic Motion
```
mx'' + cx' + kx = 0

Cases:
• Overdamped: c² > 4mk (two real roots)
• Critically damped: c² = 4mk (repeated root)
• Underdamped: c² < 4mk (complex roots)

Underdamped solution: x(t) = e^(-ct/2m)[A cos(ωt) + B sin(ωt)]
where ω = √(4mk - c²)/(2m)
```

#### RLC Circuits
```
LQ'' + RQ' + Q/C = E(t)
where Q is charge, L is inductance, R is resistance, C is capacitance
```

## Systems of Differential Equations

### Linear Systems
```
Matrix form: x' = Ax + f(t)
where x is vector of unknowns, A is coefficient matrix

Example:
x₁' = 2x₁ - x₂
x₂' = x₁ + 2x₂

Matrix form: [x₁'] = [2  -1] [x₁]
             [x₂']   [1   2] [x₂]
```

### Solution by Eigenvalues
For homogeneous system x' = Ax:

```
Steps:
1. Find eigenvalues λ of matrix A
2. Find corresponding eigenvectors v
3. Solutions are x = ve^(λt)

Example: A = [1   2]
             [2  -2]

Characteristic equation: det(A - λI) = (1-λ)(-2-λ) - 4 = λ² + λ - 6 = 0
(λ + 3)(λ - 2) = 0, so λ₁ = -3, λ₂ = 2

For λ₁ = -3: (A + 3I)v = 0
[4  2] [v₁] = [0]  → v₁ = [1]
[2  1] [v₂]   [0]      [-2]

For λ₂ = 2: (A - 2I)v = 0  
[-1  2] [v₁] = [0]  → v₂ = [2]
[2  -4] [v₂]   [0]      [1]

General solution: x = C₁[1]e^(-3t) + C₂[2]e^(2t)
                      [-2]         [1]
```

### Phase Portraits
Graphical representation of solution trajectories in the phase plane.

```
Critical points: equilibrium solutions where x' = 0

Classification by eigenvalues:
• Both λ < 0: stable node (sink)
• Both λ > 0: unstable node (source)
• λ₁ < 0 < λ₂: saddle point
• Complex λ = α ± βi:
  - α < 0: stable spiral
  - α > 0: unstable spiral
  - α = 0: center (neutral)
```

## Laplace Transforms

### Definition
```
L[f(t)] = F(s) = ∫₀^∞ e^(-st)f(t) dt

Common transforms:
L[1] = 1/s
L[t] = 1/s²
L[t^n] = n!/s^(n+1)
L[e^(at)] = 1/(s-a)
L[sin(at)] = a/(s² + a²)
L[cos(at)] = s/(s² + a²)
```

### Properties
```
Linearity: L[af(t) + bg(t)] = aL[f(t)] + bL[g(t)]
First derivative: L[f'(t)] = sL[f(t)] - f(0)
Second derivative: L[f''(t)] = s²L[f(t)] - sf(0) - f'(0)
Translation: L[e^(at)f(t)] = F(s-a)
Convolution: L[f * g] = F(s)G(s)
```

### Solving ODEs with Laplace Transforms
```
Example: y'' + 4y = 0, y(0) = 1, y'(0) = 0

Take Laplace transform:
L[y''] + 4L[y] = 0
s²Y(s) - sy(0) - y'(0) + 4Y(s) = 0
s²Y(s) - s + 4Y(s) = 0
Y(s)(s² + 4) = s
Y(s) = s/(s² + 4)

Inverse transform: y(t) = cos(2t)
```

## Introduction to PDEs

### Classification
```
Order: highest partial derivative

Linear second-order PDE:
Auₓₓ + Buₓᵧ + Cuᵧᵧ + Duₓ + Euᵧ + Fu = G

Classification by discriminant Δ = B² - 4AC:
• Δ < 0: Elliptic (e.g., Laplace equation)
• Δ = 0: Parabolic (e.g., heat equation)  
• Δ > 0: Hyperbolic (e.g., wave equation)
```

### Important PDEs

#### Heat Equation (Parabolic)
```
∂u/∂t = k ∂²u/∂x²

Physical interpretation: temperature distribution u(x,t)
k = thermal diffusivity

Solution by separation of variables:
u(x,t) = X(x)T(t)
Leads to: X''/X = T'/(kT) = -λ (constant)
```

#### Wave Equation (Hyperbolic)
```
∂²u/∂t² = c² ∂²u/∂x²

Physical interpretation: vibrating string u(x,t)
c = wave speed

General solution: u(x,t) = f(x - ct) + g(x + ct)
(d'Alembert's formula)
```

#### Laplace Equation (Elliptic)
```
∇²u = ∂²u/∂x² + ∂²u/∂y² = 0

Physical interpretation: steady-state heat distribution
Solutions called harmonic functions

In polar coordinates: ∇²u = uᵣᵣ + (1/r)uᵣ + (1/r²)u_θθ = 0
```

### Separation of Variables
Standard method for solving linear PDEs.

```
Example: Heat equation uₜ = kuₓₓ on [0,L] with u(0,t) = u(L,t) = 0

Assume u(x,t) = X(x)T(t):
X(x)T'(t) = kX''(x)T(t)
T'/T = kX''/X = -λ (constant)

This gives:
T' + λkT = 0  →  T(t) = e^(-λkt)
X'' + (λ/k)X = 0

For boundary conditions X(0) = X(L) = 0:
λₙ = (nπ/L)², Xₙ(x) = sin(nπx/L), n = 1,2,3,...

General solution: u(x,t) = Σ Aₙ sin(nπx/L) e^(-n²π²kt/L²)
where Aₙ determined by initial conditions
```

## Numerical Methods for ODEs

### Euler's Method
Simplest numerical method for solving y' = f(x,y), y(x₀) = y₀.

```
Algorithm:
xₙ₊₁ = xₙ + h
yₙ₊₁ = yₙ + hf(xₙ, yₙ)

Example: y' = x + y, y(0) = 1, find y(0.2) with h = 0.1

x₀ = 0, y₀ = 1
y₁ = y₀ + h(x₀ + y₀) = 1 + 0.1(0 + 1) = 1.1

x₁ = 0.1, y₁ = 1.1  
y₂ = y₁ + h(x₁ + y₁) = 1.1 + 0.1(0.1 + 1.1) = 1.22

Therefore y(0.2) ≈ 1.22
```

### Runge-Kutta Methods
More accurate than Euler's method.

```
Fourth-order Runge-Kutta (RK4):
k₁ = hf(xₙ, yₙ)
k₂ = hf(xₙ + h/2, yₙ + k₁/2)
k₃ = hf(xₙ + h/2, yₙ + k₂/2)  
k₄ = hf(xₙ + h, yₙ + k₃)

yₙ₊₁ = yₙ + (k₁ + 2k₂ + 2k₃ + k₄)/6
```

## Practice Problems

### First-Order ODEs
```
1. Solve: dy/dx = x/y
2. Solve: dy/dx + 3y = e^(-2x)
3. Solve: (2x + y)dx + (x + 2y)dy = 0
4. Find the solution to: dy/dt = 2y, y(0) = 3
```

### Second-Order ODEs  
```
1. Solve: y'' - 4y' + 3y = 0
2. Solve: y'' + 4y = sin(x)
3. Solve: y'' + 2y' + y = 0, y(0) = 1, y'(0) = 0
4. Find general solution: y'' - 6y' + 9y = e^(3x)
```

### Applications
```
1. A tank contains 100 gallons of brine with 50 pounds of salt. 
   Water flows in at 5 gal/min and brine flows out at 5 gal/min.
   Find the amount of salt at time t.

2. A mass of 2 kg is attached to a spring with k = 32 N/m.
   Find the equation of motion and period of oscillation.

3. An RC circuit has R = 100Ω, C = 0.01F, and voltage V = 12V.
   Find the current as a function of time if I(0) = 0.
```

### Systems
```
1. Solve the system: x' = x + 2y, y' = 2x + y

2. Find the critical points and classify them:
   x' = x - y, y' = x + y
```

## Answer Key

### First-Order ODEs
```
1. x dx = y dy → x²/2 = y²/2 + C → x² - y² = C
2. μ(x) = e^(3x), y = e^(-2x)/5 + Ce^(-3x)
3. Check exactness: ∂M/∂y = 1 = ∂N/∂x ✓
   Solution: x² + xy + y² = C
4. y = 3e^(2t)
```

### Second-Order ODEs
```
1. r² - 4r + 3 = 0 → r = 1, 3
   y = C₁e^x + C₂e^(3x)

2. y_h = C₁cos(2x) + C₂sin(2x)
   Try y_p = A sin(x) → A = 1/3
   y = C₁cos(2x) + C₂sin(2x) + (1/3)sin(x)

3. r² + 2r + 1 = 0 → r = -1 (repeated)
   y = (C₁ + C₂x)e^(-x)
   Apply ICs: y = (1 + 2x)e^(-x)

4. Homogeneous: y_h = (C₁ + C₂x)e^(3x)
   Since e^(3x) in y_h, try y_p = Ax²e^(3x)
   y = (C₁ + C₂x + x²/2)e^(3x)
```

### Applications
```
1. dS/dt = -S/20, S(0) = 50
   S(t) = 50e^(-t/20) pounds

2. 2x'' + 32x = 0 → x'' + 16x = 0
   Period T = 2π/4 = π/2 seconds

3. RC dI/dt + I = 0, I(0) = 0.12A
   I(t) = 0.12e^(-t) amperes
```

### Systems
```
1. Eigenvalues: λ = 3, -1
   x = C₁[1]e^(3t) + C₂[ 1]e^(-t)
         [1]        [-1]

2. Critical point: (0,0)
   Eigenvalues: λ = 1 ± i
   Classification: unstable spiral
```

## Quick Reference

### Solution Methods
- **Separable**: dy/g(y) = f(x)dx
- **Linear first-order**: Use integrating factor μ = e^∫P dx
- **Second-order constant coefficient**: Characteristic equation
- **Undetermined coefficients**: Match form of forcing function
- **Variation of parameters**: Use Wronskian

### Laplace Transforms
- L[f'] = sF(s) - f(0)
- L[f''] = s²F(s) - sf(0) - f'(0)
- L[e^(at)f(t)] = F(s-a)

### Common Solutions
- **Exponential growth**: P = P₀e^(kt)
- **Simple harmonic**: x = A cos(ωt) + B sin(ωt)
- **Damped oscillation**: x = e^(-ct)[A cos(ωt) + B sin(ωt)]

## See Also

- **[Algebra](../algebra)** - Algebraic manipulation for solving DEs
- **[Calculus](../calculus)** - Foundation for differential equations - required
- **[Matrices](../matrices)** - For systems of differential equations - essential
- **[Complex Numbers](../complex-numbers)** - For advanced solution techniques
- **[Numerical Methods](../numerical-methods)** - Computational solutions when analytical methods fail
- **[Mathematical Modeling](../mathematical-modeling)** - Real-world applications of differential equations