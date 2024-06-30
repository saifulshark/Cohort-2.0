/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  //indexOf method
  const vowel = "aeiouAEIOU";
  let vcnt = 0;
  for(let i = 0; i< str.length; i++) {
    if (vowel.indexOf( str[i]) != -1) {
      vcnt += 1;
    }
  }
  return vcnt;

  //Array method but not working
  // let vowels = ["a","e","i","o","u","A","E","I","O","U"];
  // let arr = str.split("");
  // let vcnt = 0;
  // for(let i = 0; i < arr.length; i++){
  //   if (arr[ i ] == vowels[i]) {
  //     vcnt += 1;
  //   }
  // }
}
//
module.exports = countVowels;