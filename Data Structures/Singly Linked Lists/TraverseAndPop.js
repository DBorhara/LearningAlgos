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
  traverse() {
    let current = this.head;
    while (current) {
      console.log('current', current);
      current = current.next;
    }
  }

  /*
Popping PseudoCode
1)If there are no nodes in the list return undefined
2)Loop through the list until you reach the tail
3)Set the next property of the 2nd to last node to be null
4)Set the tail to be the 2nd to last node
5)Decrement the length of the list by 1
6)Return the value of the node removed
*/
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
}
