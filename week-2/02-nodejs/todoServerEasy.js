const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");

let todos = [];
const app = express();

app.use(bodyParser.json());

app.get("/todos", function (request, response) {
  response.status(200).json(todos);
});

app.get("/todos/:id", function (request, response) {
  const id = request.params.id;
  let todoIdx = todos.findIndex((todo) => todo.id === id);
  if (todoIdx !== -1) {
    let todo = todos[todoIdx];
    response.status(200).json(todo);
  } else {
    response.status(404).send();
  }
});

app.post("/todos", function (request, response) {
  let todo = request.body;
  todo.id = uuid.v4();
  todos.push(todo);
  response.status(201).json(todo);
});

app.put("/todos/:id", function (request, response) {
  const id = request.params.id;
  const { title, completed } = request.body;

  const todoIndex = todos.findIndex((data) => data.id === id);
  if (todoIndex !== -1) {
    if (title !== undefined) todos[todoIndex].title = title;
    if (completed !== undefined) todos[todoIndex].completed = completed;
    response.json(todos[todoIndex]);
  } else {
    response.status(404).send();
  }
});

app.delete("/todos/:id", function (request, response) {
  const id = request.params.id;

  const todoIndex = todos.findIndex((data) => data.id === id);
  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
    response.sendStatus(200);
  } else {
    response.status(404).send();
  }
});

app.use((req, res) => {
  res.status(404).send();
});

// For test cases, Keep it off.
// app.listen(3001);

module.exports = app;
