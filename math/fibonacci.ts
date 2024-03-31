// O(n)
export function fibonacci(n: number): number[] {
  const fib: number[] = [0, 1]; // O(1)

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1]; // O(n)
  }

  return fib;
}

// recursion
export function fibonacciRec(n: number): number {
  if (n < 2) {
    return n;
  }

  return fibonacciRec(n - 1) + fibonacciRec(n - 2);
}
