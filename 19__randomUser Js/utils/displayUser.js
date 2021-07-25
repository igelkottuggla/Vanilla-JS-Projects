import get from './getElement.js';

const userImg = get('.user-img');
const userTitle = get('.user-title');
const userValue = get('.user-value');
const btns = [...document.querySelectorAll('.icon')];

const displayUser = (person) => {
  userImg.src = person.image;
  userValue.textContent = person.name;
  userTitle.textContent = `My name is`;
  removeActive(btns);
  btns[0].classList.add('active');

  btns.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener('click', () => {
      userTitle.textContent = `My ${label} is `;
      userValue.textContent = person[label];
      removeActive(btns);
      btn.classList.add('active');
    });
  });
};

function removeActive(items) {
  items.forEach((item) => item.classList.remove('active'));
}

export default displayUser;
