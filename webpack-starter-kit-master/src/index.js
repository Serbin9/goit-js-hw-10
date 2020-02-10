`use strict`;
import './styles.css';
import './task-10.js';
import './menu.hbs';
import posts from './menu.json';
import card from './menu.hbs';


const menu = document.querySelector('.js-menu');
function itemMenu(posts){
    const murkup = posts.map(post => card(post)).join('');
    menu.insertAdjacentHTML('beforeend', murkup);

}
itemMenu(posts)