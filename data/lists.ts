class ListNode<T> {
  public value: T;
  public next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList<T> {
  private head: ListNode<T> | null;
  private size: number;

  constructor() {
    this.head = null;
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

  print(): string {
    if (this.isEmpty()) {
      return "List is empty";
    }

    let cur = this.head;
    let listValues = "";

    while (cur) {
      listValues += `${cur.value} `;

      console.log(listValues);
      cur = cur.next;
    }

    return listValues.trim();
  }
}
