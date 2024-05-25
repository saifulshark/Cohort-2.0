const fs = require("fs");

// Sync Approach
function sendCleanStr() {
  try {
    let data = fs.readFileSync("b.txt", "utf-8");
    let cleanStr = "",
      space = " ";
    let cnt = 0;
    for (let ch of data) {
      if (ch === space) cnt++;
      else {
        if (cnt > 0) {
          cleanStr += space;
          cnt = 0;
        }
        cleanStr += ch;
      }
    }
    console.log(cleanStr);
    return cleanStr;
  } catch (err) {
    console.error(err);
  }
}

function writeCleanStr(CleanStr) {
  try {
    fs.writeFileSync("c.txt", CleanStr, "utf-8");
    console.log(`'Wrote File in Data': ${CleanStr}`);
  } catch (err) {
    console.error(err);
  }
}

//  Async Approach
function readStr() {
  try {
    fs.readFile("b.txt", "utf-8", function (err, data) {
      let cleanStr = "",
        space = " ";
      let cnt = 0;
      for (ch of data) {
        if (ch === space) cnt++;
        else {
          if (cnt > 0) {
            cleanStr += space;
            cnt = 0;
          }
          cleanStr += ch;
        }
      }
      console.log(cleanStr);
      return writeStr(cleanStr);
    });
  } catch (err) {
    console.error(err);
  }
}

function writeStr(cleanStr) {
  try {
    fs.writeFile("c.txt", cleanStr, "utf-8", function (err) {
      console.error(err);
    });
    console.log(`'Wrote File in Data': ${cleanStr}`);
  } catch (err) {
    console.error(err);
  }
}

// Sync Function Call
let cleanStr = sendCleanStr();
if (cleanStr !== undefined) {
  writeCleanStr(cleanStr);
}
// Async Call
readStr();
