/*
Write a function called linearSearch
It takes an array and a value
Should find the value in the array
Returns the index at which the value exists

Example:
linearSearch([1,1,1,1,2], 2) // 4
linearSearch([-2,-1,-1,0,1], -1) // 3

Time: O(N)
*/

const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (val === element) return i;
  }
  return -1;
};
