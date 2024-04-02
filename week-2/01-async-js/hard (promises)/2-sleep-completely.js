/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(ms) {
    let startTime = Date.now();
  let endTime = startTime + ms;

  // Busy wait loop (not recommended in practice)
  while (Date.now() < endTime) {
    // This loop doesn't do anything meaningful, just wastes CPU cycles
  }

  return new Promise(resolve => resolve());
}

module.exports = sleep;
