let secondsLeft = 10
function timer(){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve(secondsLeft)
        }, 1000)
    })
}

async function counter(){
    while(secondsLeft){
        const value = await timer()
        console.log(value)
        secondsLeft--
    }
}
 counter()