// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let size = 0;
    let node = this.head;
    while (node) {
      size++;
      node = node.next;
    }
    return size;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let tmp;
    for (tmp = this.head; tmp.next != null; tmp = tmp.next);
    return tmp;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    let tmp = this.head;
    this.head = this.head.next;
  }
  removeLast() {
    if (this.head != null) {
      if (this.head.next == null) {
        this.head = null;
      } else {
        let tmp;
        for (tmp = this.head; tmp.next.next != null; tmp = tmp.next);
        tmp.next = null;
      }
    }
  }
  insertLast(data) {
    const node = new Node(data);
    if (this.head == null) {
      this.head = node;
    } else {
      let tmp;
      for (tmp = this.head; tmp.next != null; tmp = tmp.next);
      tmp.next = node;
    }
  }
  getAt(index) {
    let counter = 0;
    let tmp = this.head;
    while (tmp) {
      if (counter == index) {
        return tmp;
      }
      tmp = tmp.next;
      counter++;
    }

    return null;
  }

  removeAt(index) {
    let counter = 0;
    if (this.head == null) {
      return;
    }
    if (index == 0) {
      this.head = this.head.next;
      return;
    } else {
      let tmp = this.head;
      while (tmp) {
        if (counter == index) {
          if (tmp.next == null) {
            const previous = this.getAt(counter - 1);
            previous.next = null;
            return;
          }
          tmp.data = tmp.next.data;
          tmp.next = tmp.next.next;
          tmp.next.next = null;
          return;
        }
        counter++;
        tmp = tmp.next;
      }
    }
  }

  insertAt(data, index) {
    let counter = 0;
    if (this.head == null || index == 0) {
      this.insertFirst(data);
    } else if (index >= this.size()) {
      this.insertLast(data);
    } else {
      let tmp = this.head;
      while (tmp) {
        if (counter == index) {
          let prevNode = this.getAt(counter - 1);
          let prevAdd = prevNode.next;
          let newNode = new Node(data, prevAdd);
          prevNode.next = newNode;
          return;
        }
        counter++;
        tmp = tmp.next;
      }
    }
  }
  reverse() {
    let tmp = null;
    let next = null;
    while (this.head) {
      next = this.head.next;
      this.head.next = tmp;
      tmp = this.head;
      this.head = next;
    }
    return tmp;
  }
  nthNodeFromLeft(n) {
    let linkedSize = this.size();
    let tmp = this.head;
    let index = linkedSize - n + 1;
    let counter = 0;
    while (tmp) {
      if (counter == n) {
        return tmp;
      }
      tmp = tmp.next;
      counter++;
    }
  }
  containsCycle() {
    let slowPtr = this.head;
    let fastPtr = this.head;
    while(slowPtr && fastPtr && fastPtr.next){
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;
      if(slowPtr == fastPtr) {
        return true;
      }
    }
    return false;
  }
}

const l = new LinkedList();
console.log(l);
l.insertFirst(1);
l.insertFirst(2);
l.insertFirst(3);
l.insertFirst(4);
console.log(l.containsCycle());

module.exports = { Node, LinkedList };
