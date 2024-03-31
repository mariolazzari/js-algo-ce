import { describe, expect, it } from "vitest";
import { bubbleSort } from "../sort/bubble";

const arr = [-6, 20, 8, -2, 4];
const sorted = arr.sort((a, b) => (a > b ? 1 : -1));

describe("Search", () => {
  it("should perform Linear search", () => {
    expect(bubbleSort(arr)).toMatchObject(sorted);
  });
});
