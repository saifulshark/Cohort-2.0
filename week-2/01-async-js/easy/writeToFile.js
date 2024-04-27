const fs = require("fs")

fs.writeFile("a.txt","hello, how are you?", function(err){
    console.log(err)
})