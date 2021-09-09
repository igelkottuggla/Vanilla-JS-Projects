'use strict';

// Option #1
// traversing the dom
// const questBtns = document.querySelectorAll('.question-btn');

// questBtns.forEach(button => {
//     button.addEventListener('click', function(pressedBtn) {
//         const question = pressedBtn.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });

// Option #2
//using selectors inside the element
const questions = document.querySelectorAll('.question');

if (questions) {
    questions.forEach((question) => {
        const btn = question.querySelector('.question-btn');
        btn.addEventListener('click', function () {
            questions.forEach(function (item) {
                if (item !== question) {
                    item.classList.remove('show-text');
                }
            });
            question.classList.toggle('show-text');
        });
    });
}
