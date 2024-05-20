import React from "react";

interface todoInterface{
  title: string;
  description: string;
  completed: boolean;
};

const Todos = ({todo}) => {
  return(
    <>
      <div>{todo.title}</div>
      <div>{todo.description}</div>
      <div>{todo.completed ? "Completed" : "Pending"}</div>
    </>
  )
};

const App = () => {
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
      completed: false  
      },
  ];
  
  return (
    <>
      { todos.map((eachtodo, index) => (<Todos key={index} todo ={eachtodo}/>)) }
    </>
  );
};

export default App
