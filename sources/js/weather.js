
// Variables

// Init
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// Functions
function    onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
}

function    onGeoError() {
    alert("Cant's find you. No weather for you.");
}

