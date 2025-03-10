// variables
const TODOS_KEY = 'todolist';

// elements
const toDoForm = document.querySelector('#main > .todo_form_box');
const toDoFormInput = toDoForm.querySelector('input');
const toDoFormButton = toDoForm.querySelector('button');
const toDoList = document.querySelector('#main > .todo_list_box');

let todoList = [];
const savedTodoList = localStorage.getItem(TODOS_KEY);

// init
if (savedTodoList !== null) {
  const parsedToDos = JSON.parse(savedTodoList);
  todoList = parsedToDos; // update previous localStorage
  todoList.forEach(paintToDo);
}

// eventListener
toDoForm.addEventListener('submit', handleToDoSubmit);

// function
function saveTodoList() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todoList));
}

function deleteToDo(event) {
  const todoItem = event.target.parentElement;

  todoList = todoList.filter((item) => item.id !== parseInt(todoItem.id));
  todoItem.classList.add('fadeout');
  setTimeout(() => {
    todoItem.remove();
  }, 400);
  saveTodoList();
}

function paintToDo(newTodoObj) {
  const newTodoItem = document.createElement('li');
  const newTodoText = document.createElement('span');
  const newTodoBtn = document.createElement('button');
  console.log(newTodoObj);

  newTodoItem.appendChild(newTodoText);
  newTodoItem.appendChild(newTodoBtn);
  newTodoItem.id = newTodoObj.id;

  newTodoText.innerText = newTodoObj.text;

  newTodoBtn.innerText = '❌';
  newTodoBtn.addEventListener('click', deleteToDo);

  toDoList.appendChild(newTodoItem);
}

function handleToDoSubmit(event) {
  event.preventDefault(); // prevent page refresh

  const newToDo = toDoFormInput.value;
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };

  toDoFormInput.value = '';
  todoList.push(newToDoObj);
  paintToDo(newToDoObj);
  saveTodoList();
}

function sexyFilter(obj, tagId) {
  return obj.id !== tagId;
}
