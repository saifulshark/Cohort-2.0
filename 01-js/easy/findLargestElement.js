/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

// Approach
// Sort in Descending and find first number

// Why b-a ?
// Sort in JS sorts lexicographically , so comparator func is reqd
function findLargestElement(numbers) {
    numbers.sort((a, b) => b - a);
    return numbers[0];
}

module.exports = findLargestElement;