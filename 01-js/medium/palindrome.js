/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const regex = /[,.?\s!]/g;
  const newStr = str.replace(regex,"").toLowerCase();
  console.log(newStr);
  const len = newStr.length;

  let s = 0,
      e = len - 1;
  while (s <= e) {
      if (newStr[s++] != newStr[e--]) return false;
  }
  return true;
}

module.exports = isPalindrome;
