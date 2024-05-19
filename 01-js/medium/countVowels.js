/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/


// Approach
function countVowels(str) {
  const newStr = str.toLowerCase();
  let cnt = 0;
  for (ch of newStr) {
      if (ch == "e" || ch == "a" || ch == "i" || ch == "o" || ch == "u")
          cnt++;
  }

  return cnt;
}

module.exports = countVowels;