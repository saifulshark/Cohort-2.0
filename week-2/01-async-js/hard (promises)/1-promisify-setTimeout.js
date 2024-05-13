/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    console.log(n);
    const myPromise = new Promise((resolves, reject) =>{
        if(n < 0){
            reject();
        }
        setTimeout(()=>{
            resolves();
        }, n*1000)
    })
    return myPromise
}

// wait(2000)
// .then((res) =>{
//     console.log(res);
// })
// .catch((error)=>{
//     console.log(error);
// })
module.exports = wait;
