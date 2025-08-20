---
title: "Matrices"
date: 2023-01-01T00:00:00Z
draft: false
description: "Comprehensive guide to matrices covering foundations, operations, linear algebra, eigenvalues, and applications in applied mathematics."
categories: ["math"]
tags: ["matrices", "linear-algebra", "eigenvalues", "determinants", "systems", "transformations", "applied-mathematics"]
---

## Prerequisites

**Required:**
- **[Algebra](../algebra)** - Systems of equations, basic function concepts
- **[BasicMath](../basic-math)** - All arithmetic operations

**Helpful:**
- **[Geometry](../geometry)** - For transformation applications
- **[Statistics](../statistics)** - For data analysis applications

## Overview

Matrices are rectangular arrays of numbers that serve as fundamental tools in mathematics, science, and engineering. They provide a compact way to represent and manipulate systems of linear equations, geometric transformations, data structures, and complex mathematical relationships.

This comprehensive guide covers matrix fundamentals through advanced applications, including linear algebra, eigenvalue problems, matrix decompositions, and real-world applications in computer graphics, data science, engineering, and scientific computing.

## Matrix Fundamentals

### Definition and Notation

A **matrix** is a rectangular array of numbers, symbols, or expressions arranged in rows and columns.

```
General matrix A with m rows and n columns (m×n matrix):

A = [a₁₁  a₁₂  a₁₃  ...  a₁ₙ]
    [a₂₁  a₂₂  a₂₃  ...  a₂ₙ]
    [a₃₁  a₃₂  a₃₃  ...  a₃ₙ]
    [ ⋮    ⋮    ⋮   ⋱    ⋮ ]
    [aₘ₁  aₘ₂  aₘ₃  ...  aₘₙ]

Notation:
• A = [aᵢⱼ] where i is row number, j is column number
• Element in row i, column j: aᵢⱼ
• Size: m×n (m rows, n columns)
• A₃ₓ₂ means 3 rows, 2 columns
```

### Types of Matrices

#### By Size
```
Row Matrix (Row Vector): 1×n matrix
A = [a₁  a₂  a₃  ...  aₙ]

Column Matrix (Column Vector): m×1 matrix
B = [b₁]
    [b₂]
    [⋮]
    [bₘ]

Square Matrix: n×n matrix (equal rows and columns)
C = [c₁₁  c₁₂]
    [c₂₁  c₂₂]

Rectangular Matrix: m×n where m ≠ n
```

#### Special Square Matrices
```
Identity Matrix (I): Main diagonal is 1s, all other elements 0
I₃ = [1  0  0]
     [0  1  0]
     [0  0  1]

Zero Matrix (0): All elements are 0
0₂ₓ₃ = [0  0  0]
       [0  0  0]

Diagonal Matrix: Non-zero elements only on main diagonal
D = [d₁  0   0 ]
    [0   d₂  0 ]
    [0   0   d₃]

Upper Triangular: All elements below main diagonal are 0
U = [u₁₁  u₁₂  u₁₃]
    [0    u₂₂  u₂₃]
    [0    0    u₃₃]

Lower Triangular: All elements above main diagonal are 0
L = [ℓ₁₁  0    0  ]
    [ℓ₂₁  ℓ₂₂  0  ]
    [ℓ₃₁  ℓ₃₂  ℓ₃₃]
```

#### Symmetric and Special Matrices
```
Symmetric Matrix: A = Aᵀ (equals its transpose)
S = [1  2  3]
    [2  5  4]
    [3  4  6]

Skew-Symmetric: A = -Aᵀ (diagonal elements are 0)
K = [ 0   2  -1]
    [-2   0   3]
    [ 1  -3   0]

Orthogonal Matrix: AAᵀ = AᵀA = I
• Columns (and rows) are orthonormal vectors
• |det(A)| = 1
```

## Matrix Operations

