function addTodo() {
    var inputValue = document.getElementById("todo-input").value.trim();
    
    if (inputValue !== "") {
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function() {
            if (this.checked) {
                li.style.textDecoration = "line-through";
            } else {
                li.style.textDecoration = "none";
            }
            saveTodoList();
        });

        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fa-regular fa-circle-xmark" style="color: #000000;"></i>';
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function() {
            li.remove();
            saveTodoList();
        });

        var textNode = document.createTextNode(inputValue);
        li.appendChild(checkbox);
        li.appendChild(textNode);
        li.appendChild(deleteButton);
        document.getElementById("todo-list").appendChild(li);
        
        document.getElementById("todo-input").value = "";

        saveTodoList();
    }
}

function saveTodoList() {
    var todoListItems = document.getElementById("todo-list").innerHTML;
    localStorage.setItem("todoList", todoListItems);
}

function loadTodoList() {
    var todoListItems = localStorage.getItem("todoList");
    if (todoListItems) {
        document.getElementById("todo-list").innerHTML = todoListItems;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    loadTodoList();
});