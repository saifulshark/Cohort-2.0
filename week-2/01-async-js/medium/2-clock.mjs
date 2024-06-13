function showdate()
{
  let d = new Date();
  var amOrPm = (d.getHours() < 12) ? "AM" : "PM";
  var hour = (d.getHours() < 12) ? d.getHours() : d.getHours() - 12;
 let str = hour + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + amOrPm;
  console.log(str);
}

setInterval(showdate, 1000);