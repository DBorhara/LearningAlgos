//Input: 123
// Output: 321
// Input: -123
// Output: -321

const reverseNum = (num) => {
  let reverseStr = num
    //turn num into a string >
    .toString()
    //array split by no space >
    .split('')
    //reverse the array >
    .reverse()
    //join back into a string with no space
    .join('');

  // console.log(parseInt(reverseStr, 10) * Math.sign(num));
  //convert to a number and multiply by the original sign(+ or -)
  let reversedNum = parseInt(reverseStr, 10) * Math.sign(num);
  //Provide 2 to the 32nd power limitation
  let maxInteger = Math.pow(2, 31) - 1;

  //If reversed number is greater than positive max integer or less than negative max integer return 0
  if (reversedNum > maxInteger || reversedNum < -maxInteger) {
    return 0;
  } else {
    return reversedNum;
  }
};

reverseNum(123);
reverseNum(-321);
reverseNum(-100);
