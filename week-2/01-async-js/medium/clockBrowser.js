function getClock() {
  const currentDate = new Date();
  let seconds = currentDate.getSeconds();
  let minutes = currentDate.getMinutes();
  let hours = currentDate.getHours();

  let m = "PM";
  if (hours < 12) {
    m = "AM";
  } else {
    if (hours != 12) hours -= 12;
  }

  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  // Googled this part
  process.stdout.write(`\r${hours}:${minutes}:${seconds} ${m}`);
}

// Using SetInterval
//   setInterval(function () {
//     getClock();
//   }, 1000);

// Using SetTimeout
setTimeout(function () {
  for (let i = 1; ; i++) {
    getClock();
  }
}, 1000);
