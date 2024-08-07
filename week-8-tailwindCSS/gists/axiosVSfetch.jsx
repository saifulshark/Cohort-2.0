// AXIOS vs Fetch
const axios = require("axios");

function main1() {
  fetch("https://sum-server.100xdevs.com/todos").then(async (response) => {
    const json = await response.json();
    console.log(json.todos.length);
  });
}

//slightly cleaner syntax.
async function main2() {
  const response = await fetch("https://sum-server.100xdevs.com/todos");
  const todos = await response.json();
  console.log(todos.todos.length);
}

//using axios instead of fetch fn.
async function main3() {
  const response = await axios.get("https://sum-server.100xdevs.com/todos");
  console.log(response.data.todos.length);
}

//POST Req.
//slightly cleaner syntax.
async function mainwew() {
  const response = await fetch(
    "https://www.toptal.com/developers/postbin/454154984-8949841981",
    {
      method: "POST",
      body: {
        username: "user",
        password: "pass",
      },
      headers: {
        Authorization: "Bearer 9fiaz0uanaa7gmhmtrlg4zfbr2hqi7wh",
      },
    },
  );
  const data = await response.text();
  console.log(data);
}

//using axios instead of fetch fn.
async function main() {
  const response = await axios.post(
    "https://www.toptal.com/developers/postbin/454154984-8949841981",{
      username: "user",
      password: "pass",
    },
    headers:{
      Authorization: "Bearer 9fiaz0uanaa7gmhmtrlg4zfbr2hqi7wh","
    },
  );
  console.log(response.data.todos.length);
}

main();
