

function App() {
  function createTodo(title,desc){
    const todocont = document.createElement('div');
    const todoTitle = document.createElement('h1');
    todoTitle.textContent = title;
    const todoDesc = document.createElement('h2');
    todoDesc.textContent = desc;
    todocont.appendChild(todoTitle);
    todocont.appendChild(todoDesc);
    return todocont;
  }
  function addTodo(){
    const title = document.getElementById("title").value;
    const description = document.getElementById("desc").value;
    const todo = createTodo(title,description);
    console.log(todo);
    document.getElementById("container").appendChild(createTodo(title,description));
  }
  return (
      <div>
        <input type="text" placeholder='title' id='title' /> <br />
        <input type="text" placeholder='description' id='desc' /> <br />
        <button onClick={addTodo}>Add Todo</button>
        <div id='container'></div>
      </div>
  )
}

export default App
