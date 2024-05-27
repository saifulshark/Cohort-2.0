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

  
  const express = require('express');
  const bodyParser = require('body-parser');
  const fs = require("fs");
  
  const app = express();
  
  app.use(bodyParser.json());

  let todo = JSON.parse(fs.readFileSync("todo.json","utf-8"));
//   console.log(todo);
  app.get("/todos",(req,res)=>{
    res.status(200).json(todo);
  })

  function storetodo(todo){
    return new Promise((resolve)=>{
        fs.writeFile("todo.txt",JSON.stringify(todo),(err)=>{
            console.log("done");
            resolve();
        })
    })
  }
  app.get("/todos/:id",(req,res)=>{
    const id = req.params.id;
    const reqTodoId = todo.findIndex((curTodo)=>{return curTodo.id === parseInt(id)});
    if(reqTodoId != -1){
      res.status(200).json(todo[reqTodoId]);
    }else{
      res.status(404).json({
        msg: "todo not found"
      })
    }
  })
  function generateId(){
    return Math.floor(Math.random()*1000000);
  }

  app.post("/todos",async (req,res)=>{
    const newId = generateId();
    const newTodo ={
      id: newId,
      title: req.body.title,
      completed: req.body.completed,
      description: req.body.description
    }
    todo.push(newTodo);
    await storetodo(todo);
    res.status(201).json(newTodo);
  })
  
  app.put("/todos/:id",async (req,res)=>{
    const updateId = req.params.id;
    for(let i=0;i<todo.length;i++){
      if(todo[i].id == updateId){
        todo[i].title = req.body.title;
        todo[i].description = req.body.description;
        todo[i].completed = req.body.completed;
        await storetodo(todo);
        res.status(200).json(todo[i])
      }
    }
    res.status(404).json({
      msg: "not found"
    })
  })

  app.delete("/todos/:id",async(req,res)=>{
    const deleteId = req.params.id;
    const updatedTodo = todo.filter((curtodo)=>{return deleteId!=curtodo.id})
    if(todo.length == updatedTodo.length){
      res.status(404).json({msg:"not found"})
    }else{
      todo = updatedTodo;
      await storetodo(todo);
      res.status(200).json({msg: "done deleted"})
    }
  })

  app.use("/",(req,res)=>{
    res.status(404).json("route not found")
  })


//   app.listen(3000,()=>{
//     console.log("listening on port 3000");
//   })
  module.exports = app;