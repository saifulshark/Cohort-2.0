/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// Approach:
// Clean the String, Convert to common case, Sort and Check

function isAnagram(str1, str2) {
  return solve(str1) == solve(str2);
}

// Why Split and Join?
// Because sort() functions on arrays only
function solve(str) {
  return str.replace(/\s/g,'').toUpperCase().split("").sort().toString();
}

module.exports = isAnagram;
