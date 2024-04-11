chaltaRahe = true;
function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Add leading zeros if necessary
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // Format for HH:MM:SS
    var timeHHMMSS = hours + ":" + minutes + ":" + seconds;

    // Format for HH:MM:SS AM/PM
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
    var timeHHMMSSAMPM = hours + ":" + minutes + ":" + seconds + " " + ampm;

    // Update clock elements
    console.log(timeHHMMSS);
    console.log(timeHHMMSSAMPM);

    // Update every second
    if(chaltaRahe) setTimeout(updateClock, 1000);
}

function stopClock() {
    chaltaRahe = false;
}

// Initial call to start the clock
updateClock();

setTimeout(stopClock, 10005);
