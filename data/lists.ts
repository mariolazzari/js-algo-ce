class ListNode<T> {
  public value: T;
  public next?: ListNode<T>;

  constructor(value: T) {
    this.value = value;
    this.next = undefined;
  }
}

export class LinkedList<T> {
  private head: ListNode<T> | undefined;
  private size: number;

  constructor() {
    this.head = undefined;
    this.size = 0;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }

  private createNode(value: T) {
    const node = new ListNode(value);
    return node;
  }

  // O(1)
  prepend(value: T): void {
    const node = this.createNode(value);
    if (this.isEmpty()) {
      this.head = node;
    }
    {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // O(1)
  append(value: T): void {
    const node = this.createNode(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;

      while (prev?.next) {
        prev = prev.next;
      }

      if (prev) {
        prev.next = node;
      }
    }
    this.size++;
  }

  insert(value: T, index: number): void {
    if (index < 0 || index > this.size) {
      return;
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new ListNode(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev?.next;
      }

      if (prev) {
        node.next = prev?.next;
        prev.next = node;
        this.size++;
      }
    }
  }

  removeFrom(index: number) {
    if (index < 0 || index > this.size) {
      return null;
    }

    let removed: ListNode<T> | undefined;
    if (index === 0) {
      removed = this.head;
      this.head = this.head?.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev?.next;
      }
      removed = prev?.next;

      if (prev) {
        prev.next = removed?.next;
      }
    }

    this.size--;
    return removed?.value;
  }

  print(): string {
    if (this.isEmpty()) {
      return "List is empty";
    }

    return "test";
    // let cur = this.head;
    // let listValues = "";

    // while (cur) {
    //   listValues += `${cur.value} `;

    //   console.log(listValues);
    //   cur = cur.next;
    // }

    // return listValues.trim();
  }
}
