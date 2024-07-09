function addSecond(count) {
    return count + 1;
}

let count = 0;

function counter() {
    count = addSecond(count);
    // setTimeout executes the function once at specific delay, 
    // whereas setInterval executes the function multiple times in the specific delay
    // setInterval(counter, 1000);
    setTimeout(counter, 1000);
    console.log("new Count is ", count);
}

counter();