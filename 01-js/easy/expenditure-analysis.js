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
  let categoryTotal = [];
  const obj = {};
  for(let i = 0; i < transactions.length; i++) {
    const category = transactions.category;
    const price = transactions.price;
    let j;
    if(i <= transactions.length && j <= transactions.length) {
      if(transactions[i].category === transactions[j].category ) {
        totalSpent += price;
      }
      else {
        totalSpent = price;
      }
      obj.category = totalSpent;
    }
  }
  let newcategoryTotal = categoryTotal.push(obj);
  console.log(newcategoryTotal);
  return [];
}
calculateTotalSpentByCategory([{id:1,timestamp: 1656076800000,price: 10,category: 'Food',itemName: 'Pizza', }]);

calculateTotalSpentByCategory([{id:1,timestamp: 1656076800000,price: 10,category: 'Food',itemName: 'Pizza', },{id:2,timestamp: 1656076800000,price: 10,category: 'Food',itemName: 'Pie', }]);

calculateTotalSpentByCategory([]);

calculateTotalSpentByCategory([{id:1,timestamp: 1656076800000,price: 10,category: 'Food',itemName: 'Pizza', },
{id:2,timestamp: 1656076800000,price: 10,category: 'Electronnics',itemName: 'AC', } ,
{id:3,timestamp: 1656076800000,price: 10,category: 'Clothing',itemName: 'Shirt', }]);

module.exports = calculateTotalSpentByCategory;
