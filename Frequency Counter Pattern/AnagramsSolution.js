/*
Write a function called validAnagram
It takes two strings.
Returns true if string 2 is an anagram of string1
The frequency of values must be the same

Example:
validAnagram('iceman','cinema') >> true
validAnagram('cat','dog') >> false

*/

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let checker = {};

  for (let i = 0; i < str1.length; i++) {
    const curLetter = str1[i];
    //if letter exists, increment, if it doesn't set to 0
    checker[curLetter] ? (checker[curLetter] += 1) : (checker[curLetter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    const curLetter = str2[i];
    //can't find letter or letter is 0 then it isn't an anagram
    if (!checker[curLetter]) {
      return false;
    } else {
      //We are emptying the checker object until all values are at 0
      checker[curLetter] -= 1;
    }
  }
  return true;
};
