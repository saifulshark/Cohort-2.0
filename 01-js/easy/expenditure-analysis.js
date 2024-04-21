/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  transactionsSize=transactions.length
  let categoryWiseTotalPrice= []
  let dictObjOfCategoryWiseTotalPrice= {}
  for(let i=0;i<transactionsSize;i++)
  {
    if(transactions[i].category in dictObjOfCategoryWiseTotalPrice) // Method 1
    //if(dictObjOfCategoryWiseTotalPrice.hasOwnProperty(transactions[i].category)) // Method 2
    {
      dictObjOfCategoryWiseTotalPrice[transactions[i].category]+=transactions[i].price
    }
    else{
      dictObjOfCategoryWiseTotalPrice[transactions[i].category]=transactions[i].price

    }    
  }
  for( let category in dictObjOfCategoryWiseTotalPrice)
  {
    categoryWiseTotalPrice.push({category: category, totalSpent: dictObjOfCategoryWiseTotalPrice[category]})
  }
  return categoryWiseTotalPrice
}

module.exports = calculateTotalSpentByCategory;
