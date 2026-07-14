/* ==========================================
   SIGN ELECTRICALS - SCRIPT.JS
========================================== */

/* ==========================
   LOADER
========================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if(loader){
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        },500);
    }

});

/* ==========================
   HERO SLIDER
========================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => slide.classList.remove("active"));

    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");

    dots[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

if(slides.length > 0){

    showSlide(0);

    setInterval(nextSlide,4000);

}

/* ==========================
   NAVBAR SHADOW
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll",function(){

    if(window.scrollY > 50){

        header.style.boxShadow="0 12px 30px rgba(0,0,0,.18)";

    }else{

        header.style.boxShadow="0 5px 15px rgba(0,0,0,.08)";

    }

});

/* ==========================
   ACTIVE MENU
========================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        const height=section.offsetHeight;

        if(window.scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/* ==========================
   FAQ
========================== */

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const question=item.querySelector(".faq-question");

    question.addEventListener("click",()=>{

        item.classList.toggle("active");

    });

});

/* ==========================
   CONTACT FORM - EMAILJS
========================== */

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.send("service_6uany6d", "template_vnejpr9", {

            name: document.getElementById("name").value,

            email: document.getElementById("email").value,

            phone: document.getElementById("phone").value,

            message: document.getElementById("message").value

        })

        .then(function () {

            alert("✅ Thank you! Your enquiry has been sent successfully.");

            form.reset();

        })

        .catch(function (error) {

            alert("❌ Failed to send enquiry.");

            console.log(error);

        });

    });

}

/* ==========================
   SCROLL ANIMATION
========================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

/* ==========================
   BACK TO TOP
========================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ==========================
   FOOTER YEAR
========================== */

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}
