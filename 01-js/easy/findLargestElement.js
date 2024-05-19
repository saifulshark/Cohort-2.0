/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    
    let biggetNo = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if(biggetNo<numbers[i]){
            biggetNo=numbers[i]
        }
        
    }
    return biggetNo
}

module.exports = findLargestElement;