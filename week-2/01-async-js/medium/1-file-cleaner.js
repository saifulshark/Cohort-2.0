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

const fs = require('fs');

fs.readFile("hello.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error in reading file: ",err);
        return;
    }

    const cleanedData = data.replace(/\s+/g, ' ');
    fs.writeFile("hello.txt",cleanedData,(err)=>{
        if(err)
        console.log("Error writing the file: ",err);
        else
        console.log("File cleaned sucessfully");
    });
});
