/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str1) {
  str1 = str1.replace(/\W/g, "");
  str1 = str1.toUpperCase();

  if (str1.length !== str1.length) return false;
  len = str1.length;

  for (let i = 0; i <= len / 2 + 1; i++) {
    if (str1[i] !== str1[len - 1 - i]) return false;
  }
  return true;
}

module.exports = isPalindrome;
