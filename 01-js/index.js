// function isAnagram(str1, str2) {
//     if(str1.length !== str2.length){
//       return false;
//     }
//     str1 = str1.toLowerCase()
//     str2 = str2.toLowerCase()
//     str1 = str1.split("").sort().join("");
//     console.log(str1)
//     str2 = str2.split("").sort().join("");
//     console.log(str2)
//     if(str1===str2){
//       return true
//     }
//     return false
//   }

//   console.log(isAnagram("rasp","spar"))
//   isAnagram('listen', 'silent')

const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')
var context;
fs.readFile(path.join(__dirname,'files','starter.txt'), 'utf-8', (err,data)=>{
  if (err) throw err;
  context = data;
  console.log(data)
})

fs.appendFile(path.join(__dirname, 'files', 'newFile.txt'),"huuhoi ihohhi \n",(err)=>{
  if (err) throw err;
  console.log("Append complete")
})

fs.writeFile(path.join(__dirname,'files','writeFile.txt'),'New content!',(err)=> {
  if (err) throw err;
  console.log("Write complete")

  fs.appendFile(path.join(__dirname,'files','writeFile.txt'),'\n\nI  am appending to this file.',function(err){
    if (err) throw err;
    console.log('Appended');
  })
})




