function isAnagram(str1, str2) {
    if(str1.length !== str2.length){
      return false;
    }
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    str1 = str1.split("").sort().join("");
    console.log(str1)
    str2 = str2.split("").sort().join("");
    console.log(str2)
    if(str1===str2){
      return true
    }
    return false
  }

  console.log(isAnagram("rasp","spar"))
  isAnagram('listen', 'silent')