/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  let newStr1 = str1.toLowerCase()
  let newStr2 = str2.toLowerCase()
  
  if (newStr1.length != newStr2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    if (newStr1.includes(newStr2[i])) continue;
    else return false;
  }
  return true;
}

module.exports = isAnagram;
