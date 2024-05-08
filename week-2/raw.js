// setInterval(function(){
//     let i=0;
//     console.log(i++);
// },1000);

let count = 0;
function counter(){
    console.log(count);
    count++;
}

setInterval(counter,1000);