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
  // return [];

  result = [];
  

  // console.log(transactions)

  for (let i = 0; i < transactions.length; i++) {
    // console.log(transactions[i]);
  

    let ind = -1;

    for(let j = 0; j<result.length; j++)
    {
      if(result[j].category==transactions[i].category)
      {
        ind = j;
        break;
      }
    }

    if(ind!=-1)
    {
      result[ind].totalSpent+=transactions[i].price;
    }
    else{
      result.push({"category":transactions[i].category, "totalSpent":transactions[i].price});
    }

  }
  console.log(result);
  // console.log(result1);
  return result;

}

module.exports = calculateTotalSpentByCategory;
