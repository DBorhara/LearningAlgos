/* Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward. */

const isPalindrome = (num) => {
  // Negative numbers always return false because of the negative value sign
  if (num < 0) {
    return false;
  }

  let reversedStr = num
  // Convert to a string >
  .toString()
  //Convert to an array >
  .split('')
  //Reverse Array >
  .reverse()
  //Convert back into string
  .join('');
  //Convert into number
  let reversedNum = parseInt(reversedStr, 10);

  //Check if values are equal. If palindrome return true, else return false
  if (reversedNum === num) {
    return true;
  }
  return false;
};
