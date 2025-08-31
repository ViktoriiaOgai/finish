import '../scss/style.scss'

import adaptHTML from '../html/adapt.html'
import brandHTML from '../html/brand.html'
import styleHTML from '../html/style.html'

const app = document.getElementById('app');
app.innerHTML = adaptHTML + brandHTML + styleHTML;

// --- Пример интерактива для бургер-меню ---
const burgerBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');

if (burgerBtn && menu) {
  burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  });
}

// --- Показать все бренды ---
const toggleBtn = document.querySelector('.brands__toggle');
const brandsList = document.querySelector('.brands__list');

if (toggleBtn && brandsList) {
  toggleBtn.addEventListener('click', () => {
    brandsList.classList.toggle('brands__list--expanded');
    toggleBtn.textContent = brandsList.classList.contains('brands__list--expanded')
      ? 'Свернуть'
      : 'Показать все';
  });
}
console.log('It works!')
