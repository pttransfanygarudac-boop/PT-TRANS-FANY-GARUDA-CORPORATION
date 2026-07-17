/* =====================================================
   PT TRANS FANY GARUDA CORPORATION
   TRANSLATE.JS
===================================================== */

"use strict";

/* ==========================================
   BAHASA AKTIF
========================================== */

let currentLanguage = "id";

/* ==========================================
   UBAH BAHASA
========================================== */

function changeLanguage(language){

    currentLanguage = language;

    document.documentElement.lang = language;

    console.log("Bahasa aktif :", language);

}

/* ==========================================
   CEK BAHASA
========================================== */

function getLanguage(){

    return currentLanguage;

}