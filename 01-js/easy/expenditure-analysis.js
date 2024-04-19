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
  let resultArr = [];
  let allCategory = [];

  transactions.forEach((transaction) => {
    if (!allCategory.includes(transaction.category)) {
      allCategory.push(transaction.category);
    }
  });

  allCategory.forEach((category) => {
    let newObj = {};
    newObj.category = category;
    newObj.totalSpent = 0;
    resultArr.push(newObj);
  });

  transactions.forEach((transaction) => {
    resultArr.forEach((resultObj) => {
      if (transaction.category == resultObj.category) {
        resultObj.totalSpent += transaction.price;
      }
    });
  });

  return resultArr;
}

module.exports = calculateTotalSpentByCategory;
