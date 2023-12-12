/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // check for string lengths
if(str1.length != str2.length) {
  return false
  }
  
  // replace all special characters from the strings
  const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/g;
  
  const speRemovedStr1 = str1.replace(specialCharacters, '').toLowerCase();
  const speRemovedStr2 = str2.replace(specialCharacters, '').toLowerCase();
  
  // now rearrange the both strings
  const rearrangeStr1 = speRemovedStr1.split('').sort().join('');
  const rearrangeStr2 = speRemovedStr2.split('').sort().join('');
  
  // check after rearrange strings
  if(rearrangeStr1 == rearrangeStr2) {
  return true
  } else {
  return false
  }

}

module.exports = isAnagram;
