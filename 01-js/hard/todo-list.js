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
  constructor (){ 
    this.todo = []
  }
  add(todo){
    this.todo.push(todo);
  }
  remove(i){
    if(i<0 || i>=this.todo.length){
      return null;
    }else{
      this.todo.splice(i,1);
    }
  }
  update(i,todo){
    if(i<0 || i>=this.todo.length){
      return null;
    }
    else{
      this.todo.splice(i,1,todo);
    }
  }
  getAll(){
    return this.todo;
  }
  get(i){
    if(i<0 || i>=this.todo.length){
      return null;
    }
    else{
      return this.todo[i];
    }  
  }
  clear(){
    this.todo.length = 0;
  }

};

module.exports = Todo;
