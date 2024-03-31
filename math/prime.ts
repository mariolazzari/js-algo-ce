export function isPrime(n: number): boolean {
  if (n < 2) {
    return false;
  }

  // for (let i = 2; i < n; i++) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // O(sqrt(2))
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
