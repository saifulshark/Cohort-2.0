var counter = {
    count: 0,
    intervalId: null,
    start: function() {
        this.intervalId = setInterval(function(){
            counter.count++;
            console.log("Counter: ", counter.count);
        }, 1000); // interval of 1 second
    },
    stop : function() {
        clearInterval(this.intervalId);
    },

    reset: function() {
        this.count = 0;
    }
};

// start the counter
counter.start();

// stop the timer after 5 seconds
setTimeout(function() {
    counter.stop();
    console.log("counter stopped. ");
}, 5000); // stop after 5 seconds