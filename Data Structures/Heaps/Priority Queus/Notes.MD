# Priority Queue

## What is a priority queue

A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.

### A naive version

Use a list/array to store all elements

[priority: 3, priority: 1, priority: 5, priority: 2, priority: 4]

Iterate over the entire thing to find the highest priority element

Non heap is O(N)
Using a heap we have log(N)

Priority queues are abstract data types that can be used in many data structures but HEAPS are the most common to occur
