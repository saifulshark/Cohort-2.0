/*Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

    - HH:MM::SS (Eg. 13:45:23)

    - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

function updateTime(){
    const now = new Date();

    //24
    const hours24 = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');
    const time24 = `${hours24}:${mins}:${secs}`;

    //12
    let hours12 = now.getHours();
    const ampm = hours12 >= 12 ? 'PM':'AM';
    hours12 = hours12 % 12;
    hours12 = hours12 ? hours12 : 12;
    const time12 = `${String(hours12).padStart(2,'0')}:${mins}:${secs}:${ampm}`;

    console.log(`24-hour format: ${time24}`);
    console.log(`12-hour format: ${time12}`);
}

updateTime();
setInterval(updateTime, 1000);