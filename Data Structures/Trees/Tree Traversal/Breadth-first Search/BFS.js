// Breadth-first Search

// The BinarySearchTree Class
class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (this.root.val === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      // eslint-disable-next-line no-constant-condition
      while (true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;

    while (!found && current) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(val) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;

    while (!found && current) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
        return !!found;
      }
    }
    return false;
  }
  /*
  Breadth-first Search
  Steps - Iteratively

1. Create a queue(this can be an array) and a variable to store the values of nodes visited(FIFO structure)
2. Place the root node in the queue
3. Loop as long as there is anything in the queue
  a) Dequeue a node from the queue and push the value of the node into the variable that stores nodes
  b) If there is a left property on the node that dequeued -- add it to the queue
  c) If there is a right property on the node that dequeue -- add it to the queue
*/
  BFS() {
    let node = this.root,
      queue = [],
      data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}
