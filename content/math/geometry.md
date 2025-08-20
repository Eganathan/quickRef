---
title: "Geometry"
date: 2023-01-01T00:00:00Z
draft: false
description: "Comprehensive geometry reference covering shapes, measurements, area, perimeter, volume, angles, and spatial relationships."
categories: ["math"]
tags: ["geometry", "shapes", "area", "perimeter", "volume", "angles", "triangles", "circles", "coordinate-geometry"]
---

## Prerequisites

**Required:**
- **[BasicMath](../basic-math)** - Arithmetic operations, fractions, basic problem-solving

**Helpful:**
- **[Algebra](../algebra)** - For coordinate geometry and advanced problems
- Basic understanding of square roots

## Overview

Geometry is the branch of mathematics concerned with shapes, sizes, positions, angles, and dimensions. It helps us understand the world around us - from the design of buildings to the structure of molecules, from art and architecture to navigation and engineering.

This comprehensive guide covers plane geometry (2D shapes), solid geometry (3D shapes), coordinate geometry, and practical applications. Master these concepts to excel in mathematics, science, and everyday problem-solving.

## Basic Geometric Concepts

### Points, Lines, and Planes

#### Fundamental Elements
```
Point: A location with no size or dimension
• Named with capital letters: A, B, C
• Notation: point A or •A

Line: Extends infinitely in both directions
• Named by two points: line AB or AB̄
• Has no thickness, infinite length

Line Segment: Part of a line between two endpoints
• Notation: segment AB or AB
• Has definite length

Ray: Part of a line that starts at one point and extends infinitely
• Notation: ray AB or AB⃗
• Has one endpoint, infinite in one direction

Plane: Flat surface extending infinitely in all directions
• Named by three non-collinear points or a single letter
• Has no thickness
```

#### Relationships Between Lines
```
Parallel Lines: Never intersect, same distance apart
• Symbol: AB ∥ CD
• Same slope in coordinate geometry

Perpendicular Lines: Intersect at 90° angles
• Symbol: AB ⊥ CD
• Product of slopes = -1 in coordinate geometry

Intersecting Lines: Cross at exactly one point
• Form four angles at intersection

Skew Lines: Don't intersect and aren't parallel (3D only)
```

### Angles

#### Types of Angles
```
Acute Angle: Less than 90°
• Example: 45°, 60°, 30°

Right Angle: Exactly 90°
• Marked with a square symbol ∟
• Forms perpendicular lines

Obtuse Angle: Between 90° and 180°
• Example: 120°, 150°

Straight Angle: Exactly 180°
• Forms a straight line

Reflex Angle: Between 180° and 360°
• Greater than a straight angle

Full Angle: Exactly 360°
• Complete rotation
```

#### Angle Relationships
```
Complementary Angles: Sum to 90°
• If ∠A = 30°, then its complement = 60°

Supplementary Angles: Sum to 180°
• If ∠A = 120°, then its supplement = 60°

Vertical Angles: Opposite angles when two lines intersect
• Always equal to each other
• ∠1 = ∠3, ∠2 = ∠4

Adjacent Angles: Share a common vertex and side
• No overlap between angles
```

#### Parallel Lines and Transversals
When a line crosses two parallel lines:
```
Corresponding Angles: Equal
• Same relative position at each intersection

Alternate Interior Angles: Equal
• Inside the parallel lines, on opposite sides

Alternate Exterior Angles: Equal
• Outside the parallel lines, on opposite sides

Same-Side Interior: Supplementary (sum to 180°)
• Inside parallel lines, on same side of transversal
```

## Triangles

### Classification by Sides
```
Equilateral Triangle: All three sides equal
• All angles = 60°
• Highly symmetric

Isosceles Triangle: Two sides equal
• Two angles equal (base angles)
• Line of symmetry through vertex

Scalene Triangle: All sides different
• All angles different
• No lines of symmetry
```

