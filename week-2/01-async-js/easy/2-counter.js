// Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter = 0;
//  Initilized a container named counter to 0
function updateCounter(){
    //  Created a updateCounter function to log and update the counter
    console.log(counter);
    //  Loged the counter
    counter++;
    //  Updated the counter
    setTimeout(updateCounter,1000);
    //  Used setTimeout function to call updateCounter after 1 second which leads to make the call recurssive
}
updateCounter()
//  Called the updateCounter