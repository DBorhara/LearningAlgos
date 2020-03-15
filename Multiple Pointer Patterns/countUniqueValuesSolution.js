/*
Write a function called countUniqueValues
It takes a sorted array of integers positive or negative
Should find the unique values in the array.
Returns the count of how many values in the array

Example:
countUniqueValues([1,1,1,1,2]) // 2
countUniqueValues([-2,-1,-1,0,1]) // 4

Time: O(N)
Space: O(N) better O(1)
*/

const countUniqueValues = array => {
  //edge case of array = []
  if (!array.length) return 0;
  //Set initial pointer at array[0]
  let i = 0;
  // Loop from second  pointer at array[1]
  for (let j = 1; j < array.length; j++) {
    //if the value of array at i is not equal to value of array at j
    if (array[i] !== array[j]) {
      //increment/move up i by 1
      i++;
      //set value of array at i to that of array at j
      array[i] = array[j];
    }
  }
  //It will end at i with all unique values up to the i so we just need to return i + 1 because are starting 1 not 0 when counting
  return i + 1;
};
