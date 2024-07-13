const fs = require('fs');

function updateStatus(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Trimmed all the extra spaces");
    }
}

function onDone(err, content) {
    if (err) {
        console.log(err);
    } else {
        data = content.replace(/\s+/g, ' ').trim();
        fs.writeFile('a.txt', data, updateStatus);
    }
}

fs.readFile('a.txt', 'utf-8', onDone);