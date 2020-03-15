/*
Write a function called same
It takes two arrays.
Returns true if every value in array 1 has a corresponding squared value in array 2.
The frequency of the values must be the same.

Example:
same([1,2,3], [1,4,9]) >> true
same([2,2,4,5], [4,4,11,3]) >> false

O(N^2)
*/

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];

    let correctIndex = arr2.indexOf(element ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
};
same([1, 2, 3], [1, 4, 9]);
