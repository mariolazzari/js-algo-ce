import { describe, expect, it } from "vitest";
import { fibonacci, fibonacciRec } from "algo/math/fibonacci";
import { factorial, factorialRec } from "algo/math/factorial";
import { isPrime } from "algo/math/prime";
import { isPowerOfTwo, isPowerOfTwoBitwise } from "algo/math/power";

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

  it("should compute Power of 2", () => {
    expect(isPowerOfTwo(1)).toBeTruthy();
    expect(isPowerOfTwo(2)).toBeTruthy();
    expect(isPowerOfTwo(5)).toBeFalsy();
  });

  it("should compute Power of 2 bitwise", () => {
    expect(isPowerOfTwoBitwise(1)).toBeTruthy();
    expect(isPowerOfTwoBitwise(2)).toBeTruthy();
    expect(isPowerOfTwoBitwise(5)).toBeFalsy();
  });

  it("should return Fibonacci number with recursion", () => {
    expect(fibonacciRec(0)).toBe(0);
    expect(fibonacciRec(1)).toBe(1);
    expect(fibonacciRec(6)).toBe(8);
  });

  it("should return Factiorial with recursion", () => {
    expect(factorialRec(0)).toBe(1);
    expect(factorialRec(4)).toBe(24);
    expect(factorialRec(5)).toBe(120);
  });
});
