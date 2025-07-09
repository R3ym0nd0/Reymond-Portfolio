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

const ua = navigator.userAgent.toLowerCase();
if (ua.includes("fbav") || ua.includes("instagram")) {
  const notice = document.createElement("div");
  notice.style = `
    background-color: rgb(57, 167, 211);
    color: rgb(15, 15, 15);
    padding:8px;
    font-size:13px;
    text-align:center;
    font-family: 'Segoe UI';
    z-index:9999;
    position:relative;
  `;
  notice.textContent = "Facebook or Instagram In-app browser detected. Open in a Chrome browser for best experience.";
  document.body.insertAdjacentElement("afterbegin", notice);

  // Auto remove after 5 seconds
  setTimeout(() => notice.remove(), 5000);
}