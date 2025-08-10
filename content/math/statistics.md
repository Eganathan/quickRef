---
title: "Statistics"
date: 2024-01-01T00:00:00Z
draft: false
description: "Comprehensive statistics and probability guide covering data analysis, descriptive statistics, probability theory, and statistical inference."
categories: ["math"]
tags: ["statistics", "probability", "data-analysis", "mean", "median", "standard-deviation", "normal-distribution", "hypothesis-testing"]
---

## Prerequisites

**Required:**
- **[BasicMath](../basic-math)** - Arithmetic, fractions, percentages, basic problem-solving

**Helpful:**
- **[Algebra](../algebra)** - For formulas and equation manipulation
- Basic understanding of square roots and exponents

## Overview

Statistics is the science of collecting, analyzing, interpreting, and presenting data to make informed decisions. It helps us understand patterns, make predictions, and draw meaningful conclusions from information in an uncertain world.

This guide covers descriptive statistics (summarizing data), probability theory (understanding uncertainty), and inferential statistics (making conclusions about populations). These skills are essential in science, business, psychology, economics, and everyday decision-making.

## Types of Data

Understanding your data type determines which statistical methods to use.

### Categorical Data (Qualitative)

#### Nominal Data
Categories with no natural order.
```
Examples:
• Colors: red, blue, green
• Gender: male, female, non-binary  
• Marital status: single, married, divorced
• Blood type: A, B, AB, O

Analysis methods:
• Count frequencies
• Calculate percentages
• Create bar charts, pie charts
```

#### Ordinal Data  
Categories with natural order, but no measurable distance between categories.
```
Examples:
• Education level: high school, bachelor's, master's, PhD
• Survey responses: strongly disagree, disagree, neutral, agree, strongly agree
• Movie ratings: 1 star, 2 stars, 3 stars, 4 stars, 5 stars
• Grade levels: freshman, sophomore, junior, senior

Analysis methods:
• All nominal methods plus
• Find median and mode
• Use non-parametric tests
```

### Numerical Data (Quantitative)

#### Discrete Data
Countable values, usually integers.
```
Examples:
• Number of children in family: 0, 1, 2, 3, 4...
• Test scores: 85, 92, 78, 95...
• Cars sold per day: 5, 8, 12, 3...
• Goals scored: 0, 1, 2, 3...

Characteristics:
• Often result from counting
• Gaps between possible values
• Can't have fractional values in context
```

#### Continuous Data
Can take any value within a range.
```
Examples:
• Height: 5.7 feet, 6.125 feet, 5.83 feet...
• Weight: 150.3 lbs, 142.7 lbs...
• Temperature: 72.5°F, 73.2°F...
• Time: 2.35 seconds, 4.127 minutes...

Characteristics:
• Result from measuring
• Infinite possible values in any range
• Can be measured to any precision
```

## Descriptive Statistics

### Measures of Central Tendency

#### Mean (Average)
Sum of all values divided by number of values.
```
Formula: x̄ = (Σx) / n

Example: Test scores 85, 92, 78, 95, 90
Mean = (85 + 92 + 78 + 95 + 90) ÷ 5 = 440 ÷ 5 = 88

Properties:
• Uses all data points
• Affected by extreme values (outliers)
• Best for symmetric distributions
• Can be non-integer even with integer data
```

#### Median
Middle value when data is arranged in order.
```
For odd number of values: exact middle
For even number of values: average of two middle values

Example 1 (odd): 78, 85, 90, 92, 95
Median = 90 (middle value)

Example 2 (even): 78, 85, 90, 92, 95, 98
Median = (90 + 92) ÷ 2 = 91

Properties:
• Not affected by extreme values
• Always a "typical" value
• Best for skewed distributions
• Good for ordinal data
```

