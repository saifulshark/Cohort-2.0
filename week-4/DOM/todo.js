// todo.js

// Cache frequently accessed elements
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const todoContainer = document.getElementById("dispTodos");
const submitButton = document.getElementById("btn-submit");

function getTodoItem(item) {
    return document.querySelector(`[data-item-id="${item}"]`);
}

function updateTodo(item) {
    const todoItem = getTodoItem(item);
    if (!todoItem) return;
    toggleContentEditable(todoItem, false);
    toggleButtonText(todoItem, "Edit");
    toggleButtonClass(todoItem, 'updateTodo', 'editTodo');
}

function editTodo(item){
    const todoItem = getTodoItem(item);
    if (!todoItem) return;
    toggleContentEditable(todoItem, true);
    toggleButtonText(todoItem, "Update");
    toggleButtonClass(todoItem, 'editTodo', 'updateTodo');
}

function removeItem(item){
    const todoItem = getTodoItem(item);
    if (!todoItem) return;
    todoContainer.removeChild(todoItem.parentElement);
}

function markAsDone(item){
    const todoItem = getTodoItem(item);
    if (!todoItem) return;
    toggleTextDecoration(todoItem, "line-through");
    toggleButtonText(todoItem, 'Remove');
    toggleButtonClass(todoItem, 'markAsDone', 'removeItem');
}

function toggleContentEditable(element, editable) {
    const children = element.parentElement.children;
    children[0].contentEditable = editable;
    children[1].contentEditable = editable;
}

function toggleButtonText(element, text) {
    element.innerText = text;
}

function toggleTextDecoration(element, style) {
    const children = element.parentElement.children;
    children[0].style.textDecoration = style;
    children[1].style.textDecoration = style;
}

function toggleButtonClass(element, removeClass, addClass) {
    element.classList.remove(removeClass);
    element.classList.add(addClass);
}

function disableSubmitButton() {
    submitButton.disabled = true;
}

function enableSubmitButton() {
    submitButton.disabled = false;
}

function createTodoElement(item, itemDesc) {
    const todo = document.createElement("div");
    todo.innerHTML = `<div>${item}</div>
        <div>${itemDesc}</div>
        <button class="markAsDone" data-item-id="${item}">Mark As Done</button>
        <button class="editTodo" data-item-id="${'edit'+item}">Edit</button>`;
    return todo;
}

function clearInputs() {
    titleInput.value = "";
    descriptionInput.value = "";
}

function add2do(){
    let item = titleInput.value.trim();
    let itemDesc = descriptionInput.value.trim();
    if (!item || !itemDesc) {
        disableSubmitButton();
        titleInput.value = "Enter todo";
        descriptionInput.value = "Enter Description";
        setTimeout(() => {
            enableSubmitButton();
            titleInput.value = "";
            descriptionInput.value = "";
        }, 500);
    } else {
        const todo = createTodoElement(item, itemDesc);
        todoContainer.appendChild(todo);
        clearInputs();
    }  
}

document.addEventListener('DOMContentLoaded', function() {
    
    todoContainer.addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName === 'BUTTON') {
            const itemId = target.getAttribute('data-item-id');
            if (target.classList.contains('markAsDone')) {
                markAsDone(itemId);
            } else if (target.classList.contains('editTodo')) {
                editTodo(itemId);
            }else if (target.classList.contains('updateTodo')) {
                updateTodo(itemId);
            } else if (target.classList.contains('removeItem')) {
                removeItem(itemId);
            }
        }
    });
    submitButton.addEventListener('click', add2do);
});
