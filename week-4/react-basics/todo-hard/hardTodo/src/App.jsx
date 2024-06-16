import { useState } from 'react'


function App() {
  const [todos, setTodo] = useState([])

  function addTodo(){
    const newTitle = document.getElementById("title").value;
    const newDescription = document.getElementById("description").value;
    setTodo([...todos,{
      title: newTitle,
      description: newDescription
    }])
  }

  return (
      <div>
        <input type="text" id="title" /><br />
        <input type="text" id="description" /><br />
        <button onClick={addTodo}>Add Todo</button>
        {todos.map((curTodo)=>{
          return <Todo title={curTodo.title} description={curTodo.description} />
        })}
      </div>
  )
}
function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}
export default App
