/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
// function promiseAll(t1,t2,t3){
//     const p1 = wait1(t1);
//     const p2 = wait2(t2);
//     const p3 = wait3(t3);
//     return Promise.all([p1,p2,p3]);
// }

async function calculateTime(t1, t2, t3) {
    // const intiDate1 = new Date();
    // const initTime1 = intiDate1.getTime();
    // await promiseAll(t1,t2,t3);
    // const finalDate1 = new Date();
    // const finalTime1 = finalDate1.getTime();
    // const time1 = finalTime1 - initTime1;

    const intiDate2 = new Date();
    const initTime2 = intiDate2.getTime();
    return wait1(t1).then(()=>{
        return wait2(t2)
    }).then(()=>{
        return wait3(t3)
    }).then(()=>{
        const finalDate2 = new Date();
        const finalTime2 = finalDate2.getTime();
        const time2 = finalTime2 - initTime2;
        return time2;
    })
}

module.exports = calculateTime;
