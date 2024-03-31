import { describe, expect, it } from "vitest";
import { fibonacci } from "../math/fibonacci";
import { factorial } from "../math/factorial";
import { isPrime } from "../math/prime";

describe("Math", () => {
  it("should compute Fibonacci series", () => {
    const fib = [0, 1];
    const fib3 = [...fib, 1];
    const fib7 = [...fib3, 2, 3, 5, 8];

    expect(fibonacci(0)).toMatchObject(fib);
    expect(fibonacci(1)).toMatchObject(fib);
    expect(fibonacci(2)).toMatchObject(fib);
    expect(fibonacci(3)).toMatchObject(fib3);
    expect(fibonacci(7)).toMatchObject(fib7);
  });

  it("should compute Factorial", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(4)).toBe(24);
    expect(factorial(5)).toBe(120);
  });

  it("should compute Prime number", () => {
    expect(isPrime(1)).toBeFalsy();
    expect(isPrime(4)).toBeFalsy();
    expect(isPrime(5)).toBeTruthy();
  });
});
