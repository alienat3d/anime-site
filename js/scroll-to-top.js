// * ==| По клику на кнопке ScrollToTop внизу страницы осуществится плавный скролл наверх к началу страницы. |== * \\

'use strict';

const scrollToTop = () => {
  const toTopButton = document.querySelector('#scrollToTopButton');

  toTopButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    // К сожалению, у этого дефолтного метода есть ряд багов и не всегда он корректно везде отрабатывает. Поэтому лучше пользоваться специальной библиотекой плавного скролла seamless-scroll-polyfill. Для этого необходимо также подключить скрипт этой библиотеки в HTML.
    // Самый лучший способ будет воспользоваться методом scrollIntoView(). Главное отличие этой библиотеки, что это кроссбраузерное решение, в отличии от нативного scrollIntoView().
    /*   window.scrollTo({
    top: 0,
    behavior: 'smooth',
  }); */
    // Теперь заменим на свойства из документации к "seamless-scroll-polyfill". Укажем в первом аргументе самый верхний блок сайта, т.е. .header.
    seamless.scrollIntoView(document.querySelector('.header'), {
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  });
};

scrollToTop();