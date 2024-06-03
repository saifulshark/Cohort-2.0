const fs = require('fs');

fs.writeFile('a.txt', " hello i'm changed through the fs.writeFile", (err) =>
{
    if(err) throw err;
    console.log("file created");
})