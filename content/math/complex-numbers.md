---
title: "Complex Numbers"
date: 2023-01-01T00:00:00Z
draft: false
description: "Comprehensive guide to complex numbers covering fundamentals, operations, polar form, roots, and applications in engineering and mathematics."
categories: ["math"]
tags: ["complex-numbers", "imaginary-numbers", "polar-form", "euler-formula", "roots", "complex-analysis", "engineering"]
---

## Prerequisites

**Required:**
- **[Algebra](../algebra)** - Strong foundation in algebraic operations, quadratic equations
- **[Geometry](../geometry)** - Basic coordinate geometry and trigonometry
- **[Pre-Calculus](../pre-calculus)** - Trigonometry, especially unit circle and angle relationships

**Helpful:**
- **[Calculus](../calculus)** - For advanced applications and complex analysis

## Overview

Complex numbers extend the real number system to include solutions to equations like x² + 1 = 0, which have no real solutions. They form the foundation for advanced mathematics, engineering applications, signal processing, quantum mechanics, and many areas of physics and applied mathematics.

This comprehensive guide covers complex number fundamentals, arithmetic operations, geometric interpretation, polar and exponential forms, roots and powers, and practical applications in science and engineering.

## Introduction to Complex Numbers

### Definition and Basic Form

A **complex number** is a number of the form a + bi, where:
```
z = a + bi
• a = real part, written Re(z)
• b = imaginary part coefficient, written Im(z)  
• i = imaginary unit, where i² = -1

Examples:
3 + 4i: Real part = 3, Imaginary part = 4
-2 + 5i: Real part = -2, Imaginary part = 5
7: Real part = 7, Imaginary part = 0 (pure real number)
-3i: Real part = 0, Imaginary part = -3 (pure imaginary number)
```

### The Imaginary Unit

```
Definition: i = √(-1)
Therefore: i² = -1

Powers of i follow a cycle:
i⁰ = 1
i¹ = i
i² = -1
i³ = i² · i = -1 · i = -i
i⁴ = i² · i² = (-1)(-1) = 1
i⁵ = i⁴ · i = 1 · i = i

Pattern repeats every 4 powers: iⁿ = i^(n mod 4)

Examples:
i¹⁷ = i¹ = i (since 17 mod 4 = 1)
i²⁶ = i² = -1 (since 26 mod 4 = 2)
i¹⁰⁰ = i⁰ = 1 (since 100 mod 4 = 0)
```

### Complex Number Equality

```
Two complex numbers are equal if and only if their real and imaginary parts are equal:

If z₁ = a + bi and z₂ = c + di, then:
z₁ = z₂ if and only if a = c and b = d

Example: Find x and y if (2x + 3) + (y - 1)i = 7 - 4i
Real parts: 2x + 3 = 7 → x = 2
Imaginary parts: y - 1 = -4 → y = -3
```

## Complex Number Operations

### Addition and Subtraction

```
Add/subtract corresponding real and imaginary parts:
(a + bi) ± (c + di) = (a ± c) + (b ± d)i

Examples:
(3 + 2i) + (5 - 4i) = (3 + 5) + (2 - 4)i = 8 - 2i
(7 + 6i) - (2 + 3i) = (7 - 2) + (6 - 3)i = 5 + 3i
(4 - i) + (-1 + 7i) = 3 + 6i

Properties:
• Commutative: z₁ + z₂ = z₂ + z₁
• Associative: (z₁ + z₂) + z₃ = z₁ + (z₂ + z₃)
• Identity: z + 0 = z
• Inverse: z + (-z) = 0
```

### Multiplication

