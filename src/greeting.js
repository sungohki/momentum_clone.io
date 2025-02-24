// variables
const CLASSNAME_HIDDEN = 'hidden';
const USERNAME_KEY = 'username';

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const savedUsername = localStorage.getItem(USERNAME_KEY);
const toDoFormVisible = document.querySelector('#todo-form');

// Init
if (savedUsername === null) {
  loginForm.classList.remove(CLASSNAME_HIDDEN);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

// EventListener

// functions
function onLoginSubmit(event) {
  event.preventDefault();

  const username = loginInput.value;
  loginForm.classList.add(CLASSNAME_HIDDEN);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(CLASSNAME_HIDDEN);
  greeting.style.backgroundColor = `rgba(90, 90, 90, 0.5)`;
  toDoFormVisible.classList.remove(CLASSNAME_HIDDEN);
}
