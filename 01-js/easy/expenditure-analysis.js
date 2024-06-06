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
  const categoryTotals = {};

  for (let i = 0; i < transactions.length; i++) {
      const transaction = transactions[i];
      const category = transaction.category;
      const price = transaction.price;

      if (categoryTotals.hasOwnProperty(category)) {
          categoryTotals[category] += price;
      } else {
          categoryTotals[category] = price;
      }
  }
  const result = Object.keys(categoryTotals).map(category => ({
      category: category,
      totalSpent: categoryTotals[category]
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
