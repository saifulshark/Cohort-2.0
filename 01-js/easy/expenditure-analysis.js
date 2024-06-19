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
  // Initialize an empty object to keep track of total spending per category
  const spendingByCategory = {};

  // Iterate through each transaction in the list
  transactions.forEach(transaction => {
      const category = transaction.category;
      const price = transaction.price;

      // If the category is already in the object, add the price to the existing total
      if (spendingByCategory[category]) {
          spendingByCategory[category] += price;
      } 
      // If the category is not in the object, add a new entry with the price
      else {
          spendingByCategory[category] = price;
      }
  });

  // Convert the object to an array of objects with the required format
  const result = Object.keys(spendingByCategory).map(category => ({
      category: category,
      totalSpent: spendingByCategory[category]
  }));

  // Return the resulting array
  return result;
}

module.exports = calculateTotalSpentByCategory;
