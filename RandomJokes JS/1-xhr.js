//initial code with XHR

const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');

const URL = 'https://api.chucknorris.io/jokes/random?category=science';

const getRandomNumber = () => {
  return Math.floor(Math.random() * 1000);
};

const getData = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject({ status: xhr, text: xhr.responseText });
      }
    };
  });
};

const displayData = (data) => {
  img.classList.add('shake-img');
  const { value: joke } = JSON.parse(data);

  console.log(joke);

  setTimeout(() => {
    img.classList.remove('shake-img');
  }, getRandomNumber());
};

btn.addEventListener('click', () => {
  getData(URL)
    .then((response) => displayData(response))
    .catch((error) => console.log(error));
});
