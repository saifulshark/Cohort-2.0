/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function remove_repeats(str){
  let i;
  let x="";
  for(let i = 0; i < str.length; i++) {
    if(!(x.includes(str[i]))){
      x=x+str[i];
    }
  }
}
function isAnagram(str1, str2) {
  if(str1.length!=str2.length){
    return false;
  }
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();
  str1=remove_repeats(str1);
  str2=remove_repeats(str2);
  let i,count=0;
  for(i = 0; i < str1.length; i++) {
    if(str2.includes(str1[i])){
      count++;
    }
  }
  return count === str1.length;


}

module.exports = isAnagram;
