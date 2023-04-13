
// variables
const   loginForm = document.querySelector("#login-form");
const   loginInput = document.querySelector("#login-form input");
const   link = document.querySelector("a");

// functions
function    onLoginSubmit(event) {
    event.preventDefault();
    // preventDefault() : prevent any of Event's default behavior of brawser
    console.log(event);
    console.log(loginInput.value);
}

function    handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
    // alert("clicked");
}

// EventListener
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
// handleLinkClick({information about event that just happened});
