import { describe, expect, it } from "vitest";
import { cartsianProduct } from "../misc/cartesian";
import { climbingStaircase } from "../misc/climb";

describe("Misc", () => {
  it("should perform Cartesian product", () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4, 5];
    const resExp = [
      [1, 3],
      [1, 4],
      [1, 5],
      [2, 3],
      [2, 4],
      [2, 5],
    ];

    const res = cartsianProduct(arr1, arr2);
    expect(res).toMatchObject(resExp);
    expect(res.length).toBe(resExp.length);
  });

  it("should perform Climbing staircase", () => {
    expect(climbingStaircase(1)).toBe(1);
    expect(climbingStaircase(2)).toBe(2);
    expect(climbingStaircase(3)).toBe(3);
    expect(climbingStaircase(4)).toBe(5);
    expect(climbingStaircase(5)).toBe(8);
  });
});
