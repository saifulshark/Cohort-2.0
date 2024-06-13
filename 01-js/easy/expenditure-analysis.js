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

  const categoryTotals = new Map();

    // Iterate over each transaction
    transactions.forEach(transaction => {
        // Extract category and price from the transaction
        const { category, price } = transaction;

        // Check if the category is already in the map
        if (categoryTotals.has(category)) {
            // If it is, add the current price to the total
            categoryTotals.set(category, categoryTotals.get(category) + price);
        } else {
            // If not, initialize the total with the current price
            categoryTotals.set(category, price);
        }
    });

    // Convert the map to an array of objects
    const result = Array.from(categoryTotals, ([category, totalSpent]) => ({
        category,
        totalSpent
    }));

    return result;

}

module.exports = calculateTotalSpentByCategory;
