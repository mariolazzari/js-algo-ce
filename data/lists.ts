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

  isEmpty(): boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }

  prepend(value: T): void {
    const node = new ListNode(value);
    this.head = node;
    if (!this.isEmpty()) {
      node.next = this.head;
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
