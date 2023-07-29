// * ==| Включает прелоадер на 500 мс при открытии страницы, тем самым делая загрузку более внешне приятной для пользователя |== * \\
'use strict';

const preloader = () => {
  const preloader = document.querySelector('.preloader');

  preloader.classList.add('active');

  // Теперь будем удалять класс "active" по истечении 500 мс.
  setTimeout(() => {
    preloader.classList.remove('active');
  }, 500);
};

preloader();
