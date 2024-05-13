// const timer = () => {
//   let sec = 1;
//   let min = 1;
//   let hr = 1;

//   setInterval(() => {
//     if (sec < 60) {
//       sec++;
//       if (sec === 60) {
//         min++;
//         if (min === 60) {
//           hr++;
//         }
//       }
//     }
//     console.log(`${hr} :  ${min} : ${sec}`);
//   }, 1000);

// };

// timer();

// -------------------------------------------------------------- 2nd assignment

// let sec = 0;
// let min = 0;
// let hr = 0;
// const timer = () => {

//     if (sec < 60) {
//       sec++;
//       if (sec === 60) {
//         min++;
//         sec = 0;
//         if (min === 60) {
//           hr++;
//           min = 0;
//           sec = 0;

//         }
//       }
//     }
//     console.log(`${hr} :  ${min} : ${sec}`);

//     setTimeout(() => {
//         timer()
//     }, 500);
// };
// timer()

// --------------------------------------------------------------- assignment 3

// const fs = require("fs");
// const path = require("path");

// const filePath = path.join(__dirname, "./file.txt");

// fs.readFile(filePath, 'utf-8', (err, data) =>{
//     if(err){
//         console.error("Error reading file ::" , err);
//     }
//     console.log("Data 1 -> ", data);
// })

// for (let index = 0; index < 1000; index++) {
//     console.log(index);
// }

// --------------------------------------------------------------- assignment 4

// const fs =  require("fs");
// const path =  require("path");

const content = "this content is added by this code";
// const filePath = path.join(__dirname, "./file.txt");

// console.log("writing in the file ");
// fs.writeFile(filePath ,content, 'utf-8', (err) =>{
//     if(err){
//         console.error("Error reading file ::" , err);
//     }
//     console.log("Data 2 -> write successfully ");
// } )

// console.log("reading content after the changes in file ");
// fs.readFile(filePath, 'utf-8', (err, data) =>{
//     if(err){
//         console.error("Error reading file ::" , err);
//     }
//     console.log("Data 3 -> ", data);
// })