/*
  Implement a class `Todo` having below methods
    - add(title): adds title to list of todos
    - remove(indexOfTodo): remove title from list of todos
    - update(index, updatedTodo): update title at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns title at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor() {
    this.todos = []
  }
  
  add(todo) {
    this.todos.push(todo)
  }

  remove(i) {
    if(i < this.todos.length && i >= 0){
      this.todos.splice(i,1)
    } 
  }

  update(i,newTodo) {
    if(i < this.todos.length && i >= 0) {
      this.todos[i] = newTodo
    }
  }

  getAll() {
    return this.todos
  }

  get(i) {
    if(i < this.todos.length && i >= 0) {
      return this.todos[i]
    }
    return null
  }

  clear() {
    this.todos = []
  }

}

module.exports = Todo