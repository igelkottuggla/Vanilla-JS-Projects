'use strict';

const slider = document.querySelector('.slider');

if (slider) {
    const slides = slider.querySelectorAll('.slide');
    const nextBtn = slider.querySelector('.nextBtn');
    const prevBtn = slider.querySelector('.prevBtn');

    let counter = 0;

    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    });

    const slidesChanging = () => {
        prevBtn.classList.toggle('btn-hidden', counter === 0);
        nextBtn.classList.toggle('btn-hidden', counter === slides.length - 1);

        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        });

        // 1st option **** infinite slides' changing ****
        // if(counter === slides.length) {
        //     counter = 0;
        // }

        // if(counter < 0) {
        //     counter = slides.length -1;
        // }

        // 2nd option from the original course
        // if (counter < slides.length - 1) {
        //     nextBtn.style.display = "block";
        //   } else {
        //     nextBtn.style.display = "none";
        //   }
        //   if (counter > 0) {
        //     prevBtn.style.display = "block";
        //   } else {
        //     prevBtn.style.display = "none";
        //   }

        // 3nd option  **** when the slides end buttons are blocked****
    };

    // prevBtn.style.display = "none";  original version from the course

    nextBtn.addEventListener('click', function () {
        counter++;
        slidesChanging();
    });

    prevBtn.addEventListener('click', function () {
        counter--;
        slidesChanging();
    });
}
