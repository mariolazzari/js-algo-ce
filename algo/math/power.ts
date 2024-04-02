export function isPowerOfTwo(n: number): boolean {
  if (n < 1) {
    return false;
  }

  //   for (let i = 0; i < n; i++) {
  //     if (Math.pow(2, i) === n) {
  //       return true;
  //     }
  //   }

  while (n > 1) {
    if (n % 2) {
      return false;
    }

    n /= 2;
  }

  return true;
}

export function isPowerOfTwoBitwise(n: number): boolean {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}
