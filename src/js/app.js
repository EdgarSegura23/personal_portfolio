'use strict';

document.addEventListener('DOMContentLoaded', ()=> {
    smartphoneMenu();
});

function smartphoneMenu(){
    const sidebarNavegation = document.querySelector('.sidebar__navegation');
    const menuBtn = document.querySelector('.menu-btn');
    const btnIcon = document.querySelector(".icon-container");

    if(window.innerWidth <= 428 ) {
        menuBtn.addEventListener('click', ()=> {
            btnIcon.classList.toggle('rotate');
            sidebarNavegation.classList.toggle('active');
        });
    }
}