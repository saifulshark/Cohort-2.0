const fs = require('fs');

fs.readFile('1-file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let modifiedText = [];
  let consecutiveSpaces = 0;
  let characters = data.split('');

  characters.forEach((char) => {
    if (char === ' ') {
      consecutiveSpaces++;
    } else {
      if (consecutiveSpaces > 0) {
        modifiedText.push(' ');
        consecutiveSpaces = 0;
      }
      modifiedText.push(char);
    }
  });

  let newText = modifiedText.join('');

  fs.writeFile('1-file.txt', newText, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('File updated successfully.');
    }
  });
});
