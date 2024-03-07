/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let biggestNum = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (biggestNum < numbers[i]) {
      biggestNum = numbers[i];
    }
  }
  return biggestNum;
}
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9.5, 10.3, 12.1, 6];
// console.log(`Debug Statement: ${findLargestElement(arr)}`);

module.exports = findLargestElement;
