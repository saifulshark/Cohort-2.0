/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false
  if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, 
  formed from rasp.
*/

function isAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if (str1.length !== str2.length) {
        return false;
    }

    /*const charCount = {};
    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
        if (charCount[char] < 0) {
            return false;
        }
    }

    return true;*/

    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;