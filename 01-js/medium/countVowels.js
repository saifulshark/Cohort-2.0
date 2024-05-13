/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    console.log(str)
    strLength=str.length
    vowelList=['a', 'e', 'i', 'o', 'u']
    vowelCount=0
    for(let i=0;i<strLength;i++)
    {
      if(vowelList.includes(str[i].toLowerCase()))
      {
        console.log(str[i].toLowerCase())

        vowelCount+=1
      }
    }
    return vowelCount
}
module.exports = countVowels;