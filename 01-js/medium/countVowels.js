/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function isVowel(ch){
    return ch==='a' || ch==='e' || ch==='i' || ch==='o' || ch==='u' ||ch==='A' || ch==='E' || ch==='I' || ch==='O' || ch==='U'
}
function countVowels(str) {
    let count = 0
    for( let i=0; i<str.length; i++){
        if(isVowel(str[i])){
            ++count
        }
    }
    return count
}

module.exports = countVowels;