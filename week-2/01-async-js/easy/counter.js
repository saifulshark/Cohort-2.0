function counter(duration){
    count++;
    console.log(count)
    if (count >= duration){
        clearInterval(c);
    }
}

let count = 0;
let c = setInterval(counter, 1000,5);


