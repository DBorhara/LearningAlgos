/* Many sorting algorithms involve some type of swapping functionality (e.g. swapping two numbers to put them in order)*/

//ES5
function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

//ES2015
const swap2 = (array, index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};
