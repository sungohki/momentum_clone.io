
// variables
const	toDoForm = document.querySelector("form#todo-form");
const	toDoInput = toDoForm.querySelector("input");
const	toDoList = document.querySelector("ul#todo-list");

// init

// function
function	paintToDo(newTodo) {
	// newToDo : text
	const li = document.createElement("li");
	const span = document.createElement("span");
	li.appendChild(span);
	span.innerText = newTodo;
	toDoList.appendChild(li);
}

function	handleToDoSubmit(event) {
	event.preventDefault();		// prevent page refresh
	const newToDo = toDoInput.value;
	toDoInput.value = "";
	paintToDo(newToDo);
}

// event
toDoForm.addEventListener("submit", handleToDoSubmit);