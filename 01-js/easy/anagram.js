/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const str1FreqMap = {};
  const str2FreqMap = {};

  str1.toLowerCase().split('')
  .forEach((char) => {
    str1FreqMap[char] = (str1FreqMap[char] || 0) + 1;
  });
  str2.toLowerCase().split('')
  .forEach((char) => {
    str2FreqMap[char] = (str2FreqMap[char] || 0) + 1;
  });

  return str1.length === str2.length && Object.keys(str1FreqMap).every((char) => str1FreqMap[char] === str2FreqMap[char]);
}

module.exports = isAnagram;