#### Mode
Most frequently occurring value(s).
```
Example 1: 2, 3, 3, 4, 5, 5, 5, 6
Mode = 5 (appears most often)

Example 2: 1, 2, 2, 3, 3, 4 
Modes = 2 and 3 (bimodal)

Example 3: 1, 2, 3, 4, 5
No mode (all values appear equally)

Properties:
• Can have multiple modes
• Works with categorical data
• May not exist or may not be unique
• Not affected by extreme values
```

### When to Use Each Measure
```
Symmetric distribution: Mean ≈ Median ≈ Mode
• Use mean (most informative)

Right-skewed (tail to right): Mean > Median > Mode
• Use median (mean inflated by high outliers)

Left-skewed (tail to left): Mean < Median < Mode  
• Use median (mean deflated by low outliers)

Categorical data: Only mode makes sense

With outliers: Use median (more robust)
```

### Measures of Variability

#### Range
Difference between maximum and minimum values.
```
Range = Maximum - Minimum

Example: 78, 85, 90, 92, 95
Range = 95 - 78 = 17

Properties:
• Simple to calculate
• Uses only two data points
• Heavily affected by outliers
• Useful for quick assessment
```

#### Interquartile Range (IQR)
Range of the middle 50% of data.
```
IQR = Q3 - Q1 (75th percentile - 25th percentile)

Steps to find:
1. Find median (Q2)
2. Find median of lower half (Q1)  
3. Find median of upper half (Q3)
4. Calculate IQR = Q3 - Q1

Example: 78, 85, 90, 92, 95, 98, 100
Q1 = 85, Q2 = 92, Q3 = 98
IQR = 98 - 85 = 13

Properties:
• Not affected by outliers
• Shows spread of middle 50%
• Used in box plots
• Good for skewed distributions
```

#### Variance
Average of squared deviations from the mean.
```
Population variance: σ² = Σ(x - μ)² / N
Sample variance: s² = Σ(x - x̄)² / (n - 1)

Example: Data 2, 4, 6, 8
Mean = 5
Deviations: -3, -1, 1, 3
Squared deviations: 9, 1, 1, 9
Sample variance = (9+1+1+9)/(4-1) = 20/3 ≈ 6.67

Properties:
• Uses all data points
• Always positive
• Units are squared
• Basis for standard deviation
```

#### Standard Deviation
Square root of variance; measures typical deviation from mean.
```
Population: σ = √(σ²)
Sample: s = √(s²)

Using previous example:
Standard deviation = √6.67 ≈ 2.58

Properties:
• Same units as original data
• About 68% of data within 1 SD of mean (normal distribution)
• About 95% of data within 2 SD of mean
• Most commonly used measure of spread

Interpretation:
• Small SD: data clustered near mean
• Large SD: data spread out
```

### Data Visualization

#### Histograms
Show distribution of numerical data.
```
Construction:
1. Divide data range into bins (intervals)
2. Count frequency in each bin
3. Draw bars with height = frequency

Example: Heights of students
Bins: 5'0"-5'2", 5'3"-5'5", 5'6"-5'8", etc.
Heights of bars show how many students in each range

Interpretation:
• Shape of distribution
• Central tendency
• Variability
• Outliers
```

#### Box Plots (Box-and-Whisker Plots)
Show five-number summary.
```
Five-number summary:
• Minimum (excluding outliers)
• Q1 (25th percentile)
• Median (Q2, 50th percentile)  
• Q3 (75th percentile)
• Maximum (excluding outliers)

Box plot shows:
• Box from Q1 to Q3 (middle 50%)
• Line at median inside box
• Whiskers extend to min/max (or 1.5×IQR)
• Outliers plotted as individual points

Outlier definition: 
• Below Q1 - 1.5×IQR
• Above Q3 + 1.5×IQR
```

#### Scatterplots
Show relationship between two numerical variables.
```
Construction:
• x-axis: independent variable
• y-axis: dependent variable
• Each point represents one observation

Patterns to look for:
• Positive relationship: as x increases, y increases
• Negative relationship: as x increases, y decreases  
• No relationship: no clear pattern
• Non-linear relationships: curved patterns
• Outliers: points far from main pattern
```

