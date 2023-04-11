const   title = document.querySelector("div.hello:first-child h1");
// queryselector : find (first) element by way of css

console.log(title);
// way to chanege property of element
title.style.color = "blue";

// addEventListener method
let handleTitleClick = function() {
    console.log("title is clicked!");
}

let handleMouseEnter = function() {
    // console.log("mouse is here");
    title.innerText = "your mouse is here";
}

let handleMouseLeave = function() {
    title.innerText = "your mouse leaved here";
}

// element.addEventListener("event type", to_do);
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