### Matrix Equality
Two matrices are equal if they have the same dimensions and corresponding elements are equal.
```
If A = [aᵢⱼ] and B = [bᵢⱼ], then A = B if and only if:
• A and B have same dimensions
• aᵢⱼ = bᵢⱼ for all i, j
```

### Matrix Addition and Subtraction
```
Only matrices of the same size can be added or subtracted.
(A ± B)ᵢⱼ = aᵢⱼ ± bᵢⱼ

Example:
A = [1  2]    B = [5  6]
    [3  4]        [7  8]

A + B = [1+5  2+6] = [6   8]
        [3+7  4+8]   [10  12]

A - B = [1-5  2-6] = [-4  -4]
        [3-7  4-8]   [-4  -4]

Properties:
• Commutative: A + B = B + A
• Associative: (A + B) + C = A + (B + C)
• Zero matrix: A + 0 = A
• Additive inverse: A + (-A) = 0
```

### Scalar Multiplication
```
Multiply every element by the scalar k.
(kA)ᵢⱼ = k · aᵢⱼ

Example: k = 3, A = [1  2]
                    [3  4]

3A = [3·1  3·2] = [3   6]
     [3·3  3·4]   [9  12]

Properties:
• k(A + B) = kA + kB
• (k + m)A = kA + mA
• k(mA) = (km)A
• 1·A = A, 0·A = 0
```

### Matrix Multiplication
```
For A (m×p) and B (p×n), product AB is m×n.
Number of columns in A must equal number of rows in B.

(AB)ᵢⱼ = Σ(k=1 to p) aᵢₖbₖⱼ = aᵢ₁b₁ⱼ + aᵢ₂b₂ⱼ + ... + aᵢₚbₚⱼ

Example:
A = [1  2  3]    B = [7   8]
    [4  5  6]        [9  10]
                     [11 12]

AB = [1·7+2·9+3·11   1·8+2·10+3·12] = [58  64]
     [4·7+5·9+6·11   4·8+5·10+6·12]   [139 152]

Key Properties:
• NOT commutative: AB ≠ BA (in general)
• Associative: (AB)C = A(BC)
• Distributive: A(B + C) = AB + AC
• AI = IA = A (identity property)
```

### Matrix Transpose
```
The transpose Aᵀ is formed by swapping rows and columns.
(Aᵀ)ᵢⱼ = aⱼᵢ

Example:
A = [1  2  3]    Aᵀ = [1  4]
    [4  5  6]          [2  5]
                       [3  6]

Properties:
• (Aᵀ)ᵀ = A
• (A + B)ᵀ = Aᵀ + Bᵀ
• (kA)ᵀ = kAᵀ
• (AB)ᵀ = BᵀAᵀ (note the order reversal!)
```

## Determinants

### Definition and Computation

The determinant is a scalar value that encodes important properties of a square matrix.

#### 2×2 Determinant
```
For A = [a  b]
        [c  d]

det(A) = |A| = ad - bc

Example:
A = [3  2]
    [1  4]

det(A) = 3·4 - 2·1 = 12 - 2 = 10
```

#### 3×3 Determinant (Cofactor Expansion)
```
For A = [a₁₁  a₁₂  a₁₃]
        [a₂₁  a₂₂  a₂₃]
        [a₃₁  a₃₂  a₃₃]

Expand along first row:
det(A) = a₁₁(a₂₂a₃₃ - a₂₃a₃₂) - a₁₂(a₂₁a₃₃ - a₂₃a₃₁) + a₁₃(a₂₁a₃₂ - a₂₂a₃₁)

Example:
A = [2  1  3]
    [4  5  6]
    [7  8  9]

det(A) = 2(5·9 - 6·8) - 1(4·9 - 6·7) + 3(4·8 - 5·7)
       = 2(45 - 48) - 1(36 - 42) + 3(32 - 35)
       = 2(-3) - 1(-6) + 3(-3)
       = -6 + 6 - 9 = -9
```

