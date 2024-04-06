import { describe, expect, it } from "vitest";
import { CircularQueue, Queue } from "data/queues";

const queue = new Queue<number>();
const cq = new CircularQueue<number>(3);

describe("Queues", () => {
  it("should return empty queue", () => {
    expect(queue.isEmpty()).toBeTruthy();
  });

  it("should enqueue 3 elements", () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.size()).toBe(3);
  });

  it("should dequeue 1 element1", () => {
    const item = queue.dequeue();

    expect(queue.size()).toBe(2);
    expect(item).toBe(10);
  });
});

describe("Circular Queues", () => {
  it("should return empty queue", () => {
    expect(cq.isEmpty()).toBeTruthy();
  });

  it("should return empty queue", () => {
    expect(cq.isEmpty()).toBeTruthy();
  });

  it("should enqueue 3 elements", () => {
    cq.enqueue(10);
    cq.enqueue(20);
    cq.enqueue(30);

    const item = cq.dequeue();
    expect(item).toBe(10);
  });

  // it("should by full", () => {
  //   expect(cq.isFull()).toBeTruthy();
  // });
});
