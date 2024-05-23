const fs = require("fs");

fs.readFile("file.txt","utf-8",(err,data)=>{
    console.log(data);
    data = data.replace(/\s{2,}/g, ' ').trim() 
    console.log(data);
    fs.writeFile("file.txt",data,(err)=>{
        console.log("done");
    })
})
