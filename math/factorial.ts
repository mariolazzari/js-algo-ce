function factorial(n: number): number {
  let fact = 1;

  // O(n)
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }

  return fact;
}

[0, 1, 4, 5].forEach(n => {
  console.log(`${n}! = `, factorial(n));
});
