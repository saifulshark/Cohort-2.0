const fs = require('fs');

// function to remove extra spaces from the string

function removeExtraSpaces(str) {
    return str.replace(/\s+/g,' ').trim();
}

// function to read a file, remove extra spaces, and write back to the smae file
function processFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data)=> {
        if(err) {
            console.error("error reading file: ", err);
            return;
        }

        // remove extra spaces from teh content
        const contentWithoutExtraSpaces = removeExtraSpaces(data);

        // write the content back to file
        fs.writeFile(filePath, contentWithoutExtraSpaces, 'utf8', (err)=>{
            if(err) {
                console.error("error writing the file: ", err);
                return;
            }
            console.log("Extra spaces removed and content written back to the file ");
        });
    });
}

const filePath = 'file1.txt';

processFile(filePath);

