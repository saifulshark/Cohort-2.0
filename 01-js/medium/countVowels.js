/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
  let count = 0;
  const arr = [A,E,I,O,U,a,e,i,o,u];
  let arr2 = str.split('');
  for(let i = 0; i<arr2.length; i++){
    for(let j = 0; arr.length; j++){
      if(arr[i]==arr2[j]){
        count++
        continue;
      }
    }
  }
  return count;
}

module.exports = countVowels;
