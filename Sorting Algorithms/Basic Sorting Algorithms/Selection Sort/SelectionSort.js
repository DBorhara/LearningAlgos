/*
Write a function called selection
It takes an array
Returns a sorted array

PseudoCode
1) Store the first element as the smallest value you've seen so far.
2) Loop through the array and compare this item to each element in the array until you find a smaller number
3) If ta smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
4) If the "minimum" is not the value(index) you initially began with, swap the two values.
5) Repeat this with the next element until the array is sorted
*/

const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
};
