//nums = [2, 7, 11, 15] target = 9
const TwoSum = (nums, target) => {
  let cache = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    // Get the needed counterpart to check in the cache
    const neededNum = target - currentNum;
    // 2 > 9-2 > 7
    // 7 > 9-7 > 2

    //If it exists return the two indeces([cachedValue, currentNum])
    if (cache[neededNum] !== undefined) {
      return [cache[neededNum], i];
      //[0,1]
    } else {
      //if it doesn't exist add the number:index to cacche cache={number:index}
      cache[currentNum] = i;
      //cache = {2: 0}
    }
  }
};
