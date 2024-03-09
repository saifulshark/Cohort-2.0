const fs = require("fs");

function readTxt() {
  return new Promise(function (resolve) {
    fs.readFile(
      "week-2/01-async-js/easy-sol/3read-from.txt",
      "utf-8",
      function (err, data) {
        resolve(data);
      }
    );
  });
}
function count() {
  let count = 0;
  for (let i = 0; i < 10000000; i++) {
    count = +i;
  }
  return console.log(count);
}
function onDone(data) {
  setTimeout(readTxt, 40000);
  console.log(data);
}
readTxt().then(onDone);

count();
