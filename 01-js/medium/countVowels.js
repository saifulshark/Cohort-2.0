/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(s) {
  // Your code here
var count=0;
for(var i=0;i<s.length;i++){
  if(s[i]=='a'||s[i]=='e'||s[i]=='i'||s[i]=='o'||s[i]=='u' || s[i]=='A' ||s[i]=='E'||s[i]=='I'||s[i]=='O'||s[i]=='U'){
    count++;
  }
}
return count;
}

module.exports = countVowels;