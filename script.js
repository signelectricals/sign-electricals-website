// ==========================
// HERO IMAGE SLIDER
// ==========================

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

if (slides.length > 0) {

    showSlide(0);

    setInterval(nextSlide, 3000);

}
// ==========================
// NAVBAR SHADOW
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (header) {

        if (window.scrollY > 50) {
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.20)";
        } else {
            header.style.boxShadow = "0 5px 15px rgba(0,0,0,.08)";
        }

    }

});
