import { CircularQueue, Queue } from "data/queues";
import { describe, expect, it } from "vitest";

describe("Queues", () => {
  it("should return empty queue", () => {
    const queue = new Queue<number>();
    expect(queue.isEmpty()).toBeTruthy();
  });

  it("should enqueue 3 elements", () => {
    const queue = new Queue<number>();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.size()).toBe(3);
  });

  it("should dequeue 1 element1", () => {
    const queue = new Queue<number>();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    const item = queue.dequeue();

    expect(queue.size()).toBe(2);
    expect(item).toBe(10);
  });
});

describe("Circular Queues", () => {
  it("should return empty queue", () => {
    const cq = new CircularQueue<number>(5);
    expect(cq.isEmpty()).toBeTruthy();
  });

  it("should dequeue 1 element1", () => {
    const cq = new CircularQueue<number>(5);
    cq.enqueue(10);
    cq.enqueue(20);
    cq.enqueue(30);
    const item = cq.dequeue();
    console.log(item);

    expect(item).toBe(10);
  });
});
