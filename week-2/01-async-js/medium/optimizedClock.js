const readline = require("readline");

function getClock() {
  const currentDate = new Date();
  let seconds = currentDate.getSeconds();
  let minutes = currentDate.getMinutes();
  let hours = currentDate.getHours();

  const period = hours < 12 ? "AM" : "PM";
  hours = hours % 12 || 12; // Convert to 12-hour format and handle midnight (0) case

  minutes = minutes < 10 ? "0" + minutes : minutes; // Pad with zero if needed
  seconds = seconds < 10 ? "0" + seconds : seconds; // Pad with zero if needed

  // Use process.stdout.write and \r to overwrite the previous output
  process.stdout.write(`\r${hours}:${minutes}:${seconds} ${period}`);
}

// Clear the console before starting the clock
readline.cursorTo(process.stdout, 0, 0);
readline.clearScreenDown(process.stdout);

// Use setInterval to update the clock every second
setInterval(getClock, 1000);

// Initial call to display the clock immediately without waiting for the first interval
getClock();
