
// variables
const   loginForm = document.querySelector("#login-form");
const   loginInput = document.querySelector("#login-form input");
const   greeting = document.querySelector("#greeting");
const   CLASSNAME_HIDDEN = "hidden";

// functions
function    onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(CLASSNAME_HIDDEN);

    const username = loginInput.value;
    // greeting.innerText = "Hello, " + username;
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(CLASSNAME_HIDDEN);
}

// EventListener
loginForm.addEventListener("submit", onLoginSubmit);
