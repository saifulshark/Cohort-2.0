const fs = require("fs")

fs.readFile("test.txt", "utf-8", (error, data) =>{
    if(error) console.log(error)
    console.log(data)
})

for(let i=0; i< 100000000000; i++){
    console.log(i)
}