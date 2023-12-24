/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    if(str1.length!==str2.length) return false
    toLower(str1)
    toLower(str2)
    const map1 = new Map()
    const map2 = new Map()
    for(let i=0; i<str1.length; i++) {
        if (!map1.has(str1[i])) map1[str1[i]] = 1
        else map1[str1[i]] += 1

        if (!map2.has(str2[i])) map2[str2[i]] = 1
        else map2[str2[i]] += 1
    }
    for(let key in map1.keys()){
        if(!map2.has(key) || map2[key]!==map1[key]) return false
    }
    return true
}
console.log(isAnagram('Debit Card', 'Bad Credit'))
module.exports = isAnagram;
