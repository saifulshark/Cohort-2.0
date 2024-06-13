/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let vowels = Array.from('aeiouAEIOU');

    let total = 0;
    let stringArray = Array.from(str)
      stringArray.forEach(element => {
      if(vowels.includes(element)){
        total= total+1;}
      
    });
    return total;
}
module.exports = countVowels;