```
Use distributive property and i² = -1:
(a + bi)(c + di) = ac + adi + bci + bdi²
                  = ac + adi + bci - bd
                  = (ac - bd) + (ad + bc)i

Examples:
(2 + 3i)(4 - i) = 2(4) + 2(-i) + 3i(4) + 3i(-i)
                 = 8 - 2i + 12i - 3i²
                 = 8 - 2i + 12i + 3
                 = 11 + 10i

(3 + 2i)² = (3 + 2i)(3 + 2i)
          = 9 + 6i + 6i + 4i²
          = 9 + 12i - 4
          = 5 + 12i

Special case - multiplying by i:
i(a + bi) = ai + bi² = ai - b = -b + ai
```

### Division and Complex Conjugates

#### Complex Conjugate
```
The complex conjugate of z = a + bi is z̄ = a - bi

Properties of conjugates:
z · z̄ = (a + bi)(a - bi) = a² - (bi)² = a² + b² (always real and positive)
z + z̄ = 2a = 2 Re(z)
z - z̄ = 2bi = 2i Im(z)
```

#### Division
```
To divide complex numbers, multiply by conjugate of denominator:

(a + bi)/(c + di) = (a + bi)(c - di)/((c + di)(c - di))
                   = (ac + bd + (bc - ad)i)/(c² + d²)

Example: (3 + 2i)/(1 + 4i)
= (3 + 2i)(1 - 4i)/((1 + 4i)(1 - 4i))
= (3 - 12i + 2i - 8i²)/(1 + 16)
= (3 - 10i + 8)/(17)
= (11 - 10i)/17
= 11/17 - (10/17)i

Reciprocal: 1/(a + bi) = (a - bi)/(a² + b²)
```

## Geometric Representation

### Complex Plane (Argand Diagram)

```
Complex numbers can be plotted on a coordinate plane:
• x-axis: real axis
• y-axis: imaginary axis
• Point (a, b) represents complex number a + bi

Examples:
3 + 4i → point (3, 4)
-2 - 3i → point (-2, -3)
5 → point (5, 0) on real axis
-2i → point (0, -2) on imaginary axis
```

### Modulus (Absolute Value)

```
The modulus |z| is the distance from origin to point z:
|a + bi| = √(a² + b²)

Examples:
|3 + 4i| = √(3² + 4²) = √(9 + 16) = √25 = 5
|-1 + 3i| = √((-1)² + 3²) = √(1 + 9) = √10
|5| = √(5² + 0²) = 5
|-2i| = √(0² + (-2)²) = 2

Properties:
|z₁ · z₂| = |z₁| · |z₂|
|z₁/z₂| = |z₁|/|z₂|
|z̄| = |z|
|z|² = z · z̄
```

### Argument (Angle)

```
The argument arg(z) is the angle from positive real axis to z:
arg(z) = arctan(b/a) (with appropriate quadrant adjustment)

For z = a + bi:
• Quadrant I (a > 0, b > 0): θ = arctan(b/a)
• Quadrant II (a < 0, b > 0): θ = π + arctan(b/a)
• Quadrant III (a < 0, b < 0): θ = π + arctan(b/a)
• Quadrant IV (a > 0, b < 0): θ = 2π + arctan(b/a)

Examples:
arg(1 + i) = arctan(1/1) = π/4 = 45°
arg(-1 + i) = π - π/4 = 3π/4 = 135°
arg(-2 - 2i) = π + arctan(-2/-2) = π + π/4 = 5π/4 = 225°

Note: arg(z) is typically given in (-π, π] (principal argument)
```

## Polar Form

### Conversion Between Forms

```
Rectangular form: z = a + bi
Polar form: z = r(cos θ + i sin θ) = r cis θ

Where:
• r = |z| = √(a² + b²) (modulus)
• θ = arg(z) (argument)

Conversion formulas:
Rectangular to Polar:
r = √(a² + b²)
θ = arctan(b/a) (with quadrant adjustment)

Polar to Rectangular:
a = r cos θ
b = r sin θ

Example: Convert 3 + 4i to polar form
r = √(3² + 4²) = 5
θ = arctan(4/3) ≈ 0.927 radians ≈ 53.13°
Polar form: 5(cos(53.13°) + i sin(53.13°))

Example: Convert 2(cos(π/3) + i sin(π/3)) to rectangular form
a = 2 cos(π/3) = 2 · (1/2) = 1
b = 2 sin(π/3) = 2 · (√3/2) = √3
Rectangular form: 1 + √3i
```

