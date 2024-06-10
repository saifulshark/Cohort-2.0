const fs = require("fs");

fs.readFile("./week-2/01-async-js/easy/file.txt", "utf-8", (err, data) => {
  console.log(data);
});
