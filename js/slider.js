'use strict';

// * ==| Настройки для «Swiper» Slider |== * \\

const slider = () => {
  // Создаём новый экземпляр класса Swiper и в конструктор передаём класс ".swiper":
  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    effect: 'fade',
    speed: 1000,
  });
};

slider();