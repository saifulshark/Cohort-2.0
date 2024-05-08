// ## Write to a file
// <!-- Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks. -->

const fs = require("fs");
fs.readFile("hello.txt","utf-8",(err,data) => {
    if(err){
        console.log(err);
    }else{
        data = data + "\nthis is the added line";
        console.log(data);
    }
});