#### General n×n Determinant
```
For larger matrices, use cofactor expansion along any row or column:

det(A) = Σⱼ aᵢⱼ · Cᵢⱼ    (expansion along row i)
det(A) = Σᵢ aᵢⱼ · Cᵢⱼ    (expansion along column j)

where Cᵢⱼ = (-1)^(i+j) · Mᵢⱼ
Mᵢⱼ is the minor (determinant of submatrix after removing row i, column j)
```

### Properties of Determinants
```
1. det(I) = 1
2. det(AB) = det(A) · det(B)
3. det(Aᵀ) = det(A)
4. det(kA) = kⁿ det(A) for n×n matrix
5. If A has a row/column of zeros, det(A) = 0
6. Swapping two rows/columns changes sign: det(A) → -det(A)
7. If two rows/columns are identical, det(A) = 0
8. Adding multiple of one row to another doesn't change determinant

Geometric Interpretation:
• For 2×2: Area of parallelogram formed by column vectors
• For 3×3: Volume of parallelepiped formed by column vectors
• Sign indicates orientation (positive = right-handed)
```

## Matrix Inverse

### Definition
For square matrix A, the inverse A⁻¹ satisfies:
AA⁻¹ = A⁻¹A = I

A matrix is **invertible** (nonsingular) if det(A) ≠ 0.

### 2×2 Matrix Inverse
```
For A = [a  b], if det(A) = ad - bc ≠ 0:
        [c  d]

A⁻¹ = 1/(ad-bc) · [ d  -b]
                   [-c   a]

Example:
A = [3  2]
    [1  4]

det(A) = 12 - 2 = 10

A⁻¹ = 1/10 · [4  -2] = [0.4  -0.2]
             [-1   3]   [-0.1  0.3]

Verify: AA⁻¹ = [3  2][0.4  -0.2] = [1  0]
               [1  4][-0.1  0.3]   [0  1] ✓
```

### General Inverse Methods

#### Gauss-Jordan Elimination
```
To find A⁻¹, solve [A | I] → [I | A⁻¹] using row operations.

Example: Find inverse of A = [1  2]
                             [3  4]

[1  2 | 1  0]
[3  4 | 0  1]

R₂ = R₂ - 3R₁:
[1  2 | 1  0]
[0 -2 |-3  1]

R₂ = -½R₂:
[1  2 | 1   0]
[0  1 |3/2 -1/2]

R₁ = R₁ - 2R₂:
[1  0 |-2   1]
[0  1 |3/2 -1/2]

Therefore: A⁻¹ = [-2    1]
                 [3/2  -1/2]
```

#### Adjugate Method
```
For n×n matrix A:
A⁻¹ = (1/det(A)) · adj(A)

where adj(A) is the adjugate matrix:
adj(A) = [Cᵢⱼ]ᵀ (transpose of cofactor matrix)
```

### Properties of Matrix Inverse
```
1. (A⁻¹)⁻¹ = A
2. (AB)⁻¹ = B⁻¹A⁻¹ (note the order reversal!)
3. (Aᵀ)⁻¹ = (A⁻¹)ᵀ
4. det(A⁻¹) = 1/det(A)
5. If A is invertible, so is Aᵀ
6. For diagonal matrix D, D⁻¹ has reciprocals on diagonal
```

## Systems of Linear Equations

### Matrix Representation
A system of linear equations can be written as Ax = b.

```
System:
2x + 3y = 7
4x + y = 5

Matrix form:
[2  3][x] = [7]
[4  1][y]   [5]

Where A = [2  3], x = [x], b = [7]
          [4  1]      [y]      [5]
```

### Solution Methods