### Euler's Formula

```
Euler's remarkable formula: e^(iθ) = cos θ + i sin θ

This gives the exponential form of complex numbers:
z = re^(iθ)

Special cases:
e^(iπ) = cos π + i sin π = -1 + 0i = -1
e^(iπ/2) = cos(π/2) + i sin(π/2) = 0 + i = i
e^(i·2π) = cos(2π) + i sin(2π) = 1 + 0i = 1

Euler's identity: e^(iπ) + 1 = 0
(connects five fundamental constants: e, i, π, 1, 0)
```

## Operations in Polar Form

### Multiplication in Polar Form

```
If z₁ = r₁e^(iθ₁) and z₂ = r₂e^(iθ₂), then:
z₁ · z₂ = r₁r₂e^(i(θ₁ + θ₂))

In cis notation:
z₁ · z₂ = r₁r₂ cis(θ₁ + θ₂)

Rule: Multiply moduli, add arguments

Example: 
z₁ = 2 cis(π/4), z₂ = 3 cis(π/6)
z₁ · z₂ = (2)(3) cis(π/4 + π/6) = 6 cis(5π/12)

Verification in rectangular form:
z₁ = 2(cos(π/4) + i sin(π/4)) = 2(√2/2 + i√2/2) = √2 + i√2
z₂ = 3(cos(π/6) + i sin(π/6)) = 3(√3/2 + i/2) = (3√3/2) + (3/2)i
Product calculation would be more complex!
```

### Division in Polar Form

```
z₁/z₂ = (r₁/r₂)e^(i(θ₁ - θ₂)) = (r₁/r₂) cis(θ₁ - θ₂)

Rule: Divide moduli, subtract arguments

Example:
z₁ = 12 cis(2π/3), z₂ = 4 cis(π/4)
z₁/z₂ = (12/4) cis(2π/3 - π/4) = 3 cis(5π/12)
```

### Powers (De Moivre's Theorem)

```
De Moivre's Theorem: [r cis θ]ⁿ = rⁿ cis(nθ)

Or in exponential form: [re^(iθ)]ⁿ = rⁿe^(inθ)

Examples:
(2 cis(π/6))³ = 2³ cis(3 · π/6) = 8 cis(π/2) = 8i

(1 + i)⁴: First convert to polar form
r = √(1² + 1²) = √2, θ = π/4
1 + i = √2 cis(π/4)
(1 + i)⁴ = (√2)⁴ cis(4 · π/4) = 4 cis(π) = 4(-1) = -4

Applications:
• Computing high powers efficiently
• Finding trigonometric identities
• Solving polynomial equations
```

## Roots of Complex Numbers

### nth Roots

```
To find all nth roots of z = r cis θ:

z^(1/n) = r^(1/n) cis((θ + 2πk)/n)

where k = 0, 1, 2, ..., n-1

This gives n distinct roots equally spaced around a circle.

Example: Find all cube roots of 8i
First: 8i = 8 cis(π/2)
Cube roots: 8^(1/3) cis((π/2 + 2πk)/3) for k = 0, 1, 2

k = 0: 2 cis(π/6) = 2(√3/2 + i/2) = √3 + i
k = 1: 2 cis(π/2 + 2π/3) = 2 cis(7π/6) = 2(-√3/2 - i/2) = -√3 - i
k = 2: 2 cis(π/2 + 4π/3) = 2 cis(11π/6) = 2(√3/2 - i/2) = √3 - i

Verification: Each root cubed should equal 8i
```

### Roots of Unity

