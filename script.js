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
