// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let i = 0;
const counter = () =>{
setTimeout(()=>{
    console.log(i);
    i++
    counter()
},1000)
}

counter()





































































// (Hint: setTimeout)