function padZero(num) {
    return num.toString().padStart(2, '0');
}

function get24HourTime() {
    const now = new Date();
    const hours = padZero(now.getHours());
    const minutes = padZero(now.getMinutes());
    const seconds = padZero(now.getSeconds());

    return `${hours}:${minutes}:${seconds}`;
}

function get12HourTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = padZero(now.getMinutes());
    const seconds = padZero(now.getSeconds());

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours ? hours : 12;
    const paddedHours = padZero(hours);

    return `${paddedHours}:${minutes}:${seconds} ${ampm}`;
}

function updateClock() {
    console.log(`24 hour format: ${get24HourTime()}`);
    console.log(`12 hour format: ${get12HourTime()}`);
    setTimeout(updateClock, 1000);
}

updateClock();