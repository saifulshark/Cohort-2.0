// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function timer(i) {
  setTimeout(function () {
    console.log(i++);
    timer(i++);
  }, 1000);
}

timer(0);

// (Hint: setTimeout)