### Classification by Angles
```
Acute Triangle: All angles less than 90°
• All angles are acute

Right Triangle: One angle equals 90°
• Has a right angle (∟)
• Two acute angles

Obtuse Triangle: One angle greater than 90°
• One obtuse angle
• Two acute angles
```

### Triangle Properties

#### Fundamental Rules
```
Angle Sum Property: Sum of all angles = 180°
• ∠A + ∠B + ∠C = 180°
• Always true for any triangle

Triangle Inequality: Sum of any two sides > third side
• For sides a, b, c: a + b > c, a + c > b, b + c > a
• Determines if three lengths can form a triangle

Exterior Angle: Equals sum of two non-adjacent interior angles
• ∠exterior = ∠A + ∠B (where A and B are non-adjacent)
```

### Special Right Triangles

#### 45-45-90 Triangle
```
Angles: 45°, 45°, 90°
Side ratios: 1 : 1 : √2

If legs = x, then hypotenuse = x√2

Example: If legs = 5
Hypotenuse = 5√2 ≈ 7.07
```

#### 30-60-90 Triangle
```
Angles: 30°, 60°, 90°
Side ratios: 1 : √3 : 2

If short side = x:
• Side opposite 30° = x
• Side opposite 60° = x√3
• Hypotenuse = 2x

Example: If short side = 4
Medium side = 4√3 ≈ 6.93
Hypotenuse = 8
```

### Pythagorean Theorem
```
In a right triangle: a² + b² = c²
where c is the hypotenuse

Example: If legs are 3 and 4
c² = 3² + 4² = 9 + 16 = 25
c = 5

Applications:
• Finding missing side lengths
• Checking if a triangle is right-angled
• Distance calculations
```

### Area and Perimeter

#### Triangle Area
```
Basic Formula: Area = ½ × base × height
• Height must be perpendicular to base

Example: base = 8, height = 6
Area = ½ × 8 × 6 = 24 square units

Heron's Formula: When you know all three sides
Area = √(s(s-a)(s-b)(s-c))
where s = (a+b+c)/2 (semi-perimeter)
```

#### Triangle Perimeter
```
Perimeter = sum of all three sides
P = a + b + c

Example: sides 5, 7, 9
P = 5 + 7 + 9 = 21 units
```

## Quadrilaterals

### Types of Quadrilaterals

#### Rectangle
```
Properties:
• Opposite sides parallel and equal
• All angles = 90°
• Diagonals equal and bisect each other

Formulas:
Area = length × width
Perimeter = 2(length + width)
```

#### Square
```
Properties:
• All sides equal
• All angles = 90°
• Diagonals equal, perpendicular, bisect each other

Formulas:
Area = side²
Perimeter = 4 × side
Diagonal = side√2
```

#### Parallelogram
```
Properties:
• Opposite sides parallel and equal
• Opposite angles equal
• Adjacent angles supplementary
• Diagonals bisect each other

Formulas:
Area = base × height
Perimeter = 2(a + b)
```

#### Rhombus
```
Properties:
• All sides equal
• Opposite sides parallel
• Opposite angles equal
• Diagonals perpendicular and bisect each other

Formulas:
Area = base × height = ½ × d₁ × d₂
(where d₁, d₂ are diagonals)
Perimeter = 4 × side
```

#### Trapezoid
```
Properties:
• One pair of parallel sides (bases)
• May have equal legs (isosceles trapezoid)

Formulas:
Area = ½(b₁ + b₂) × height
where b₁, b₂ are the parallel sides
Perimeter = sum of all four sides
```

## Circles

### Circle Basics

#### Key Terms
```
Center: Fixed point inside circle
Radius: Distance from center to any point on circle
Diameter: Distance across circle through center = 2 × radius
Chord: Line segment connecting two points on circle
Arc: Part of the circle's circumference
Sector: "Pie slice" - region between two radii
Tangent: Line that touches circle at exactly one point
Secant: Line that intersects circle at two points
```

