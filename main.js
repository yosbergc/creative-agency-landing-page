let menuIcon = document.querySelector('.hamburgerMenuIcon');
let mobileMenu = document.querySelector('.mobileMenu');

menuIcon.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hide')) {
        mobileMenu.classList.remove('hide');
    } else {
        mobileMenu.classList.add('hide');
    }
})
window.addEventListener('load', () => {
    if (window.innerWidth > 1280) {
        mobileMenu.classList.add('hide');
    }
})