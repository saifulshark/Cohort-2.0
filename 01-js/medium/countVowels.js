/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
   let vowels = 0;
   const vowelList = 'aeiouAEIOU';

   for ( i = 0; i < str.length; i++) {
    if(vowelList.includes(str[i])) {
      vowels++;
    }
     
  }
  console.log(vowels);
  return vowels;   
}

module.exports = countVowels;