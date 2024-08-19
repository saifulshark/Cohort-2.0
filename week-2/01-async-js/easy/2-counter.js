// <!-- ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck. -->
// //setTimeout

// let counter=0;
// //setInterval Executes the function repeatedly at the specified interval.
// //SetTimeout Executes the function once after the specified delay.
// function myCounter(){
//     for(let i=0;i<100000000;i++){
//         console.log(counter);
//         counter++;
//     }
// }
// setTimeout(myCounter,1000);

function waitingPeriod(){
    return new Promise((resolve)=>{
        setTimeout(resolve,1000);
    });
}
let countNum=0;
async function counter(){
    while(true){
        let count=await waitingPeriod();
        console.log();
        console.log(countNum);
        countNum++;
    }
}
counter();




































































// (Hint: setTimeout)