// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs')
fs.readFile('Aa.txt','utf-8',function(err,data){
    console.log(data);
    console.log(err);
})

// Expensive operation
function expensiveOperation(iterations) {
    console.log(`Starting expensive operation with ${iterations} iterations`);
    let result = 0;
    for (let i = 0; i < iterations; i++) {
        result += Math.sqrt(i)
    }
    console.log('Expensive operation completed. Result:', result);
}
expensiveOperation(1);  // Less expensive
expensiveOperation(10);  // More expensive
expensiveOperation(10);  // Very expensive


