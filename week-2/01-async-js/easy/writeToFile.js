const fs = require("fs");

fs.writeFile("./week-2/01-async-js/easy/file.txt", "new data", (data, err) => {
  console.log(data);
});

fs.appendFile(
  "./week-2/01-async-js/easy/file.txt",
  "new data to append",
  (data, err) => {
    console.log(data);
  }
);
