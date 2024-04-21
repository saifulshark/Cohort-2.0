## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


let counterResult=-1
function counter(){
    
    let time=new Date()
    counterResult+=1
    console.log("current time - "+time+" counter - "+counterResult)
    setTimeout(counter,1000)
}
counter()










































































(Hint: setTimeout)