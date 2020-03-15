/*
PseudoCode
1) In order to implement merge sort, it's useful to first implement a function responsible arranging elements in an array on either side of the pivot
2) Given an array. this helper function should designate an element as the pivot
3) It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
4) The order of elements on either side of the pivot does not matter
5) The helper should do this in place, that is, it should not create a new array

Picking a Pivot
1) The runtime of quick sort depends in part on how one selects the pivot
2) Ideally, the pivot should be chosen so that it's roughly the median value ion the data set you are sorting
3) For simplicity, we'll always choose the pivot to be the first element(Insert consequence here)

Pivot PseudoCode
1) It will help to accept three arguments: an array, a start index, and an end index(these can default to 0 and the array length - 1, respectively)
2) Grab the pivot from the start of the array
3) Store the current pivot index in a variable(this will keep track of where the pivot should end up)
  1) If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
4) Swap the starting element (i.e. the pivot) with the pivot index
5) Return the pivot index
*/

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};
