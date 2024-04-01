import { describe, expect, it } from "vitest";
import { bubbleSort } from "../sort/bubble";
import { insertionSort } from "../sort/insertion";
import { quickSort } from "../sort/quick";

const arr = [-6, 20, 8, -2, 4];
const sorted = [-6, -2, 4, 8, 20];

describe("Sort", () => {
  it("should perform Bubble sort", () => {
    expect(bubbleSort(arr)).toMatchObject(sorted);
  });

  it("should perform Insertion sort", () => {
    expect(insertionSort(arr)).toMatchObject(sorted);
  });

  it("should perform Quick sort", () => {
    expect(quickSort(arr)).toMatchObject(sorted);
  });
});
