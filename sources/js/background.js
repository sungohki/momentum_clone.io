
// variables
const	imageSrc = "./img/";
const	images = [
	"0.png",
	"1.png",
	"2.jpg",
	"3.png",
	"4.jpg",
];
const	chosenImage = images[Math.floor(Math.random() * (images.length))];
const	bodyBackground = document.querySelector("body");

// init
bodyBackground.style.backgroundImage = `url(${imageSrc}${chosenImage})`;
bodyBackground.style.backgroundSize = `100% 100%`;
bodyBackground.style.backgroundRepeat = `no-repeat`;

// functions
