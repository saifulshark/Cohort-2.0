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
  // Initialize an empty object to store spending for each category
  const categoryObject = {};
  // Iterate over each transaction
  for(const transaction of transactions){
    // Extract category and price from transaction
    const {category, price} = transaction;
    // If category not in object initialize it to zero
    if(!categoryObject[category]){
      categoryObject[category] = 0;
    }
    //Add price to category total
    categoryObject[category] += price;
  }
  // Convert the category in array of objects, each containing a category and total amount spent 
  const result = []
  for(const category in categoryObject){
    result.push({category:category, totalSpent :categoryObject[category]})
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
