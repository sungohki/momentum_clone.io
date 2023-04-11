
// variables
const   loginForm = document.querySelector("#login-form");
// Search input, button from loginFrom
const   loginInput = loginForm.querySelector("input");
const   loginButton = loginForm.querySelector("button");

loginButton.addEventListener("click", function() {
    // console.dir(loginInput);
    console.log(loginInput.value);
});