## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

const fs=require("fs")

function f(data){
    let p= new Promise(function(resolve){
        fs.readFile("./medium/filecontent.txt","utf-8",function(readerr,dataFromFile)
        {
            if(readerr){console.log("err when reading data from file "+readerr)}
            else{
            console.log("data from file "+dataFromFile)
            let dataWriteToFile= dataFromFile.replace(/\s+/g," ")
            console.log("data to file "+dataWriteToFile)
            fs.writeFile("./medium/filecontent.txt",dataWriteToFile,function( )//writeFile supports no parameter callback unlike readFile that supports parameterized i.e, err,data 
            {
                console.log("Writing data to file completed")
            })
        }
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