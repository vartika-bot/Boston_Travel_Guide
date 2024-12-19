document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const header = document.querySelector('header');

    hamburger.addEventListener('click', function () {
        header.classList.toggle('menu-active'); // Toggles the active class
    });
});