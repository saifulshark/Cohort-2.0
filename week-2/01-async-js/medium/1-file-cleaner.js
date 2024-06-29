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
const fs=require('fs');
fs.readFile('file.txt',"utf-8",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    let newData=data.split(" ").filter((word)=>word!=="").join(" ");
    fs.writeFile('file.txt',newData,(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('File written');
    })
})