/* let counter = 0;

function updateTimer() {
    counter++;
    let paddedcountervalue = counter.toString().padStart(2,0);
    document.getElementById('counter').innerText = paddedcountervalue;
    setTimeout(updateTimer,1000)
}

setTimeout(updateTimer,1000); */

let counterValue = 0;
let countDowntime = 0;

function startCountdown() {
    countDowntime = parseInt(document.getElementById('timeInput').value);
    if(isNaN(countDowntime) || countDowntime <= 0) {
        alert("Please enter valid number from (0 - 99)")
        return;
    }

    counterValue = 0;
    document.getElementById('counter').innerText = '00';
    document.getElementById('message').innerText = '';

    updateCounter();

}

function updateCounter() {
    if(counterValue >= countDowntime) {
        document.getElementById('message').innerText = "Time is up!!";
        return;
    }

    counterValue++;

    let paddedcountervalue = counterValue.toString().padStart(2,'0');

    document.getElementById('counter').innerText = paddedcountervalue;
    setTimeout(updateCounter,1000);
}