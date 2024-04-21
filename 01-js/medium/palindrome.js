/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().trim();
  let str1 = "";
 
 
   let i = 0, j = str.length-1;
 
   for(let k = 0; k<str.length; k++)
   {
     if(str[k]<='z' && str[k]>='a')
         str1+=str[k];
   }
 
   
 i = 0, j = str1.length-1;
   while(i<j)
   {
     
     if(str1[i]!=str1[j])
     return false;
   i++;
   j--;
   }
   return true;
}

module.exports = isPalindrome;
