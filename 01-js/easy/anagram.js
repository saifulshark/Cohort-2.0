/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if( str1.length != str2.length) { //1st condition of anagram
    return false;
  }
  
    //printing the chars of a str
    //m1 = using for(char of str) { console.log(char)}
    //m2
    let arr1 = str1.split(''); //converting str into arr
    let cnt = {}; //cnt is an empty obj that will show the counts of indiv chars
    for(let i = 0; i < arr1.length; i++) { //traversing the array
      // console.log( arr1[i] ); 
      cnt[ arr1[i] ] = (cnt[ arr1[i] ] || 0) +1; //(cnt[ arr1[i] ] || 0) this means that if a char is undefined then give 0 and the +1 returns 1 for every first tym a letter is cnt and the cnt is stored in cnt obj
      console.log( cnt[ arr1[i] ] ); //obj with char counts
    
    console.log(cnt);
  }
  let arr2 = str2.split('');
  for(let i = 0; i < arr2.length; i++) {
    if( !cnt[ arr1[ i ] ] ) { //this checks if for every arr2[i] the arr1[i] are same if not then return false
      return false;
    }
    else {
      cnt[ arr1[i] ] -= 1; //this is inside the for loop so as to chk upon every elem. if arr1[i] == arr2[i] then there cnt is reduced by 1 on every execution of loop so that no repitive elem is counted which satisfies the logic of anagrams
    }
    return true;
  }
}
console.log(isAnagram("abhi", "habi") );
module.exports = isAnagram
