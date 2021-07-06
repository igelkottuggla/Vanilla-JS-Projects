const date = document.getElementById('date');
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const scrollLinks = document.querySelectorAll('.scroll-link');
const topLink = document.querySelector('.top-link');
const navBar = document.getElementById('nav');
const mediaQuery = window.matchMedia('(min-width: 800px)');

// ********** set date ************

date.innerHTML = new Date().getFullYear();

// ********** close links depending on mediaQuery************
const handleWindowChange = (width) => {
    if (width.matches) {
        linksContainer.style.height = 'auto';
    }
}
mediaQuery.addEventListener('change', handleWindowChange);
handleWindowChange(mediaQuery);


// ********** close links ************
if(navToggle) {
    navToggle.addEventListener('click', function() {
        const linksHeight = links.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height; 
    
        if(containerHeight === 0) {
            linksContainer.style.height = `${linksHeight}px`
        } else 
        linksContainer.style.height = 0;
    
        if (mediaQuery.matches) {
            handleWindowChange(mediaQuery);
        }
    });
}


// ********** fixed navbar ************
if(window) {
    window.addEventListener('scroll', function() {
        const navHeight = navBar.getBoundingClientRect().height;
        const scrollHeight = window.pageYOffset;
        if(scrollHeight > navHeight) {
            navBar.classList.add('fixed-nav');
        } else {
            navBar.classList.remove('fixed-nav');
        }
    
        if(scrollHeight > 500) {
            topLink.classList.add('show-link');
        } else {
            topLink.classList.remove('show-link');
        }
    });
}


// ********** smooth scroll ************
if(scrollLinks) {
    scrollLinks.forEach((link) => {
        link.addEventListener("click", scrollEvent => {
          scrollEvent.preventDefault();
          const id = scrollEvent.currentTarget.getAttribute("href").slice(1);
          const element = document.getElementById(id);
      
          const navHeight = navBar.getBoundingClientRect().height;
          const containerHeight = linksContainer.getBoundingClientRect().height;
          const fixedNav = navBar.classList.contains("fixed-nav");
          let position = element.offsetTop - navHeight;
      
          if (!fixedNav) {
            position = position - navHeight;
          }
          if (navHeight > 82) {
            position = position + containerHeight;
          }
      
          window.scrollTo({
            left: 0,
            top: position,
          });
      
          if (mediaQuery.matches) {
                handleWindowChange(mediaQuery);
            } else {
                linksContainer.style.height = 0;
            } 
        });
    });
}