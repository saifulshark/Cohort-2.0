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
  constructor() {
    this.todoList = [];
  }

  add(todo) {
    this.todoList.push(todo);
  }
  remove(indexOfTodo) {
    for (let i = 0; i < this.todoList.length; i++) {
      if (i == indexOfTodo) {
        this.todoList.splice(i, 1);
        console.log(
          "Element " + this.todoList[i] + " was removed from index: " + i
        );
      }
    }
  }
  update(index, updatedTodo) {
    for (let i = 0; i < this.todoList.length; i++) {
      if (i == index) {
        this.todoList[i] = updatedTodo;
        console.log(this.todoList[i] + " was updated " + "at index: " + i);
        return this.todoList[updatedTodo];
      }
    }
  }
  getAll() {
    if (this.todoList.length == 0) {
      console.log("The list is Empty");
    }
    return this.todoList; // Return the array of todos
  }
  get(indexOfTodo) {
    for (let i = 0; i < this.todoList.length; i++) {
      if (i == indexOfTodo) {
        console.log("Element at index: " + i + " is " + this.todoList[i]);
        return this.todoList[indexOfTodo];
      }
    }
    return null;
  }
  clear() {
    this.todoList = [];
  }
}
//debugging
// const myTodo = new Todo();
// myTodo.add("Complete homework");
// myTodo.add("Complete Gym");
// myTodo.add("Complete Gym");
// myTodo.add("Complete Gym");
// myTodo.add("Complete Gym");
// myTodo.add("Complete Gym");
// myTodo.add("Complete Pasta");
// myTodo.add("Complete protein");
// myTodo.add("Complete fast");
// myTodo.remove(2);
// myTodo.update(1, "complete training");
// myTodo.get(0);
// myTodo.getAll();
// myTodo.clear();
// console.log("after clear");
// myTodo.getAll();

module.exports = Todo;
