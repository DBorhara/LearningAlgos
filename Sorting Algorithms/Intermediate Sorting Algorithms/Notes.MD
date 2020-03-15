# Intermediate Sorting Algorithms

Why learn this?

The algorithms we've learned so far don't scale well
Bubble sort on an array of 100000 elements will take quite a long time

Faster Sorts

There is a family of sorting algorithms that can improve time complexity from O(n^2) to O(n log n)
There is a tradeoff between efficiency and simplicity
The more efficient algorithms are much less simple, and generally take longer to understand

| Time Complexity(Best) | Time Complexity(Average) | Time Complexity(Worst) | Space Complexity |
| --------------------- | ------------------------ | ---------------------- | ---------------- |
| O(n log n)            | O(n log n)               | O(n log n)             | O(n)             |

O(log n) decompositions \* O(n) comparisons per decompositions = O(n log n)
