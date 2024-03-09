const { Console } = require("console");
const fs = require("fs");

function harshitWrite() {
  let text = "Harshit is his name and he is Fucking dope";
  return new Promise(function (resolve) {
    fs.writeFile(
      "week-2/01-async-js/easy-sol/4write-to.txt",
      text,
      function (err, data) {
        resolve(data);
      }
    );
  });
}

function onDone(data) {
  setTimeout(harshitWrite, 3000);
  console.log(data);
}

harshitWrite().then(onDone);
