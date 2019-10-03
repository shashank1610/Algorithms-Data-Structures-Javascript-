// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

const L = require("./linkedlist");
const Node = L.Node;
const LinkedList = L.LinkedList;

function midpoint(list) {
  let fastPtr = list.head;
  let slowPtr = list.head;
  while(fastPtr !=null && fastPtr.next != null){
    fastPtr = fastPtr.next.next;
    slowPtr = slowPtr.next;
  }
  return slowPtr;
}


module.exports = midpoint;



// function midpoint(list) {
//     let size = list.size();
//     if (size % 2 == 0) {
//       return list.getAt((size / 2) -1);
//     }
//     return list.getAt(Math.floor(size / 2));
//   }