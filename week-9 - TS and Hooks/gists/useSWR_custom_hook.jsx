import { useEffect, useState } from 'react'
import axios from 'axios'
import useSWR from 'swr';

const fetcher = async (url) => {
  const data = await fetch(url);
  const json = await data.json(data);
  return json;
}

function App() {
  const {data, error, isLoading} = useSWR('https://sum-server.100xdevs.com/todos',fetcher);
  return (
    <>
      {isLoading ? <div> Loading...</div> : data.todos.map(todo => <Track todo={todo} />)}
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