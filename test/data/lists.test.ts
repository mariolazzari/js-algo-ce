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
    //    expect(list.print()).toBe("List is empty");
  });

  it("should append a node", () => {
    list.append(20);

    expect(list.isEmpty()).toBeFalsy();
    //    expect(list.print()).toBe("List is empty");
  });

  //   it("should print list values", () => {
  //     const list = new LinkedList<number>();
  //     list.prepend(10);
  //     list.prepend(20);
  //     list.prepend(30);

  //     expect(list.print()).toBe("10 20 30");
  //   });
});
