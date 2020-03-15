# Quick Sort

Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
Works by selecting one element(called the "pivot") and finding the index where the pivot should end up in the sorted array

How does it work?
[5,2,1,8,4,7,6,3]
3,2,1,4 5 7,6,8
1,2 3 4 5 7,6,8
1 2 3 4 5 7,6,8
1 2 3 4 5 6 7 8

| Time Complexity(Best) | Time Complexity(Average) | Time Complexity(Worst) | Space Complexity |
| --------------------- | ------------------------ | ---------------------- | ---------------- |
| O(n log n)            | O(n log n)               | O(n^2)                 | O( log n)        |
