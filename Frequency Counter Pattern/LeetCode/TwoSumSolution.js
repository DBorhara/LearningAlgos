/*Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]. */

const twoSum = (nums, target) => {
  let numHash = {};

  nums.forEach((num, index) => {
    numHash[num] = index;
  });
  //numHash = {2: 0,7:1,11:2,15:3}

  //Loop through to check nums against numHash
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    let currentDiff = target - num;
    //currentDiff = 9-2 = 7

    if (numHash[currentDiff] && numHash[currentDiff] !== 1) {
      return [i, numHash[currentDiff]];
      // if(numHash[7]OR1 &&)
    }
  }
};
