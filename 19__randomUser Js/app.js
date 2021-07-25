import get from './utils/getElement.js';
import getUser from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js';

const randomUserBtn = get('.btn');

const showUser = async () => {
  // get user from API
  const person = await getUser();

  //display user
  displayUser(person);
};

window.addEventListener('DOMContentLoaded', showUser);
randomUserBtn.addEventListener('click', showUser);
