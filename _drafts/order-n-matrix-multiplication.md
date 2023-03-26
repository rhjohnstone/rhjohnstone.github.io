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

Fortunately, [lightning.ai](https://lightning.ai/) recently released their [Lightning App](https://lightning.ai/docs/app/stable/) framework.
Put simply, Lightning Apps allow for intelligent and dynamic resource handling, primarily for machine learning.
In our lab, we decided to push Lightning to its limit and tackle the matrix multiplication problem.
The solution, as is so often the case in mathematics, is beautiful in its simplicity, and allows us to achieve $O(n)$ complexity.

That is not a typo.

As we know, standard matrix multiplication is $O(n^3)$, because we have $n^2^ mini-jobs, each consisting of $n$ multiplcations.
The key insight was that we can dispatch each of these $n^2$ jobs to their own instance to be computed _in parallel_.

That is also not a typo.

Thanks to Lightning, we can spin up $n^2$ instances that each compute a single vector dot product, and send the scalar result back to the main node.
This means that the only real waiting we have to do is for the $n$ scalar multiplications that happen in a single vector dot product.
What's more, this is done in _pure Python_.
We don't have to introduce heavy dependencies on C, C++, etc.
