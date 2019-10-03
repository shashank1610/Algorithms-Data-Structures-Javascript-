// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

const L = require("./linkedlist");
const List = L.LinkedList;
const Node = L.Node;

function circular(list) {
  tmp = list.head;
  addMap = {};
  while (tmp != null) {
    for (let key in addMap) {
      if (addMap[key] === tmp.next) {
        return true;
      }
    }
    addMap[tmp.data] = tmp.next;
  }
  return false;
}
const l = new List();
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");

l.head = a;
a.next = b;
b.next = c;
c.next = null;
console.log(circular(l));
module.exports = circular;

// function circular(list) {
//     let fastPtr = list.head;
//     let slowPtr = list.head;
//     while (fastPtr != null && fastPtr.next != null) {
//       fastPtr = fastPtr.next.next;
//       slowPtr = slowPtr.next;
//       if (fastPtr === slowPtr) {
//         return true;
//       }
//     }
//     return false;
//   }
