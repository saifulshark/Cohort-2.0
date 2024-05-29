const fs=require("fs");
const data = "Hi there from write-to-file.js"
fs.writeFile("b.txt",data,function(err){
    console.log("done");
})