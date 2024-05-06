/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if(str1.length!==str2.length){
    return false;
  }
  const sortedstr1=str1.split("").sort().join("");
  const sortedstr2=str2.split("").sort().join("");

  /*for(let i=0;i<str1.length();i++){
    if(str1=str1){
      return true
    }
  }*/

  return sortedstr1===sortedstr2;
}

module.exports = isAnagram;
