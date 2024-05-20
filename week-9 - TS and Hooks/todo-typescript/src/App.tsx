interface todoInterface{
  title: string;
  description: string;
  completed: boolean;
};

const Todos = (todo: todoInterface) => {
  return(
    <>
      <div>{todo.title}</div>
      <div>{todo.description}</div>
      <div>{todo.completed}</div>
    </>
  )
};

function App() {
  const todos: todoInterface[] = [
    {
    title: "Task 1",
    description: "Task 1 description",
    completed: true
    },
    {
      title: "Task 2",
      description: "Task 2 description",
      completed: true
      },
    {
      title: "Task 3",
      description: "Task 3 description",
      completed: true
    },
    {
      title: "Task 4",
      description: "Task 4 description",
      completed: true
      },
  ];
  
  return (
    <>
      {todos.map(todo => Todos(todo))}
    </>
  )
}

export default App
