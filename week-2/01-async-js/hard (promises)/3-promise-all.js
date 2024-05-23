/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },t*1000)
    })
}

function wait2(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },t*1000)
    })
}

function wait3(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },t*1000)
    })
}
function promise_all(t1,t2,t3){
        const time1 = wait1(t1);
        const time2 = wait2(t2);
        const time3 = wait3(t3);
        return Promise.all([time1,time2,time3]);
}

async function calculateTime(t1, t2, t3) {
    const initDate = new Date();
    const initTime = initDate.getTime();
    await promise_all(t1,t2,t3);
    const finDate = new Date();
    const finTime = finDate.getTime();
    return finTime - initTime;
}

module.exports = calculateTime;
