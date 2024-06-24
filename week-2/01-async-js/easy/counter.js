let a=0;
//using setInterval function
setInterval(()=>{
    a=a+1;
    console.log(a);
},1000)
//using setTimeout function 
function updateTimer(){
    a=a+1;
    console.log(a);
    setTimeout(updateTimer,1000)
}
updateTimer()