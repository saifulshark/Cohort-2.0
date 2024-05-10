/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if(str1.length !== str2.length) return false;
  const testObj = {};
  for(let i=0; i<str1.length; i++){
    if(!testObj[str1[i]]) testObj[str1[i]] = 1;
    else testObj[str1[i]]++;
  }
  console.log(testObj)
  for(let i=0; i<str2.length; i++){
    if(testObj[str2[i]] == 0 || !testObj[str2[i]]) return false;
    testObj[str2[i]]--;
  }
  return true;
}

isAnagram('Debit Card', 'Bad Credit');
module.exports = isAnagram;
