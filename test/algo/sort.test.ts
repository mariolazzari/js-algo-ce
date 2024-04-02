import { describe, expect, it } from "vitest";
import { bubbleSort } from "algo/sort/bubble";
import { insertionSort } from "algo/sort/insertion";
import { quickSort } from "algo/sort/quick";
import { mergeSort } from "algo/sort/merge";

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

  it("should perform Merge sort", () => {
    expect(mergeSort(arr)).toMatchObject(sorted);
  });
});
