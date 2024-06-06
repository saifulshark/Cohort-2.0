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
    this.list = [];
  }

  add(todo) {
    this.list.push(todo);
  }

  remove(todoIndex) {
    if(todoIndex<this.list.length)
    this.list.splice(todoIndex,1);
  }

  update(index, updatedTodo) {
    if(index<this.list.length)
    this.list[index] = updatedTodo;
  }

  getAll() {
    return this.list;
  }

  get(todoIndex) {
    if(todoIndex>=this.list.length) {

return null;}    return this.list[todoIndex];
  }

  clear() {
    this.list = [];
  }
}

module.exports = Todo;
