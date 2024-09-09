/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
let a = new Promise((resovle)=>{
    setTimeout(()=>{
        resovle("test statement 1");
    },t*1000);
})
return a;
}

function wait2(t) {
let b = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("test statement 2");
    },t*1000);
})
return b;
}

function wait3(t) {
let c = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("test statement 3");
    },t*1000)
})
return c;
}

function calculateTime(t1, t2, t3) {
    const startTime = Date.now();
    return Promise.all([wait1(t1),wait2(t2),wait3(t3)]).then(()=>{
        const endTime = Date.now();
        console.log("test return",endTime - startTime);
        return endTime - startTime;
    })
}
console.log(calculateTime(1,2,3));

module.exports = calculateTime;
