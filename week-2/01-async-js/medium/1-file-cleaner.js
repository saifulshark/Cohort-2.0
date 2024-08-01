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

const fs=require('fs')
fs.readFile('a.txt','utf-8',(err,data)=>{
    if (err) {
        console.error('An error occurred while reading the file:', err);
        return;
    }
    else{
        var ans=""
    data= data.trim()
    ans = data.replace(/\s+/g, ' ').trim();
    let inSpace = false;
    // for(var i=0;i<data.length;i++){
    //     if(data[i]!=" "){
    //         ans+=data[i];
    //         inSpace=false;
    //     }
    //     else if(!inSpace){
    //         inSpace=true
    //         ans+=' '
    //     }
    // }
    fs.writeFile('a.txt',ans,'utf-8',(err)=>{
        if(err){
            console.log("you are a aeerrr")
        }
        else{
            console.log('file saved')
        }
    })

    }
    
})