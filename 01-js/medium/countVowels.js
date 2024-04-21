/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function isVowel(x) {

  return ("aeiouAEIOU".indexOf(x) != -1); 
}

function countVowels(str) {
    // Your code here
    let ans = 0;

    for(let i = 0; i<str.length; i++)
    {
        if(isVowel(str[i]))
        ans+=1;
    }
    return ans;
}

// module.exports = countVowels;
console.log(countVowels("Hello"));