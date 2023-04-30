
// variables
const	imageSrc = "./img/";
const	images = [
	"0.jpg",
	"1.jpg",
	"2.jpg",
	"3.jpg",
	"4.jpg",
];
const	GAMEBOY = `${imageSrc}gameboy.png`;
const	chosenImage = images[Math.floor(Math.random() * (images.length))];

const	innerImage = document.querySelector("#gameboy-screen");
const	bodyBackground = document.querySelector("body");

// init
setTimeout(function() {
	document.querySelector("#loading").classList.add("hidden");
	paintBackground();
}, 4000);

// functions
function paintBackground () {
	innerImage.classList.remove("hidden");
	innerImage.style.backgroundImage = `url(${imageSrc}${chosenImage})`;
	innerImage.style.backgroundSize = 'cover';
}