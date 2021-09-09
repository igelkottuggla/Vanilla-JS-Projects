'use strict';

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const deadlineWords = ['day', 'hour', 'min', 'sec'];

const giftArticle = document.querySelector('.gift-info');

if (giftArticle) {
    const oneSec = 1000;
    const oneMin = 60 * 1000;
    const oneHour = 60 * oneMin;
    const oneDay = 24 * oneHour;

    const giveaway = giftArticle.querySelector('.giveaway');
    const deadline = giftArticle.querySelector('.deadline');
    const deadlineAmountInNumbers = giftArticle.querySelectorAll(
        '.deadline-format h4'
    );
    const deadlineAmountInWords = giftArticle.querySelectorAll(
        '.deadline-format span'
    );

    let tempDate = new Date();
    let tempYear = tempDate.getUTCFullYear();
    let tempMonth = tempDate.getMonth();
    let tempDay = tempDate.getDate();

    const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 17, 00, 0);
    // let futureDate = new Date(2021, 10, 24, 15, 59, 0);

    const year = futureDate.getFullYear();
    const hours = futureDate.getHours();
    const minutes = futureDate.getMinutes();
    const date = futureDate.getDate();

    let month = futureDate.getMonth();
    month = months[month];
    let weekday = weekdays[futureDate.getDay()];

    giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}pm`;

    const futureTime = futureDate.getTime();

    const formattedTime = (elementTitle) => {
        if (elementTitle < 10) {
            return (elementTitle = `0${elementTitle}`);
        }
        return elementTitle;
    };

    const remainingTime = () => {
        const today = new Date().getTime();
        const timeDifference = futureTime - today;

        let days = Math.floor(timeDifference / oneDay);
        let hours = Math.floor((timeDifference % oneDay) / oneHour);
        let minutes = Math.floor((timeDifference % oneHour) / oneMin);
        let seconds = Math.floor((timeDifference % oneMin) / oneSec);

        const values = [days, hours, minutes, seconds];

        deadlineAmountInNumbers.forEach((elementTitle, index) => {
            elementTitle.innerHTML = formattedTime(values[index]);
        });

        if (timeDifference < 0) {
            clearInterval(countDown);
            deadline.innerHTML = `<h4 class="expired"> sorry, this giveaway has expired</h4>`;
        }

        deadlineAmountInWords.forEach((amountInWOrds, index) => {
            if (values[index] > 1) {
                amountInWOrds.textContent = deadlineWords[index] + `${`s`}`;
            } else {
                amountInWOrds.textContent = deadlineWords[index];
            }
        });
    };

    let countDown = setInterval(remainingTime, oneSec);

    remainingTime();
}
