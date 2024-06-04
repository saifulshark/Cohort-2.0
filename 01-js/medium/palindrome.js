/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Normalize the string: remove non-alphanumeric characters and convert to lowercase
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Split the string into characters, reverse the array, and join back to a string
  const reversedStr = normalizedStr.split('').reverse().join('');
  
  // Compare the normalized string with its reversed version
  return normalizedStr === reversedStr;
}

module.exports = isPalindrome;
