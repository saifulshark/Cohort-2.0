/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length == 0 || str.length == 1) {
    return true;
  }
  let reversedArr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedArr.push(str[i]);
  }
  // console.log(reversedArr);
  if (str.length == reversedArr.length) {
    let str1 = str.replace(/[^\w\s]/gi, "");
    let reversedArr1 = reversedArr.join("").replace(/[^\w\s]/gi, "");
    console.log(str1);
    console.log(reversedArr1);
    for (let i = 0; i < str1.length; i++) {
      if (str1[i].toLowerCase() == reversedArr1[i].toLowerCase()) {
        return true;
      }
      return false;
    }
  }
}
// console.log(isPalindrome("igga!"));

module.exports = isPalindrome;
