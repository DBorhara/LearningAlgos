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

  /*
  PseudoCode Inserting a Node
  Steps - Iteratively or Recursively
  1) Create a new node
  2) Starting at the root
    1) Check if there is a root, if not - the root now becomes the new node
    2) If there is a root, check if the value of the new node is greater than or less thant he value of the root
      1) If it is greater
        1) Check to see if there is a node to the right
          1) If there is, move to that node and repeat these steps
          2) If there is not, add the node as the right property
      2) If it is less
        1) Check to see if there is a node to the left
          1) If there is , move to that node and repeat these steps
          2) If there is not, add the node as the left property
  */
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
  /*
  PseudoCode Finding a Node
  Steps - Iteratively or Recursively
  Starting at the root:
  1) Check if there is a root -  if not, we are done searching
  2) If there is a root, check if it is the value of the node we are looking for. If found, we are done
  3) If not, check to see if the value is greater than or less than the value of the root
  4) If it is greater
    1) Check to see if there is a node to the right
      1) If there is, move to that node and repeat these steps
      2) If there is not, we are done searching
  5) If it iss less
    1) Check to see if there is a node to the left
      1) If there is, move to that node and repeat these steps
      2) If there is not, we are done searching
  */

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
}

// const tree = new BinarySearchTree();

// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
