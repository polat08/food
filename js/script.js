import tabs  from './modules/tabs';
import modal  from './modules/modal';
import timer  from './modules/timer';
import calc  from './modules/calc';
import forms  from './modules/forms';
import slider  from './modules/slider';
import cards  from './modules/cards';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
  
  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);
  tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  modal('[data-modal]', '.modal', modalTimerId);
  timer('.timer', '2023-06-09');
  calc();
  forms('form', modalTimerId);
  slider({
    container: '.offer__slider',
    slide: '.offer__slide',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'
  });
  cards();
});
  
// перенести этот код в папку udemy 
  // code without classes
  // getResource('http://localhost:3000/menu')
  // .then(data => createCard(data));

  // function createCard(data) {
  //   data.forEach(({img, altimg, title, descr, price}) => {
  //     const element = document.createElement('div');
  //     price = price * 27;
  //     element.classList.add('menu__item');

  //     element.innerHTML = `
  //       <img src=${img} alt=${altimg}>
  //       <h3 class="menu__item-subtitle">${title}</h3>
  //       <div class="menu__item-descr">${descr}</div>
  //       <div class="menu__item-divider"></div>
  //       <div class="menu__item-price">
  //         <div class="menu__item-cost">Цена:</div>
  //         <div class="menu__item-total"><span>${price}</span> грн/день</div>
  //       </div>  
  //     `;
  //     document.querySelector('.menu .container').append(element);
  //   });
  // }
  

  // slider

  // const slides = document.querySelectorAll('.offer__slide');
  // const slider = document.querySelector('.offer__slider');
  // const prev = document.querySelector('.offer__slider-prev');
  // const next = document.querySelector('.offer__slider-next');
  // const total = document.querySelector('#total');
  // const current = document.querySelector('#current');
  // const slidesWrapper = document.querySelector('.offer__slider-wrapper');
  // const width = window.getComputedStyle(slidesWrapper).width;
  // const slidesField = document.querySelector('.offer__slider-inner');
  // let slideIndex = 1;
  // let offset = 0;


  //  slider code without dots

  // showSlides(slideIndex);

  // if (slides.length < 10) {
  //   total.textContent = `0${slides.length}`;
  // } else {
  //   total.textContent = slides.length;
  // }

  // function showSlides(n) {
  //   if (n > slides.length) {
  //     slideIndex = 1;
  //   }

  //   if (n < 1) {
  //     slideIndex = slides.length;
  //   }

    // slides.forEach(item => item.style.display = 'none');
    // slides[slideIndex -1].style.display = 'block';

    // if (slides.length < 10) {
    // current.textContent = `0${slideIndex}`;
    // } else {
    // current.textContent = slideIndex;
    // }
  // }
  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }
  // prev.addEventListener('click', () => {
  //   plusSlides(-1);
  // });

  // next.addEventListener('click', () => {
  //   plusSlides(1);
  // });
  // end slider code without dots

  // slider code with dots

//   if (slides.length < 10) {
//     total.textContent = `0${slides.length}`;
//     current.textContent = `0${slideIndex}`;
//   } else {
//     total.textContent = slides.length;
//     current.textContent = slideIndex;
//   }

//   slidesField.style.width = 100 * slides.length + '%';
//   slidesField.style.display = 'flex';
//   slidesField.style.transition = '0.5s all';

//   slidesWrapper.style.overflow = 'hidden';

//   slides.forEach(slide => {
//     slide.style.width = width;
//   });

//   slider.style.position = 'relative';

//   const indicators = document.createElement('ol');
//   const dots = [];

//   indicators.classList.add('carousel-indicators');
//   slider.append(indicators);

//   for (let i = 0; i < slides.length; i++) {
//     const dot = document.createElement('li');
//     dot.setAttribute('data-slide-to', i + 1);
//     dot.classList.add('dot');

//     if ( i == 0) {
//       dot.style.opacity = 1;
//     }

//     indicators.append(dot);
//     dots.push(dot);
//   }

//   function deleteNotDigits(str) {
//     return +str.replace(/\D/g, '');
//   }

//   function dotsOpacity(arr){
//     return arr.forEach(dot => dot.style.opacity = '.5'),
//            arr[slideIndex -1].style.opacity = 1;
//   }

// function slideIndexZero() {
//   if (slides.length < 10){
//       current.textContent = `0${slideIndex}`;
//     } else {
//       current.textContent = slideIndex;
//     }
// }

//   next.addEventListener('click', () => {
//     if (offset == deleteNotDigits(width) * (slides.length - 1)){
//       offset = 0;
//     } else {
//       offset += deleteNotDigits(width);
//     }
//     slidesField.style.transform = `translateX(-${offset}px)`;

//     if (slideIndex == slides.length){
//       slideIndex = 1;
//     } else {
//       slideIndex++;
//     }
//     slideIndexZero();
//     // if (slides.length < 10){
//     //   current.textContent = `0${slideIndex}`;
//     // } else {
//     //   current.textContent = slideIndex;
//     // }
//     dotsOpacity(dots);
//     // dots.forEach(dot => dot.style.opacity = '.5');
//     // dots[slideIndex -1].style.opacity = 1;
//   });

//   prev.addEventListener('click', () => {
//     if (offset == 0){
//       offset =  deleteNotDigits(width) * (slides.length - 1);
//     } else {
//       offset -=  deleteNotDigits(width);
//     }
//     slidesField.style.transform = `translateX(-${offset}px)`;

//     if (slideIndex == 1){
//       slideIndex = slides.length;
//     } else {
//       slideIndex--;
//     }

//     // if (slides.length < 10){
//     //   current.textContent = `0${slideIndex}`;
//     // } else {
//     //   current.textContent = slideIndex;
//     // }

//     slideIndexZero();
//     dotsOpacity(dots);
//     // dots.forEach(dot => dot.style.opacity = '.5');
//     // dots[slideIndex -1].style.opacity = 1;
//   });

//   dots.forEach(dot => {
//     dot.addEventListener('click', (e) => {
//       const slideTo = e.target.getAttribute('data-slide-to');

//       slideIndex = slideTo;
//       offset =  deleteNotDigits(width) * (slideTo - 1);

//       slidesField.style.transform = `translateX(-${offset}px)`;

//       // if (slides.length < 10){
//       //   current.textContent = `0${slideIndex}`;
//       // } else {
//       //   current.textContent = slideIndex;
//       // }
//       slideIndexZero();
//       dotsOpacity(dots);
//       // dots.forEach(dot => dot.style.opacity = '.5');
//       // dots[slideIndex -1].style.opacity = 1;
//     });
//   });




