/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

/*Method 1
function isAnagram(str1, str2) {
  if(str1.length!=str2.length){
    return false
  }
  lengthOfString=str1.length
  for(let i=0;i<lengthOfString;i++)
  {
    EachCharOfStringOne=str1[i].toLowerCase()
    let flag=false
    for(let j=0;j<lengthOfString;j++)
    {
      if(EachCharOfStringOne===str2[j].toLowerCase())
      {
        flag=true
        break
      }
    }
    if(flag==false)
    {
      return false
    }
  }
  return true
}
*/
/*Method 2 */
function isAnagram(str1, str2) {
  if(str1.length!=str2.length){
    return false
  }
  lengthOfString=str1.length
  let dictOfStr1={}
  for(let i=0;i<lengthOfString;i++)
  {
    dictOfStr1[str1[i].toLowerCase()]=true
  }
  console.log(dictOfStr1)
  for(let i=0;i<lengthOfString;i++)
  {
    if(str2[i].toLowerCase() in dictOfStr1)
    {

    }
    else{
      return false
    }
  }
  return true

}
module.exports = isAnagram;
