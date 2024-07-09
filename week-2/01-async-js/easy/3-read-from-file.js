const fs = require('fs');

function getContent(err, content) {
    console.log(content);
}

fs.readFile('a.txt', 'utf-8', getContent);