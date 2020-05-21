//Convert Roman Numerals to Integers

/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
*/

const romanToInt = (romanStr) => {
  //establishing a hashmap to translate roman numerals into integers
  let cache = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let answer = 0;

  for (let i = 0; i < romanStr.length; i++) {
    /*If the current element is less than the next iterative element we minus the next element from current element and to total
    EX:
    IX > 10-1 >9
    CM > 1000-100 > 9
    XL > 50-10 > 40
    */
    if (cache[romanStr[i]] < cache[romanStr[i + 1]]) {
      answer += cache[romanStr[i + 1]] - cache[romanStr[i]];
      i++;
    } else {
      //or just add to total
      answer += cache[romanStr[i]];
    }
  }
  console.log(answer);
};

romanToInt('III');
console.log('check');
romanToInt('IV');
console.log('check');
romanToInt('IX');
console.log('check');
romanToInt('LVIII');
console.log('check');
romanToInt('MCMXCIV');

//InnovativeSolution
const romanToInt2 = s => {
  if (!s || s.length === 0) {
    return 0;
  }

  const map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);

  let i = s.length - 1;
  let result = map.get(s[i]);

  while (i > 0) {
    const curr = map.get(s[i]);
    const prev = map.get(s[i - 1]);

    if (prev >= curr) {
      result += prev;
    } else {
      result -= prev;
    }

    i--;
  }

  return result;
};