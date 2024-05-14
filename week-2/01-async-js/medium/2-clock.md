Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function counter(){
    let time=new Date()
    let hour =time.getHours()
    let min =time.getMinutes()
    let sec =time.getSeconds()
    let am_pm="AM"
    if(hour>=12)
    {
        twelve_hour=hour-12
    }

    if(hour>=12)
    {
        am_pm="PM"
    }
    console.log(hour+":"+min+"::"+sec+"     "+twelve_hour+":"+min+"::"+sec+" "+am_pm)

}

setInterval(counter,1000)