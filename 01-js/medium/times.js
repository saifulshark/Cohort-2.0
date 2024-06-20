/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    // Get the current date and time before the loop starts
    const beforeRunning = new Date();
    
    // Get the timestamp in milliseconds before the loop starts
    const beforeRunningTime = beforeRunning.getTime();
    
    // Initialize a variable to hold the sum
    let count = 0;
    
    // Loop from 1 to n, summing the values
    for (let i = 1; i <= n; i++) {
        count += i;
    }
    
    // Get the current date and time after the loop ends
    const afterRunning = new Date();
    
    // Get the timestamp in milliseconds after the loop ends
    const afterRunningTime = afterRunning.getTime();
     
    // Calculate the difference in milliseconds and convert to seconds, then log the time taken
    console.log((afterRunningTime - beforeRunningTime) / 1000);
}

// Call the function to calculate and log the time taken to sum numbers from 1 to 10,000,000,000
calculateTime(100)      // Sum from 1 to 100
calculateTime(100000)       // Sum from 1 to 100000
calculateTime(1000000000)       // Sum from 1 to 1000000000

