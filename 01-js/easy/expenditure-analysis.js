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
  return approachOne(transactions);
}

module.exports = calculateTotalSpentByCategory;

function approachOne(transactions) {
  // object to store category and total price as key-value pairs
  // e.g. {Food: 20, Clothes: 30,}
  const categoryTotals = {};

  transactions.forEach((transaction) => {
    const { category, price } = transaction;
    // for new category
    if (!categoryTotals[category]) {
      categoryTotals[category] = 0;
    }
    // for existing category
    categoryTotals[category] += price;
  });

  return Object.keys(categoryTotals).map((category) => ({
    category,
    totalSpent: categoryTotals[category],
  }));
}

function approachTwo(transactions) {
  // listing down all the categories
  let categories = transactions.map(({ category, price }) => category);
  categories = new Set(categories);
  categories = [...categories];
  // calculating total expenses for each category
  const expenses = categories.map((category) => {
    // filtering transactions based on category
    const filteredArray = transactions.filter(
      (transaction) => transaction.category == category
    );
    // calculating total sum
    totalSpent = filteredArray.reduce(
      (totalSum, currentObject) => totalSum + currentObject.price,
      0
    );
    return { category, totalSpent };
  });
  return expenses;
}
