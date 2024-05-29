/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let str2 = str.split("").reverse().join("");
  return str === str2;
}

module.exports = isPalindrome;
