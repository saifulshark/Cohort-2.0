/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos

  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123

  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }

  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }

  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

const pathFile = path.join(__dirname, "todos.json");
async function getFileData() {
	return fs.promises.readFile(pathFile, "utf8").then((data) => {
		return JSON.parse(data);
	});
}
async function writeToFile(data) {
	return fs.promises.writeFile(pathFile, JSON.stringify(data));
}

app.get("/todos", async (req, res) => {
	const todos = await getFileData();
	return res.status(200).json(todos);
});
app.post("/todos", async (req, res) => {
	const todos = await getFileData();
	const todo = { ...req.body, id: uuidv4() };
	todos.push(todo);
	await writeToFile(todos);
	return res.status(201).json({ id: todo.id });
});
app.get("/todos/:id", async (req, res) => {
	const id = req.params.id;
	const todos = await getFileData();
	const todo = todos.find((todo) => todo.id === id);
	if (todo) return res.status(200).json(todo);
	else return res.status(404).send("Not found");
});
app.put("/todos/:id", async (req, res) => {
	const id = req.params.id;
	const todos = await getFileData();
	const todoIndex = todos.findIndex((todo) => todo.id === id);
	if (!todoIndex) return res.status(404).send("Not found");
	todos[todoIndex] = { ...todos[todoIndex], ...req.body };
	await writeToFile(todos);
	return res.status(200).send("Updated");
});
app.delete("/todos/:id", async (req, res) => {
	const id = req.params.id;
	const todos = await getFileData();
	const todoIndex = todos.findIndex((todo) => todo.id === id);
	if (!todoIndex) return res.status(404).send("Not found");
	todos.splice(todoIndex, 1);
	await writeToFile(todos);
	return res.status(200).send("Deleted");
});

app.use(bodyParser.json());
module.exports = app;
