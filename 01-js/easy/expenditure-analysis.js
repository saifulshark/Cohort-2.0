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

const { totalmem } = require("os");

function calculateTotalSpentByCategory(transactions) {
  var categoryWiseTotal = [];
  for (var i = 0; i < transactions.length; i++){
    var category= transactions[i].category;
    var price=transactions[i].price;
    var isCategoryPresent = false;
    for(var j=0; j<categoryWiseTotal.length; j++){
      if(categoryWiseTotal[j].category==category){
        categoryWiseTotal[j].totalSpent=categoryWiseTotal[j].totalSpent+price;
        isCategoryPresent=true;
      }
    }
    if(isCategoryPresent==false){
      var jj={
        category:category,
        totalSpent:price
      }
    categoryWiseTotal.push(jj);
    
    }
  }
  return categoryWiseTotal;
}
module.exports = calculateTotalSpentByCategory;
