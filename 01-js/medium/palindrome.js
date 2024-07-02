/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  //Normalize the string
  let normalizedString = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();

  // Initalize two pointers
  let left = 0;
  let right = normalizedString.length - 1;

  //Compare the pointers if same increment left and decrement right if not they are not palindrome
  while(left < right){
    if(normalizedString[left] != normalizedString[right]){
      return false;
    }
    left++;
    right--;
  }
  return true;
}

module.exports = isPalindrome;
