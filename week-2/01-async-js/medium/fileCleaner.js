const fs = require("fs");
fs.readFile("./week-2/01-async-js/medium/file.txt", "utf-8", (err, data) => {
  const cleanData = data.replace(/\s+/g, " ");

  fs.writeFile("./week-2/01-async-js/medium/file.txt", cleanData);
});
