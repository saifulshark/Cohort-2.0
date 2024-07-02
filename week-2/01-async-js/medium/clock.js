function digitalClock() {
    const now = new Date();

    //HH:MM:SS
    const hours = now.getHours().toString().padStart(2,'0');
    const mins = now.getMinutes().toString().padStart(2,'0');
    const sec = now.getSeconds().toString().padStart(2,'0');
    const time12h = `${hours}:${mins}:${sec}`;

    //HH:MM:SS AM/PM
    const ampm = now.getHours()>12?'PM':'AM';
    const hours12 = (now.getHours()%12).toString().padStart(2,'0');
    const time24h = `${hours12}:${mins}:${sec}:${ampm}`;

    document.getElementById('time24h').innerText = time12h;
    document.getElementById('time12h').innerText = time24h;
}

digitalClock();
setInterval(digitalClock,1000);