import Node from './node.js';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  size() {
    return this.length;
  }

  append(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.length++;
  }

  pop() {
    let current = this.head;
    let previousNode;

    if (this.head === null) {
      return null;
    }

    while (current.next) {
      previousNode = current;
      current = current.next;
    }

    if (previousNode) {
      previousNode.next = null;
    } else {
      this.head = null;
    }

    this.length--;
    return current.value;
  }
}
