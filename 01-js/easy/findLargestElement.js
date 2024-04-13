/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    numbersLength=numbers.length
    if(numbersLength==0)
    {
        return undefined
    }
    max=-1e+9
    for(let i=0;i<numbersLength;i++)
    {
        if(numbers[i]>max)
        {
            max=numbers[i]
        }
    }
    return max
}

module.exports = findLargestElement;