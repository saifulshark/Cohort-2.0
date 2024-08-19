class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(i) {
    if (i < 0 || i >= this.todos.length) {
      throw new Error('Index out of bounds.');
    } else {
      this.todos.splice(i, 1);
    }
  }

  update(i, todo) {
    if (i < 0 || i >= this.todos.length) {
      throw new Error('Index out of bounds.');
    } else {
      this.todos.splice(i, 1, todo);
    }
  }

  getAll() {
    return this.todos;
  }

  get(i) {
    if (i < 0 || i >= this.todos.length) {
      throw new Error('Index out of bounds.');
    } else {
      return this.todos[i];
    }
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
