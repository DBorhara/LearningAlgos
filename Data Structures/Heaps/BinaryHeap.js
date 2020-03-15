// Defining Our Class

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  /*
  Insert PseudoCode
  1. Push the value into the values property on the heap
  2. Bubble up the value to its correct spot:
    1. Create a variable called index which is the length of the value property -1
    2. Create a variable called parentIndex which is the floor of (index-1)/2
    3. Keep looping as long as the values element at the parentIndex is less than the values element at the child index
      a. Swap the value of values element at the parentIndex with the value of the element property at the child index
      b. Set the index to the parentIndex and start over
  */

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp(element) {
    let index = this.values.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  /*
  Removing aka extractMax
  1. Swap the first value in the values property with the last one
  2. Pop from the values property , so you can return the value at the end
  3. Have the new root sink down to the correct spot
    1. Your parent index starts at 0(the root)
    2. Find the index of the left child: 2*index+1(make sure it isn't out of bounds)
    3. Find the index of the right child: 2*index+2(make sure it isn't out of bounds)
    4. If the left child or right child is greater... swap. If both left and right are larger, swap with the largest child
    5. The child index you swapped to now becomes the new parent index
    6. Keep looping and swapping until neither child is larger than the element
    7. Return the old root
  */

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      //trickle down
      this.sinkDown();
    }
    return max;
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
        if (leftChild > element) swap = leftChildIndex;
      }
      if (
        (swap === null && rightChild > element) ||
        (swap !== null && rightChild > leftChild)
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
