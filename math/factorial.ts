export function factorial(n: number): number {
  let fact = 1;

  // O(n)
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }

  return fact;
}

export function factorialRec(n: number): number {
  if (n < 1) {
    return 1;
  }

  return n * factorialRec(n - 1);
}
