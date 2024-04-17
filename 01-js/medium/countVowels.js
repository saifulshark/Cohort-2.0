/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  str = str.toLowerCase()
  let numberOfVowels = 0
  str.split('').forEach(ch => {
    vowels.forEach(vowel => numberOfVowels += (vowel === ch) ? 1 : 0)
  })
  return numberOfVowels
}

module.exports = countVowels;