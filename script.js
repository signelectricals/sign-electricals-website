/* ===========================================
   SIGN ELECTRICALS - SCRIPT.JS
=========================================== */

/* ===========================
   HERO IMAGE SLIDER
=========================== */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

showSlide(currentSlide);

/* Change image every 3 seconds */

setInterval(nextSlide,3000);


/* ===========================
   NAVBAR SHADOW
=========================== */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

    }

    else{

        header.style.boxShadow="none";

    }

});


/* ===========================
   ACTIVE MENU
=========================== */

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;
        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

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


/* ===========================
   SCROLL ANIMATION
=========================== */

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


/* ===========================
   FOOTER YEAR
=========================== */

const year=document.getElementById("year");

if(year){

    year.textContent=new Date().getFullYear();

}
/* ================= FAQ ================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const question=item.querySelector(".faq-question");

    question.addEventListener("click",()=>{

        item.classList.toggle("active");

    });

});
/* Contact Form */

document
.getElementById("contactForm")
.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your enquiry has been received. We will contact you soon.");

this.reset();

});
/* ===============================
   BACK TO TOP
================================ */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
