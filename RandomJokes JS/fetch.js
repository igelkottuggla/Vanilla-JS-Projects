//Code refractoring using fetch()

const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');

const URL = 'https://api.chucknorris.io/jokes/random';

const getRandomNumber = () => {
  return Math.floor(Math.random() * 1000);
};

const randomNumber = getRandomNumber();

const displayData = ({ value: joke }) => {
  img.classList.add('shake-img');
  content.textContent = joke;
  setTimeout(() => {
    img.classList.remove('shake-img');
  }, randomNumber);
};

btn.addEventListener('click', () => {
  fetch(URL)
    .then((data) => data.json())
    .then((response) => displayData(response))
    .catch((error) => console.log(error));
});
