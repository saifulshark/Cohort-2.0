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
  constructor(){
    this.todos = [];
  }
  add(todo){
    //add todo to list
    this.todos.push(todo);
  }
  remove(indexOfTodo){
    //check if the index is in range
    if(indexOfTodo >=0 && indexOfTodo < this.todos.length){
      this.todos.splice(indexOfTodo, 1)
    }
    //throw error
    console.log('Index out of bounds');
  }
  update(index, updatedTodo){
    // check if index is in range
    if(index >=0 && index < this.todos.length){
      this.todos[index] = updatedTodo;
    }
    console.log('Index out of bounds')
  }
  getAll(){
    return this.todos;
  }
get(indexOfTodo) {
  if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
    return this.todos[indexOfTodo];
  } else {
    console.log('Index out of range');
    return null;
  }
}
  clear(){
    this.todos = [];
  }
}

module.exports = Todo;