#### Circle Formulas
```
Circumference: C = 2πr = πd
where r = radius, d = diameter

Area: A = πr²

Arc Length: s = rθ
where θ is angle in radians

Sector Area: A = ½r²θ = (θ/360°) × πr²
where θ is angle in degrees
```

### Circle Properties

#### Angles in Circles
```
Central Angle: Vertex at center
• Measures the arc it intercepts

Inscribed Angle: Vertex on circle
• Measures half the arc it intercepts
• All inscribed angles intercepting same arc are equal

Angle in Semicircle: Always 90°
• Any angle inscribed in a semicircle is a right angle
```

#### Tangent Properties
```
Tangent-Radius Relationship:
• Tangent is perpendicular to radius at point of tangency

Tangent Segments from External Point:
• Equal in length
• If PA and PB are tangents from P, then PA = PB
```

### Circle Equations

#### Standard Form
```
Center at origin: x² + y² = r²

Center at (h, k): (x - h)² + (y - k)² = r²

Example: Circle with center (3, -2) and radius 5
(x - 3)² + (y + 2)² = 25
```

## Polygons

### Regular Polygons
Polygons with all sides and angles equal.

#### Common Regular Polygons
```
Triangle (3 sides): Each angle = 60°
Square (4 sides): Each angle = 90°
Pentagon (5 sides): Each angle = 108°
Hexagon (6 sides): Each angle = 120°
Octagon (8 sides): Each angle = 135°
```

#### Polygon Formulas
```
Interior Angle of Regular n-gon:
Each angle = (n - 2) × 180° / n

Sum of Interior Angles:
Sum = (n - 2) × 180°

Exterior Angle of Regular n-gon:
Each exterior angle = 360° / n

Number of Diagonals:
Diagonals = n(n - 3) / 2
```

### Examples
```
Pentagon (n = 5):
• Each interior angle = (5-2) × 180° / 5 = 108°
• Sum of interior angles = 3 × 180° = 540°
• Each exterior angle = 360° / 5 = 72°
• Number of diagonals = 5(5-3) / 2 = 5
```

## 3D Geometry (Solid Figures)

### Prisms and Cylinders

#### Rectangular Prism (Box)
```
Properties:
• 6 rectangular faces
• 12 edges, 8 vertices

Formulas:
Volume = length × width × height
Surface Area = 2(lw + lh + wh)

Example: 4×3×2 box
Volume = 24 cubic units
Surface Area = 2(12 + 8 + 6) = 52 square units
```

#### Cube
```
Properties:
• Special rectangular prism
• All edges equal

Formulas:
Volume = side³
Surface Area = 6 × side²

Example: side = 5
Volume = 125 cubic units
Surface Area = 150 square units
```

#### Cylinder
```
Properties:
• Two parallel circular bases
• Curved surface connecting them

Formulas:
Volume = πr²h
Surface Area = 2πr² + 2πrh = 2πr(r + h)

Example: radius = 3, height = 8
Volume = π × 9 × 8 = 72π cubic units
Surface Area = 2π × 3 × 11 = 66π square units
```

### Pyramids and Cones

#### Pyramid
```
Properties:
• Polygon base
• Triangular faces meeting at apex

Formulas:
Volume = ⅓ × base area × height

Square pyramid example:
Base = 6×6, height = 4
Volume = ⅓ × 36 × 4 = 48 cubic units
```

#### Cone
```
Properties:
• Circular base
• Curved surface to apex

Formulas:
Volume = ⅓πr²h
Surface Area = πr² + πrl
where l = slant height = √(r² + h²)

Example: radius = 3, height = 4
Volume = ⅓π × 9 × 4 = 12π cubic units
Slant height = √(9 + 16) = 5
Surface Area = 9π + 15π = 24π square units
```

### Sphere
```
Properties:
• All points equidistant from center
• Perfect symmetry

Formulas:
Volume = ⁴⁄₃πr³
Surface Area = 4πr²

Example: radius = 6
Volume = ⁴⁄₃π × 216 = 288π cubic units
Surface Area = 4π × 36 = 144π square units
```

