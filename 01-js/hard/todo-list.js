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
  todos = new Map();
  add(todo) {
    this.todos.set(this.todos.size, todo);
  }
  remove(indexOfTodo) {
    this.todos.delete(indexOfTodo);
  }
  update(index, updatedTodo) {
    this.todos.set(index, updatedTodo);
  }
  getAll() {
    const todosList = new Array();
    this.todos.forEach((value, key) => {
      todosList.push(value);
    });
    return todosList;
  }
  get(indexOfTodo) {
    return this.todos.get(indexOfTodo);
  }
  clear() {
    this.todos.clear();
  }
}

const mytasks = new Todo();
mytasks.add("first");
mytasks.add("second");
mytasks.add("third");
mytasks.add("fourth");
mytasks.remove(2);
mytasks.update(3, "updated fourth")
const ans = mytasks.get(3);
console.log(ans);

const res = mytasks.getAll();
res.forEach((it) => console.log(it));

mytasks.clear();
const res2 = mytasks.getAll();
res2.forEach((it) => console.log(it));


module.exports = Todo;
