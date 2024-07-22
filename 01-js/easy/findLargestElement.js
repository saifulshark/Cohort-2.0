/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    // Lets assume the largest number to be the first number in the array
    let largestElement = numbers[0];
    //  Iterate over the rest of the elemets
    for(let i=1; i < numbers.length; i++){
        //Compare if the largest element with the element at i
        if(numbers[i] > largestElement){
            // Set the largest element to numbers[i]
            largestElement = numbers[i]
        }
    }
    return largestElement;
}

module.exports = findLargestElement;