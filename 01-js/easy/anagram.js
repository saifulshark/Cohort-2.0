/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

    let mtr1 = str1.toLowerCase();
    let mtr2 = str2.toLowerCase();

    let len1 = str1.length;
    let len2 = str2.length;

    let sub1 = mtr1.split('');
    let sub2 = mtr2.split('');

    if (len1 != len2) {
        return false;
    }

    sub1.sort();
    sub2.sort();

    for (let i = 0; i < len1; i++) {
      if (sub1[i] != sub2[i]) {
        return false;
      }
    }

    return true;

}

module.exports = isAnagram;
