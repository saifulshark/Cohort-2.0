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
  const categoryMap = new Map();
  const numberOfTransactions = transactions.length;
  const expenditure = [];
  for (let i = 0; i < numberOfTransactions; i++) {
    if ( categoryMap.has(transactions[i]["category"]) ) {
      const currentExpense = categoryMap.get(transactions[i]["category"]);
      categoryMap.set(transactions[i]["category"], currentExpense+transactions[i]["price"]);
    }
    else {
      categoryMap.set(transactions[i]["category"], transactions[i]["price"]);
    }
  }
  categoryMap.forEach((value, key) => {
    expenditure.push({category: key, totalSpent: value});
  });
  return expenditure;
}

module.exports = calculateTotalSpentByCategory;
