export function Todos(props){
    return (
        <div>
            {props.todosstate.map((todo)=>{
            console.log('Todo completed:', todo.completed); // Debugging statement

                return (<div>
                <h1>{todo.title}</h1>
                <h1>{todo.description}</h1>
                <button id={todo._id} onClick={(e)=>{
                    fetch("http://localhost:3000/completed",{
                        method: "PUT",
                        body: JSON.stringify({
                            id:e.target.id
                        }),
                        headers:{
                            "Content-Type":"application/json"
                        }
                    })}
                }>{todo.completed==true? "Completed": "Mark as Complete"}</button>
                </div>
                )
            })}
        </div>
    )
}