/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function clear(str){
  var str2='';
  for(var i=0;i<str.length;i++){
    if(str[i]===' ' || str[i]===',' || str[i]==='?' || str[i]==='!' || str[i]==='.'){
      continue;
    }
    else{
      str2+=str[i].toLowerCase();
    }
  }
  return str2;
  // return str2;
}

function isPalindrome(str) {
  var str1=clear(str);
  var str2=str1.split("").reverse().join("");
  return (str1==str2)
}

module.exports = isPalindrome;
