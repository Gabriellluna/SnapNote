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

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const submitButton = form.querySelector("button[type='submit']")
    submitButton.disabled = true

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
                access_key: typeof WEB3FORMS_ACCESS_KEY !== "undefined" ? WEB3FORMS_ACCESS_KEY : "",
                subject: "Novo contato pelo site SnapNote",
                nome: input_nome.value,
                email: input_email.value,
                mensagem: input_mensagem.value
            })
        })
        const result = await response.json()

        if (!result.success) throw new Error(result.message)
        window.alert("Mensagem enviada! Responderemos em breve.")
        form.reset()
    } catch {
        window.alert("Não foi possível enviar a mensagem. Tente novamente ou escreva para equipe@snapnote.com.")
    } finally {
        submitButton.disabled = false
    }
})

const toggleMenu = (open) => {
    mobileMenu.classList.toggle("active", open)
    navMobileMenu.classList.toggle("close", open)
    menuButton.setAttribute("aria-expanded", open)
    menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu")
}

menuButton.addEventListener("click", () => {
    toggleMenu(!mobileMenu.classList.contains("active"))
})

navLinks.forEach(link => {
    link.addEventListener("click", () => toggleMenu(false))
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 991) {
        toggleMenu(false)
    }
})