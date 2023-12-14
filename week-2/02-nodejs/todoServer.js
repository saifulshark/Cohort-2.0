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
    Example: GET http://localhost:9001/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:9001/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:9001/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:9001/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:9001/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
const express = require("express");
const fs = require("fs");
const portNumber = 9001;
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
app.use(express.json());

app.listen(portNumber, () => {
  console.log("port running at ", portNumber);
});

// get list of all todos
// GET http://localhost:9001/todos
app.get("/todos", (req, res) => {
  try {
    const filePath = path.join(__dirname, "todos.json");
    const fileData = fs.readFileSync(filePath, "utf-8");
    const parsedData = JSON.parse(fileData);
    res.send(parsedData);
  } catch (error) {
    console.error("Error reading or parsing todos.json:", error);
    res.status(500).send("Internal Server Error");
  }
});

//  get particular todo based on id
//  http://localhost:9001/todos/123
app.get("/todos/:todoId", (req, res) => {
  try {
    const selectedId = req.params.todoId.toString();
    const filePath = path.join(__dirname, "todos.json");
    const allFiles = fs.readFileSync(filePath, "utf-8");
    const parsedData = JSON.parse(allFiles);
    const selectedToDo = parsedData.filter((data) => data.id == selectedId);
    res
      .status(200)
      .send(selectedToDo.length > 0 ? selectedToDo : "No match found");
  } catch (error) {
    console.error("Error reading or parsing todos.json:", error);
    res.status(500).send("Internal Server Error");
  }
});

// add new task to to dos list array
// http://localhost:9001/todos
app.post("/todos", (req, res) => {
  try {
    const dataToSave = {
      id: uuid().slice(0, 5),
      title: req.body.title,
      completed: req.body.completed,
      description: req.body.description,
    };
    const existingData = fs.readFileSync("todos.json", "utf8");
    const jsonData = existingData ? JSON.parse(existingData) : [];
    jsonData.push(dataToSave);
    fs.writeFileSync("todos.json", JSON.stringify(jsonData));
    res.status(200).json({ message: "Data saved successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// delete particular todo based on id
// DELETE http://localhost:9001/todos/123
app.delete("/todos/:todoId", (req, res) => {
  try {
    const selectedId = req.params.todoId.toString();
    const filePath = path.join(__dirname, "todos.json");
    const allFiles = fs.readFileSync(filePath, "utf-8");
    const parsedData = JSON.parse(allFiles);
    const updatedData = parsedData.filter((data) => data.id !== selectedId);
    const updatedFile = fs.writeFileSync(filePath, JSON.stringify(updatedData));
    res.status(200).send(updatedData);
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = app;
