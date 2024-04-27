function clock(){
    const d = new Date();

    // hh:mm:ss
    // console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());

    // hh:mm:ss AM/PM
    amOrPm = "AM";
    let hours = d.getHours();
    if (d.getHours()>12){
        amOrPm = "PM";
        hours -= 12;
    }
    console.log(hours+":"+d.getMinutes()+":"+d.getSeconds(), amOrPm);
}

setInterval(clock, 1000)