#### Cramer's Rule (for square systems with det(A) ≠ 0)
```
For Ax = b where A is n×n and invertible:

xᵢ = det(Aᵢ)/det(A)

where Aᵢ is A with column i replaced by b.

Example: 2x + 3y = 7, 4x + y = 5
A = [2  3], det(A) = 2·1 - 3·4 = -10
    [4  1]

A₁ = [7  3], det(A₁) = 7·1 - 3·5 = -8
     [5  1]

A₂ = [2  7], det(A₂) = 2·5 - 7·4 = -18
     [4  5]

x = -8/(-10) = 4/5 = 0.8
y = -18/(-10) = 9/5 = 1.8
```

#### Matrix Inverse Method
```
If A is invertible: x = A⁻¹b

Using previous example:
A⁻¹ = -1/10 · [1  -3] = [-0.1   0.3]
              [-4   2]   [0.4  -0.2]

x = A⁻¹b = [-0.1   0.3][7] = [-0.7 + 1.5] = [0.8]
           [0.4  -0.2][5]   [2.8 - 1.0]   [1.8]
```

#### Gaussian Elimination
```
Transform augmented matrix [A | b] to row echelon form.

Example: 
x + 2y + z = 6
2x + y + z = 5
x + y + 2z = 7

[1  2  1 | 6]
[2  1  1 | 5]
[1  1  2 | 7]

R₂ = R₂ - 2R₁, R₃ = R₃ - R₁:
[1  2  1 | 6]
[0 -3 -1 |-7]
[0 -1  1 | 1]

R₃ = R₃ - ⅓R₂:
[1  2  1 | 6]
[0 -3 -1 |-7]
[0  0  4/3| 10/3]

Back substitution:
z = (10/3)/(4/3) = 10/4 = 2.5
y = (-7 + 2.5)/(-3) = 1.5
x = 6 - 2(1.5) - 2.5 = 0.5
```

### Types of Solutions
```
For system Ax = b:

1. Unique Solution: A is invertible (det(A) ≠ 0)
   • Exactly one solution x = A⁻¹b

2. No Solution: System is inconsistent
   • Usually when rank(A) ≠ rank([A|b])

3. Infinite Solutions: System is underdetermined
   • More unknowns than independent equations
   • Solution involves parameters

For homogeneous system Ax = 0:
• Always has trivial solution x = 0
• Non-trivial solutions exist ⟺ det(A) = 0
```

## Eigenvalues and Eigenvectors

### Definition
For square matrix A, a non-zero vector v is an **eigenvector** with corresponding **eigenvalue** λ if:
Av = λv

This means the matrix transformation only scales the vector by factor λ.

### Finding Eigenvalues
Solve the characteristic equation: det(A - λI) = 0

```
Example: A = [3  1]
             [0  2]

A - λI = [3-λ   1 ]
         [0   2-λ]

det(A - λI) = (3-λ)(2-λ) - 1·0 = (3-λ)(2-λ) = 0

Eigenvalues: λ₁ = 3, λ₂ = 2
```

### Finding Eigenvectors
For each eigenvalue λ, solve (A - λI)v = 0.

```
For λ₁ = 3:
(A - 3I)v = [0  1][v₁] = [0]
            [0 -1][v₂]   [0]

This gives: v₂ = 0, v₁ is free
Eigenvector: v₁ = [1] (or any non-zero scalar multiple)
                  [0]

For λ₂ = 2:
(A - 2I)v = [1  1][v₁] = [0]
            [0  0][v₂]   [0]

This gives: v₁ + v₂ = 0, so v₂ = -v₁
Eigenvector: v₂ = [1 ] (or any non-zero scalar multiple)
                  [-1]
```

### Properties of Eigenvalues
```
For n×n matrix A with eigenvalues λ₁, λ₂, ..., λₙ:

1. tr(A) = λ₁ + λ₂ + ... + λₙ (trace equals sum of eigenvalues)
2. det(A) = λ₁ · λ₂ · ... · λₙ (determinant equals product)
3. Eigenvalues of Aᵀ are the same as A
4. If A is invertible, eigenvalues of A⁻¹ are 1/λᵢ
5. Eigenvalues of kA are k times eigenvalues of A
6. For symmetric matrix, all eigenvalues are real

Geometric multiplicity ≤ Algebraic multiplicity
• Algebraic: multiplicity of λ as root of characteristic polynomial
• Geometric: dimension of eigenspace (null space of A - λI)
```

