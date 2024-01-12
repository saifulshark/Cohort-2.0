import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CreateToDo} from "./components/CreateTodo.jsx";
import {Todo} from "./components/Todo.jsx";

function App() {
    const [todoList, setTodoList] = useState([
        {
            title: "Task1",
            description: "Description1"
        },
        {
            title:"Task2",
            description: "Description2"
        }
        ]
    )

    function addRandomTodo(){
        setTodoList([...todoList, {
            title:"Random task ",
            description:"Random Description"
        }])
    }

    return (
        <div id="parent">
            <CreateToDo onclick={addRandomTodo}/>
            <Todo todoList = {todoList}/>
        </div>
    )
}

export default App
