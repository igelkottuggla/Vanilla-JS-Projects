'use strict';

import get from './getElement.js';
import showDrinks from './presentDrinks.js';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = get('.search-form');
const input = get('[name="drink"]');
const section = get('.section-center');

form.addEventListener('keyup', (event) => {
    event.preventDefault();
    const value = input.value;
    if (!value) return;
    section.innerHTML = '';
    showDrinks(`${baseURL}${value}`);
});