### Diagonalization
Matrix A is **diagonalizable** if A = PDP⁻¹ where D is diagonal.

```
Process:
1. Find eigenvalues λ₁, λ₂, ..., λₙ
2. Find corresponding eigenvectors v₁, v₂, ..., vₙ
3. P = [v₁ v₂ ... vₙ] (eigenvectors as columns)
4. D = diag(λ₁, λ₂, ..., λₙ)

Requirements for diagonalizability:
• A must have n linearly independent eigenvectors
• Guaranteed if all eigenvalues are distinct
• Symmetric matrices are always diagonalizable

Benefits:
• Aᵏ = PDᵏP⁻¹ (easy to compute powers)
• Easy to analyze matrix behavior
• Simplifies differential equations
```

## Advanced Matrix Topics

### Matrix Decompositions

#### LU Decomposition
Every invertible matrix A can be written as A = LU where L is lower triangular and U is upper triangular.

```
Example: A = [2  1  1]
             [4  3  3]
             [8  7  9]

Using Gaussian elimination with row operations:
A = [1  0  0][2  1  1]
    [2  1  0][0  1  1]
    [4  3  1][0  0  2]
  = L     ·   U

Applications:
• Efficient solving of Ax = b for multiple b vectors
• Computing determinants: det(A) = det(L)det(U)
• Matrix inversion
```

#### QR Decomposition  
Every matrix A can be written as A = QR where Q has orthonormal columns and R is upper triangular.

```
Process (Gram-Schmidt):
1. Start with columns of A: a₁, a₂, ..., aₙ
2. Create orthogonal vectors: u₁, u₂, ..., uₙ
3. Normalize to get orthonormal vectors: q₁, q₂, ..., qₙ
4. Q = [q₁ q₂ ... qₙ], R contains normalization factors

Applications:
• Solving least squares problems
• Eigenvalue computation (QR algorithm)
• Orthogonal transformations
```

#### Singular Value Decomposition (SVD)
Every m×n matrix A can be written as A = UΣVᵀ where:
• U is m×m orthogonal matrix
• Σ is m×n diagonal matrix (singular values)
• V is n×n orthogonal matrix

```
Properties:
• Singular values σᵢ ≥ 0, ordered σ₁ ≥ σ₂ ≥ ... ≥ σᵣ > 0
• Rank of A equals number of non-zero singular values
• ||A||₂ = σ₁ (largest singular value)

Applications:
• Principal Component Analysis (PCA)
• Data compression
• Pseudo-inverse computation
• Low-rank approximations
```

### Special Matrix Classes

#### Positive Definite Matrices
A symmetric matrix A is positive definite if xᵀAx > 0 for all non-zero x.

```
Equivalent conditions:
1. All eigenvalues are positive
2. All leading principal minors are positive
3. A = BᵀB for some invertible B
4. Cholesky decomposition A = LLᵀ exists

Applications:
• Optimization (Hessian matrices)
• Stability analysis
• Covariance matrices
• Energy functions
```

#### Stochastic Matrices
Matrix where all entries are non-negative and each row sums to 1.

```
Properties:
• 1 is always an eigenvalue
• All eigenvalues have |λ| ≤ 1
• Used in Markov chains

Example (transition matrix):
P = [0.7  0.3]
    [0.2  0.8]

Represents probabilities of state transitions
```

#### Orthogonal Matrices
Matrix Q where QᵀQ = QQᵀ = I.

