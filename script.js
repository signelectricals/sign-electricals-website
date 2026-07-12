// Smooth navbar shadow on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
    }
});

// Update footer year automatically
const footerYear = document.querySelector("footer p:last-child");
if (footerYear) {
    footerYear.innerHTML =
        "© " + new Date().getFullYear() + " Sign Electricals. All Rights Reserved.";
}
