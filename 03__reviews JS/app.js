'use strict';

// local reviews data
const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

const reviewBody = document.querySelector('.review');

if (reviewBody) {
    const reviewerImg = reviewBody.querySelector('.person-img');
    const reviewer = reviewBody.querySelector('.author');
    const reviewerJob = reviewBody.querySelector('.job');
    const reviewerOpinion = reviewBody.querySelector('.info');

    const prevBtn = reviewBody.querySelector('.prev-btn');
    const nextBtn = reviewBody.querySelector('.next-btn');
    const randomBtn = reviewBody.querySelector('.random-btn');

    let currentItem = 0;

    window.addEventListener('DOMContentLoaded', function () {
        showPerson();
    });

    const showPerson = () => {
        const item = reviews[currentItem];
        reviewerImg.src = item.img;
        reviewer.textContent = item.name;
        reviewerJob.textContent = item.job;
        reviewerOpinion.textContent = item.text;
    };

    prevBtn.addEventListener('click', function () {
        currentItem--;
        if (currentItem < 0) {
            currentItem = reviews.length - 1;
        }
        showPerson();
    });

    nextBtn.addEventListener('click', function () {
        currentItem++;
        if (currentItem > reviews.length - 1) {
            currentItem = 0;
        }
        showPerson();
    });

    let getNotRepeatRandomNumber = () => {
        let lastNumber;
        const getRandomNumber = () =>
            Math.floor(Math.random() * reviews.length);
        const result = () => {
            const number = getRandomNumber();
            if (number === lastNumber) {
                return result();
            }
            lastNumber = number;
            return number;
        };
        return result;
    };

    const getRandomItem = getNotRepeatRandomNumber();

    randomBtn.addEventListener('click', function () {
        currentItem = getRandomItem();
        showPerson();
    });
}
