import allShows from './MoviesAPI.js';

const homeBtn = document.getElementById('nav-home-tab');
const contactBtn = document.getElementById('nav-contact-tab');
const main = document.getElementById('main');

const clearPage = () => {
  main.innerHTML = '';
};

const navBarButtons = () => {
  homeBtn.addEventListener('click', () => {
    clearPage();
    allShows();
  });

  contactBtn.addEventListener('click', () => {
    clearPage();
  });
};

export default navBarButtons;