```
nth roots of unity are solutions to zⁿ = 1:
z = cis(2πk/n) for k = 0, 1, 2, ..., n-1

These form regular n-gon vertices on unit circle.

Cube roots of unity (n = 3):
1, cis(2π/3) = -1/2 + (√3/2)i, cis(4π/3) = -1/2 - (√3/2)i

Fourth roots of unity (n = 4):  
1, i, -1, -i

Properties:
• Product of all nth roots of unity = (-1)^(n-1)
• Sum of all nth roots of unity = 0 (for n > 1)
• If ω is primitive nth root of unity, all roots are: 1, ω, ω², ..., ωⁿ⁻¹
```

## Solving Equations

### Quadratic Equations

```
For ax² + bx + c = 0 with discriminant D = b² - 4ac < 0:

x = (-b ± √D)/2a = (-b ± i√|D|)/2a

Example: x² + 2x + 5 = 0
D = 4 - 20 = -16
x = (-2 ± √(-16))/2 = (-2 ± 4i)/2 = -1 ± 2i

Verification:
(-1 + 2i)² + 2(-1 + 2i) + 5
= (1 - 4i - 4) + (-2 + 4i) + 5
= -3 - 4i - 2 + 4i + 5 = 0 ✓
```

### Higher Degree Polynomials

```
Fundamental Theorem of Algebra:
Every polynomial of degree n has exactly n complex roots (counting multiplicity)

Example: x⁴ - 1 = 0
This factors as (x² - 1)(x² + 1) = (x - 1)(x + 1)(x² + 1) = 0
Roots: x = 1, -1, i, -i (the 4th roots of unity)

Example: x³ - 8 = 0 (cube roots of 8)
8 = 8 cis(0°)
Roots: 2 cis(0°) = 2, 2 cis(120°) = -1 + √3i, 2 cis(240°) = -1 - √3i
```

## Applications

### Electrical Engineering

```
AC Circuit Analysis:
Impedance Z = R + jωL - j/(ωC)
where j = i (engineers use j to avoid confusion with current I)

• R = resistance (real part)
• ωL = inductive reactance (imaginary part) 
• -1/(ωC) = capacitive reactance (negative imaginary part)

Ohm's Law for AC: V = IZ
Power calculations: P = |I|² Re(Z)

Example: Find current in circuit with V = 120∠30° V, Z = 10 + 5j Ω
I = V/Z = (120∠30°)/(10 + 5j)
Converting to polar: |Z| = √(10² + 5²) = 5√5, arg(Z) = arctan(5/10) ≈ 26.57°
I = 120∠30°/(5√5∠26.57°) = (120/(5√5))∠(30° - 26.57°) ≈ 10.73∠3.43° A
```

### Signal Processing

```
Fourier Transform represents signals as sums of complex exponentials:
F(ω) = ∫ f(t)e^(-iωt) dt

Complex exponentials: e^(iωt) = cos(ωt) + i sin(ωt)
• Real part: cosine component
• Imaginary part: sine component
• Magnitude |F(ω)|: frequency spectrum
• Phase arg(F(ω)): phase spectrum

Digital Signal Processing uses discrete complex exponentials:
X[k] = Σ x[n]e^(-i2πkn/N) (Discrete Fourier Transform)
```

### Control Systems

```
Transfer Functions: H(s) where s = σ + iω is complex frequency
• σ: real part (growth/decay)
• ω: imaginary part (oscillation frequency)

Stability Analysis:
• Poles (zeros of denominator) in left half-plane → stable
• Poles in right half-plane → unstable
• Poles on imaginary axis → marginally stable

Root Locus: Plot of pole locations as parameters vary
Frequency Response: H(iω) evaluated along imaginary axis
```

### Quantum Mechanics

```
Wave Functions: ψ(x,t) are complex-valued
Probability density: |ψ(x,t)|² (always real and positive)

Schrödinger Equation: iℏ ∂ψ/∂t = Ĥψ
Complex nature allows for:
• Superposition of states
• Phase relationships
• Interference effects
• Uncertainty principle

Example: Plane wave ψ = Ae^(i(kx - ωt))
Represents particle with momentum p = ℏk and energy E = ℏω
```

