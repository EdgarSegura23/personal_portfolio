'use strict';

document.addEventListener('DOMContentLoaded', ()=> {
    sidebarTrigger();
});

function sidebarTrigger() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarBtn = document.querySelector('.sidebar__button button');

    sidebarBtn.addEventListener('click', ()=> {
        sidebar.classList.toggle('sidebar-collapse');
    });
}