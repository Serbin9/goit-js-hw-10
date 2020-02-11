import './styles.css';
import './task-10.js';
import './menu.hbs';
import posts from './menu.json';
import card from './menu.hbs';

const menu = document.querySelector('.js-menu');
function itemMenu(posts) {
  const murkup = posts.map(post => card(post)).join('');
  menu.insertAdjacentHTML('beforeend', murkup);
}
itemMenu(posts);

// Фон
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
//  положение бегунка смена темы через бегунок ================================
const themClick = document.querySelector('.js-switch-input');
const themBody = document.querySelector('body');
themClick.addEventListener('change', changeThem);
function changeThem(event) {
  if (!themClick.checked) {
    themClick.checked = false;
    themBody.classList.add('light-theme');
    themBody.classList.remove('dark-theme');
    localStorage.setItem('Theme', 'light-theme');
  } else {
    themBody.classList.remove('light-theme');
    themBody.classList.add('dark-theme');
    localStorage.setItem('Theme', 'dark-theme');
  }
}

// Когда тема сохряняеться при перезагрузки страницы ==================================
function color() {
  if (localStorage.getItem('Theme') === 'dark-theme') {
    themBody.classList.remove('light-theme');
    themBody.classList.add('dark-theme');
    themClick.checked = true;
  }
}
color();
