const fs = require("fs");
// fs.readFile("3-read-from-file.md","utf8",function(err,data){
//     if(err){
//         console.log(err);
//     }
//     console.log(data)
// })
// console.log("hello")

// //using promises
// function readfile(){
//     return new Promise(function(resolve){
//         fs.readFile("3-read-from-file.md","utf8",(err,data)=>{
//             resolve(data);
//         })
//     })
// }

// console.log(readfile().then(data=>{
//     console.log(data);
// }))
// console.log("after reading ")

// using asynch and wait
console.log("starting readfile")
function readfile(){
    return new Promise(function(resolve){
        fs.readFile("3-read-from-file.md","utf8",(err,data)=>{
            resolve(data);
        })
    })
}
console.log("after readfile function")
//async function to recieve promise
async function result(){
    let value=await readfile();
    console.log(value);
}
result();
console.log("after aynch function")
fs.writeFile

