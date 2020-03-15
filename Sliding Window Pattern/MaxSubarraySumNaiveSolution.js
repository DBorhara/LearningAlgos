/*
Write a function called maxSubarraySum
It takes an array of integers and a number called n
Should calculate the maximum sum of n consecutive element in the array
Returns the sum

Example:
maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
maxSubarraySum([1,2,5,2,8,1,5], 4) // 17
maxSubarraySum([], 4) //null
Time: O(N^2)
*/

const maxSubarraySum = (array, num) => {
  //If array is empty and num isn't return null
  if (num > array.length) return null;
  //We set to -Infinity to account for negative numbers
  let maxSum = -Infinity;
  //First loop is checking up array.length taking in account the num.
  //If we go past we will get undefined because we are out of bounds
  for (let i = 0; i < array.length - num + 1; i++) {
    //temporary holder for highest value
    let temp = 0;
    //Second Loop for the "window" we are checking through. The size of it is defined by num.
    for (let j = 0; j < num; j++) {
      //set temp to the added values in the given "window"
      temp += array[i + j];
    }
    //if our temp is a bigger value than the maxSum we replace the maxSum
    if (temp > maxSum) maxSum = temp;
  }
  return maxSum;
};
