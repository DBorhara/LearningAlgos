# Merge Sort

It's a combination of three things

1. Splitting
2. Sorting
3. Merging

Exploits the fact that arrays of 0 or 1 element are always sorted

Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

How does it work?
[8,3,5,4,7,6,1,2] SPLITTING
[8,3,5,4][7,6,1,2]
[8,3][5,4] [7,6][1,2]
[8][3] [5][4] [7][6] [1][2]
[3,8][4,5] [6,7][1,2]
[3,4,5,8][1,2,6,7]
[1,2,3,4,5,6,7,8]

Merge Helper Function

1. In oder to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
2. Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all the elements in the two input arrays
3. This function should in O(n+m) time and space and should not modify the parameters passed to it.
