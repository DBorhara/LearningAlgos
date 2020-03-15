class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null; // pointer to head
    this.tail = null; // pointer to tail
  }
  push(val) {
    let newNode = new Node(val);
    //if empty or no nodes do this:
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //Use the node method and create a new node in the next position with next
      this.tail.next = newNode;
      //Set that new node as the new tail
      this.tail = newNode;
    }
    this.length++; //increment the length by 1 to reflect the pushed in value
    return this; //return the updated list
  }
  // traverse() {
  //   let current = this.head;
  //   while (current) {
  //     console.log('current', current);
  //     current = current.next;
  //   }
  // }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }
  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(val, index) {
    let currentNode = this.get(index);
    if (!currentNode) {
      return false;
    } else {
      currentNode.val = val;
      return true;
    }
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }
  /*
Reverse PseudoCode
1) Define a function called reverse
2) Swap the head and the tail
3) Create a variable called next
4) Create a variable called prev
5) Create a variable called node and initialize it to the head property
6) Loop through the list
7) Set the next to be the next property on whatever node is
8) Set hte next property on the node to be whatever prev is
9) Set prev to the value of the node variable
10) Set the node variable to be the value of hte next variable
11)
*/
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}
