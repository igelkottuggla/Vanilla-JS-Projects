'use strict';

const preloader = document.querySelector('.preloader');

window.addEventListener('load', function () {
    preloader.classList.add('hide-preloader');
});

const controlBtn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

if (controlBtn) {
    controlBtn.addEventListener('click', function () {
        if (!controlBtn.classList.contains('slide')) {
            controlBtn.classList.add('slide');
            video.pause();
        } else {
            controlBtn.classList.remove('slide');
            video.play();
        }
    });
}
