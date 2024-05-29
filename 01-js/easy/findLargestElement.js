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

    // if (numbers.length > 0) {
    //   let max = Number(numbers[0]);
    //   for (let i = 1; i < numbers.length; i++) {
    //     if (Number(numbers[i]) >= max) max = numbers[i];
    //   }
    //   return max;
    // }
    // return undefined;
}

module.exports = findLargestElement;