## Coordinate Geometry

### Distance and Midpoint

#### Distance Formula
```
Distance between (x₁, y₁) and (x₂, y₂):
d = √[(x₂ - x₁)² + (y₂ - y₁)²]

Example: Distance between (1, 2) and (4, 6)
d = √[(4-1)² + (6-2)²] = √[9 + 16] = √25 = 5
```

#### Midpoint Formula
```
Midpoint of segment from (x₁, y₁) to (x₂, y₂):
M = ((x₁ + x₂)/2, (y₁ + y₂)/2)

Example: Midpoint of (1, 2) and (4, 6)
M = ((1+4)/2, (2+6)/2) = (2.5, 4)
```

### Slope and Lines

#### Slope Formula
```
Slope between (x₁, y₁) and (x₂, y₂):
m = (y₂ - y₁)/(x₂ - x₁)

Slope interpretations:
• Positive: line rises left to right
• Negative: line falls left to right
• Zero: horizontal line
• Undefined: vertical line
```

#### Line Equations
```
Slope-intercept form: y = mx + b
• m = slope, b = y-intercept

Point-slope form: y - y₁ = m(x - x₁)
• Use when you know a point and slope

Standard form: Ax + By = C
• A, B, C are integers, A ≥ 0

Example: Line through (2, 3) with slope 4
Point-slope: y - 3 = 4(x - 2)
Slope-intercept: y = 4x - 5
```

### Transformations

#### Types of Transformations
```
Translation: Sliding
• (x, y) → (x + a, y + b)
• Every point moves same distance, direction

Reflection: Flipping
• Over x-axis: (x, y) → (x, -y)
• Over y-axis: (x, y) → (-x, y)
• Over y = x: (x, y) → (y, x)

Rotation: Turning around a point
• 90° counterclockwise about origin: (x, y) → (-y, x)
• 180° about origin: (x, y) → (-x, -y)
• 270° counterclockwise: (x, y) → (y, -x)

Dilation: Scaling
• Scale factor k: (x, y) → (kx, ky)
• k > 1: enlargement
• 0 < k < 1: reduction
```

## Similarity and Congruence

### Congruent Figures
Figures with same size and shape.

#### Triangle Congruence Rules
```
SSS: Three sides equal
SAS: Two sides and included angle equal
ASA: Two angles and included side equal
AAS: Two angles and non-included side equal
HL: Hypotenuse and leg equal (right triangles only)
```

### Similar Figures
Same shape, different size.

#### Triangle Similarity Rules
```
AA: Two angles equal
SSS: All sides proportional
SAS: Two sides proportional and included angle equal
```

#### Properties of Similar Figures
```
If scale factor = k:
• Linear measurements multiply by k
• Areas multiply by k²
• Volumes multiply by k³

Example: If triangles similar with scale factor 3:
• If small triangle area = 4, large triangle area = 36
• If small triangle perimeter = 6, large perimeter = 18
```

## Practical Applications

### Real-World Problems

#### Architecture and Construction
```
Problem: A ladder leans against a wall. The ladder is 13 feet long 
and the bottom is 5 feet from the wall. How high up the wall does 
the ladder reach?

Solution: Use Pythagorean theorem
height² + 5² = 13²
height² = 169 - 25 = 144
height = 12 feet
```

#### Navigation and Geography
```
Problem: Two cities are located at coordinates (100, 200) and 
(400, 600) on a map where each unit represents 1 mile. 
What's the straight-line distance between them?

Solution: Distance formula
d = √[(400-100)² + (600-200)²]
d = √[300² + 400²] = √[90000 + 160000] = √250000 = 500 miles
```

#### Area and Volume Calculations
```
Problem: A cylindrical water tank has radius 4 feet and height 10 feet. 
How many gallons can it hold? (1 cubic foot ≈ 7.48 gallons)

Solution:
Volume = πr²h = π × 16 × 10 = 160π cubic feet
≈ 502.65 cubic feet
Capacity ≈ 502.65 × 7.48 ≈ 3,760 gallons
```

