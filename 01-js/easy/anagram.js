/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  function normalizeAndSort(str){
    return str
    .replace(/\s+/g,'')// Remove all whitespace from the string.
    // .replace(): This method searches a string for a specified value or a regular expression and returns a new string with the specified values replaced.
    // /\s+/g: This is a regular expression (regex)
    //         \s matches any whitespace character (spaces, tabs, newlines).
    //         + means "one or more" of the preceding character, so \s+ matches one or more whitespace characters in a row.
    //         g is a flag meaning "global," so it matches all occurrences of the pattern in the string, not just the first one.
    // '': This is the replacement string, which is empty in this case. So, the method replaces all whitespace characters in the original string with nothing, effectively removing all whitespace.
    .toLowerCase() // Convert the string to lowercase.
    // This method converts the entire string to lowercase. This ensures that the comparison is case-insensitive by standardizing the case of all letters.
    .split('') // Split the string into an array of characters.
    // This method splits the string into an array of individual characters.
    // '': This is the delimiter. Since it is an empty string, the method splits the string at every character, resulting in an array where each element is a single character from the original string.
    .sort() // Sort the array of characters alphabetically.
    // This method sorts the elements of an array.
    // For an array of strings (or characters, in this case), it sorts them in ascending order according to their Unicode values. This means letters are sorted alphabetically and numbers are sorted numerically.
    .join('') // Join the sorted characters back into a single string.
    // This method joins all elements of an array into a single string.
    // '': This is the separator. Since it is an empty string, the method concatenates all the array elements directly without any characters in between.
  }
  return normalizeAndSort(str1) === normalizeAndSort(str2); // compare the two normalized and Sorted strings
}

module.exports = isAnagram;
