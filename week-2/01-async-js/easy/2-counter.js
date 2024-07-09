function addSecond(count) {
    return count + 1;
}

let count = 0;

function counter() {
    count = addSecond(count);
    setTimeout(counter, 1000);
    console.log("new Count is ", count);
}

counter();