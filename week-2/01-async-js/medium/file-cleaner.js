const fs = require("fs")

fs.readFile("file-cleaner.txt", "utf-8", function (err, data) {
    // console.log("hello world my name is raman");
    fs.writeFile("file-cleaner.txt", "hello world my name is raman", function (err) {
        if (err) {
            return console.error(err);
        }
    })
    console.log(data);
    
})