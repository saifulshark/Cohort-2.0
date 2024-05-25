// index.js

const Todo = require('./todo-list.js');

// Instantiate Todo
const todoList = new Todo();

// Add todos
todoList.add('Task 1');
todoList.add('Task 2');
todoList.add('Task 3');

// Get all todos
console.log(todoList.getAll());

// Remove a todo
todoList.remove(1);

console.log("agter reomve-->",(todoList.getAll())==['Task 1', 'Task 3']);

// Update a todo
todoList.update(0, 'Updated Task 1');

// Get todo at index
console.log(todoList.get(0));

// Clear all todos
todoList.clear();

// Get all todos after clearing
console.log(todoList.getAll());
