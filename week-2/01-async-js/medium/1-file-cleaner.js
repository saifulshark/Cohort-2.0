/* <!-- ## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
``` --> */

const fs = require('fs').promises;

async function readAndWrite(filepath) {
    try{
        const filecontent = await fs.readFile(filepath,'utf-8');
        const cleanedContent = filecontent.replace(/\s+/g, ' ');
        await fs.writeFile(filepath,cleanedContent,'utf-8');
        console.log(`Successfully processed to file:  ${filepath}`)
    }catch(error){
        console.log('Error processing: ',error)
    }
}
const filepath = '../easy/dummy.txt';
readAndWrite(filepath);