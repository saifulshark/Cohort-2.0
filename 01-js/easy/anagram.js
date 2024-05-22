/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.


  */

function anagram(str1 , str2){
  if (sort(str1) ==sort(str2)){
    return true ;
  }
  else {
   return false ;
  }
}
 
function sort (str1){
  str1 = str1.split('');
  str1 = str1.sort();
  str1 = str1.join('');
  return str1;
 }
 
console.log(anagram("cat" , "tac"));

// module.exports = isAnagram;
