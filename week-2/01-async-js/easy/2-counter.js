//## Counter without setInterval

//Without using setInterval, try to code a counter in Javascript. 
//There is a hint at the bottom of the file if you get stuck.

let counter = 0;
function myCounter(){
    for(let i=0; i<100000000; i++){
        console.log(counter);
        counter++;
    }
}
setTimeout(myCounter, 1000);

























//(Hint: setTimeout)