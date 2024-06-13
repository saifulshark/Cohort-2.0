//## Write to a file
/*Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.*/

const fs = require("fs")

console.log("hi there");

fs.writeFile("a.txt", "this is the latest text", function(err){
    if(err){
        console.error("Error writing to file: ", err);
    }
    else {
        console.log("File written");
    }
})

console.log("hi there 2");