```
Properties:
• Columns (and rows) form orthonormal set
• det(Q) = ±1
• Preserves distances: ||Qx|| = ||x||
• Q⁻¹ = Qᵀ

Examples:
• Rotation matrices
• Reflection matrices
• Householder matrices
```

### Norms and Condition Numbers

#### Matrix Norms
```
Frobenius norm: ||A||_F = √(Σᵢⱼ aᵢⱼ²)

2-norm (spectral norm): ||A||₂ = σ₁ (largest singular value)

1-norm: ||A||₁ = max_j Σᵢ |aᵢⱼ| (max column sum)

∞-norm: ||A||_∞ = max_i Σⱼ |aᵢⱼ| (max row sum)
```

#### Condition Number
κ(A) = ||A|| · ||A⁻¹|| measures how sensitive solutions are to perturbations.

```
Properties:
• κ(A) ≥ 1 always
• κ(A) = ∞ if A is singular
• For 2-norm: κ₂(A) = σ₁/σₙ (ratio of largest to smallest singular value)

Interpretation:
• κ(A) ≈ 1: Well-conditioned (stable)
• κ(A) >> 1: Ill-conditioned (unstable)

Impact on solving Ax = b:
If input has relative error ε, output error is roughly κ(A) · ε
```

## Matrix Applications

### Computer Graphics and Transformations

#### 2D Transformations
```
Rotation by angle θ:
R(θ) = [cos θ  -sin θ]
       [sin θ   cos θ]

Scaling by factors sx, sy:
S = [sx  0 ]
    [0   sy]

Reflection across x-axis:
Rx = [1   0]
     [0  -1]

Translation by (tx, ty) using homogeneous coordinates:
T = [1  0  tx]
    [0  1  ty]
    [0  0  1 ]
```

#### 3D Transformations
```
Rotation about z-axis by θ:
Rz(θ) = [cos θ  -sin θ  0]
        [sin θ   cos θ  0]
        [0       0      1]

General rotation: combine Rx, Ry, Rz or use rotation matrix from axis-angle

Perspective projection:
P = [f/aspect  0    0           0    ]
    [0         f    0           0    ]
    [0         0    -(far+near) -2fn ]
    [0         0    -1          0    ]

where f = 1/tan(fov/2), n = near, far = far clipping planes
```

### Data Science and Statistics

#### Principal Component Analysis (PCA)
```
Goal: Find directions of maximum variance in data

Process:
1. Center data: X̃ = X - μ (subtract mean)
2. Compute covariance matrix: C = X̃ᵀX̃/(n-1)
3. Find eigenvalues/eigenvectors of C
4. Principal components = eigenvectors
5. Explained variance = eigenvalues

Applications:
• Dimensionality reduction
• Data visualization
• Feature extraction
• Noise reduction
```

#### Markov Chains
```
State transition matrix P where Pᵢⱼ = P(state j | state i)

Steady state: πP = π (π is left eigenvector for eigenvalue 1)

Example: Weather model
P = [0.7  0.3]    (70% chance sunny→sunny, 30% sunny→rainy)
    [0.4  0.6]    (40% chance rainy→sunny, 60% rainy→rainy)

Long-term probabilities: π = [4/7  3/7] ≈ [0.571  0.429]
```

#### Least Squares Regression
```
Fit y = Xβ + ε to minimize ||y - Xβ||²

Normal equations: XᵀXβ = Xᵀy
Solution: β = (XᵀX)⁻¹Xᵀy

Using QR decomposition: X = QR
β = R⁻¹Qᵀy (more numerically stable)

Applications:
• Linear regression
• Polynomial fitting
• Parameter estimation
```

### Engineering and Physics

#### Finite Element Method
```
Discretize partial differential equations using matrix equations:
Ku = f

where:
• K is stiffness matrix (system properties)
• u is displacement/solution vector
• f is force/load vector

Applications:
• Structural analysis
• Heat transfer
• Electromagnetics
• Fluid dynamics
```

