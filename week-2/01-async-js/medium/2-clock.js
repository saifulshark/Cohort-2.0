// HH:MM::SS (Eg. 13:45:23)
function format1(date){
    const hours = appendZero(date.getHours())
    const minutes = appendZero(date.getMinutes())
    const seconds = appendZero(date.getSeconds())
    return hours+':'+minutes+':'+seconds
}

// HH:MM::SS AM/PM (Eg 01:45:23 PM)
function format2(date) {
    let h = date.getHours()
    let m = ' AM'
    if (h > 12) {
        m = ' PM'
        h %= 12
    }
    const hours = appendZero(h)
    const minutes = appendZero(date.getMinutes())
    const seconds = appendZero(date.getSeconds())
    return hours+':'+minutes+':'+seconds+' '+m
}

//function to append zero to single digit (example : 6 -> 06)
function appendZero(num){
    if(num<10) return '0'+num
    return ''+num
}

function callBack(format){
    const date = new Date()
    console.log(format(date))
}

//format1
setInterval(()=>{
    callBack(format1)
}, 1000)


// format2
setInterval(()=>{
    callBack(format2)
}, 1000)
