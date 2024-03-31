/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const vowels = 'aeiou';
    const str1 = str.replace(/\s/g, '').toLowerCase();
    let ans = 0;

    for(let char of str1) {
      if(vowels.includes(char)) ans++;
    }
    return ans;
}

module.exports = countVowels;