### Fluid Dynamics

```
Complex Potential: F(z) = φ + iψ
where φ = velocity potential, ψ = stream function

Flow around cylinder, airfoils, etc. can be analyzed using:
• Conformal mapping
• Complex integration
• Residue theory

Example: Flow around circular cylinder
F(z) = V(z + R²/z) where V = free stream velocity, R = cylinder radius
```

## Advanced Topics

### Complex Analysis Introduction

```
Functions of complex variables: f(z) = u(x,y) + iv(x,y)
where z = x + iy, u and v are real functions

Analytic functions satisfy Cauchy-Riemann equations:
∂u/∂x = ∂v/∂y and ∂u/∂y = -∂v/∂x

Examples of analytic functions:
• Polynomials: f(z) = aₙzⁿ + ... + a₁z + a₀
• Exponential: f(z) = e^z
• Trigonometric: sin(z), cos(z)
• Logarithmic: ln(z) (with branch cuts)
```

### Complex Integration

```
Line integrals of complex functions:
∫_C f(z) dz where C is a curve in complex plane

Cauchy's Theorem: ∫_C f(z) dz = 0 for analytic f and closed curve C

Cauchy's Integral Formula: f(a) = (1/2πi) ∫_C f(z)/(z-a) dz

Residue Theorem: ∫_C f(z) dz = 2πi Σ Res(f, zₖ)
where zₖ are singular points inside C

Applications:
• Evaluating real integrals
• Solving differential equations
• Transform theory
```

### Series Representations

```
Power Series: f(z) = Σ aₙ(z - z₀)ⁿ
• Radius of convergence R
• Converges for |z - z₀| < R

Taylor Series: f(z) = Σ f⁽ⁿ⁾(z₀)(z - z₀)ⁿ/n!

Laurent Series: f(z) = Σ aₙ(z - z₀)ⁿ (n from -∞ to ∞)
• For functions with singularities
• Negative powers allowed

Example: e^z = Σ zⁿ/n! (converges everywhere)
sin(z) = Σ (-1)ⁿz^(2n+1)/(2n+1)! (converges everywhere)
```

## Computational Aspects

### Programming Complex Numbers

```
Most programming languages support complex numbers:

Python:
z = 3 + 4j  # Note: j instead of i
print(z.real, z.imag)  # 3.0 4.0
print(abs(z))  # 5.0
import cmath
print(cmath.phase(z))  # 0.9272952180016122

MATLAB:
z = 3 + 4i  % or 3 + 4*j
real(z)     % 3
imag(z)     % 4
abs(z)      % 5
angle(z)    % 0.9273

C++:
#include <complex>
std::complex<double> z(3, 4);
z.real();   // 3
z.imag();   // 4
std::abs(z); // 5
```

### Numerical Considerations

```
Floating point precision issues:
• Small imaginary parts may be roundoff error
• Use tolerance for equality comparisons
• Branch cuts in multi-valued functions

Example precision issue:
(1 + i)² = 1 + 2i - 1 = 2i (exactly)
But floating point might give: 2.0000000000000004i

Good practice:
if (abs(z.imag()) < epsilon) z = complex(z.real(), 0);
```

## Practice Problems

### Basic Operations
```
1. Compute: (3 + 2i) + (1 - 4i)
2. Compute: (2 + 3i)(1 - 2i)  
3. Compute: (4 + 3i)/(2 - i)
4. Find the complex conjugate of -5 + 7i
```

### Polar Form
```
1. Convert 1 + √3i to polar form
2. Convert 5 cis(2π/3) to rectangular form
3. Compute (1 + i)⁸ using De Moivre's theorem
4. Find |3 - 4i| and arg(3 - 4i)
```

### Roots and Equations
```
1. Find all cube roots of -8
2. Solve: z² + 4z + 13 = 0
3. Find all solutions to z⁴ = 16
4. Find the 4th roots of unity
```

