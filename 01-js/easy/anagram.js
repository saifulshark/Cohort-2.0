/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

if (str1.length !== str2.length)
  return false;

 str1 = str1.toLowerCase();
 str2 = str2.toLowerCase();
 str1 = str1.replace(" ", "");
 str2 = str2.replace(" ", "");
 var n1 = str1.length;
 var n2 = str2.length;
    let arr = new Array(26).fill(0);

    for (let i = 0; i < n1; i++) {
        arr[str1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    for (let i = 0; i < n2; i++) {
        arr[str2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    for (let i = 0; i < 26; i++) {
        if (arr[i] !== 0) {
            return false;
        }
    }

    return true;
}

module.exports = isAnagram;
