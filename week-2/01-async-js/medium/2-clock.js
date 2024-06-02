function time(){
    const date = new Date();
    return date;
}

function clock(){
    setInterval(()=>{
        console.clear();
        const hours = time().getHours();
        const minutes = time().getMinutes();
        const seconds = time().getSeconds();
        console.log(hours+':'+minutes+':'+seconds);  
    },1000)
}

clock();