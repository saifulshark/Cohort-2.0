## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 


const fs=require("fs")

function f(data){
    let p= new Promise(function(resolve){
        fs.readFile("./easy/filecontent.txt","utf8",function(err,dataFromFile)
        {
            if(err){
                console.log("err data from file "+err)
            }
            else{
                console.log("data from file "+dataFromFile)
            }
        })
        resolve("resolved - "+data)
    })
    console.log("Outside promise "+p)
    return p
}


async function caller(){
    let result=await f("caller function")
    console.log("in caller function "+result)
}
caller()
console.log("After caller func")
