// we can use recurssion to do the task
// firstly i was trying to do it uisng infinte while loop
// but later i realised a while(true){setTimeout(fun,time)} 
// will never let my thread go idle so tried with recurssion 
// took some help from chatgpt:
let count = 1;
function counter(){
    console.log(count);
    count++;
    setTimeout(counter,1000);
}
counter();