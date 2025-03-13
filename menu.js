document.addEventListener("DOMContentLoaded", function() {
    let menuToggle = document.getElementById("menu-toggle");
    let navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });
});
