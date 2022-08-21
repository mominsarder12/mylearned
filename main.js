var menuBar = document.querySelector(".menu-bar");
var closeMenu = document.querySelector(".close-menu");
var navMenu = document.querySelector(".nav-menu");

menuBar.addEventListener("click", function () {
    navMenu.classList.add("show");
});
closeMenu.addEventListener("click", function () {
    navMenu.classList.remove("show")
});