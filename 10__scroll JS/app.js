const advantages = [
    {
        id: 1,
        title: "Rutters Plate Fleet",
        category: "",
        img: "./images/svg/1.svg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      },
      {
        id: 2,
        title: "chandler Brethren ",
        category: "",
        img: "./images/svg/2.svg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      },
      {
        id: 3,
        title: "Coast handsomely lookout",
        category: "",
        img: "./images/svg/3.svg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      },
      {
        id: 4,
        title: "Buccaneer gangway",
        category: "",
        img: "./images/svg/4.svg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      },
      {
        id: 5,
        title: "Buccaneer gangway",
        category: "",
        img: "./images/svg/5.svg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      },
      {
        id: 6,
        title: "Chain Shot yardarm",
        category: "",
        img: "./images/svg/6.svg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      },
      {
        id: 7,
        title: "loot spyglass line Jack",
        category: "",
        img: "./images/svg/7.svg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
      },
      {
        id: 8,
        title: "Gaff topmast scuttl",
        category: "",
        img: "./images/svg/8.svg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
      },
      {
        id: 9,
        title: "marooned brigantine knave",
        category: "",
        img: "./images/svg/9.svg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
]

const tours = [
  {
      id: 1,
      title: "Lorem ipsum dolor",
      category: "Europe",
      date: "august 14th, 2021",
      destination: "Iceland",
      duration: "6 days",
      basicPrice: "2500"      
    },

    {
      id: 2,
      title: "Velit laoreet id",
      category: "Europe",
      date: "august 14th, 2019",
      destination: "Trier",
      duration: "14 days",
      basicPrice: "1900"      
    },

    {
      id: 3,
      title: "Varius sit amet",
      category: "Europe",
      date: "august 14th, 2019",
      destination: "Paris",
      duration: "4 days",
      basicPrice: "3975"      
    },

    {
      id: 4,
      title: "Neque egestas congue",
      category: "Europe",
      date: "august 14th, 2019",
      destination: "Amsterdam",
      duration: "10 days",
      basicPrice: "7980"      
    },
  ];

const date = document.getElementById('date');
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const scrollLinks = document.querySelectorAll('.scroll-link');
const topLink = document.querySelector('.top-link');
const navBar = document.getElementById('nav');
const advantagesSection = document.getElementById('advantages');
const toursSection = document.getElementById('tours');
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

window.addEventListener('DOMContentLoaded', function() {
    displayAdvantagesItems(advantages);
    displayToursItems(tours);
  });


// advantage items using appendChild() instead of inner.HTML
const displayAdvantagesItems = (advantageItems) => {
  let displayAdvantagesItems = advantageItems.map(function(item) {
    
      return ` <article class="advantage">
      <span class="advantage-icon"><img src="${item.img}" alt="advantage icon" class="advantage-img"></span>
      <div class="advantage-info">
        <h4 class="advantage-title">${item.title}</h4>
        <p class="advantage-text">
          ${item.desc}
        </p>
      </div>
    </article>
    `;
    })
    .join("");

    let card = document.createElement('div');
    card.classList.add('advantages-wrapper');

    card.innerHTML = displayAdvantagesItems;    
    advantagesSection.appendChild(card);
}

const displayToursItems = (toursItems) => {
  let displayToursItems = toursItems.map(function(tour) {
    
      return ` <article class="tour-card">
      <div class="tour-img-container">
        <img src="https://picsum.photos/id/${tour.id + 100}/300/200" class="tour-img" alt="" />
        <p class="tour-date">${tour.date}</p>
      </div>
      <div class="tour-footer">
        <h4 class="tour-title">${tour.title}</h4>
        <div class="tour-info">
          <p class="tour-country">
            <span><i class="fas fa-map"></i></span> ${tour.destination}
          </p>
          <div class="tour-details">
            <p>${tour.duration}</p>
            <p>from $${tour.basicPrice}</p>
          </div>
        </div>
      </div>
    </article>
    `;
    })
    .join("");

    let tourCard = document.createElement('div');
    tourCard.classList.add('featured-center', 'section-center');

    tourCard.innerHTML = displayToursItems;    
    toursSection.insertBefore(tourCard, tourLink)
}

const tourLink = document.querySelector('.tour-link');




 

// advantage items using insertAdjacentHTML instead of inner.HTML

// const displayAdvantagesItems = (advantageItems) => {
//   let displayAdvantagesItems = advantageItems.map(function(item) {
  
//     return ` <article class="advantage">
//     <span class="advantage-icon"><img src="${item.img}" alt="advantage icon" class="advantage-img"></span>
//     <div class="advantage-info">
//       <h4 class="advantage-title">${item.title}</h4>
//       <p class="advantage-text">
//         ${item.desc}
//       </p>
//     </div>
//   </article>
//   `;
//   }).join("");

//   advantagesContainer.insertAdjacentHTML('afterbegin', displayAdvantagesItems)
// }