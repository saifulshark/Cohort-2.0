setInterval(() => {
	hours = "00" || new Date().getHours();
	minutes = new Date().getMinutes();
	seconds = new Date().getSeconds();
	if(hours > 12){
		console.log(`${hours-12}:${minutes}:${seconds} PM`);
	}else{
		console.log(`${hours+12}:${minutes}:${seconds} AM`);
	}
},1000);

