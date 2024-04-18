const fs = require("fs");
const info = "writing data to file"

fs.writeFile("test.txt", info, "utf-8", (err)=>{
    if(err) console.log(err)
    
})
