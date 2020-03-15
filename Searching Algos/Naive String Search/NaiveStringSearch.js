/*
Write a function called naiveStringSearch
It takes two strings
Should find a case match of shorter string in longer string
Increment a counter with number of matches

Example:
naiveStringSearch('lorie loled, 'lol')// 1

Time:
*/

const naiveStringSearch = (long, pattern) => {
  let counter = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== long[i + j]) break;
      if (j === pattern.length - 1) counter++;
    }
  }
  return counter;
};
