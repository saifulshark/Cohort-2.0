const fs=require("fs")
fs.readFile("3-read-from-file.md","utf8",(err,data)=>{
    console.log(data)
    console.log("first read file")
})

//writing in the file
const data2="trying to write in the file using fs module"
fs.writeFile("3-read-from-file.md",data2,function(err){
    console.log("written in the file");
    console.log(fs.readFile("3-read-from-file.md","utf8",(err,data)=>{
        console.log(data);
        console.log("reading after writing")
    }))
})

fs.readFile("3-read-from-file.md","utf8",(err,data)=>{
    console.log(data)
    console.log("readning using last readfile")
})