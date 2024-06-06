/* <!-- ## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks. --> */
const fs = require('fs');

function writeFile(filepath,data) {
    return new Promise((resolve,reject) =>{
        fs.writeFile(filepath,data,'utf-8',(err)=>{
            if(err){
                reject(err);              
            }else
            resolve();
        })
    });
}

async function Writefileandprocess () {
    try{
        const someData = "Hey writing to you!"
        await writeFile('dummy.txt',someData);

        console.log('Data written to the file');

        for(i = 0;i < 100000; i++) {

        }
        console.log('Expensive operation done');
    }catch(error){
        console.log('Error writing: ',error);
    }
}

Writefileandprocess();