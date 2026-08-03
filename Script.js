
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(

    ".about-card, .skill-card, .project-card, .stat-box, .contact-card"

);

const reveal = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();

// ===============================
// Typing Effect
// ===============================

const text = [

    "Frontend Developer",

    "React Developer",

    "AI Engineer",

    "Full Stack Developer"

];

let count = 0;

let index = 0;

let currentText = "";

let letter = "";

const typing = () => {

    if (document.querySelector(".hero h2")) {

        if (count === text.length) {

            count = 0;

        }

        currentText = text[count];

        letter = currentText.slice(0, ++index);

        document.querySelector(".hero h2").textContent = letter;

        if (letter.length === currentText.length) {

            count++;

            index = 0;

            setTimeout(typing, 1800);

        } else {

            setTimeout(typing, 90);

        }

    }

};

typing();

// ===============================
// Navbar Shadow
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow =

            "0 10px 30px rgba(0,0,0,.4)";

    }

    else {

        header.style.boxShadow = "none";

    }

});

// ===============================
// Button Ripple Effect
// ===============================

const buttons = document.querySelectorAll(

    ".btn-primary,.btn-secondary,.btn-project"

);

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-4px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0) scale(1)";

    });

});

// ===============================
// Page Loaded Animation
// ===============================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});