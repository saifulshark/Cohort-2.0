// counter object

var counter = {
    count: 0,
    timeoutId: null,
    start: function() {
        var self = this;
        function increment() {
            self.count++;
            console.log("Counter: ", self.count);
            self.timeoutId = setTimeout(increment, 1000); // call increment function recursively
        }
        increment(); // start the counter
    },

    stop: function() {
        clearTimeout(this.timeoutId); // clear the timeout to stop the counter
    },

    reset: function() {
        this.count = 0;
    }
};

counter.start();

setTimeout(function(){
    counter.stop();
    console.log("counter stopped");
}, 5010);