
// variables
const	clock = document.querySelector("h2#clock");

// init
getClock();
setInterval(getClock, 1000);

// functions
function	getClock() {
	const date = new Date();
	clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// events