
// variables
const   loginForm = document.querySelector("#login-form");
const   loginInput = document.querySelector("#login-form input");
const   greeting = document.querySelector("#greeting");
const   CLASSNAME_HIDDEN = "hidden";

// functions
function    onLoginSubmit(event) {
    event.preventDefault();
    // add class attr
    loginForm.classList.add(CLASSNAME_HIDDEN);
    // save username data
    const username = loginInput.value;
    localStorage.setItem("username", username);
    // modify greeting's innerText & show
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(CLASSNAME_HIDDEN);
}

// EventListener
loginForm.addEventListener("submit", onLoginSubmit);
