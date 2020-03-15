/*
PseudoCode
1) Define a function that accepts a list of numbers
2) Figure out how many digits the largest number has
3) Loop from k=0 up to this largest number of digits
4) For each iteration of the loop:
  1) Create buckets for each digit(0 to 9)
  2) Place each number in the corresponding bucket based on its kth digit
5) Replace our existing array with values in our buckets, starting with and going up to 9
6) Return the list at the end
*/

//base 10 nums only
const getDigit = (num, i) => {
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

const radixSort = nums => {
  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
};
