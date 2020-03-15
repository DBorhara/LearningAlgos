/*
Write a function called insertionSort
It takes an array
Returns a sorted array

PseudoCode
1) Start by picking the second element in the array
2) Now compare the second element with he one before it and swap if necessary
3) Continue to the next element and if it is in the incorrect order, iterate through the sorted portion(i.e. the left side) to place the element in the correct place
4) Repeat until array is sorted
5) Return the array
*/

//NOTE: ONLY WORKS WITH VAR DUE TO VAR BEING SCOPED GLOBALLY

function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
