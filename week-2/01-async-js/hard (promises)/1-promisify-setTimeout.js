/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) => {
        setTimeout(function(){
            resolve();
        },n*1000)
    })
}

// wait().then(function(data) {
//     console.log(data);
// })

async function main(){
    let data = await wait(2);
    console.log(data);
}

main();

module.exports = wait;
