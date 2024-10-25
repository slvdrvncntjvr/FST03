const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterTodo = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

// event listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteOrComplete);
filterTodo.addEventListener("change", filterTodos);

function addTodo(event) {
  event.preventDefault();
  
  //create the todoDiv parent container
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  console.log(todoDiv);

  //create the list item
  document.createElement("li");
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  console.log(newTodo);

  //add the input value to the list item
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);

  //create the complete button
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete-btn");
  completeBtn.innerHTML = `<i class="fas fa-check"></i>`; 
  todoDiv.appendChild(completeBtn);

  const trashBtn = document.createElement("button");
  trashBtn.classList.add("trash-btn");
  trashBtn.innerHTML = `<i class="fas fa-trash"></i>`;
  todoDiv.appendChild(trashBtn);

  todoList.appendChild(todoDiv);
  todoInput.value = "";
  
}

function filterTodos() {
    const todos = todoList.childNodes;
    todos.forEach(todo => {
        switch(filterTodo.value) {
        case "all":
            todo.style.display = "flex";
            break;
        case "completed":
            if(todo.classList.contains("completed")) {
            todo.style.display = "flex";
            } else {
            todo.style.display = "none";
            }
            break;
        case "uncompleted":
            if(!todo.classList.contains("completed")) {
            todo.style.display = "flex";
            } else {
            todo.style.display = "none";
            }
            break;
        }
    });
}
function deleteOrComplete() {
    const item = event.target;
    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function() {
            todo.remove();
        });
    }
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

//save to local storage
function saveLocalTodos(todo) {
    let todos;
    if(localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

//get todos from local storage
function getTodos() {
    let todos;
    if(localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(todo => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        console.log(todoDiv);
        const newTodo = document.createElement("li");
        newTodo.classList.add("todo-item");
        console.log(newTodo);
        newTodo.innerText = todo;
        todoDiv.appendChild(newTodo);
        const completeBtn = document.createElement("button");
        completeBtn.classList.add("complete-btn");
        completeBtn.innerHTML = `<i class="fas fa-check"></i>`; 
        todoDiv.appendChild(completeBtn);
        const trashBtn = document.createElement("button");
        trashBtn.classList.add("trash-btn");
        trashBtn.innerHTML = `<i class="fas fa-trash"></i>`;
        todoDiv.appendChild(trashBtn);
        todoList.appendChild(todoDiv);
    });
}

//remove todos from local storage
function removeLocalTodos(todo) {
    let todos;
    if(localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

