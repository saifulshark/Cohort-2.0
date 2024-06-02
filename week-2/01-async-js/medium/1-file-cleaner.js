const fs = require('fs').promises;

async function fileCleaner() {
    try {
        let data = await fs.readFile('file.txt', 'utf-8');
        let cleanedContent = data.replace(/\s+/g, ' ').trim();  // Replace multiple spaces with a single space and trim leading/trailing spaces
        await fs.writeFile('file.txt', cleanedContent);
        console.log("file.txt file cleaned successfully!");
    } catch (err) {
        console.error("Error:", err);
    }
}
fileCleaner();
