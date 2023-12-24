let secondsLeft = 10
const timer = setInterval(()=>{
    console.log(secondsLeft--)
    if(secondsLeft===0){
        clearInterval(timer)
    }
},1000)