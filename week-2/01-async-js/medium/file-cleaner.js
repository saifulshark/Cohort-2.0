const fs = require('fs');
const path = '1-file-cleaner.md';

fs.readFile(path, 'UTF-8', (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
    } else {
        console.log("Before File Cleanup: \n", data);

        const cleanedData = data.replace(/\s+/g, ' ').trim();

        fs.writeFile(path, cleanedData, err => {
            if (err) {
                console.log("Error writing file:", err);
            } else {
                console.log("File Cleanup Successful!");

                fs.readFile(path, 'UTF-8', (err, data) => {
                    if (err) {
                        console.log("Error reading file after cleanup:", err);
                    } else {
                        console.log("After File Cleanup: \n", data);
                    }
                });
            }
        });
    }
});
