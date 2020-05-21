//Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
const validParentheses = (str) => {
  let checkerCache = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    // Get each element in the string
    let element = str[i];
    //Check if it is an opening bracket
    if (element === '(' || element === '[' || element === '{') {
      //if an opening bracket push it to the stack array
      stack.push(element);
      console.log(stack)
    } else {
      // if not an opening bracket pop off the stack
      let last = stack.pop();
      console.log(last)
      
      if (element !== checkerCache[last]) return false;
    }
  }
  if (stack.length !== 0) return false;
  return true;
};

validParentheses('()');
validParentheses('()[]{}');
validParentheses('(]');
validParentheses('([)]');
