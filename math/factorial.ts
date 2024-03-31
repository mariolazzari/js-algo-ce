export function factorial(n: number): number {
  let fact = 1;

  // O(n)
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }

  return fact;
}
