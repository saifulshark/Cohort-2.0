/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    var a = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Test statement 1");
        }, n*1000);
    })
    return a;
}
function main(){
   let a = wait(6).then((data)=>{
        console.log(data);
    })
}
main();
module.exports = wait;
