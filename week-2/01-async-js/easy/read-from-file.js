const fs = require("fs");
fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})
// expensive operation
let count=0;
let limint =1000000000;
for(let i=0;i<=limint;i++){
    count += 1;
}
console.log("after expensive function");