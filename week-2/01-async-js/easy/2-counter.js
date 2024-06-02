function waitingPeriod(){
    return new Promise((resolve)=>{
        setInterval(resolve,1000);
    })
}
let countNum = 0;
async function counter(){
    while(true){
        let count = await waitingPeriod();
        console.clear();
        console.log(countNum);
        countNum++;
    }
}
counter();