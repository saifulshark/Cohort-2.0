/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  const convertedString = str.toLowerCase();
  let vowelCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < convertedString.length; i++) {
    if (vowels.includes(convertedString[i])) {
      vowelCount = vowelCount + 1;
    }
  }
  return vowelCount;
}

module.exports = countVowels;
