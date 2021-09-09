'use strict';

import showDrinks from './src/presentDrinks.js';
import './src/searchForm.js';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

window.addEventListener('DOMContentLoaded', () => {
    showDrinks(URL);
});
