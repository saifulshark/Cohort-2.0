function printClock() {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  console.log(`${hours} ${minutes} ${seconds}`);
}

setInterval(() => {
  printClock();
}, [1000]);
