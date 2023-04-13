
// variables
const   loginForm = document.querySelector("#login-form");
const   loginInput = document.querySelector("#login-form input");

function    onLoginSubmit(event) {
    event.preventDefault();
    // preventDefault() : prevent any of Event's default behavior of brawser
    // ex) submit ==> Default : refresh the page
    console.log(event);
    console.log(loginInput.value);
}

// submit : occur when user press or click "enter" key
loginForm.addEventListener("submit", onLoginSubmit);
// onLoginSubmit({event info}) ==> deliver event info about what user writed
