
const cleaner = (content) =>{
    let updateContent = ""
    for (let i = 0; i < content.length; i++) {
        if(content[i] != ' '){
            updateContent = updateContent + content[i];
            console.log(content[i]);
        }
        else if(content[i] === ' ' && content[i+1] != ' '){
            updateContent = updateContent + content[i];
            
        }
    }
    return updateContent;
}

const fileCleaner = () =>{
    const fs = require("fs");
    const path = require("path")
    
    const filePath = path.join(__dirname , "./file.txt");
    
    let content = "";
    fs.readFile(filePath, 'utf-8', (err, data) =>{
        if(err){
            console.error("Error ::" , err);
        }
        content = data;
        const updatedData = cleaner(content);
        
        fs.writeFile(filePath, updatedData, 'utf-8', (err)=>{
            if (err) {
                console.error("Error ::" , err);
            }
            console.log("Updated successfully");
        })
        
    })
}

fileCleaner()