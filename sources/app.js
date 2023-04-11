
let h1 = document.querySelector("div.hello:first-child h1");

function    handleTitleClick() {
    const   clickedClass = "clicked";

    // // Solution 1) use remove, add method
    // if (h1.classList.contains(clickedClass))
    //     h1.classList.remove(clickedClass);
    // else
    //     h1.classList.add(clickedClass);
    
    // Solution 2) use toggle method
    h1.classList.toggle(clickedClass); 
}

h1.addEventListener("click", handleTitleClick);