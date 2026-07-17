/* =====================================================
   PT TRANS FANY GARUDA CORPORATION
   MAIN.JS
===================================================== */





/* =====================================================
   HAMBURGER MENU
===================================================== */

const menuToggle = document.querySelector(".menu-toggle");

const navbar = document.querySelector(".navbar");

if(menuToggle && navbar){

    menuToggle.addEventListener("click",()=>{

        navbar.classList.toggle("active");

        menuToggle.classList.toggle("active");

    });

}



/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function(link){

    link.addEventListener("click", function(){

        if(navbar && menuToggle){

            navbar.classList.remove("active");

            menuToggle.classList.remove("active");

        }

    });

});



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const currentPage = window.location.pathname.split("/").pop();

const menuItems = document.querySelectorAll(".navbar a");

menuItems.forEach(function(item){

    const link = item.getAttribute("href");

    if(link === currentPage){

        item.classList.add("active");

    }

});



/* =====================================================
   HEADER ON SCROLL
===================================================== */

const header = document.querySelector(".header");

if (header) {

    window.addEventListener("scroll", function(){

        if(window.scrollY > 50){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    });

}



/* =====================================================
   SMOOTH SCROLL
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(function(anchor){

    anchor.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});



/* =====================================================
   SCROLL ANIMATION
===================================================== */

if ("IntersectionObserver" in window) {

    const animatedItems = document.querySelectorAll(
        ".business-card, .why-card, .news-card, .contact-card"
    );

    const observer = new IntersectionObserver(function(entries){

        entries.forEach(function(entry){

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.2

    });

    animatedItems.forEach(function(item){

        observer.observe(item);

    });

}