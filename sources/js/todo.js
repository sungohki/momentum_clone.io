
// variables
const	toDoForm = document.querySelector("form#todo-form");
const	toDoInput = toDoForm.querySelector("input");
const	toDoList = document.querySelector("ul#todo-list");

// init

// function
function	handleToDoSubmit(event) {
	event.preventDefault();		// prevent page refresh
	const newToDo = toDoInput.value;
	toDoInput.value = "";
}

// event
toDoForm.addEventListener("submit", handleToDoSubmit);