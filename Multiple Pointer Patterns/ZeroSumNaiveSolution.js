/*
Write a function called sumZero
It takes a sorted array of integers
Should find the first pair where the sum is equal to 0
Returns an array with the two values that equal 0 or undefined if a pair does not exist.

Example:
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) //undefined

Time: O(N^2) Nested Loops
Space: O(1)
*/

const sumZero = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
};
