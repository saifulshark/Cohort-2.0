let count =0;
function counter(){
    count += 1;
    console.log(count);
}
// setInterval(counter,1000); // dont call the function here just name it
setInterval(()=>{  //when you pass the count as arguement it wont increment the count variable defined above
    count += 1;
    console.log(count);
},1000)
