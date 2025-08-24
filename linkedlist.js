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

  at(i) {
    i = Number(i);
    // If index is beyond list, return null
    if (i >= this.length) return null;

    if (i === 0) return this.head;

    // Otherwise traverse the list to index i
    let target = this.head;
    for (let j = 0; j < i; j++) target = target.next;
    return target;
  }

  pop() {
    // If list is empty, return null
    if (this.head === null) return null;

    // If list has only one element, pop it
    if (this.length === 1) {
      let target = this.head;
      this.head = null;
      this.length--;
      return target;
    }

    // Else traverse to second to last node and pop last node
    let newTail = this.head;
    while (newTail.next.next !== null) newTail = newTail.next;
    let target = newTail.next;
    newTail.next = null;
    this.length--;
    return target;
  }

  contains(value) {
    // If list is empty, it does not contain value => return false
    if (this.head === null) return false;

    // Else, traverse list, testing each node for value
    let curr = this.head;
    while (curr.next !== null) {
      if (curr.value == value) return true;
      curr = curr.next;
    }

    // Reached end of list; value not contained
    return false;
  }

  find(value) {
    // If list is empty, it does not contain value => return null
    if (this.head === null) return null;

    // Else, traverse list, testing each node for value and tracking index
    let curr = this.head;
    let i = 0;
    while (curr.next !== null) {
      if (curr.value == value) return i;
      curr = curr.next;
      i++;
    }

    // Reached end of list; value not contained
    return null;
  }
}

class Node {
  constructor(value = "") {
    this.value = value;
    this.next = null;
  }
}
