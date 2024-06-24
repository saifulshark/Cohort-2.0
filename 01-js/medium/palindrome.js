/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  //removes non alphanumeric characters
  const str1 = str.toLowerCase().replace(/[^a-z0-9]/g, "");;
  var j =str1.length-1;
  var i =0;
  var ans= false;
 if(str1.length<=1) return true;
  while(i<=j){
    if(str1[i]==str1[j]){
      return true;
    }else{
      return false;
    }
    i++;
    j--;
  }
  return ans;
}

module.exports = isPalindrome;
