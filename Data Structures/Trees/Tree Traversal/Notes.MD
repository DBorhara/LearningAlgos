# Tree Traversal

## BFS vs DFS

Time complexity is same
Space complexity is the differnce between the two

### Breadth-first

- Deeper than wider
- It has a lot of nodes to keeps track of

### Depth-first

- It has fewer nodes to keep track of
- Wider than deeper it takes less space

  1. PreOrder
     a. Can be used to 'export' a tree so that it is easily be reconstructed
  2. PostOrder
     a.
  3. InOrder
     a. Used commonly in BSTs
     b. We get all nodes in the tree in their underlying order

## Recap

- Trees are a non-linear data structure that contain a root and child nodes
- Binary Trees can have values of any type, but at most two children for each parent
- Binary Search Trees are a more specific version of Binary Trees where every node to the left of a parent is less than the parent's value and every node to the right of the parent is greater than the parent's value
- We can search through trees using BDS or DFS
