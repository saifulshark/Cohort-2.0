setInterval(() => {
    const currentTime = new Date()
    console.log(`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`)
}, 1000)

setInterval(() => {
    const currentTime = new Date()
    console.log(currentTime.toLocaleTimeString())
}, 1000)