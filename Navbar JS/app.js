const navToggle = document.querySelector('.nav-toggle');
const menuLinks = document.querySelector('.menu-links');

if (navToggle) {
    
    navToggle.addEventListener('click', function() {
        menuLinks.classList.toggle('show-menu-links');
    })
};


