/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let modifiedStr = str.replace(/[^a-zA-Z0-9]/g, "")

  let resultStr = ""
  let strLen = modifiedStr.length-1

  for(let i=strLen; i >=0 ; i--) {
    resultStr+=modifiedStr[i]
  }

  if(modifiedStr.toLowerCase() === resultStr.toLowerCase()) return true
  return false;
}

module.exports = isPalindrome;
