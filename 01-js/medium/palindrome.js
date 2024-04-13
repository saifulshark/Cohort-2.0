/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase().replace(/ /g,'')
  strLength=str.length
  j=strLength-1
  let pattern = /[a-z0-9]/;

  for(let i=0;i<strLength;i++){
    while(!(pattern.test(str[i])))
    {
      i+=1
      if(i>=strLength)
      {
        return true
      }
    }
    while(!(pattern.test(str[j])))
    {
      j-=1
      if(j<0)
      {
        return true
      }
    }
    if(str[i]!=str[j])
    {
      return false
    }
    j-=1
  }
  return true;
}
//console.log(isPalindrome('Able, was I ere I saw Elba!'))
module.exports = isPalindrome;
