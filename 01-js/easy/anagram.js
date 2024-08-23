/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  return approachOne(str1, str2);
}

module.exports = isAnagram;

function approachOne(str1, str2) {
  // normalising strings
  str1 = str1.toUpperCase().trim().split("").sort().join();
  str2 = str2.toUpperCase().trim().split("").sort().join();

  return str1 == str2;
}

function approachTwo(str1, str2) {
  // assuming result as false
  let isAnagram = false;
  // converting the strings to a homogenous format
  str1 = str1.toUpperCase().trim();
  str2 = str2.toUpperCase().trim();
  // matching for strings' length
  if (str1.length !== str2.length) return false;
  len = str1.length;

  // brute force to string matching
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (str1[i] == str2[j]) {
        isAnagram = true;
        break;
      }
    }
    if (!isAnagram) return false;
  }

  return true;
}
