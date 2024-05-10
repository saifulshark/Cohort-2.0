const fs = require("fs");

fs.readFile("test.txt", "utf-8", (err, data) => {
    if(err) console.log("error", err);
const cleanedContent = data.replace(/\s+/g, ' ')
    fs.writeFile("test.txt", cleanedContent, "utf-8", (err)=>{
    if(err) console.log("error", err);
    else console.log("successful")
    })
})
