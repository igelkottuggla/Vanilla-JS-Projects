'use strict'
const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btnChangeColor = document.getElementById('main-btn');
const colourName = document.querySelector('.colour-name');

if (btnChangeColor) {
    const getRandomSimpleNumber = () => {
        return Math.floor(Math.random() * colors.length);
    }
       
    btnChangeColor.addEventListener('click', function() {
        const randomNumber = getRandomSimpleNumber();
        document.body.style.backgroundColor = colors[randomNumber];
        colourName.textContent = colors[randomNumber];
    });
}
