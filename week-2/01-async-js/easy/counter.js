// Approach: SetTimeout, Set Interval

let n = 6;

// Set Interval
let i = 1;
let intId = setInterval(function () {
  console.log(i++);
  // If Want to stop counter after sometime.
  if (i > n) clearInterval(intId);
}, i * 1000);


// Set Timeout
// for(let i=1; i<=n;i++){
//     setTimeout(function(){
//         console.log(i);
//     }, i*1000);
// }


