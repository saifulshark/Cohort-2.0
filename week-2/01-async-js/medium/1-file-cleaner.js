// ## File cleaner
// <!-- Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ``` -->

const fs= require('fs')
fs.readFile('a.txt','utf-8',function(err,data){
    if(err){
        console.log(err)
        return
    }
    const cleanedData = data.replace(/\s+/g, ' ').trim();
    fs.writeFile('a.txt',cleanedData,'utf-8', function(err){
        if (err){
            console.log('Error Writing to file',err)
            return
        }
        console.log('File cleaned successfully')
    })
})
