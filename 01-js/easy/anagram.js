/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function sortt(str){
  var str2='';
  for(var i=0;i<str.length;i++){
    if(str[i]===' '){
      continue;
    }
    else{
      str2+=str[i].toLowerCase();
    }
  }
  return str2.split("").sort().join("");
  // return str2;
}

function isAnagram(str1, str2) {
      str1=sortt(str1);
      str2=sortt(str2);
      return str1===str2;
}

module.exports = isAnagram;
