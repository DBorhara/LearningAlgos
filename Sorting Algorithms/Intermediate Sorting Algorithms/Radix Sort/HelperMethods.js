/*
In order to build radix sort it's helpful to build a few helper functions first:

getDigit(num, place) = returns the digit in num at the given place

digitCount(num) - returns the number of digits in num

mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list

*/

//base 10 nums only
getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

//base 10 nums only
const digitCount = num => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = nums => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};
