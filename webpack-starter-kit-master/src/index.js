import './styles.css';
import './task-10.js';
import './menu.hbs';
import posts from './menu.json';
import card from './menu.hbs';
 
// шаблон ====================
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
// console.log(localStorage)

themClick.addEventListener('change', changeThem);

function changeThem(event) {
  if(!localStorage){
    themBody.classList.add(Theme.LIGHT);
    localStorage.getItem('Theme', Theme.LIGHT);
  }
  else if (!themClick.checked) {
    themClick.checked = false;
    themBody.classList.add(Theme.LIGHT);
    themBody.classList.remove(Theme.DARK);
    localStorage.setItem('Theme', Theme.LIGHT);
  } else {
    themBody.classList.remove(Theme.LIGHT);
    themBody.classList.add(Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
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
// console.log(localStorage)
