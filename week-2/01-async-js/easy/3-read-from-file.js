// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require("fs")

function readData(fileName, type){
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,type,(err,data)=>{
            err ? reject(err) : resolve(data) 
        })
    })
}

readData('fileToReadAndWrite.txt','utf8').then((data)=>console.log(data)).catch((err)=>console.log(err))