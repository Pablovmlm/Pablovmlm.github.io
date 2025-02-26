const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");

hamburger.addEventListener("click", () => {
    console.log("clicked");
    
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("toggle");
});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a"); // Ajusta según tu estructura

    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
});