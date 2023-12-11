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


function find_unique(transactions){
  let i,j=0;
  let r=[];
  for(i=0;i<transactions.length;i++){
    if(!(r.includes(transactions[i].category))){
      r[j++]=transactions[i].category;
    }
  }
  return r;
}

function calculateTotalSpentByCategory(transactions) {
  let i;
  let result=[];
  let unique=find_unique(transactions);

  for(i=0;i<unique.length;i++){
    result.push({
      category:unique[i],
      totalSpent: 0
    })
  }
  for (i = 0; i < transactions.length; i++) {
    element = transactions[i];
    result[unique.indexOf(transactions[i].category)].totalSpent+=transactions[i].price;
    
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
