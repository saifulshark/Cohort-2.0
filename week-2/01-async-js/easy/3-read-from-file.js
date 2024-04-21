let startTime = new Date().getTime();
const fs = require("fs");

fs.readFile("sample.txt", "utf-8", function (err, data) {
  let endTime = new Date().getTime();
  console.log(`Time taken to read file: ${endTime - startTime} ms`);
  let words = data.split(" ");
  words.forEach((word) => {
    if (word.length < 2) {
      console.log(word);
    }
  });
});
