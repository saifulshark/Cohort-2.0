/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let maxNum=numbers[0]

    for (let ele in numbers){
        if(ele>maxNum){
            maxNum=ele
        }
    }

    return 1;
    
}

module.exports = findLargestElement;