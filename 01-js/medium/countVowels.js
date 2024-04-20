/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // changing all the alphabets of the str to lower case
  str = str.toLowerCase()

  // spliting each array of the str
  const strArray = str.split('')

  // creating a array containing all the vowels
  const vowels = ['a', 'e', 'i', 'o', 'u']

  // initializing vowelCount
  let vowelCount = 0

  // starting a loop from 0 to length of str
  for (let i=0; i<strArray.length; i++){

    // increamenting vowelCount if the current alphabet of the str is a vowel
    if (vowels.includes(strArray[i])){
      console.log(strArray[i])
      vowelCount +=1
    }
  }
  return vowelCount
}

module.exports = countVowels;