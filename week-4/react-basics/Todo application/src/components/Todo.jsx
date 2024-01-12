import './Todo.css'

export function Todo({todoList}){
    return(
        <div id="partodo">
            {
                todoList.map(todo =>{
                    return (
                        <div id="todo">
                            <h1>{todo.title}</h1>
                            <h2>{todo.description}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}