/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
function findLargestElement(numbers) {
    var lar = numbers[0];
    if (numbers.length == 0){
      return "Enter the array";
    }
    for(var i = 1 ; i < numbers.length ; i++){
      if(numbers[i] > lar){
        lar = numbers[i];
      }
    }
    return lar;
  }
  
  
  console.log(findLargestElement([1]));
  module.exports = findLargestElement;