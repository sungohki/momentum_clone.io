// variables
const savedUsername = localStorage.getItem('username');

// elements
const loginSection = document.querySelector('#login');
const loginSectionForm = loginSection.querySelector('.login_form');

const mainSection = document.querySelector('#main');
const greetingBox = mainSection.querySelector('.greeting_box');
const todoFormBox = mainSection.querySelector('.todo_form_box');

// Init
loginSection.classList.add('hidden');
if (savedUsername === null) {
  loginSection.classList.remove('hidden');
  loginSectionForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

// functions
function onLoginSubmit(event) {
  event.preventDefault();

  const username = loginSectionForm.querySelector('input').value;

  localStorage.setItem('username', username);
  loginSection.classList.add('fadeout');
  setInterval(() => {
    loginSection.classList.remove('fadeout');
    loginSection.classList.add('hidden');
  }, 1000);
}

function paintGreetings(username) {
  mainSection.classList.remove('hidden');
  greetingBox.querySelector('h1').innerText = `Hello, ${username}`;
}
