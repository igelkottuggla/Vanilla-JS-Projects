const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btnChangeColor = document.getElementById('main-btn');
const colourName = document.querySelector('.colour-name');

if(btnChangeColor) {
    const getRandomHexNumber = () => {
        return Math.floor(Math.random() * hex.length);
    }

    btnChangeColor.addEventListener('click', function() {
        let hexClolour = '#';
        for(let i = 0; i < 6; i++) {
            hexClolour += hex[getRandomHexNumber()];
        }
        colourName.textContent = hexClolour;
        document.body.style.backgroundColor = hexClolour;
    });
}
