export class Queue<T> {
  private items: T[] = [];

  constructor(items: T[] = []) {
    this.items = items;
  }

  enqueue(item: T) {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

export class CircularQueue<T> {
  private capacity: number;
  private items: (T | undefined)[];
  private currentLength: number;
  private rear: number;
  private front: number;

  constructor(capacity: number = 0) {
    this.capacity = capacity;
    this.items = new Array<T>(capacity);
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.capacity === this.currentLength;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element: T) {
    if (this.isEmpty()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength++;

      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = undefined;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.front];
  }

  print() {
    if (this.isEmpty()) {
      return console.log("Queue is empty");
    }

    let i: number;
    let str = "";

    for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
      str += this.items[i];
    }
    str += this.items[i];

    console.log(str);
  }
}
