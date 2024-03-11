/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  return new Promise(function (resolve) {
    const startTime = Date.now();
    while (Date.now() - startTime < milliseconds) {
      // Busy wait, blocking the thread
    }
    resolve(`Thread was busy for ${milliseconds} milliseconds.`);
  });
}

function onDone(data) {
  console.log(data);
}

sleep(9000).then(onDone);

module.exports = sleep;
