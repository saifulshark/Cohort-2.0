const fs = require('fs')

fs.readFile('file.txt','utf-8',(err,data)=>{
    console.log(data);
})

let sum=0;

for(let i=0;i<100000000000;i++){
    sum+=i;
}

console.log("sum is:"+sum);