### Applications
```
1. An AC circuit has impedance Z = 3 + 4j ohms and current I = 2 - j amps. Find the voltage V = IZ.

2. Express the sinusoidal signal 5cos(ωt + π/3) using complex exponentials.

3. If a complex number z satisfies |z - 3i| = 5, describe the geometric locus of z.
```

## Answer Key

### Basic Operations
```
1. (3 + 2i) + (1 - 4i) = 4 - 2i

2. (2 + 3i)(1 - 2i) = 2 - 4i + 3i - 6i² = 2 - i + 6 = 8 - i

3. (4 + 3i)/(2 - i) = (4 + 3i)(2 + i)/((2 - i)(2 + i)) = (8 + 4i + 6i + 3i²)/(4 + 1) = (5 + 10i)/5 = 1 + 2i

4. Conjugate of -5 + 7i is -5 - 7i
```

### Polar Form
```
1. r = √(1² + (√3)²) = 2, θ = arctan(√3/1) = π/3
   Polar form: 2 cis(π/3)

2. a = 5 cos(2π/3) = 5(-1/2) = -5/2
   b = 5 sin(2π/3) = 5(√3/2) = 5√3/2
   Rectangular form: -5/2 + (5√3/2)i

3. 1 + i = √2 cis(π/4)
   (1 + i)⁸ = (√2)⁸ cis(8π/4) = 16 cis(2π) = 16

4. |3 - 4i| = √(9 + 16) = 5
   arg(3 - 4i) = arctan(-4/3) ≈ -0.927 radians
```

### Roots and Equations
```
1. -8 = 8 cis(π)
   Cube roots: 2 cis(π/3) = 1 + √3i, 2 cis(π) = -2, 2 cis(5π/3) = 1 - √3i

2. Using quadratic formula: z = (-4 ± √(16 - 52))/2 = (-4 ± 6i)/2 = -2 ± 3i

3. z⁴ = 16 = 16 cis(0)
   Fourth roots: 2 cis(0) = 2, 2 cis(π/2) = 2i, 2 cis(π) = -2, 2 cis(3π/2) = -2i

4. Fourth roots of unity: 1, i, -1, -i
```

### Applications
```
1. V = IZ = (2 - j)(3 + 4j) = 6 + 8j - 3j - 4j² = 6 + 5j + 4 = 10 + 5j volts

2. 5cos(ωt + π/3) = Re[5e^(i(ωt + π/3))] = Re[5e^(iπ/3)e^(iωt)]
   = Re[(5/2 + i5√3/2)e^(iωt)]

3. |z - 3i| = 5 represents a circle with center at (0, 3) and radius 5
```

## Quick Reference

### Basic Identities
- i² = -1, i³ = -i, i⁴ = 1
- z̄ · z = |z|²
- |z₁z₂| = |z₁||z₂|

### Polar Form
- z = r cis θ = re^(iθ)
- Multiplication: r₁r₂ cis(θ₁ + θ₂)
- Division: (r₁/r₂) cis(θ₁ - θ₂)

### De Moivre's Theorem
- (r cis θ)ⁿ = rⁿ cis(nθ)

### Euler's Formula
- e^(iθ) = cos θ + i sin θ

### nth Roots
- z^(1/n) = r^(1/n) cis((θ + 2πk)/n), k = 0,1,...,n-1

## See Also

- **[BasicMath](../basic-math)** - Number systems and arithmetic operations foundation
- **[Algebra](../algebra)** - Foundation for complex number operations - required
- **[Geometry](../geometry)** - Coordinate plane and geometric interpretation
- **[Pre-Calculus](../pre-calculus)** - Trigonometry and function concepts - required
- **[Calculus](../calculus)** - For complex analysis and advanced applications
- **[Differential Equations](../differential-equations)** - Complex solutions to DEs
- **[Matrices](../matrices)** - Complex matrices and eigenvalue problems
- **[Numerical Methods](../numerical-methods)** - Computational aspects of complex arithmetic