
let h1 = document.querySelector("div.hello:first-child h1");

function    handleMouseEnter() {
    const   currentColor = h1.style.color;
    let     newcolor;
    if(currentColor === "blue")
        newcolor = "tomato";
    else
        newcolor = "blue";
    h1.style.color = newcolor;
}

h1.addEventListener("click", handleMouseEnter);