## Practice Problems

### Basic Geometry
```
1. Find the complement of a 35° angle
2. Two parallel lines are cut by a transversal. If one angle is 65°, 
   find the measures of all eight angles
3. In triangle ABC, ∠A = 45° and ∠B = 70°. Find ∠C
```

### Area and Perimeter
```
1. Find the area and perimeter of a rectangle with length 12 and width 8
2. A circle has radius 7. Find its circumference and area
3. Find the area of a triangle with sides 5, 12, and 13
```

### 3D Geometry
```
1. Find the volume of a rectangular prism 6×4×3
2. A sphere has radius 9. Find its volume and surface area
3. A cone has radius 5 and height 12. Find its volume
```

### Coordinate Geometry
```
1. Find the distance between points (-2, 3) and (4, -1)
2. Find the slope of the line through (1, 5) and (3, 11)
3. Write the equation of the line with slope 2 passing through (3, -1)
```

### Word Problems
```
1. A rectangular garden has perimeter 40 feet and area 96 square feet. 
   Find its dimensions

2. A right triangle has legs of length 9 and 12. Find the hypotenuse 
   and the area

3. Two similar triangles have areas 25 and 100 square units. 
   If the smaller triangle has perimeter 15, what's the larger triangle's perimeter?
```

## Answer Key

### Basic Geometry
```
1. Complement of 35° = 90° - 35° = 55°
2. Angles: 65°, 115°, 65°, 115°, 65°, 115°, 65°, 115°
3. ∠C = 180° - 45° - 70° = 65°
```

### Area and Perimeter
```
1. Rectangle: Area = 96 sq units, Perimeter = 40 units
2. Circle: Circumference = 14π ≈ 43.98, Area = 49π ≈ 153.94
3. Triangle area = 30 sq units (it's a right triangle: 5² + 12² = 13²)
```

### 3D Geometry
```
1. Rectangular prism volume = 72 cubic units
2. Sphere: Volume = 972π ≈ 3053.6, Surface Area = 324π ≈ 1017.9
3. Cone volume = 100π cubic units ≈ 314.2
```

### Coordinate Geometry
```
1. Distance = √[(4-(-2))² + (-1-3)²] = √[36+16] = √52 = 2√13 ≈ 7.21
2. Slope = (11-5)/(3-1) = 6/2 = 3
3. Line equation: y = 2x - 7
```

### Word Problems
```
1. Garden dimensions: 8 feet × 12 feet
2. Right triangle: hypotenuse = 15, area = 54 square units
3. Larger triangle perimeter = 30 units (scale factor = 2)
```

## Quick Reference

### Essential Formulas

#### Triangle
- Area = ½ × base × height
- Perimeter = a + b + c
- Pythagorean: a² + b² = c²

#### Rectangle
- Area = length × width
- Perimeter = 2(length + width)

#### Circle
- Area = πr²
- Circumference = 2πr

#### Coordinate Geometry
- Distance: d = √[(x₂-x₁)² + (y₂-y₁)²]
- Slope: m = (y₂-y₁)/(x₂-x₁)
- Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2)

### Common Angle Relationships
- Complementary: sum to 90°
- Supplementary: sum to 180°
- Vertical angles: equal
- Linear pair: supplementary

### 3D Volume Formulas
- Rectangular prism: V = lwh
- Cube: V = s³
- Cylinder: V = πr²h
- Cone: V = ⅓πr²h
- Sphere: V = ⁴⁄₃πr³

## See Also

- **[BasicMath](../basic-math)**: Foundation arithmetic and number systems
- **[Algebra](../algebra)**: Working with variables and equations - coordinate geometry
- **[Pre-Calculus](../pre-calculus)**: Trigonometry and advanced functions
- **[Statistics](../statistics)**: Data analysis and probability
- **[Complex Numbers](../complex-numbers)**: Geometric interpretation in complex plane
- **[Calculus](../calculus)**: Applications in area, volume, and optimization problems