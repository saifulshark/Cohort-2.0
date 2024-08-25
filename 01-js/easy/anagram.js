/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let demo1=str1.toLowerCase();
    let demo2=str2.toLowerCase();
    if(demo1.length !==demo2.length){
      return false;
    }
    let subString1 = demo1.split('').sort().join('');
    let subString2 = demo2.split('').sort().join('');

    return subString1===subString2

}
console.log(isAnagram("liste@n", "@lsitne")); // true
module.exports = isAnagram;
