//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".

const longestCommonPrefix = (arr) => {
  //Establish a place to store comparisons
  let prefix = '';
//If arr is empty we return empty prefix
  if (arr.length === 0) return prefix;
  //Loop through first word in array
  for (let i = 0; i < arr[0].length; i++) {
    const character = arr[0][i];
    //Loop through rest of array comparing indices of first word with every other word
    for (let j = 0; j < arr.length; j++) {
      console.log(prefix);
      //When they stop matching return the populated prefix
      if (arr[j][i] !== character) return prefix;
    }
    // If inner j loop completes with current character add it to the prefix string
    prefix += character;
  }
  return prefix;
};

longestCommonPrefix(['flower', 'flow', 'flight']);