#### Control Systems
```
State-space representation:
ẋ = Ax + Bu    (state equation)
y = Cx + Du    (output equation)

System properties from eigenvalues of A:
• Stability: all eigenvalues have negative real parts
• Controllability: rank([B AB A²B ... Aⁿ⁻¹B]) = n
• Observability: rank([Cᵀ AᵀCᵀ ... (Aᵀ)ⁿ⁻¹Cᵀ]) = n

Transfer function: G(s) = C(sI - A)⁻¹B + D
```

#### Network Analysis
```
Adjacency matrix A: Aᵢⱼ = 1 if edge from i to j, 0 otherwise

Graph properties:
• Connectivity: powers of A
• Shortest paths: matrix powers
• Centrality measures: eigenvectors
• PageRank: dominant eigenvector of modified adjacency matrix

Laplacian matrix: L = D - A (D is degree matrix)
• Eigenvalues reveal graph connectivity
• Second smallest eigenvalue (Fiedler value) measures connectivity
```

### Numerical Methods

#### Iterative Methods for Linear Systems

**Jacobi Method:**
```
For Ax = b, split A = D + L + U:
x^(k+1) = D⁻¹(b - (L + U)x^(k))

Convergence: if A is diagonally dominant
```

**Gauss-Seidel Method:**
```
x^(k+1) = (D + L)⁻¹(b - Ux^(k))

Generally faster convergence than Jacobi
```

#### Eigenvalue Algorithms

**Power Method:**
```
Find dominant eigenvalue and eigenvector:
v^(k+1) = Av^(k) / ||Av^(k)||

Converges to eigenvector of largest |λ|
```

**QR Algorithm:**
```
Iteratively compute A = Q₁R₁, A₁ = R₁Q₁, repeat
Converges to upper triangular matrix with eigenvalues on diagonal
```

## Computational Considerations

### Numerical Stability
```
Issues:
• Round-off errors accumulate
• Condition number affects accuracy
• Some algorithms more stable than others

Best practices:
• Use QR instead of normal equations for least squares
• Partial pivoting in Gaussian elimination
• SVD for rank-deficient problems
• Iterative refinement for improved accuracy
```

### Complexity Analysis
```
Operation complexities for n×n matrices:
• Matrix addition: O(n²)
• Matrix multiplication: O(n³) naive, O(n^2.81) Strassen
• Gaussian elimination: O(n³)
• LU decomposition: O(n³)
• QR decomposition: O(n³)
• SVD: O(n³)
• Eigenvalue computation: O(n³)

Memory considerations:
• Dense matrices: O(n²) storage
• Sparse matrices: store only non-zeros
• Band matrices: exploit structure
```

### Software and Implementation
```
High-performance libraries:
• BLAS (Basic Linear Algebra Subprograms)
• LAPACK (Linear Algebra Package)
• Eigen (C++)
• NumPy/SciPy (Python)
• MATLAB

Parallel computing:
• Matrix operations naturally parallelizable
• GPU acceleration (CUDA, OpenCL)
• Distributed computing for very large matrices
```

## Practice Problems

### Basic Operations
```
1. Given A = [1  2] and B = [5  6], compute:
             [3  4]         [7  8]
   a) A + B
   b) AB
   c) det(A)
   d) A⁻¹

2. For A = [2  1  0]
          [1  2  1], find det(A)
          [0  1  2]

3. Solve the system using matrices:
   2x + y = 5
   x + 3y = 8
```

### Eigenvalues and Eigenvectors
```
1. Find eigenvalues and eigenvectors of A = [3  1]
                                           [0  2]

2. Determine if A = [4  2] is diagonalizable
                    [1  3]

3. For symmetric matrix S = [2  1], find orthogonal diagonalization
                           [1  2]
```

