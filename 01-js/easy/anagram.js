/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;
  const map1 = new Map();
  for (let i = 0; i < str1.length; i++){
    const char = str1[i].toLowerCase();
    map1.set(char, (map1.get(char) || 0) + 1);
  }
  for (let i = 0; i < str2.length; i++){
    const char = str2[i].toLowerCase();
    if (!map1.has(char) || map1.get(char) === 0) return false;
    map1.set(char, map1.get(char) - 1);
  }
  return true;
}

module.exports = isAnagram;
