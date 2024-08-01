// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function clock(){
    const now=new Date()
    const hours_24=String(now.getHours());
    const min_24=String(now.getMinutes());
    const sec_24=String(now.getSeconds());
    const time24=`${hours_24}:${min_24}:${sec_24}`

    let hours_12=now.getHours();
    const ampm=hours_12>12?'PM':'AM';
    hours_12=hours_12%12
    // hours_12=hours_12?hours_12:12
    hours_12 = String(hours_12);
    const time12 = `${hours_12}:${min_24}:${sec_24} ${ampm}`;

    console.log(`24-hour format: ${time24}`);
    console.log(`12-hour format: ${time12}`);
}

setInterval(clock,1000);