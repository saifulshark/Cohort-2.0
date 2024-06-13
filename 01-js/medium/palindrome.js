/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  
  let original = removeSpacesAndSpecialChars(str).toLowerCase();
  let reversed = ""+original.split("").reverse().join("")
  return original == reversed;


}

function removeSpacesAndSpecialChars(str) {
  // Remove spaces and special characters using regular expressions
  return str.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '');
}

module.exports = isPalindrome;
