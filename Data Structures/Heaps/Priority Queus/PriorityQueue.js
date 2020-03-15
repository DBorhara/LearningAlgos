/*
Our Priority Queue
1. Write a Min Binary Heap - lower number means higher priority
2. Each Node has a val and a priority. Use the priority to build the Heap
3. Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off its priority
4. Dequeue removes the root element, and rearranges the Heap using priority
*/

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
    // this.insertTime = Date.now();
  }
}

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp(element) {
    let index = this.values.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element.priority >= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      //trickle down
      this.sinkDown();
    }
    return min;
  }

  // eslint-disable-next-line complexity
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) swap = leftChildIndex;
      }
      if (
        (swap === null && rightChild.priority < element.priority) ||
        (swap !== null && rightChild.priority < leftChild.priority)
      ) {
        swap = rightChildIndex;
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}
