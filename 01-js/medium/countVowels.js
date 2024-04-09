/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    if (str === null || str === "") {
      return 0;
    }
    str = str.toLowerCase();
    strlen = str.length;
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for ( let i = 0; i < strlen; i++) {
      if ( vowels.includes(str[i]) ) {
        count++;
      } 
    }
    return count;
}

module.exports = countVowels;