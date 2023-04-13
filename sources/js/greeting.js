
// variables
const   CLASSNAME_HIDDEN = "hidden";
const   USERNAME_KEY = "username";

const   loginForm = document.querySelector("#login-form");
const   loginInput = document.querySelector("#login-form input");
const   greeting = document.querySelector("#greeting");
const   savedUsername = localStorage.getItem(USERNAME_KEY);
const   toDoFormVisible = document.querySelector("#todo-form");

// init settings
if (savedUsername === null){
    // show the form
    loginForm.classList.remove(CLASSNAME_HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    paintGreetings(savedUsername);
}

// functions
function    onLoginSubmit(event) {
    event.preventDefault();
    // add class attr
    loginForm.classList.add(CLASSNAME_HIDDEN);
    // save username data
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function    paintGreetings(username) {
    // modify greeting's innerText & show
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(CLASSNAME_HIDDEN);
    toDoFormVisible.classList.remove(CLASSNAME_HIDDEN);
}

// EventListener
