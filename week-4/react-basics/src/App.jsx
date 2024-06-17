import { useState } from 'react'

import './App.css'

function App() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [todos, setTodos] = useState([])
const [editIndex, setEditIndex] = useState(null)
const addTodo = () => {
  if (editIndex === null) {
    setTodos([...todos, { title, description }])
  } else {
    const newTodos = [...todos]
    newTodos[editIndex] = { title, description }
    setTodos(newTodos)
    setEditIndex(null)
  }
  setTitle('')
  setDescription('')
}
const editTodo = (index) => {
  const todo = todos[index]
  setTitle(todo.title)
  setDescription(todo.description)
  setEditIndex(index)

}
const deleteTodo = (index) => {
  const newTodos = [...todos]
  newTodos.splice(index, 1)
  setTodos(newTodos)
}

  return (
    <>
      <div className="container">
        <h1>Todo App</h1>
        <div className="form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button onClick={addTodo}>{editIndex === null ? 'Add' : 'Edit'}</button>
        </div>
        <div className="todos">
          {todos.map((todo, index) => (
            <div key={index} className="todo">
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
              <div>
                <button onClick={() => editTodo(index)}>Edit</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