## Probability

### Basic Probability Concepts

#### Probability Definition
```
Probability = (Number of favorable outcomes) / (Total number of possible outcomes)

Example: Rolling a fair six-sided die
P(rolling a 3) = 1/6 ≈ 0.167 or 16.7%

Properties of probability:
• Always between 0 and 1 (or 0% and 100%)
• P(impossible event) = 0
• P(certain event) = 1
• Sum of all possible outcomes = 1
```

#### Sample Space and Events
```
Sample Space (S): Set of all possible outcomes
Event (E): Subset of sample space

Example: Flipping two coins
Sample space S = {HH, HT, TH, TT}
Event "exactly one head" = {HT, TH}
P(exactly one head) = 2/4 = 0.5
```

### Probability Rules

#### Complement Rule
```
P(A') = 1 - P(A)
where A' is "not A"

Example: P(not rolling a 6) = 1 - P(rolling a 6) = 1 - 1/6 = 5/6
```

#### Addition Rule
```
For mutually exclusive events (can't happen together):
P(A or B) = P(A) + P(B)

For non-mutually exclusive events:
P(A or B) = P(A) + P(B) - P(A and B)

Example: Drawing a card
P(King or Heart) = P(King) + P(Heart) - P(King of Hearts)
                  = 4/52 + 13/52 - 1/52 = 16/52 = 4/13
```

#### Multiplication Rule
```
For independent events (one doesn't affect the other):
P(A and B) = P(A) × P(B)

Example: Two coin flips
P(HH) = P(H) × P(H) = 1/2 × 1/2 = 1/4

For dependent events:
P(A and B) = P(A) × P(B|A)
where P(B|A) is probability of B given A occurred
```

#### Conditional Probability
```
P(B|A) = P(A and B) / P(A)

Example: Drawing cards without replacement
P(2nd card is King | 1st card is King) = 3/51
(3 Kings left out of 51 remaining cards)
```

### Common Probability Distributions

#### Discrete Distributions

**Binomial Distribution**
```
Used for: Fixed number of independent trials, each with same probability of success

Parameters: n (number of trials), p (probability of success)

Example: 10 coin flips, probability of exactly 6 heads
P(X = k) = C(n,k) × p^k × (1-p)^(n-k)
where C(n,k) = n!/(k!(n-k)!)

Properties:
• Mean = np
• Standard deviation = √(np(1-p))
```

#### Continuous Distributions

**Normal Distribution**
```
Bell-shaped, symmetric distribution

Parameters: μ (mean), σ (standard deviation)

Properties:
• 68% of data within 1 SD of mean (μ ± σ)
• 95% of data within 2 SD of mean (μ ± 2σ)  
• 99.7% of data within 3 SD of mean (μ ± 3σ)

Standard Normal Distribution: μ = 0, σ = 1
• Use Z-scores: Z = (x - μ)/σ
• Look up probabilities in Z-table
```

### Z-Scores and Standard Normal Distribution

#### Z-Score Calculation
```
Z = (x - μ) / σ

Z-score tells you:
• How many standard deviations x is from the mean
• Positive Z: above mean
• Negative Z: below mean  
• Z = 0: exactly at mean

Example: Test scores have μ = 75, σ = 10
Student scores 85: Z = (85-75)/10 = 1.0
Student is 1 standard deviation above mean
```

#### Using Z-Scores
```
Applications:
• Compare scores from different distributions
• Find percentiles
• Identify outliers (|Z| > 2 or 3)
• Calculate probabilities

Example: What percentage of students score below 85?
Z = 1.0, look up in table: 84.13%
```

## Inferential Statistics

### Sampling and Sampling Distributions

#### Population vs. Sample
```
Population: Complete group being studied
• Usually too large to study entirely
• Parameters: μ (mean), σ (standard deviation)

Sample: Subset of population actually studied  
• Should represent population
• Statistics: x̄ (mean), s (standard deviation)

Goal: Use sample statistics to estimate population parameters
```

