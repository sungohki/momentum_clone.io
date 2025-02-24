// variables
const TODOS_KEY = 'todos';

const toDoForm = document.querySelector('form#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('ul#todo-list');

let toDos = [];
const savedTodos = localStorage.getItem(TODOS_KEY);

// init
if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos; // update previous localStorage
  toDos.forEach(paintToDo);
  // parsedToDos.forEach((item) => func);	: apply specific func each of array elements
}

// function
function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  // stringify : converse paramete to string data type
}

function deleteToDo(event) {
  // event.target : clicked button tag
  const li = event.target.parentElement;
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  // remove obj from toDos arr
  li.remove();
  saveTodos();
}

function paintToDo(newTodoObj) {
  // newToDo : text
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');

  li.appendChild(button);
  li.appendChild(span);
  li.id = newTodoObj.id;
  span.innerText = newTodoObj.text;
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault(); // prevent page refresh
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  // toDos.push(newToDo);
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveTodos();
}

function sexyFilter(obj, tagId) {
  return obj.id !== tagId;
}

// eventListener
toDoForm.addEventListener('submit', handleToDoSubmit);
