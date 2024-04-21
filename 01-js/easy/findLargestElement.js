/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(numbers.length===0)
    return undefined;

   let maxi = numbers[0];
   for(let i = 1; i<numbers.length; i++)
   {
if(numbers[i]>maxi)
maxi = numbers[i];
   }

   return maxi;
}

console.log(findLargestElement([2,3,10,1,3]))

module.exports = findLargestElement;