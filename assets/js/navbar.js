$(function(){
    const menuBtn = document.querySelector('.navbar__button');

    navbarCheck();
    menuBtn.addEventListener('click', toggleMenu);
    window.addEventListener('scroll', navbarCheck);
});

function toggleMenu() {
    const hamburger = document.querySelector('.navbar__button--hamburger');
    const items = document.querySelector('.navbar__items');
    hamburger.classList.toggle('open');
    items.classList.toggle('open');

    if (!items.classList.contains('open')) {
        items.scrollTop = 0;
    }
}


function navbarCheck() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.navbar__button--hamburger');

    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
        hamburger.classList.add('scrolled');

    } else {
        navbar.classList.remove('scrolled');
        hamburger.classList.remove('scrolled');
    }
}
