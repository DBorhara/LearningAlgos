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

  BFS() {
    let node = this.root;
    let queue = [];
    let data = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  /*
Depth-first Search PRE ORDER
Steps - Recursively
1. Create a variable to store the values of the nodes visited
2. Store the root of the BST in a node called current
3. Write a helper function which accepts a node
  a. Push the value of the node to the variable that stores the values
  b. If the node has a left property, call the helper function with the left property on the node
  c. If the node has a right property, call the helper function with the right property on the node
4. Invoke the helper function with the current variable
5. Return the array of values
*/
  DFSPreOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  /*
Depth-first Search POST ORDER
Steps - Recursively
1. Create a variable to store the values of the nodes visited
2. Store the root of the BST in a node called current
3. Write a helper function which accepts a node
  a. If the node has a left property, call the helper function with the left property on the node
  b. If the node has a right property, call the helper function with the right property on the node
  c. Push the value of the node to the variable that stores the values
4. Invoke the helper function with the current variable
5. Return the array of values
*/
  DFSPostOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(current);
    return data;
  }
  /*
Depth-first Search IN ORDER
Steps - Recursively
1. Create a variable to store the values of the nodes visited
2. Store the root of the BST in a node called current
3. Write a helper function which accepts a node
  a. If the node has a left property, call the helper function with the left property on the node
  b. Push the value of the node to the variable that stores the values
  c. If the node has a right property, call the helper function with the right property on the node
4. Invoke the helper function with the current variable
5. Return the array of values
*/

  DFSInOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}
