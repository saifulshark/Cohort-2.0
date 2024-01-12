import './CreateToDo.css'
export function CreateToDo({onclick}){
    return (
        <div id="create-todo">
            <input className="input" type={"text"} placeholder={"Task"}/><br/>
            <input className="input" type={"text"} placeholder={"Description"}/><br/>
            <button className="input" id="addButton" onClick={onclick}>Add Todo</button>
            <br/>
        </div>
    )
}