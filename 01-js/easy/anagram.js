/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  //remove any Non-alphanumeric characters and convert it into the lower case 
    const newStr1= str1.replace(/[^\w]/g, '').toLowerCase();
    const newStr2= str2.replace(/[^\w]/g, '').toLowerCase();

    const Sort1= newStr1.split('').sort().join('');
    const Sort2= newStr2.split('').sort().join('');

    return Sort1==Sort2;
}

module.exports = isAnagram;
