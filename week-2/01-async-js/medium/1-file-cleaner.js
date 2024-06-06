// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs')

fs.readFile('textFile.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
        return null
    }
    const newData = data.replace(/\s+/g," ")
    fs.writeFile('textFile.txt',newData,(err)=>{
        err? console.log(err) : console.log('task completed')
    })
})