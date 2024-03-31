// todo.js

function editTodo(item){
    document.getElementById(item).innerText = "Update";
    let parent = document.getElementById("dispTodos");
    let todo = document.getElementById(item).parentElement;
    let children = todo.children;
    children[0].setAttribute("contenteditable", true);
    children[1].setAttribute("contenteditable", true);
    console.log(todo, children[0].innerText, children[1].innerText);
    document.getElementById(item).onclick = function() {
        children[0].removeAttribute("contenteditable");
        children[1].removeAttribute("contenteditable");
        document.getElementById(item).innerText = "Edit";
        document.getElementById(item).onclick = function() {editTodo(item)}
    };
}

function removeItem(item){
    let parent = document.getElementById("dispTodos");
    let todoToRemove = document.getElementById(item).parentElement;
    parent.removeChild(todoToRemove);
    console.log("removed todo");
}

function markAsDone(item){
    console.log("Hi frpm markAsDone!" + item);
    document.getElementById(item).innerText = "Remove";
    document.getElementById(item).onclick = function() {removeItem(item)};
    let parent = document.getElementById(item).parentElement;
    let children = parent.children;
    // children[0].style.text-decoration = "line-through";
    /*In JavaScript, when you access a CSS property with dashes in its name using the style property, you need to convert the property name to camelCase. So, text-decoration becomes textDecoration.*/
    children[0].style.textDecoration = "line-through";
    children[1].style.textDecoration = "line-through";
    // console.log(children[1]);

}

function add2do(){
    console.log("Hi there!");
    let item = document.getElementById("title").value;
    let itemDesc = document.getElementById("description").value;
    console.log("Hi there!"+item, itemDesc);
    let parent = document.getElementById("dispTodos");
    console.log(parent);
    let todo = document.createElement("div");
    console.log(todo);
    todo.innerHTML = `<div>${item}</div>
        <div>${itemDesc}</div>
        <button onclick="markAsDone('${item}')" id="${item}">Mark As Done</button>
        <button onclick="editTodo('${item+'edit'}')" id="${item+'edit'}">Edit</button>`
    parent.appendChild(todo);
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";    
}
