/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Function to replace all whitespaces from string & converting to lowercase
  const normalizedString = str => str.replace(/\s/g, '').toLowerCase()

  // Normalizing both the strings
  str1 = normalizedString(str1)
  str2 = normalizedString(str2)

  // Making array of the characters, sorting array & joining back into one string
  str1 = str1.split('').sort().join('')
  str2 = str2.split('').sort().join('')

  return str1 === str2
}

module.exports = isAnagram;
