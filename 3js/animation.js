/* =====================================================
   PT TRANS FANY GARUDA CORPORATION
   ANIMATION.JS
===================================================== */

"use strict";

/* ==========================================
   FADE IN SAAT SCROLL
========================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".fade").forEach(element=>{

    observer.observe(element);

});


/* ==========================================
   COUNTER ANIMATION
========================================== */

function counterAnimation(){

    const counters = document.querySelectorAll("[data-counter]");

    counters.forEach(counter=>{

        const target = Number(counter.dataset.counter);

        let number = 0;

        const speed = Math.max(10, Math.floor(target/100));

        const timer = setInterval(()=>{

            number += speed;

            if(number >= target){

                number = target;

                clearInterval(timer);

            }

            counter.textContent = number.toLocaleString();

        },20);

    });

}

window.addEventListener("load",counterAnimation);


/* ==========================================
   SMOOTH SHOW
========================================== */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});