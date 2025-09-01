import '../scss/style.scss'

import adaptHTML from '../html/adapt.html'
import brandHTML from '../html/brand.html'
//import styleHTML from '../html/style.html'
const app = document.getElementById('app');
app.innerHTML = adaptHTML + brandHTML //+ styleHTML;

// --- Пример интерактива для бургер-меню ---
//const burgerBtn = document.querySelector('.header__burger');
//const menu = document.querySelector('.menu');
//let menuLoaded = false;

//if (burgerBtn && menu) {
  //burgerBtn.addEventListener('click', () => {
//    menu.classList.toggle('menu--open');
//  });
//}
const burgerBtn = document.getElementById('burger-btn');
const menuContainer = document.getElementById('menu-container');
const pageContent = document.getElementById('app');
let menuLoaded = false;

burgerBtn.addEventListener('click', () => {
  if (!menuLoaded) {
    fetch('../html/style.html') // путь к файлу меню
      .then(response => response.text())
      .then(html => {
        menuContainer.innerHTML = html;
        menuLoaded = true;
        menuContainer.classList.add('active');
        
      })
      .catch(err => console.error('Ошибка загрузки меню:', err));
  } else {
    menuContainer.classList.toggle('active');
    pageContent.classList.toggle('shifted');
  }
});
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
