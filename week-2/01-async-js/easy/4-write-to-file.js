const fs = require('fs');

const data = "This content is getting written in a certain text file named 'b'";

function fileWrite(err) {
    if (err) {
        console.error(err);
    } else {
        console.log("File created and written successfully");
    }
}

fs.writeFile('b.txt', data, fileWrite)