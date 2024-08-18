/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let asciiSumStr1 = 0;
  let asciiSumStr2 = 0;
  const string1 = str1.toLowerCase().trim();
  const string2 = str2.toLowerCase().trim();
  if (string1.length !== string2.length) {
    return false;
  }
  for (let i = 0; i < string1.length; i++) {
    asciiSumStr1 = asciiSumStr1 + string1.charCodeAt(i);
    asciiSumStr2 = asciiSumStr2 + string2.charCodeAt(i);
  }
  if (asciiSumStr1 === asciiSumStr2) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAnagram;