#### Sampling Methods
```
Simple Random Sampling: Each member has equal chance
• Use random number generator
• Best method when feasible

Stratified Sampling: Divide into groups, sample from each
• Ensures representation of subgroups
• Example: Sample by grade level

Cluster Sampling: Randomly select entire groups
• Practical when groups are convenient
• Example: Select random schools, survey all students

Systematic Sampling: Select every kth member
• Start randomly, then use pattern
• Example: Survey every 10th customer
```

#### Central Limit Theorem
```
For large sample sizes (n ≥ 30):
• Sampling distribution of means is approximately normal
• Mean of sampling distribution equals population mean
• Standard error = σ/√n

This means:
• Even if population isn't normal, sample means are
• Larger samples give more accurate estimates
• Foundation for confidence intervals and hypothesis testing
```

### Confidence Intervals

#### Concept
Range of values likely to contain the true population parameter.

```
Interpretation of 95% confidence interval:
"If we repeated this sampling process many times, 95% of the 
intervals would contain the true population mean"

NOT: "95% chance the true mean is in this interval"
```

#### Confidence Interval for Mean
```
When σ known (rare): x̄ ± z(σ/√n)
When σ unknown (common): x̄ ± t(s/√n)

Where:
• x̄ = sample mean
• z or t = critical value (depends on confidence level)
• s = sample standard deviation  
• n = sample size

Example: Sample of 25 students, x̄ = 78, s = 12, 95% confidence
t-value for df = 24, α = 0.05 is 2.064
Margin of error = 2.064 × (12/√25) = 2.064 × 2.4 = 4.95
CI: 78 ± 4.95 = (73.05, 82.95)
```

#### Factors Affecting Interval Width
```
Wider intervals (less precise):
• Higher confidence level (90% → 95% → 99%)
• Smaller sample size
• Larger standard deviation

Narrower intervals (more precise):
• Lower confidence level
• Larger sample size  
• Smaller standard deviation
```

### Hypothesis Testing

#### Basic Concepts
```
Null Hypothesis (H₀): No effect, no difference, status quo
Alternative Hypothesis (H₁ or Hₐ): What we're trying to prove

Example:
H₀: μ = 100 (mean IQ is 100)
H₁: μ ≠ 100 (mean IQ is not 100)

Types of tests:
• Two-tailed: H₁: μ ≠ μ₀ (different from)
• One-tailed: H₁: μ > μ₀ (greater than) or H₁: μ < μ₀ (less than)
```

#### P-Value Method
```
P-value: Probability of observing data this extreme (or more extreme) 
if null hypothesis is true

Decision rule:
• If p-value ≤ α, reject H₀ (significant result)
• If p-value > α, fail to reject H₀ (not significant)

Common significance levels: α = 0.05, 0.01, 0.10

Interpretation:
• Small p-value: Strong evidence against H₀
• Large p-value: Insufficient evidence to reject H₀
```

#### Type I and Type II Errors
```
Type I Error (α): Rejecting true H₀
• "False positive"
• Probability = significance level

Type II Error (β): Failing to reject false H₀  
• "False negative"
• Power = 1 - β (probability of correctly rejecting false H₀)

Truth vs. Decision Table:
                    H₀ True    H₀ False
Reject H₀          Type I     Correct
Fail to reject H₀   Correct    Type II
```

#### Example Hypothesis Test
```
Question: Is the mean height of students different from 68 inches?
H₀: μ = 68
H₁: μ ≠ 68
α = 0.05

Sample: n = 36, x̄ = 69.5, s = 3.6

Test statistic: t = (x̄ - μ₀)/(s/√n) = (69.5 - 68)/(3.6/√36) = 2.5

Degrees of freedom: df = 36 - 1 = 35
P-value for two-tailed test with t = 2.5: p ≈ 0.017

Decision: p-value (0.017) < α (0.05), so reject H₀
Conclusion: Mean height is significantly different from 68 inches
```

