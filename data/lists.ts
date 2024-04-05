class ListNode<T> {
  public value: T;
  public next?: ListNode<T>;

  constructor(value: T) {
    this.value = value;
    this.next = undefined;
  }
}

export class LinkedList<T> {
  private head?: ListNode<T>;
  private size: number;

  constructor() {
    this.head = undefined;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value: T) {
    const node = new ListNode(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
}
