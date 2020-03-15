/*


PseudoCode
1) Break the array into halves until you have arrays that are empty or have one element
2) Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
3) Once the array has been merged back together, return the merged(and sorted) array
*/

const merge = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr1.length) {
    results.push(arr1[j]);
    j++;
  }

  return results;
};

const mergeSort = arr => {
  if (arr.length >= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};