## Correlation and Regression

### Correlation

#### Pearson Correlation Coefficient
Measures strength and direction of linear relationship between two variables.
```
Formula: r = Σ((x-x̄)(y-ȳ)) / √(Σ(x-x̄)²Σ(y-ȳ)²)

Properties:
• Always between -1 and 1
• r = 1: Perfect positive linear relationship
• r = -1: Perfect negative linear relationship  
• r = 0: No linear relationship
• |r| > 0.7: Strong relationship
• 0.3 < |r| < 0.7: Moderate relationship
• |r| < 0.3: Weak relationship
```

#### Correlation vs. Causation
```
Important principle: Correlation does not imply causation

Possible explanations for correlation:
• A causes B
• B causes A  
• Third variable C causes both A and B
• Coincidence

Examples of spurious correlations:
• Ice cream sales and drowning deaths (both caused by hot weather)
• Number of fire trucks and property damage (both caused by fire size)
```

### Linear Regression

#### Simple Linear Regression
Predicts one variable (y) using another variable (x).
```
Equation: ŷ = a + bx
where:
• ŷ = predicted y value
• a = y-intercept (value when x = 0)
• b = slope (change in y per unit change in x)

Calculation:
b = r × (sy/sx)
a = ȳ - b × x̄

Example: Predicting test score (y) from hours studied (x)
If b = 8, then each additional hour studied increases predicted 
score by 8 points
```

#### Coefficient of Determination (R²)
```
R² = r² (for simple regression)

Interpretation:
• Percentage of variation in y explained by x
• Always between 0 and 1
• R² = 0.64 means 64% of variation in y is explained by x

Example: Height and weight correlation r = 0.8
R² = 0.64, so 64% of weight variation is explained by height
36% is due to other factors
```

#### Residuals
```
Residual = Actual y - Predicted y = y - ŷ

Properties of good regression:
• Residuals randomly scattered around 0
• No clear patterns in residual plots
• Approximately normal distribution of residuals

Red flags:
• Curved pattern: relationship might not be linear
• Fan pattern: non-constant variance
• Outliers: points far from regression line
```

## Practical Applications

### Quality Control
```
Control Charts: Monitor process over time
• Plot sample means or individual values
• Include control limits (usually ±3σ)
• Points outside limits suggest process problems

Six Sigma: Quality improvement methodology
• Goal: < 3.4 defects per million opportunities
• Uses statistical methods to reduce variation
```

### Medical Research
```
Clinical Trials: Test effectiveness of treatments
• Randomized controlled trials (RCT)
• Control for confounding variables
• Statistical significance vs. clinical significance

Diagnostic Tests: Evaluate test accuracy
• Sensitivity: P(positive test | disease present)
• Specificity: P(negative test | disease absent)  
• Positive predictive value: P(disease | positive test)
```

### Business Analytics
```
A/B Testing: Compare two versions
• Random assignment to groups
• Measure conversion rates, click-through rates, etc.
• Use hypothesis testing to determine significance

Market Research: Understanding customers
• Survey design and sampling
• Confidence intervals for population proportions
• Segmentation analysis
```

### Sports Analytics
```
Player Performance: 
• Batting averages (sample means)
• Confidence intervals for true ability
• Regression analysis for predicting performance

Team Strategy:
• Win probability models
• Optimal decision making under uncertainty
```

## Practice Problems

### Descriptive Statistics
```
Dataset: 12, 15, 18, 22, 25, 28, 32, 35
1. Calculate mean, median, and mode
2. Calculate range, variance, and standard deviation
3. Find Q1, Q2, Q3, and IQR
```

### Probability
```
1. You roll two dice. What's the probability of getting a sum of 7?
2. A bag contains 5 red balls and 3 blue balls. You draw 2 balls without replacement. What's P(both red)?
3. If P(A) = 0.3, P(B) = 0.4, and P(A and B) = 0.1, find P(A or B)
```

