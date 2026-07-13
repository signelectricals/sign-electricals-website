/* ===========================
   SIGN ELECTRICALS
   SCRIPT.JS
=========================== */

// ===========================
// HERO IMAGE SLIDER
// ===========================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

if (slides.length > 0) {

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }, 3000);

}

// ===========================
// NAVBAR SHADOW
// ===========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.18)";

    } else {

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.08)";

    }

});

// ===========================
// ACTIVE MENU
// ===========================

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

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===========================
// SMOOTH FADE ANIMATION
// ===========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ===========================
// FOOTER YEAR
// ===========================

const year = document.getElementById("year");

if (year) {

    year.innerHTML =
        "© " + new Date().getFullYear() + " Sign Electricals. All Rights Reserved.";

}
