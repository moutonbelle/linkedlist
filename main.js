import List from "./linkedlist.js";

let list = new List();

// Populate list for testing
list.append("Tiger");
list.append("Elephant");
list.append("Lion");
list.prepend("Giraffe");

console.log("LIST LENGTH: ", list.length);

console.log("CONTAINS: ", list.contains("Giraffe"), list.contains("Eagle"));
console.log(
  "FIND: ",
  list.find("Elephant"),
  list.find("Eagle"),
  list.find("Giraffe")
);

console.log(list.toString());
list.insertAt("Eagle", 0);
console.log(list.toString());
console.log(list.insertAt("Viper", 5));
list.insertAt("Viper", 4);
console.log(list.toString());
