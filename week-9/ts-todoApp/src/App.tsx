
import './App.css'

function App() {

  interface Todos {
    name: string,
    description: string
  }

  let todoList: Todos[] = [{
    name: 'Task1',
    description: 'Do task 1'
  },
  {
    name: 'Task1',
    description: 'Do task 1'
  }]

  return (
    <>
      {todoList.map((data) => {
        return <p>{data.name}</p> 
      })}
      
    </>
  )
}

export default App
