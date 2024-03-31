import { describe, expect, it } from "vitest";
import { linearSearch } from "../search/linear";
import { binarySearch, binarySearchRec } from "../search/binary";

const arr = [-5, 2, 10, 4, 6];
const sortedArr = [-5, 2, 4, 6, 10];

describe("Search", () => {
  it("should perform Linear search", () => {
    expect(linearSearch(arr, 10)).toBe(2);
    expect(linearSearch(arr, 6)).toBe(4);
    expect(linearSearch(arr, 20)).toBe(-1);
  });

  it("should perform Binary search", () => {
    expect(binarySearch(sortedArr, 10)).toBe(4);
    expect(binarySearch(sortedArr, 6)).toBe(3);
    expect(binarySearch(sortedArr, 20)).toBe(-1);
  });

  it("should perform Binary search (recursive)", () => {
    expect(binarySearchRec(sortedArr, 10)).toBe(4);
    expect(binarySearchRec(sortedArr, 6)).toBe(3);
    expect(binarySearchRec(sortedArr, 20)).toBe(-1);
  });
});
