let counter = 0;

function update() {
  console.log(counter);
  counter++;
  setTimeout(update, 1000);
}
update();
