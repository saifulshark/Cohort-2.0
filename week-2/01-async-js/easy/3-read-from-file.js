// common code
const fs = require('fs')
function subOnDone(data){
    console.log(data)
    console.log()
}
function subReadFromFile(onDone){
    fs.readFile("readFile.txt", "utf-8", (err, data)=>{
        onDone(data)
    })
}

// using expensive operation using callback
function readFromFileUsingCallback(onDone){
    subReadFromFile(onDone)
}
readFromFileUsingCallback((data)=>{
    console.log("Using Callbacks:")
    subOnDone(data)
})

// using expensive operation using only promise
function readFromFileUsingPromise(){
    return new Promise((resolve, reject)=>{
        subReadFromFile(resolve)
    })
}
readFromFileUsingPromise().then((data)=>{
    console.log("Using Promise:")
    subOnDone(data)
})

// using expensive operation using promise and await
function readFromFileUsingAwait(){
    return new Promise((resolve, reject)=>{
        subReadFromFile(resolve)
    })
}
async function usingAwait(){
    const value = await readFromFileUsingAwait()
    console.log("Using Await:")
    console.log(value)
}
usingAwait()