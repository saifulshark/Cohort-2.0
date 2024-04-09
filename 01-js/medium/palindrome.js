/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if ( str === "" ) {
    return true;
  }
  str = str.toLowerCase();
  str = str.replace(/\s/g, '');
  let left = 0;
  let right = str.length - 1;
  const regex = /[A-Za-z]/;
  while (left < right) {
    if ( !regex.test(str[left]) ) {
      left++
    }
    if ( !regex.test(str[right]) ) {
      right--;
    }
    if ( str[left] === str[right]) {
      left++;
      right--;
    }
    else {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
