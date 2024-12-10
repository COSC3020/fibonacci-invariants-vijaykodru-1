function fib(n) {
    // Base case for n = 0
    if (n === 0) {
        return [0];
    }
    // Base case for n = 1
    if (n === 1) {
        return [0, 1];
    }
    // Recursive case to calculate the Fibonacci sequence up to n
    else {
        var a = fib(n - 1);
        a.push(a[a.length - 1] + a[a.length - 2]);
        return a;
    }
}
