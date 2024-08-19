// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
function time(){
    //this function creates a new Date object which represents the current date and time
    const date=new Date();
    return date;
}
function clock(){
    setInterval(()=>{
        console.clear();
        //it clears output on each interval,so the new time replaces the old time
        const hours=time().getHours();
        const minutes= time().getMinutes();
        const seconds= time().getSeconds();
        console.log(hours+':'+minutes+':'+seconds);
//the provided function will run for 1000milliseconds
    },1000)
}
//calling the clock ()
clock();