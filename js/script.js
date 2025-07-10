const humbergerIcon = document.querySelector("#hamburger-icon");
const mobileNavbar = document.querySelector("#nav-bar");
const lines = document.querySelectorAll(".line");

humbergerIcon.addEventListener("click", (event) => {  
    if (mobileNavbar.classList.contains("show")) {
        event.target.style.color = "white";
        mobileNavbar.classList.remove("show");
        lines.forEach ((line) => {line.classList.remove("show")});  
    } else {
        event.target.style.color = "rgb(57, 167, 211)";
        mobileNavbar.classList.add("show");
        lines.forEach ((line) => {line.classList.add("show")});     
    }
});