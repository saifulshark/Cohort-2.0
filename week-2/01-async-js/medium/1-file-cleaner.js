/*## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.
For example, if the file input was
```
hello     world    my    name   is       raman
```
After the program runs, the output should be
```
hello world my name is raman
```
*/

const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err,data){
    if(err){
        console.error("Error reading file: ", err);
    }
    console.log(data);

    const cleanedFile = data.replace(/\s+/g, ' ').trim();
    console.log("Cleaned file: ", cleanedFile);

    fs.writeFile("a.txt", cleanedFile, function(err){
        if(err){
            console.error("Error writing to file: ", err);
        }
        console.log("File cleaned succesfully");
    })
});


