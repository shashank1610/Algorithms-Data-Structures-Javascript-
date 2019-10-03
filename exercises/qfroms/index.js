// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    s1 = new Stack();
    s2 = new Stack();
  }

  add(record) {
    s1.push(record);
  }

  remove() {
    while (s1.peek()) {
      s2.push(s1.pop());
    }
    const record = s2.pop();
    while (s2.peek()) {
      s1.push(s2.pop());
    }
    return record;
  }
  peek() {
    while (s1.peek()) {
      s2.push(s1.pop());
    }
    const record = s2.second.peek();
    while (s2.peek()) {
      s1.push(s2.pop());
    }
    return record;
  }
}

module.exports = Queue;
