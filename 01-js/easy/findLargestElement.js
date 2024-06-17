/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    // const arr = [3, 72, 9, 1];
    var maxx = -100000000;
    if(numbers.length==0){
        return 0;
    }
    for (var i = 0; i < numbers.length; i++) {
        maxx = Math.max(maxx, numbers[i]);
    }
    return maxx;
}

module.exports = findLargestElement;
