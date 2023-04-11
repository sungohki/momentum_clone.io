const   hellos = document.getElementsByClassName("hello");
// const   title = document.getElementsByTagName("h1");
const   title = document.querySelector(".hello h1");
// querySelector : find (first) element by way of CSS
const   titles = document.querySelectorAll(".hello h1");
// querySelectorAll : find all elements by way of CSS

console.log(hellos);
console.log(title);
console.log(titles);
