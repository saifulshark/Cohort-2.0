// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');
const content = 'This is the content that we will write to the file.\nIt can span multiple lines.';
fs.writeFile('Aa.txt',content,'utf8',function(err,data){
    if(err){
        console.log(err)
    }else{
    console.log(data)
    }
})



function someOtherTask() {
    // Simulate a task that takes some time
    let a=0
    for (let i = 0; i < 5; i++) {
        a= Math.sqrt(i);
        console.log(a);
    }
}

someOtherTask();

