import '../scss/style.scss'

import adaptHTML from '../html/adapt.html'
import brandHTML from '../html/brand.html'
const app = document.getElementById('app');
app.innerHTML = adaptHTML + brandHTML;

const burgerBtn = document.getElementById('burger-btn');
const menuContainer = document.getElementById('menu-container');
const content = document.querySelector('.page-content');
let menuLoaded = false;

burgerBtn.addEventListener('click', () => {
  if (!menuLoaded) {
    fetch('../html/style.html') // путь к файлу меню
      .then(response => response.text())
      .then(html => {
        menuContainer.innerHTML = html;
        menuLoaded = true;
        menuContainer.classList.add('active');
        content.classList.add('hidden');

        // крестик появится после загрузки меню
        const closeBtn = menuContainer.querySelector('#close-btn');
        if (closeBtn) {
          closeBtn.addEventListener('click', () => {
            menuContainer.classList.remove('active'); // скрыть меню
            content.classList.remove('hidden');       // вернуть контент
          });
        }
      })
      .catch(err => console.error('Ошибка загрузки меню:', err));
  } else {
    // если меню уже подгружено
    menuContainer.classList.toggle('active');
    content.classList.toggle('hidden');

    const closeBtn = menuContainer.querySelector('#close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        menuContainer.classList.remove('active');
        content.classList.remove('hidden');
      });
    }
  }
});
// --- Показать все бренды ---
const toggleBtn = document.querySelector('.brands__toggle');
const brandsList = document.querySelector('.brands__list');
const brandsContainer = document.querySelector('.brands__list');
if (toggleBtn && brandsList) {
  toggleBtn.addEventListener('click', () => {
    brandsList.classList.toggle('brands__list--expanded');
    toggleBtn.textContent = brandsList.classList.contains('brands__list--expanded')
      ? 'Свернуть'
      : 'Показать все';
  });
}
console.log('It works!')
