/*
Write a function called validAnagram
It takes an array
Returns true if string 2 is an anagram of string1
The frequency of values must be the same

PseudoCode
1) Start looping with a variable called i the end of the array towards the beginning
2) Start an inner loop with a variable called j from the beginning until i-1
3) If the value at arr[j] is greater than the value of arr[j+1] swap those two values.

*/

const bubbleSort = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};
