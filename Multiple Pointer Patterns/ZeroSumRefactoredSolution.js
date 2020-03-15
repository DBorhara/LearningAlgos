/*
Write a function called sumZero
It takes a sorted array of integers
Should find the first pair where the sum is equal to 0
Returns an array with the two values that equal 0 or undefined if a pair does not exist.

Example:
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) //undefined

Time: O(N)
Space: O(1)
*/

const zeroSum = array => {
  //beginning of array
  let left = 0; //left pointer
  //end of array
  let right = array.length - 1; //right pointer

  //while left is less than right
  while (left < right) {
    // sum up the  array values of left index  and right index
    let sum = array[left] + array[right];
    //if the sum is 0 return an array with values that equal 0
    if (sum === 0) return [array[left], array[right]];
    //if the sum is greater than 0 decrease the right pointer
    else if (sum > 0) right--;
    // increase left pointer
    else left++;
  }
};
