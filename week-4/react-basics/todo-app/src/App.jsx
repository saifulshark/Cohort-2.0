import { useState } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState({ title: "", description: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTodoInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleAddTodo = () => {
    if (!todoInput.title.trim() || !todoInput.description.trim()) return;
    const newTodo = {
      id: todos.length + 1,
      ...todoInput,
      done: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodoInput({ title: "", description: "" });
  };

  const handleDoneClick = (index) => {
    const newTodos = todos.map((todo) =>
      todo.id === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  return (
    <>
      <div className="container">
        <div className="input-container">
          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              value={todoInput.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              id="description"
              name="description"
              value={todoInput.description}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button onClick={handleAddTodo}>Add Todo</button>
          </div>
        </div>
        <div>
          {todos.map((todo) => (
            <div key={todo.id}>
              <div>{todo.title}</div>
              <div>{todo.description}</div>
              <div>
                <button onClick={() => handleDoneClick(todo.id)}>
                  {todo.done ? "Done" : "Mark as Done"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
