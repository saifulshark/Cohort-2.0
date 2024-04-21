const fs = require('fs')

fs.writeFile('write-file.txt', "Hey there, I am Luffy", (err) => {
    if(err) console.log(err)
})
fs.readFile('write-file.txt', 'utf-8', (err, data) => {
    console.log(data)
})
