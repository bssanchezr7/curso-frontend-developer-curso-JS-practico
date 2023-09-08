const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuIcon = document.querySelector('.menu');

const aside = document.querySelector('.product-detail');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');

menuEmail.addEventListener('click',  toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);

menuCarritoIcon.addEventListener('click', toggleAside);

function toggleDesktopMenu() {
    

    if (!aside.classList.contains('inactive')) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

    if (!aside.classList.contains('inactive')) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleAside() {

    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }
    else if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}