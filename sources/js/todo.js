
// variables
const	TODOS_KEY = "todos";

const	toDoForm = document.querySelector("form#todo-form");
const	toDoInput = toDoForm.querySelector("input");
const	toDoList = document.querySelector("ul#todo-list");

let	toDos = [];
const	savedTodos = localStorage.getItem(TODOS_KEY);

// init
if (savedTodos !== null) {
	const parsedToDos = JSON.parse(savedTodos);
	toDos = parsedToDos;		// update previous localStorage
	toDos.forEach(paintToDo);
	// parsedToDos.forEach((item) => func);	: apply specific func each of array elements
}

// function
function	saveTodos(){
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
	// stringify : converse paramete to string data type
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