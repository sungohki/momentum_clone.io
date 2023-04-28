
// variables
const	imageSrc = "./img/";
const	images = [
	"0.png",
	"1.png",
	"2.jpg",
	"3.png",
	"4.jpg",
];
const	GAMEBOY = `${imageSrc}gameboy.png`;
const	chosenImage = images[Math.floor(Math.random() * (images.length))];

const	innerImage = document.querySelector("#gameboy-screen");
const	bodyBackground = document.querySelector("body");

// init
innerImage.style.backgroundImage = `url(${imageSrc}${chosenImage})`;
bodyBackground.style.backgroundImage = `url(${GAMEBOY})`;
bodyBackground.style.backgroundSize = `cover`;
bodyBackground.style.backgroundRepeat = `no-repeat`;


// functions
