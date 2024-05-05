## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.


const fs=require("fs")

function f(data){
    let p= new Promise(function(resolve){
        fs.readFile("./easy/filecontent.txt","utf-8",function(readerr,dataFromFile)
        {
            console.log("err when reading data from file "+readerr)
            console.log("data from file "+dataFromFile)
            let dataWriteToFile= dataFromFile+", \nhobby - upskilling"
            fs.writeFile("./easy/filecontent.txt",dataWriteToFile,(err,data) =>
            {
                //writeFile supports no parameter callback unlike readFile that supports parameterized i.e, err,data 
                if(err){console.log(err)}
                else{console.log("Writing data to file completed")}
            })
        })
        resolve("resolved - "+data)
    })
    return p
}


async function caller(){
    let result=await f("caller function")
    console.log("in caller function "+result)
}
caller()
console.log("After caller func")