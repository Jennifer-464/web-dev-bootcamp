const hamburgerMenu = document.getElementById("menu");
const navMenu = document.getElementsByTagName("nav")[0];

hamburgerMenu.addEventListener("click", () => {
    if (hamburgerMenu.classList.contains("active")) {
        hamburgerMenu.removeAttribute("class");
        navMenu.removeAttribute("class");
    }
    else {
        hamburgerMenu.setAttribute("class", "active");
        navMenu.setAttribute("class", "active");
    }
});