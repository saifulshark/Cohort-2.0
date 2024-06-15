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
    this.todos.push(todo)
  }
  remove(index){
    //this.todos = this.todos.slice(0,index).conacat(this.todos.slice(index+1));
    let before = this.todos.slice(0,index);
    let after = this.todos.slice(index+1);
    this.todos = before.concat(after);
  }
  update(index,updatedTodo){
    if(index>=this.todos.length) return null;
    
    this.todos[index]=updatedTodo;
  }
  getAll(){
    return this.todos;
  }
  get(indexofTodo){
    if(indexofTodo>=this.todos.length) return null;
    return this.todos[indexofTodo];
  }
  clear(){
    this.todos=[];
  }

}

module.exports = Todo;
