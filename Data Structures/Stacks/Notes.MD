# Stacks

What is a stack?
A LIFO structure
The last element added to the stack will be the first element removed from the stack

How is it used?
Think about a stack of plates, or a stack of markers... or a stack of anything
As you pile it up the last thing(or topmost thing) is what gets removed first

We can use a linked list to represent a stack

We have seen this before! The call stack

Where stacks are used

- Managing function invocations
- Undo/Redo
- Routing(this history object) is treated like a stack

There is more than one way to implement a stack

Abstract Data Structure(ASD)

Big O of Stacks

- Insertion O(1)(From the top of stack)
- Removal O(1)(From the top of stack)
- Searching 0(N)
- Access O(N)

## Recap

- Stacks are a LIFO data structure where the last value in is always the first one out
- Stacks are used to handle function invocations(the call stack), for operations like undo/redo, and/or routing(remember pages you have visited, and much more!)
- They are not a built in data structure in Javascript, but are relatively easy to implement
