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
  /*
Get PseudoCode
1)The function should accept and index
2) If the index is less than zero or greater than or equal to the length of the list, return null
3) Loop through the list until you reach the index and return the node at that specific index
*/
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
  /*
Set PseudoCode
1) The function should accept a value and an index
2) User your get function to find the specific node
3) If the node is not found, return false;
4)If the node is found, set the value of that node to be the value passed to the function and return true
*/
  set(val, index) {
    let currentNode = this.get(index);
    if (!currentNode) {
      return false;
    } else {
      currentNode.val = val;
      return true;
    }
  }
}
