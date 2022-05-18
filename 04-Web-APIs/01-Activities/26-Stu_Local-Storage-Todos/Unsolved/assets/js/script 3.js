var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = []; //

// TODO: What is the purpose of this function?
/* purpose of this function is to render the todo's that the user input in, and once they enter it into the
input and the todo's wil display on the page */
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  //erasing the todo input text so that it can start fresh
  todoList.innerHTML = "";
  //putting the number of todo's that the user put on the page
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
 
 //looping through the todo's 
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];
    
    //adding the each todo as a list
    var li = document.createElement("li");
    li.textContent = todo;
    //setting attribute on each todo, so that the the todo know what to do when we click on the complete button
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
// store the todo in local storage, put make it so that we can read it nd understand it?
function init() {
  // TODO: What is the purpose of the following line of code?
  //store todo in the local storage and parse it.
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  // if as long as the todo we got back is not null, then put it in localstorage
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  //calling on the renderTodos function above 
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  //turn the object into string so that it can be stored in localstorage
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO:h Describe te purpose of the following line of code.
// when the user click the submit button, prevent refresh.
//when the use input the todo make sure that don't have any white spaces.
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  //if the todo has no text, nothing will be put on the page
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
 //adding the todo the user input, and make sure that it is in the order they put it in. the new todo will be added at the end of the string
  todos.push(todoText);
  //this means to clear the value after it is added to the array
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  //storing the todo in localstorage
  storeTodos();
  //rendering the todo
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  //when the button complete is clicked remove it from the from local storage?
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    //removing the todo from the position that it is at and not just any regular todo. 
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    //remove the completed task from local storage
    storeTodos();
    renderTodos();
  }
});

init();
