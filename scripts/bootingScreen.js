// variables
const imageSrc = '../images/';
const GAMEBOY = `${imageSrc}gameboy.png`;
const chosenImage = Math.floor(Math.random() * 5) + 1;

// elements
const innerImage = document.querySelector('#container');

// init
// setTimeout(function () {
//   document.querySelector('#loading_screen').classList.add('hidden');
//   paintBackground();
// }, 4000);

// functions
function paintBackground() {
  innerImage.style.background = `url(${imageSrc}wallpaper${chosenImage}.jpg) center/cover no-repeat`;
  innerImage.classList.remove('hidden');
}

paintBackground();
