const fs = require('fs');

const content = 'new data that will added through writing file javascript'

//writing in the file
fs.writeFile('file.txt',content,(err)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log("file written successfully");
    }
    
})

//append content to the file
fs.appendFile('file.txt',' new data appended to file',(err)=>{
    if(err){
        console.error(err);
    }
})