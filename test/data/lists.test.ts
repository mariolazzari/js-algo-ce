import { describe, expect, it } from "vitest";
import { LinkedList } from "data/lists";

const list = new LinkedList();

describe("LinkedList", () => {
  it("should return empty linked list", () => {
    expect(list.isEmpty()).toBeTruthy();
  });

  it("should return size 0", () => {
    expect(list.getSize()).toBe(0);
  });

  it("should print empty message", () => {
    expect(list.print()).toBe("List is empty");
  });

  it("should prepend a node", () => {
    list.prepend(10);

    expect(list.isEmpty()).toBeFalsy();
    expect(list.print()).toBe("List is empty");
  });

  it("should append a node", () => {
    list.append(20);

    expect(list.isEmpty()).toBeFalsy();
    //    expect(list.print()).toBe("List is empty");
  });

  it("should insert a node", () => {
    list.insert(30, 2);

    expect(list.isEmpty()).toBeFalsy();
  });

  it("should print list values", () => {
    expect(list.print()).toBe("10 20 30");
  });
});
