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
  const map1 = new Map();
  transactions.forEach((transaction) => {
    map1.set(
      transaction.category,
      (map1.get(transaction.category) || 0) + transaction.price
    );
  });
  const res = new Array();
  map1.forEach((value, key) => res.push({ category: key, totalSpent: value }));
  return res;
}

module.exports = calculateTotalSpentByCategory;
