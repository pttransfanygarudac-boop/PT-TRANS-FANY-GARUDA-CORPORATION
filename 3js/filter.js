/* =====================================================
   PT TRANS FANY GARUDA CORPORATION
   FILTER.JS
===================================================== */

"use strict";

/* ==========================================
   FILTER BERDASARKAN DATA
========================================== */

function filterCards(inputId, cardClass){

    const input = document.getElementById(inputId);

    if(!input) return;

    const keyword = input.value.toLowerCase();

    const cards = document.querySelectorAll(cardClass);

    cards.forEach(card=>{

        const text = card.textContent.toLowerCase();

        if(text.includes(keyword)){

            card.style.display = "";

        }else{

            card.style.display = "none";

        }

    });

}

/* ==========================================
   RESET FILTER
========================================== */

function resetFilter(inputId, cardClass){

    const input = document.getElementById(inputId);

    if(input){

        input.value = "";

    }

    document.querySelectorAll(cardClass).forEach(card=>{

        card.style.display = "";

    });

}