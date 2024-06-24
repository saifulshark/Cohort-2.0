function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().split("").sort().join("");
  str2 = str2.toLowerCase().split("").sort().join("");
  if(str1 !== str2){
    return false;
  }
  else{
    return true;
  }
}

module.exports = isAnagram;