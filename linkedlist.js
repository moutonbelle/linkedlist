export default class List {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get tail() {
    // If list is empty, return null
    if (this.head === null) return null;

    // Traverse the list to the last node
    let curr = this.head;
    while (curr.next != null) curr = curr.next;
    return curr;
  }

  append(value = "") {
    let newNode = new Node(value);

    if (this.head === null) this.head = newNode;
    else this.tail.next = newNode;

    this.length++;
  }

  prepend(value = "") {
    let newNode = new Node(value);

    if (this.head === null) this.head = node;
    else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }
}

class Node {
  constructor(value = "") {
    this.value = value;
    this.next = null;
  }
}
