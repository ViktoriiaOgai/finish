//стили и свайп с пагинацией
import '../scss/style.scss'
import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// импорт html файлов
import adaptHTML from '../html/adapt.html'
import brandHTML from '../html/brand.html'
import styleHTML from '../html/style.html'

const app = document.getElementById('app');

app.innerHTML = adaptHTML + brandHTML ;//+ styleHTML;

const burgerBtn = document.getElementById('burger-btn');
const menuContainer = document.getElementById('menu-container');
const content = document.querySelector('.page-content');
menuContainer.innerHTML = styleHTML;

let menuLoaded = false;

  burgerBtn.addEventListener('click', () => {
  menuContainer.classList.add('active'); // показать меню
  content.classList.add('hidden');       // скрыть контент
});

    const closeBtn = menuContainer.querySelector('#close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        menuContainer.classList.remove('active');
        content.classList.remove('hidden');
      });
    }



// --- Инициализация Swiper для мобильных---
// Делаем небольшой таймаут, чтобы HTML уже вставился
setTimeout(() => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 12,
    centeredSlides: false,
    slidesOffsetBefore: 12,   // добавляем отступ слева (чтобы не обрезался)
    slidesOffsetAfter: 12,    // можно добавить и справа для симметрии
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    },
  });

  swiper.pagination.bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
      swiper.slideTo(index); // листаем так, чтобы слайд встал полностью
    });
  });
});


// --- Показать все бренды ---

const toggleBtn = document.querySelector('.brands__toggle');
const brandsList = document.querySelector('.brands__list');
const brands = document.querySelector('.brands__list');
const buttonText = toggleBtn.querySelector('.text-block__link1');

if (toggleBtn && brandsList) {
    toggleBtn.addEventListener('click', () => {
      brandsList.classList.toggle('brands__list--expanded');
      toggleBtn.classList.toggle('open'); // для поворота стрелки
      buttonText.textContent = brandsList.classList.contains('brands__list--expanded')
      ? 'Свернуть'
      : 'Показать все';
  });
} 
  
// --- Показать все  Ремонт различных видов техники---

const toggleBtn1 = document.querySelector('.brands-sa__toggle');
const brandsList1 = document.querySelector('.brands-as__list');
const brandsas = document.querySelector('.brands-as__list');
//const buttonText = toggleBtn.querySelector('.text-block__link1');
if (toggleBtn1 && brandsList1) {
    toggleBtn.addEventListener('click', () => {
      brandsList1.classList.toggle('brands-as__list--expanded');
      toggleBtn1.classList.toggle('open'); // для поворота стрелки
      buttonText.textContent = brandsList1.classList.contains('brands__list--expanded')
      ? 'Свернуть'
      : 'Показать все';
  });
} 

//const toggleBtn1 = document.querySelector('.brands-as__toggle');
  if (toggleBtn1) {
    toggleBtn1.addEventListener('click', () => {
      const slides = document.querySelectorAll('.swiper-slide');
      slides.forEach(slide => slide.style.display = 'flex');
      toggleBtn1.style.display = 'none'; // скрыть кнопку после раскрытия
      swiper.update(); // обновить Swiper после изменения слайдов
    });
  }

// для десктопа – сразу при загрузке
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth >= 1440) {
    menuContainer.classList.add('active'); // сразу показываем меню
    content.classList.remove('hidden');    // контент не скрываем
  }
});


console.log('It works!')
