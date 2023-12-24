const fs = require('fs')

function subReadFromFile(){
    return new Promise((resolve)=>{
        fs.readFile("file.txt", "utf-8", (err, data)=>{
            resolve(data)
        })
    })
}

function subWriteFromFile(msg){
    const data = new Uint8Array(Buffer.from(msg))
    return new Promise((resolve)=>{
        fs.writeFile("file.txt", data, ()=>{
            resolve(data)
        })
    })
}

function helper(str){
    return str.split(' ').filter(value=> value!=='').join(' ')
}

async function removeExtraSpaces(){
    const str = await subReadFromFile()
    console.log("Text in the file: "+str)
    const newStr = helper(str)
    const value = await subWriteFromFile(newStr)
    const newText = new TextDecoder().decode(value)
    console.log("Text after removing extra spaces: "+newText)
}
removeExtraSpaces()

