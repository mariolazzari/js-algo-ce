// Fibonacci

// O(n)
export function fibonacci(n: number): number[] {
  const fib: number[] = [0, 1]; // O(1)

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1]; // O(n)
  }

  return fib;
}

[2, 3, 7].forEach(n => {
  console.log(`fibo(${n}) =`, fibonacci(n));
});
