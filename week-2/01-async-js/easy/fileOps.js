const fs = require("fs");

let newData = "Appending to File";

fs.appendFile("a.txt", newData, function (err) {
  console.log("Reaches here after");
  if (err) {
    console.error(err);
  }
});

console.log("Reaches here before");

// Read from File
fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});
