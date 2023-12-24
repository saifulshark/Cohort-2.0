//common code
const fs = require('fs')
function onDoneReading(data){
    console.log(data)
    console.log()
}
function onDoneWriting(){
    console.log("Done writing")
}
function subReadFromFile(){
    return new Promise((resolve)=>{
        fs.readFile("readWriteFile.txt", "utf-8", (err, data)=>{
            resolve(data)
        })
    })
}
function subWriteFromFile(msg){
    return new Promise((resolve)=>{
        const data = new Uint8Array(Buffer.from(msg))
        fs.writeFile("readWriteFile.txt", data, ()=>{
            resolve(data)
        })
    })
}

async function readWrite() {
    const value1 = await subWriteFromFile("writing to the File")
    onDoneWriting()
    const value2 = await subReadFromFile()
    onDoneReading(value2)
}

readWrite()

