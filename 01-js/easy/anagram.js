/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const str1_length = str1.length;
  if (str1_length !== str2.length) {
    return false;
  }
  const alphaMap = new Map();
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  for(let i = 0 ; i < str1_length; i++) {
    if ( alphaMap.has(str1[i]) ) {
      alphaMap.set(str1[i], alphaMap.get(str1[i])+1);
    }
    else {
      alphaMap.set(str1[i], 1);
    }
  }
  for(let i = 0; i < str1_length; i++) {
    if ( !alphaMap.has(str2[i])) {
      return false;
    }
    if (alphaMap.get(str2[i]) == 1) {
      alphaMap.delete(str2[i]);
    }
    else {
      alphaMap.set(str2[i], alphaMap.get(str2[i])-1);
    }  
  }
  if (alphaMap.size === 0) {
    return true;
  }
}

module.exports = isAnagram;
