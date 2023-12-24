/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/
function loopOneToHundred(){
    for(let i=1; i<=100; i++){}
}
function loopOneToLakh(){
    for(let i=1; i<=100000; i++){}
}
function loopOneToThousandMillion(){
    for(let i=1; i<=1000000000; i++){}
}
function calculateTime(loopFunction) {
    let beforeDateTimeInMilliSec  = new Date().getMilliseconds()
    loopFunction()
    let afterDateTimeMilliSec = new Date().getMilliseconds()
    return afterDateTimeMilliSec-beforeDateTimeInMilliSec
}

console.log("Time taken for execution of loopOneToHundred(): "+calculateTime(loopOneToHundred))
console.log("Time taken for execution of loopOneToLakh(): "+calculateTime(loopOneToLakh))
console.log("Time taken for execution of loopOneToThousandMillion(): "+calculateTime(loopOneToThousandMillion))