### Normal Distribution
```
Heights are normally distributed with μ = 70 inches, σ = 4 inches.
1. What percentage of people are taller than 74 inches?
2. What height represents the 90th percentile?
3. Between what two heights do the middle 95% fall?
```

### Hypothesis Testing
```
A manufacturer claims light bulbs last 1000 hours on average. 
You test 25 bulbs and find x̄ = 980, s = 50.
1. Test if the mean is significantly different from 1000 (α = 0.05)
2. What is the p-value?
3. What would you conclude?
```

### Correlation and Regression
```
Data on advertising spend (x) and sales (y):
x: 10, 20, 30, 40, 50
y: 25, 35, 50, 55, 70

1. Calculate the correlation coefficient
2. Find the regression equation
3. Predict sales when advertising spend is $35
4. Calculate R² and interpret
```

## Answer Key

### Descriptive Statistics
```
1. Mean = 23.375, Median = 23.5, No mode
2. Range = 23, Variance ≈ 69.7, Standard deviation ≈ 8.35
3. Q1 = 16.5, Q2 = 23.5, Q3 = 30, IQR = 13.5
```

### Probability
```
1. P(sum = 7) = 6/36 = 1/6 ≈ 0.167
2. P(both red) = (5/8) × (4/7) = 20/56 = 5/14 ≈ 0.357
3. P(A or B) = 0.3 + 0.4 - 0.1 = 0.6
```

### Normal Distribution
```
1. Z = (74-70)/4 = 1, P(Z > 1) ≈ 15.87%
2. 90th percentile: Z = 1.28, height = 70 + 1.28(4) = 75.12 inches
3. Middle 95%: 70 ± 1.96(4) = (62.16, 77.84) inches
```

### Hypothesis Testing
```
1. t = (980-1000)/(50/√25) = -2.0, p-value ≈ 0.056
2. p-value ≈ 0.056
3. Fail to reject H₀ (p > 0.05), insufficient evidence that mean ≠ 1000
```

### Correlation and Regression
```
1. r ≈ 0.93 (strong positive correlation)
2. ŷ = 12 + 1.1x
3. Sales prediction for $35: ŷ = 12 + 1.1(35) = 50.5
4. R² ≈ 0.86, meaning 86% of sales variation explained by advertising
```

## Quick Reference

### Measures of Center
- **Mean**: Sum ÷ count
- **Median**: Middle value
- **Mode**: Most frequent value

### Measures of Spread
- **Range**: Max - Min
- **IQR**: Q3 - Q1
- **Standard deviation**: √(variance)

### Probability Rules
- **Complement**: P(A') = 1 - P(A)
- **Addition**: P(A or B) = P(A) + P(B) - P(A and B)
- **Multiplication**: P(A and B) = P(A) × P(B) [if independent]

### Normal Distribution (68-95-99.7 Rule)
- 68% within 1 SD
- 95% within 2 SD  
- 99.7% within 3 SD

### Confidence Interval
- x̄ ± t(s/√n) [when σ unknown]

### Hypothesis Testing
- If p-value ≤ α, reject H₀
- If p-value > α, fail to reject H₀

## See Also

- **[BasicMath](../basic-math)**: Foundation arithmetic and number systems - required
- **[Algebra](../algebra)**: Working with variables and equations - helpful for formulas
- **[Geometry](../geometry)**: Shapes, areas, and spatial relationships
- **[Pre-Calculus](../pre-calculus)**: Advanced functions and mathematical analysis
- **[Calculus](../calculus)**: Foundation for advanced statistical theory
- **[Matrices](../matrices)**: Correlation matrices, regression, and multivariate analysis
- **[Numerical Methods](../numerical-methods)**: Computational statistics and data analysis
- **[Mathematical Modeling](../mathematical-modeling)**: Stochastic models and validation