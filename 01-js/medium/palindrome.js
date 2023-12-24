/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let i=0, j = str.length-1
  let s = str.toLowerCase()
  while(i<j){
    while(s[i]===s[i].toUpperCase()) i++
    while(s[j]===s[j].toUpperCase()) j--
    if(s[i]!==s[j]) return false
    i++
    j--
  }
  return true
}

module.exports = isPalindrome;
