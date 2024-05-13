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


// Approach: 
// Create an object with commodity name and price
// Convert that object to array
function calculateTotalSpentByCategory(transactions) {
  const commoditybyCategory = {};

  transactions.forEach((transaction) => {
      // Approach 1
      if (transaction.category in commoditybyCategory) {
          commoditybyCategory[transaction.category] += transaction.price;
      } else commoditybyCategory[transaction.category] = transaction.price;

      //Approach 2
      // if (commoditybyCategory.hasOwnProperty(transaction.category)) {
      //     commoditybyCategory[transaction.category] += transaction.price;
      // } else commoditybyCategory[transaction.category] = transaction.price;

      // Approach 3
      // if (Object.keys(commoditybyCategory).includes(transaction.category)) {
      //     commoditybyCategory[transaction.category] += transaction.price;
      // } else {
      //     commoditybyCategory[transaction.category] = transaction.price;
      // }
  });

  // const arrayByCategory =   Object.keys(commoditybyCategory).map((category) => {
  //   return {category: category,
  //   price: commoditybyCategory[category]
  //   };
  // });

  const arrayByCategory = [];
  for (obj in commoditybyCategory) {
      let objByCategory = {
          category: obj,
          totalSpent: commoditybyCategory[obj],
      };
      arrayByCategory.push(objByCategory);
  }


  return arrayByCategory;
}

module.exports = calculateTotalSpentByCategory;
