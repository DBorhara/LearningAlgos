/* eslint-disable no-unused-vars */
/*
Write a function called maxSubarraySum
It takes an array of integers and a number called n
Should calculate the maximum sum of n consecutive element in the array
Returns the sum

Example:
maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
maxSubarraySum([1,2,5,2,8,1,5], 4) // 17
maxSubarraySum([], 4) //null
Time: O(N)
*/

const maxSubarraySum = (array, num) => {
  let maxSum = 0;
  let tempSum = 0;

  if (array.length < num) return null;

  for (let i = 0; i < array.length; i++) {
    maxSum += array[i];
  }
  tempSum = maxSum;

  for (let i = num; i < array.length; i++) {
    tempSum = tempSum - array[i - num] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

const maxSubarraySum2 = (arr, num) => {
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
};
