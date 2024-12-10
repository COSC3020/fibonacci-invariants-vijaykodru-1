# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.


ANSWER:

A good invariant for the recursive fib() function that I implemented is that at the start of each recursive call, the array returned by fib(n-1) correctly contains the Fibonacci sequence from fib(0) to fib(n-1), with the last two elements representing fib(n-2) and fib(n-1). Initially, fib(0) and fib(1) return the correct Fibonacci sequences [0] and [0, 1] as they are the base cases respectively. For anything n > 1, the function recursively calls fib(n-1), and then appends the next Fibonacci number i.e, fib(n) = fib(n-1) + fib(n-2). This invariant ensures that the function builds the correct Fibonacci sequence step by step based on the correct values that fib(n-1) produces.


I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice





