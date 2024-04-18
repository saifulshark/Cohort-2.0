

function countFn(duration, count=0){
    
    console.log(count)
    if(count < duration)
    setTimeout(countFn, 1000, duration, ++count )


}

countFn(10)
