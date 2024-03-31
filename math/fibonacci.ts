// Fibonacci

// O(n)
function fibo(n: number): number[] {
    const fib: number[] = [0, 1]; // O(1)
    // if (n < 3) {
    //     return res;
    // }

    // let i = 2;
    // while (i < n) {
    //     const sum = res[i - 2] + res[i - 1];
    //     res.push(sum);
    //     i++;
    // }

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1] // O(n)
    }

    return fib;
}


[2, 3, 7].forEach(n => {
    console.log(`fibo(${n}) =`, fibo(n));
});
