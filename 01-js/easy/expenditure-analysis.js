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
  const spent = [];
  const catgeoryDetails = {};
  transactions.forEach((element) => {
    if (catgeoryDetails[element.category] === undefined) {
      catgeoryDetails[element.category] = element.price;
    } else {
      let totalPrice = catgeoryDetails[element.category];
      totalPrice = totalPrice + element.price;
      catgeoryDetails[element.category] = totalPrice;
    }
  });
  for (const key in catgeoryDetails) {
    const spentObject = {
      category: key,
      totalSpent: catgeoryDetails[key],
    };
    spent.push(spentObject);
  }
  return spent;
}

module.exports = calculateTotalSpentByCategory;
