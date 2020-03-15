// For Strings Only

const hashInitial = (key, arrayLen) => {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    //map "a" to 1, "b" to 2, "c" to 3, etc
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
};

/*
Problems with the hash function above
1. Only hashes strings(we won't worry about this right now)
2. Not constant time- linear in key length
3. Could be a little more random

REFINED HASH BELOW
*/

const hashRefined = (key, arrayLen) => {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
};
