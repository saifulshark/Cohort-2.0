const fs = require("fs")

fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})

j = 0
for(let i = 0; i<100000000; i++){
    j+=i;
}