/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  function normalize(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  const normalizedStr = normalize(str);
  const n = normalizedStr.length;
  let i = 0, j = n - 1;

  while (i <= j) {
    if (normalizedStr[i] !== normalizedStr[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

module.exports = isPalindrome;
