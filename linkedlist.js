export default class List {
  constructor() {
    this.head = null;
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
    let node = new Node(value);

    if (this.head === null) this.head = node;
    else this.tail.next = node;
  }
}

class Node {
  constructor(value = "") {
    this.value = value;
    this.next = null;
  }
}
