import { useEffect, useState } from 'react'
import axios from 'axios'

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })
      .catch(error => {
        console.error("error fetching todos.");
        setLoading(false);
      })
  }, [])

  return {
    todos: todos,
    loading: loading,
  };
}

function App() {
  const {todos, loading} = useTodos();
  return (
    <>
      {loading ? <div> Loading...</div> : todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App