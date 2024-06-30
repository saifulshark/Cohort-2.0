/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() { //this constructor is given an array todos where all the funcns are implemented
    this.todos = [];
  }

  add(todo) { //here the todo = work to be added to the arr todos
    // Adds a todo to the list of todos
    this.todos.push(todo); //push method is used to add elem to arr at last
  }

  remove(index) {
    // Removes the todo at the given index
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);
    } else {
      console.log("Index out of range.");
    }
  }

  update(index, updatedTodo) {
    // Updates the todo at the given index with updatedTodo
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    } else {
      console.log("Index out of range.");
    }
  }

  getAll() {
    // Returns all todos
    return this.todos;
  }

  get(index) {
    // Returns the todo at the given index
    if (index >= 0 && index < this.todos.length) {
      return this.todos[index];
    } else {
      console.log("Index out of range.");
      return null;
    }
  }

  clear() {
    // Deletes all todos
    this.todos = [];
  }
}

// Testing the Todo class
const todoList = new Todo();

// Adding todos
todoList.add("Buy groceries");
todoList.add("Call Alice");
todoList.add("Finish project");

// Getting all todos
console.log("All todos:", todoList.getAll());

// Updating a todo
todoList.update(1, "Call Bob instead");
console.log("Updated todos:", todoList.getAll());

// Getting a specific todo
console.log("Todo at index 1:", todoList.get(1));

// Removing a todo
todoList.remove(0);
console.log("Todos after removal:", todoList.getAll());

// Clearing all todos
todoList.clear();
console.log("Todos after clearing:", todoList.getAll());


module.exports = Todo;
