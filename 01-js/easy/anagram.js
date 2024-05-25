/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  function cleanString(str) {
    return str.toLowerCase()           // Convert to lowercase
              .split('')               // Split into characters
              .sort()                  // Sort the characters
              .join('');               // Join back into a string
  }

  // Clean and sort both strings, then compare
  return cleanString(str1) === cleanString(str2);

}

module.exports = isAnagram;
