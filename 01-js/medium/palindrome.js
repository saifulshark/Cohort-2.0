/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  var x='',y='';
  var i=0;
  while(i<str.length){
    if(str[i]>='a'&& str[i]<='z'){
      x=x+str[i];
      y=str[i]+y;
    }
    
    i++;
  }
  if(y===x){
    return true;
  }
  return false;
}

module.exports = isPalindrome;
