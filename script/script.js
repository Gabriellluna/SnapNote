const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector(".mobile-menu");
const navMobileMenu = document.querySelector(".nav-mobile-menu");
const navLinks = document.querySelectorAll(".nav-hero-menu a");
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
    let activeSection = "";

    sections.forEach(section => {
        const top = section.offsetTop - 100;

        if (window.scrollY >= top) {
            activeSection = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${activeSection}`) {
            link.classList.add("activeLink");
        } else {
            link.classList.remove("activeLink");
        }
    });
});

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")
    navMobileMenu.classList.toggle("close")
})