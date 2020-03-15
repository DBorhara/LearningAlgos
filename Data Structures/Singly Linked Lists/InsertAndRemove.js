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
  /*
Insert PseudoCode
1) Define a function that takes an index a value
2) If the index is less than zero or greater than the length, return false
3) If the index is the same as the length, push a new node to the end of the list
4) If the index is 0, unshift a new node to the start of the list
5) Otherwise, using the get method, access the node at the index -1
6) Set the next property on that node to be the new node
7) Set the next property on the new node to be the previous next
8) Increment the length
9) Return true
*/
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
  /*
Remove PseudoCode
1) Define a function that an index
2) If the index is less than zero or greater than the length, return undefined
3) If the index is the same the length-1, pop
4) If the index is 0, shift
5) Otherwise, using get method, access the node at the index-1
6) Set the next property on that node to be the next of the next node
7) Decrement the length
8) Return the value of the node removed
*/
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
}
