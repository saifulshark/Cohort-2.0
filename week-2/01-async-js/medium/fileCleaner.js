const fs = require("fs")

fs.readFile("a.txt", "utf-8", function(err, data){
    data = data.split(" ")
    let mod_data = []
    for (let i = 0; i<data.length; i++){
        if (data[i]!=""){
            mod_data.push(data[i])
        }
    }
    console.log(mod_data)
    mod_data = mod_data.join(" ")
    console.log(mod_data)
    fs.writeFile("a.txt", mod_data, function(err){
        if (err){
            console.log(err)
        }
    })
})