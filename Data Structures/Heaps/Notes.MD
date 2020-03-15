# Heaps

## What Is A Binary Heap

Very similar to binary search tree, but with different rules

In a MaxBinaryHeap, parent nodes are always larger than child nodes
In a MinBinaryHeap, parent nodes are always smaller than child nodes

## MaxBinaryHeap Rules

- Each parent has at most two child nodes
- The value of each parent node is always greater than its child nodes
- In a max Binary Heap the parent is greater than the children, but there are no guarantees between siblings
- A binary heap is as compact as possible. All the children of each node are as filled out as they can be and left children are filled out first

## Why we need to know this

- Binary Heaps are used to implement Priority Queues, which are very commonly used data structures
- They are also used quite a bit, with graph traversal algorithms

There is an easy way of storing a binary heap... a LIST/ARRAY

Formula for Parent,Parent-Left, and Right Child in a Heap
Left Child = 2(parentIndex) + 1
Right Child = 2(parentIndex) + 2
Parent Node = Math.floor((childIndex -1)/ 2)

For any index of an array n...
The left child is stored at 2n+1
The right child is stored at 2n+2

For any child node at index n...
Its parent index is at (n-1)/2 floored

## Big O

### Binary Heaps

Insertion - O(log N)
Removal - O(log N)
Search - O(N)

## Recap

- Binary Heaps are very useful data structures for sorting, and implementing other data structures like priority queues
- Binary Heaps are either Max Binary Heaps or Min Binary Heaps with parents either being smaller or larger than their children
- With a little bit of math, we can represent Heaps using arrays
