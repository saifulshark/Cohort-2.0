// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs=require('fs')
// Data to be written to the file
const data = 'Hello, thmessage.';
fs.writeFile('a.txt',data,'utf-8',(err)=>{
    if (err) {
        console.error('An error occurred while writing to the file:', err);
    }
    else{
        console.log('File has been written successfully.');
        fs.readFile('a.txt','utf-8',(err,data)=>{
            if (err) {
                console.error('An error occurred while reading the file:', err);
            } else {
                console.log('File content:', data);
            }
        })
    }
})