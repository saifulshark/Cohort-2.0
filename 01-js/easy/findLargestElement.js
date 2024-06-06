/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    let bigNum = numbers[0];

    for (let i = numbers.length; i >= 0; i--){
        if(bigNum < numbers[i]){
            bigNum = numbers[i]
        }
    }    
    return bigNum;
}

const numbers = [3, 7, 2, 9, 1];
console.log(findLargestElement(numbers))

module.exports = findLargestElement;