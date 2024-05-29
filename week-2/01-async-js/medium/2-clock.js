function format(value){
    if(value<10){
        value = "0"+value;
    }
    return value;
}
function fun(){
    const curdate = new Date();
    let meridian = "AM";
    let hours = curdate.getHours();
    let chours = 0;
    if(hours >= 12){
        chours = hours - 12;
        meridian = "PM";
    }
    let minutes = curdate.getMinutes();
    let seconds = curdate.getSeconds();
    hours = format(hours);
    chours = format(chours);
    minutes = format(minutes);
    seconds = format(seconds);
    console.log(`${hours}:${minutes}:${seconds} or ${chours}:${minutes}:${seconds} ${meridian}`);
}
setInterval(fun,1000);