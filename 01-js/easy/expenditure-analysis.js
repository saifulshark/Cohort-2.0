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

// function calculateTotalSpentByCategory(transactions) {
// 	const res = [];
// 	for(var i of transactions) {
// 		var flag = false
// 		for(var j of res) {
// 			if(j['category'] === i['category']) {
// 				j.totalSpent += i.price
// 				flag = true
// 			}
// 		}
// 		if(flag) {
// 			continue
// 		}
// 		res.push({
// 			category : i.category,
// 			totalSpent : i.price
// 		})
// 	}
// 	return res
// }

//imporved
function calculateTotalSpentByCategory(transactions) {
	var totalSpent = {}
	transactions.forEach(transaction => {
		const { category, price } = transaction
		if(!totalSpent[category]) {
			totalSpent[category] = 0
		}
		totalSpent[category] += price
	})
	const res = Object.keys(totalSpent).map(name => {
		return {
			category : name,
			totalSpent : totalSpent[name]
		}
	})
	return res
}

console.log(calculateTotalSpentByCategory([{
		id: 1,
		timestamp: 1656076800000,
		price: 60,
		category: 'sex',
		itemName: 'Girl',
	},{
		id: 1,
		timestamp: 1656076800000,
		price : 11,
		category: 'food',
		itemName: 'Pizza',
	},{
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'food',
		itemName: 'Pizza',
	}]));

module.exports = calculateTotalSpentByCategory;
