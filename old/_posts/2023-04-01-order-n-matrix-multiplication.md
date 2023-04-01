---
layout: post
title:  "O(n) Matrix Multiplication with Lightning Apps"
---

# $O(n)$ Matrix Multiplication with Lightning Apps

One of the biggest bottlenecks in modern machine learning is matrix multiplication.
Think about it: a square \(n \times n\) matrix has $n$ rows and $n$ columns.
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

As we know, standard matrix multiplication is $O(n^3)$, because we have $n^2$ mini-jobs, each consisting of $n$ multiplcations.
The key insight was that we can dispatch each of these $n^2$ jobs to their own instance to be computed _in parallel_.

That is also not a typo.

Thanks to Lightning, we can spin up $n^2$ instances that each compute a single vector dot product, and send the scalar result back to the main node.
This means that the only real waiting we have to do is for the $n$ scalar multiplications that happen in a single vector dot product.
What's more, this is done in _pure Python_.
We don't have to introduce heavy dependencies on C, C++, etc.

## The app: `onmm`

The source code for `onmm` ($O(n)$ matrix multiplication) is [here](https://github.com/rhjohnstone/onmm).
Now, I did say we can perform the matrix multiplication in pure Python, but you'll see we have `streamlit` in the requirements.
This is just the app's front end to give us a convenient interface; the matrix multiplication itself _is in pure Python_.
Please clone the repo and run the app following the instructions there.

After you launch the app, you'll be shown the no-nonsense front (and only) page, which looks like this:

<img width="1658" alt="Screenshot 2023-03-31 at 17 25 24" src="https://user-images.githubusercontent.com/19284097/229067116-9cb48a23-6250-4fd5-93f6-42fed38fd5ae.png">

Go ahead and enter your favourite matrices (make sure the dimensions match up!).
For your copy-and-pasting convenience, try these:
```python
left  = [[1, 2, 3],   right = [[-1, 2, -3],
         [4, 5, 6],            [-4, 5, -6],
         [7, 8, 9]]            [-7, 8, -9]]
```
👏 Click 👏 that 👏 button! 👏

<img width="833" alt="Screenshot 2023-03-31 at 17 33 38" src="https://user-images.githubusercontent.com/19284097/229069153-36500d73-e2be-44a5-8045-9b6cf2f38e29.png">

Now, behind the scenes, Lightning will spin up $3^2 = 9$ separate instances, each of which will compute a single vector dot product, as soon as we press the button.
A sneak peek at the logs on the admin page will confirm this:

<img width="1656" alt="Screenshot 2023-03-31 at 17 38 54" src="https://user-images.githubusercontent.com/19284097/229070902-16b2a3d7-3ec3-4453-803c-c9bdf876c786.png">

Now return to the main UI page (or refresh the page if you never left), and you'll be greeted by a pleasant sight:

<img width="788" alt="Screenshot 2023-03-31 at 17 53 38" src="https://user-images.githubusercontent.com/19284097/229074401-fec7c524-9d8d-4d34-a822-bd4c12426c49.png">

You can now simply copy the freshly-printed matrix and seamlessly paste it back in to whatever external code you're running.

## Future work
The question I know you're asking: why spin up $n^2$ instances that each do $O(n)$ work, when we could spin up $n^3$ instances that each do $O(1)$ work?
Well, you're right!
However I will leave that as an exercise for the reader: PRs are welcome.
Literally the only downside is that Lightning might not have enough instances available, once $n$ gets big enough, assuming they only have finite resources (I haven't checked this).

## Conclusion
Lightning Apps help us smash previously believed limits on algorithmic complexity.

Feel free to start a [discussion](https://github.com/rhjohnstone/onmm/discussions)!
