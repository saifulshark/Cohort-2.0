function counter(duration){
    setTimeout(function(){
        count++;
        console.log(count);
        if (count<duration){
            counter(duration);
        }
    }, 1000);
}

let count = 0
counter(5);