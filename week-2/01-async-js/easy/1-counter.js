
function counter(duration){
    let count = 0;
console.log(count);
const intervalId = setInterval(() => {
    count++
    console.log(count)
    if(count == duration) clearInterval(intervalId)
}, 1000)

}
counter(duration)
