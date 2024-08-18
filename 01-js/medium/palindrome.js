/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let isPalindrome = false;
  // level
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i].toLowerCase() === "?" || str[i].toLowerCase() === "!") {
      continue;
    } else {
      reverse = reverse + str[i].toLowerCase();
    }
  }
  console.log("reverse", reverse);
  if (str.toLowerCase() === reverse) {
    isPalindrome = true;
  } else {
    isPalindrome = false;
  }

  return isPalindrome;
}

module.exports = isPalindrome;
isPalindrome("Eva, can I see bees in a cave?");
