// todo.js

function updateTodo(item) {
    const attributeSelector = `[data-item-id="${item}"]`;
    let element = document.querySelector(attributeSelector);
    let parent = element.parentElement;
    let children = parent.children;
    children[0].removeAttribute("contenteditable");
    children[1].removeAttribute("contenteditable");
    element.innerText = "Edit";
    element.classList.remove('updateTodo');
    element.classList.add('editTodo');
}

function editTodo(item){
    const attributeSelector = `[data-item-id="${item}"]`;
    let element = document.querySelector(attributeSelector);
    element.innerText = "Update";
    let parent = element.parentElement;
    let children = parent.children;
    children[0].setAttribute("contenteditable", true);
    children[1].setAttribute("contenteditable", true);
    element.classList.remove('editTodo');
    element.classList.add('updateTodo');
}

function removeItem(item){
    const grandParent = document.getElementById("dispTodos");
    const attributeSelector = `[data-item-id="${item}"]`;
    const element = document.querySelector(attributeSelector);
    let parent = element.parentElement;
    grandParent.removeChild(parent);
}

function markAsDone(item){
    const attributeSelector = `[data-item-id="${item}"]`;
    let element = document.querySelector(attributeSelector);
    let parent = element.parentElement;
    let children = parent.children;
    /*In JavaScript, when you access a CSS property with dashes in its name using the style property, you need to convert the property name to camelCase. So, text-decoration becomes textDecoration.*/
    children[0].style.textDecoration = "line-through";
    children[1].style.textDecoration = "line-through";
    element.innerText = 'Remove';
    element.classList.remove('markAsDone');
    element.classList.add('removeItem');
}

function add2do(){
    let item = document.getElementById("title").value;
    let itemDesc = document.getElementById("description").value;
    if(item == "" || itemDesc == ""){
        document.getElementById("btn-submit").disabled = true;
        document.getElementById("title").value = "Enter todo";
        document.getElementById("description").value = "Enter Description";
        setTimeout(function() {
            document.getElementById("btn-submit").disabled = false;
            document.getElementById("title").value = "";
            document.getElementById("description").value = "";
        }, 500);
    }
    else{
        const parent = document.getElementById("dispTodos");
        const todo = document.createElement("div");
        todo.innerHTML = `<div>${item}</div>
            <div>${itemDesc}</div>
            <button class="markAsDone" data-item-id="${item}">Mark As Done</button>
            <button class="editTodo" data-item-id="${'edit'+item}">Edit</button>`
        parent.appendChild(todo);
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
    }    
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dispTodos').addEventListener('click', function(event) {
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
    document.getElementById('container').addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName === 'BUTTON') {
            // const itemId = target.getAttribute('data-item-id');
            if (target.getAttribute('id') == 'btn-submit') {
                add2do();
            }
        }
    });
});
