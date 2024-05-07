/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
*/

function sleep(milliseconds) {
  return new Promise(resolve => {
    const startTime = Date.now();
    // console.log("before loop");
    while (Date.now() - startTime < milliseconds) {
      // Busy-wait loop
    }
    resolve();
    // setTimeout(resolve, milliseconds);
    // console.log("after loop");
  });
}
/*
// Example usage:
console.log("Start");
sleep(5000).then(() => {
  console.log("Thread halted for 3 seconds");
});
console.log("End");
*/
module.exports = sleep;