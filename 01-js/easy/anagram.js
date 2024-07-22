/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  //Cast the strings to lowerCase
  let lower1 = str1.toLowerCase();
  let lower2 = str2.toLowerCase();

  //Calculate length of both the strings
  let len1 = str1.length;
  let len2 = str2.length;

  //Remove whitespaces from lowercase strings
  let subString1 = lower1.split('');
  let subString2 = lower2.split('');

  if(len1 != len2){
    return false;
  }
  //Sort the modified substrings
  subString1.sort();
  subString2.sort();

  for(let i=0; i<len1; i++){
    if(subString1[i] != subString2[i]){
      return false
    }
  }
  return true
}

module.exports = isAnagram;
