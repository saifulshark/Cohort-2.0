/* <!-- ## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output.  --> */

const fs = require('fs');

function readFile(filepath) {
    return new Promise((resolve,reject)=>{
        fs.readFile(filepath,'utf-8',(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
}

async function readFileAndProcess() {
    try{
        const filecontent = await readFile('dummy.txt');
        console.log('File content: ', filecontent);

        for(i = 0; i < 100000; i++){

        }
        console.log("Expensive operation completed");
    }catch(error){
        console.log("Error reading file:", error);
    }
}

readFileAndProcess();