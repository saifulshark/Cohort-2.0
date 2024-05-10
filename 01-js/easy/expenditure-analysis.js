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
  const resObj = {};
  transactions.forEach(item => {
    if(resObj[item["category"]]) resObj[item["category"]] += item["price"]
    else resObj[item["category"]] = item["price"]
  })
  const resArr = [];
  Object.entries(resObj).forEach((item) =>{

    resArr.push({"category": item[0], "totalSpent": item[1] })

  })

  return resArr;
}
const test = [{ category: 'Food', totalSpent: 30 },
                  { category: 'Clothing', totalSpent: 40 },
                 { category: 'Electronics', totalSpent: 30 }]

calculateTotalSpentByCategory(test)
module.exports = calculateTotalSpentByCategory;
