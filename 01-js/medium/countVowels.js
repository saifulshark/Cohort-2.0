/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

// function countVowels(str) {
//     // Your code here
//     let str2 = str.toLowerCase();
//     let count = 0;
//     for(let i=0;i<str.length;i++){
//       if(str2.charAt(i) == 'a' || str2.charAt(i) == 'e' || str2.charAt(i) == 'i' || str2.charAt(i) == 'o' || str2.charAt(i) == 'u') 
//       count++;    
//     }
//     return count;
// }

const countVowels = (str) => {
  let str2 = str.toLowerCase();
  let count = 0;
  for(char of str2){
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
      count++;
  }
  return count;
}


module.exports = countVowels;