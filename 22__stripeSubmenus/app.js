'use strict';
import sublinks from './data.js';

const get = (selection) => {
    const element = document.querySelector(selection);
    if (element) return element;
    else {
        throw new Error(
            `Such element: ${selection} doesn't exist. Please, check your selection`
        );
    }
};

const toggleBtn = get('.toggle-btn');
const closeBtn = get('.close-btn');
const sidebarWrapper = get('.sidebar-wrapper');
const sidebar = get('.sidebar-links');
const submenu = get('.submenu');
const hero = get('.hero');
const nav = get('.nav');
const linkBtns = [...document.querySelectorAll('.link-btn')];

toggleBtn.addEventListener('click', () => {
    sidebarWrapper.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    sidebarWrapper.classList.remove('show');
});

sidebar.innerHTML = sublinks
    .map((item) => {
        const { links, page } = item;
        return `<article>
  <h4>${page}</h4>
  <div class="sidebar-sublinks">
  ${links
      .map((link) => {
          return `<a href='${link.url}'>
      <i class="${link.icon}"></i>${link.label}</a>`;
      })
      .join('')}
  </div>
  </article>`;
    })
    .join('');

linkBtns.forEach((btn) => {
    btn.addEventListener('mouseover', function (event) {
        const text = event.currentTarget.textContent;
        const tempBtn = event.currentTarget.getBoundingClientRect();
        const bottom = tempBtn.bottom;
        const center = (tempBtn.left + tempBtn.right) / 2;

        const tempPage = sublinks.find(({ page }) => page === text);
        if (tempPage) {
            const { page, links } = tempPage;
            submenu.classList.add('show');
            submenu.style.left = `${center}px`;
            submenu.style.top = `${bottom}px`;

            let columns;
            if (links.length === 3) {
                columns = 'col-3';
            } else if (links.length > 3) {
                columns = 'col-4';
            } else {
                columns = 'col-2';
            }

            submenu.innerHTML = `
      <section>
      <h4>${page}</h4>
      <div class="submenu-center ${columns}"> 
      ${links
          .map((link) => {
              return `<a href='${link.url}'>
      <i class="${link.icon}"></i>${link.label}</a>`;
          })
          .join('')}
      </div>
      </section>`;
        }
    });
});

hero.addEventListener('mouseover', function (e) {
    submenu.classList.remove('show');
});

nav.addEventListener('mouseover', function (e) {
    if (!e.target.classList.contains('link-btn')) {
        submenu.classList.remove('show');
    }
});
