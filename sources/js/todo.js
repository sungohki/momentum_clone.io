
// variables
const	TODOS_KEY = "todos";

const	toDoForm = document.querySelector("form#todo-form");
const	toDoInput = toDoForm.querySelector("input");
const	toDoList = document.querySelector("ul#todo-list");

const	toDos = [];
const	savedTodos = localStorage.getItem(TODOS_KEY);

// init
if (savedTodos !== null) {
	const parsedToDos = JSON.parse(savedTodos);
	parsedToDos.forEach(paintToDo);
}

// function
function	saveTodos(){
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function	deleteToDo(event) {
	// event.target : clicked button tag
	const li = event.target.parentElement;
	li.remove();
	saveTodos();
}

function	paintToDo(newTodo) {
	// newToDo : text
	const li = document.createElement("li");
	const span = document.createElement("span");
	const button = document.createElement("button");

	li.appendChild(span);
	li.appendChild(button);
	span.innerText = newTodo;
	button.innerText = "❌";
	button.addEventListener("click", deleteToDo);
	toDoList.appendChild(li);
}

function	handleToDoSubmit(event) {
	event.preventDefault();		// prevent page refresh
	const newToDo = toDoInput.value;
	toDoInput.value = "";
	toDos.push(newToDo);
	paintToDo(newToDo);
	saveTodos();
}

// event
toDoForm.addEventListener("submit", handleToDoSubmit);