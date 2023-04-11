const   title = document.querySelector("div.hello:first-child h1");
// queryselector : find (first) element by way of css

console.log(title);
// way to chanege property of element
title.style.color = "blue";

// addEventListener method
let handleTitleClick = function() {
    console.log("title is clicked!");
}
// element.addEventListener("event type", to_do);
title.addEventListener("click", handleTitleClick);