### Applications
```
1. A 2D point (3, 4) is rotated 90° counterclockwise. 
   Find the transformation matrix and new coordinates.

2. In a Markov chain with transition matrix P = [0.8  0.2]
                                                [0.3  0.7]
   find the steady-state probabilities.

3. Use least squares to fit y = ax + b to points: (1,2), (2,3), (3,5), (4,4)
```

## Answer Key

### Basic Operations
```
1. a) A + B = [6  8 ]
              [10 12]
   
   b) AB = [19  22]
           [43  50]
   
   c) det(A) = 1·4 - 2·3 = -2
   
   d) A⁻¹ = [-2   1 ]
            [1.5 -0.5]

2. det(A) = 2(4-1) - 1(2-0) + 0 = 6 - 2 = 4

3. [2  1][x] = [5] → x = [1]
   [1  3][y]   [8]     y   [2]
```

### Eigenvalues and Eigenvectors
```
1. Characteristic equation: (3-λ)(2-λ) = 0
   λ₁ = 3: v₁ = [1], λ₂ = 2: v₂ = [1]
              [0]              [-1]

2. det(A - λI) = λ² - 7λ + 10 = 0
   λ₁ = 5, λ₂ = 2 (distinct eigenvalues → diagonalizable)

3. λ₁ = 3: v₁ = [1], λ₂ = 1: v₂ = [ 1]
              [1]              [-1]
   
   P = [1/√2   1/√2 ], D = [3  0]
       [1/√2  -1/√2]       [0  1]
```

### Applications
```
1. R(90°) = [0  -1], new point = [0  -1][3] = [-4]
            [1   0]              [1   0][4]   [3]

2. Solve πP = π: π = [3/5  2/5] = [0.6  0.4]

3. X = [1  1], y = [2], β = (XᵀX)⁻¹Xᵀy = [1.3]
       [2  1]      [3]                     [0.5]
       [3  1]      [5]
       [4  1]      [4]
   
   Best fit line: y = 1.3 + 0.5x
```

## Quick Reference

### Essential Formulas
- **Matrix multiplication**: (AB)ᵢⱼ = Σₖ aᵢₖbₖⱼ
- **Determinant (2×2)**: ad - bc
- **Matrix inverse (2×2)**: (1/det(A)) × [d  -b; -c  a]
- **Eigenvalue equation**: det(A - λI) = 0
- **Characteristic polynomial**: det(A - λI) = 0

### Key Properties
- (AB)ᵀ = BᵀAᵀ
- (AB)⁻¹ = B⁻¹A⁻¹
- det(AB) = det(A)det(B)
- tr(A) = sum of eigenvalues
- det(A) = product of eigenvalues

### Matrix Types
- **Symmetric**: A = Aᵀ
- **Orthogonal**: AAᵀ = I
- **Positive definite**: xᵀAx > 0 for all x ≠ 0
- **Diagonal**: non-zero elements only on main diagonal
- **Identity**: Iᵢⱼ = 1 if i = j, 0 otherwise

## History and Applications

Understanding the historical development and real-world applications of matrices provides valuable context for their importance in modern mathematics and science:

<iframe width="1512" height="776" src="https://www.youtube.com/embed/srfzaMTYJqg" title="History of Matrices - Usage of matrices in real-time situations." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## See Also

- **[BasicMath](../basic-math)**: Foundation arithmetic and number systems
- **[Algebra](../algebra)**: Working with variables and equations - systems of equations foundation
- **[Geometry](../geometry)**: Shapes, areas, and spatial relationships
- **[Statistics](../statistics)**: Data analysis and probability - correlation matrices, PCA
- **[Pre-Calculus](../pre-calculus)**: Advanced functions and mathematical analysis
- **[Calculus](../calculus)**: Multivariable calculus and Jacobian matrices
- **[Differential Equations](../differential-equations)**: Matrix methods for solving systems of DEs
- **[Numerical Methods](../numerical-methods)**: Computational linear algebra and iterative methods
- **[Complex Numbers](../complex-numbers)**: Complex matrices and eigenvalue problems