const fs = require('fs');

fs.writeFile('message.txt', 'Hello Node.js', (err) => {
  if (err) throw err;

  let a = 1;
  for (let index = 0; index < 1000000000; index++) {
    a += index;
  }
  console.log('The file has been saved!');
});