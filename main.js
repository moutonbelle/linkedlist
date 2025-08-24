import List from "./linkedlist.js";

let list = new List();

// Populate list for testing
list.append("Tiger");
list.append("Elephant");
list.append("Lion");

// Test list
console.log(list);

// Test list by traversing and printing all elements
let curr = list.head;
while (curr.next !== null) {
  console.log(curr.value);
  curr = curr.next;
}
console.log(curr.value);
