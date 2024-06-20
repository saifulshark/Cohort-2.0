/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  //  We take the string as an input of arrays element by using split function 
  let arrayUsed=str.split('')
  //  We are taking a variable to store the count of vowels
  let count=0;
  //  Declaring a Set of Vowels by this we dont need to compare again and again
  const vowels=new Set(['a','e','i','o','u','A','E','I','O','U']);
  //  We are usng forEach function here on array by which we itterate/do a particular task for each elements in the array
  arrayUsed.forEach(element => {
    //  Ckecking that the vowels has that particular element or not.We can use has with vowels as we defined vowels as a Set and .has function only works with Set
    if(vowels.has(element)){
      //  If Vowel if found the increasing the count
      count++;
    }
  });
  //  Returning Count
  return count;
}

module.exports = countVowels;