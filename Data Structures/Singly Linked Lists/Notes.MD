# Singly Linked Lists

What is a linked list?
A data structure that contains a head, tail, and length property. No indices like an array.
Linked Lists consist of nodes, and each node has a value and a pointer to another node or null

Comparison with Arrays
Lists

- Do not have indexes!
- Connected via nodes with a next pointer
- Random access is not allowed

Arrays

- Indexed in order
- Insertion and deletion can be expensive
- Can quickly be accessed at a specific index

Push - Adding a value to the tail of a linked list see LinkedListNodeAndPush.js
Pop - Removing a node the end of the linked list see LinkedListPop.js
Shift - Removing the head node at the beginning of the linked list see LinkedListShift.js
Unshift - Adding a new head node at the beginning of the linked list see LinkedListUnshift.js
Get-
Set-
Insert -
Remove -
Reverse = Reverse the Linked List in place

Big O of Singly Linked Lists
Insertion - O(1)
Removal - It depends... O(1) or O(N)
Searching - O(N)
Access - O(N)

## Recap

- Singly Linked Lists are an excellent alternative to arrays when insertion, and deletion at the beginning are frequently required
- Arrays contain a built in index whereas Linked Lists do not
- The idea of a list data structure that consists of nodes is the foundation for other data structures like Stacks and Queues
