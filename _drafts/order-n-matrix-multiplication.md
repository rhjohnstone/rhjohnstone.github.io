---
layout: post
title:  "O(n) Matrix Multiplication with Lightning Apps"
---

# $O(n)$ Matrix Multiplication with Lightning Apps

One of the biggest bottlenecks in modern machine learning is matrix multiplication.
Think about it: a square $n \times n$ matrix has $n$ rows and $n$ columns.
When we want to multiply two of these matrices together, we have to take the "inner" product (or dot "product") of every row of one with every column of the other.
So that's $n^2$ multiplications, right?
No!
Each of those multiplications requires multiplying every element of the row with every element of the column.
Since there are $n$ elements in each one, we actually end up doing $n^3$ multiplications in total.
So we can see that normal matrix multiplication has cubic complexity.
And the thing about cube numbers is that they grow exponentially, so it quickly becomes prohibitively expensive.
(Note that we can multiply matrices of different shapes if they satisfy certain conditions, but I'll continue to assume they're all $n \times n$ to keep things general.)
