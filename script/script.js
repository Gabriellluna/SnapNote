const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector(".mobile-menu");
const navMobileMenu = document.querySelector(".nav-mobile-menu");
const navLinks = document.querySelectorAll(".nav-hero-menu a");
const sections = document.querySelectorAll("section[id]");
const form = document.querySelector("#formContact")
const input_nome = document.querySelector("#input-nome")
const input_email = document.querySelector("#input-email")
const input_mensagem = document.querySelector("#input-mensagem")

window.addEventListener("scroll", () => {
    let activeSection = "";

    sections.forEach(section => {
        const top = section.offsetTop - 100;

        if (window.scrollY >= top) {
            activeSection = section.id;
        }
    });

    navLinks.forEach(link => {
        if (link.getAttribute("href") === `#${activeSection}`) {
            link.classList.add("activeLink");
        } else {
            link.classList.remove("activeLink");
        }
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault()
    window.alert("Dados enviados com sucesso!")
    input_email.value = ""
    input_nome.value = ""
    input_mensagem.value = ""
})

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")
    navMobileMenu.classList.toggle("close")
})