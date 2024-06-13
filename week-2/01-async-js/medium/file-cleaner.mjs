const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) throw err;

  let str = data;
     str = str.replace(/\s+/g, " ");

    fs.writeFile("a.txt", str ,(err) =>{
      if (err) throw err;
      console.log("file has been cleaned");
    })
  
    });
