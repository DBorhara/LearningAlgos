/*
Write a function called same
It takes two arrays.
Returns true if every value in array 1 has a corresponding squared value in array 2.
The frequency of the values must be the same.

Example:
same([1,2,3], [1,4,9]) >> true
same([2,2,4,5], [4,4,11,3]) >> false

O(N)
*/

// eslint-disable-next-line complexity
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  //Two objects for comparison later
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  //First Loop for frequencyCounter1
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  //Second Loop for frequencyCounter2
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  //Will be populated with count of frequency of each element >> {element:frequency of element}
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  //Loop over either object and compare frequencies of corresponding values. Returns true if they correspond and false if they do not.
  // eslint-disable-next-line guard-for-in
  for (let key in frequencyCounter1) {
    //is key squared of frequencyCounter1 a key in frequencyCounter2?
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    //Checks if the frequency of keys correspond even if the values appear in both.. Two 2's in arr1 and Two 4's in arr2
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]);
