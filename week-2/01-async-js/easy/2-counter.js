// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



function counter(){
    let count=0;
    setTimeout(function run(){
        count++;
        console.log(count);
        setTimeout(run, 1000);
    },1000);
}

counter();























































// (Hint: setTimeout)