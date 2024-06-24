/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function isAlpha(ch){
  if(ch>='a' && ch<='z') return true;
  return false;
}
function isPalindrome(str) {
  let str2=str.toLowerCase();
  let i=0;
  let j=str.length-1;
  if(str.length==0 || str.length==1) return true;
  while(i<=j){
    if(isAlpha(str2[i]) && isAlpha(str2[j])){
      if(str2[i]!=str2[j]) return false;
      else{
        i++;
        j--;
      }
      return true;
    }
    else if(isAlpha(str2[i])) j--;
    else if(isAlpha(str2[j])) i++;
    else{
      i++;
      j--;
    }
  }
  
}

module.exports = isPalindrome;
