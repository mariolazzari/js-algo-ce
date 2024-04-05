import { describe, expect, it } from "vitest";
import { LinkedList } from "data/lists";

describe("LinkedList", () => {
  it("should return empty linked list", () => {
    const list = new LinkedList();
    expect(list.isEmpty()).toBeTruthy();
  });

  it("should return size 0", () => {
    const list = new LinkedList();
    expect(list.getSize()).toBe(0);
  });
});
