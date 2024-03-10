const fs = require("fs");

function readTxt() {
  return new Promise(function (resolve, reject) {
    fs.readFile(
      "week-2/01-async-js/medium-sol/1file-read-cleaner.txt",
      "utf-8",
      function (err, data) {
        if (err) {
          reject(err);
          return;
        }
        const lines = data.split("/n"); //remove extra white spaces
        for (let i = 0; i < lines.length; i++) {
          lines[i] = lines[i].replace(/\s+/g, " ").trim(); // Remove extra white spaces
        }
        const modifiedContent = lines.join("\n");

        resolve(modifiedContent);
      }
    );
  });
}

function writeTxt(content) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(
      "week-2/01-async-js/medium-sol/1file-write-cleaner.txt",
      content,
      function (err) {
        if (err) {
          reject(err);
          return;
        }

        resolve("File successfully written!");
      }
    );
  });
}

function onDone(data) {
  console.log(data);
}

readTxt().then(function (modifiedContent) {
  writeTxt(modifiedContent).then(onDone);
});
