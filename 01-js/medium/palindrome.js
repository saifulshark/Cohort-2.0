/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Normalize the string: remove non-alphanumeric characters and convert to lowercase
  let normalizedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Get the length of the normalized string
  let length = normalizedString.length;
  
  // Check each character from the start with the corresponding character from the end
  for (let i = 0; i < length / 2; i++) {
    if (normalizedString[i] !== normalizedString[length - 1 - i]) {
      // Return false if any character does not match
      return false;
    }
  }
  
  // If no mismatch is found, the string is a palindrome
  return true;
}

module.exports = isPalindrome;
