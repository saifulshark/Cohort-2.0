You have been given the code of a purely frontend TODO app
You have to fill in the following functions - 
 - addTodoToDom
 - removeTodoFromDom
 - updateTodoInDom
 - updateState

These 4 functions comprise of what it means to create a library like React.
The goal is the following - 
1. Any time the updateState function is called with a new state, the updateState function calculates the diff between newTodos and oldTodos and call `addTodoToDom`, `removeTodoFromDom` or `updateState` based on the calculated diff.
2. They id of a todo uniquely identifies it. If the title of a todo with the same id changes in two iterations, updateTodoInDom should be called for it.
3. The structure of the state variable looks something like this - 
```js
    const todos = [{
        title: "Go to gym",
        description: "Go to gym from 7-8PM",
        id: 1
    }]
```

### Update:

#### Added Todo App with DOM Manipulation
- Created a simple Todo application using HTML, CSS, and JavaScript to practice DOM manipulation.
- Implemented functionality to add new todos with title and description.
- Added buttons to mark todos as done, edit todo details, and remove todos.
- Implemented event handlers for button clicks to perform corresponding actions such as marking as done, editing, and removing todos.
- Added functionality to toggle between marking a todo as done and removing it.
- Implemented editing functionality to update todo title and description.
- Utilized DOM methods such as getElementById, createElement, innerHTML, appendChild, removeChild, setAttribute, and style properties for DOM manipulation.
- Used contenteditable attribute to make todo title and description editable upon clicking the edit button.
- Styled the application with basic CSS for visual appeal and readability.
- Tested the application to ensure proper functionality and responsiveness.
- Added comments to the JavaScript code for clarity and maintainability.