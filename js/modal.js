// * ==| По клику на иконку поиска (лупа в верхнем правом углу экрана) откроется модальное окно поиска по сайту. |== * \\
// * ==| Также по клику на кнопке "х" в этом модальное окне оно закроется. |==

'use strict';

const modal = document.querySelector('.search-modal');
const modalButton = document.querySelector('.icon_search');
const modalCloseButton = modal.querySelector('.search-close-switch');

modalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

modalCloseButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
