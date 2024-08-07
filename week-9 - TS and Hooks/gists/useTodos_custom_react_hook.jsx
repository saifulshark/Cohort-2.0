import { useEffect, useState } from 'react'
import axios from 'axios'

const useTodos = (n) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const todoLoader = () => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })
      .catch(error => {
        console.error("error fetching todos.");
        setLoading(false);
      });
  }

  useEffect(() => {
    todoLoader();

    const intervalId = setInterval(() => {
      todoLoader();
    }, n * 1000);

    return () => clearInterval(intervalId);
  },[n]);

  return {
    todos: todos,
    loading: loading,
  };
}

function App() {
  const {todos, loading} = useTodos(7);
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