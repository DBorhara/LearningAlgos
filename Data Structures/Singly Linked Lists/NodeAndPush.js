//piece of data - val
//reference to next node - next
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
  /*
Pushing PseudoCode
1) The function should accept a value
2) Create a new node using the value passed to the function
3) If there is no head property on the list, set the head and tail to be the new created node
4) Otherwise set the next property on the tail to be the new node and set the tail property on the list to the newly created node
5) Increment length by one
6) Return the linked list
*/
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
}
