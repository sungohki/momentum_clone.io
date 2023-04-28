
// Variables
const   API_KEY = "07ab9d02273bd6808eeb244b940e473f";

// Init
// navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// Functions
function    onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((reponse) => reponse.json())
        .then((data) => {
            const weatherTag = document.querySelector("#weather span:first-child");
            const cityTag = document.querySelector("#weather span:last-child");
            cityTag.innerText = data.name;
            weatherTag.innerText = `${data.weather[0].main} / ${Math.floor(Number(data.main.temp))} degree /`;
    });
}

function    onGeoError() {
    alert("Cant's find you. No weather for you.");
}

