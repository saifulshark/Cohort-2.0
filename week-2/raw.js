// setInterval(function(){
//     let i=0;
//     console.log(i++);
// },1000);

// let count = 0;
// function counter(){
//     console.log(count);
//     count++;
// }

// setInterval(counter,1000);

function printTime() {
  const date = new Date();

  let currTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  document.getElementById("heading1").innerHTML = currTime;
  // console.log(currTime);
}

setInterval(printTime, 1000);
