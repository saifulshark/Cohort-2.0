/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      let sum = 0;
      for (let i = 0; i < 100; i++) {
        sum += i;
      }
      resolve(sum);
    }, n * 1000);
  });
}

function onDone(data) {
  console.log(data);
}

wait(5).then(onDone);

module.exports = wait;
