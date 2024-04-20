/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // changing the string to lower case
  str = str.toLowerCase();

  // removing spaces
  str = (str.split(" ")).join("")

  // removing punctuations
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"")

  // storing the length of str
  const strlength = str.length;

  //  return true for empty string
  if (strlength==0){ return true}

  else{

    // initiating a pointer j that points to the last character of the string
    let j = strlength-1;

    // starting a loop
    for (let i = 0; i<strlength; i++){

      // for odd palindrome if i and j are equal then return true and for even palindrome if i > j return true
      if (i>=j){
        return true;
      }

      // if character at i index is equal to j decreament j and increament i, else return false
      if (str[i]==str[j]){
        j--;
      }
      else {
        return false;
      }
    }
  }

}

module.exports = isPalindrome;
