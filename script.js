const menu = document.querySelector(".menu");

const nav_lists = document.querySelector(".nav_lists");

const hearder_section = document.querySelector(".hearder_section");

menu.addEventListener('click', ()=>{
    nav_lists.classList.toggle('show');
    hearder_section.classList.toggle('hearder_toggle');
});