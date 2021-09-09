'use strict';

let count = 0;

const numberValue = document.getElementById('number-value');

const btns = document.querySelectorAll('.btn');

if (btns) {
    btns.forEach(function (button) {
        button.addEventListener('click', (pressedBtn) => {
            const styles = pressedBtn.currentTarget.classList;

            if (styles.contains('decrease')) {
                count--;
            } else if (styles.contains('increase')) {
                count++;
            } else {
                count = 0;
            }

            if (count == 0) {
                numberValue.style.color = 'black';
            } else if (count > 0) {
                numberValue.style.color = 'green';
            } else {
                numberValue.style.color = 'red';
            }

            numberValue.textContent = count;
        });
    });
}
