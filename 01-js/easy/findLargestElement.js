/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    // Initialize largest to the first element of the array
    let largest = numbers[0];
    
    // Iterate through each element in the array
    numbers.forEach(element => {
        // Update largest if the current element is greater
        if (element > largest) {
            largest = element;
        }
    });
    
    return largest;
}
module.exports = findLargestElement;