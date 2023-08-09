// * ==| По клику на иконку поиска (лупа в верхнем правом углу экрана) откроется модальное окно поиска по сайту. |== * \\
// * ==| Также по клику на кнопке "х" в этом модальное окне оно закроется. |==

'use strict';

const modal = () => {
  const modal = document.querySelector('.search-modal'),
    modalButton = document.querySelector('.icon_search'),
    modalCloseButton = modal.querySelector('.search-close-switch'),
    searchInput = modal.querySelector('#search-input');
  // wrapper = modal.querySelector('.search-modal-result');

  // Полученный массив будем отправлять на отрисовку\рендер. Туда нам нужно также получить обёртку, тот блок, в который мы будем класть элементы перебором.
  const renderFunc = (items) => {
    wrapper.innerHTML = '';

    items.forEach((item) => {
      wrapper.insertAdjacentHTML(
        'afterbegin',
        `
          <a class="p-2 text-center" href="#" target="_blank">${item.title}</a>
        `
      );
    });
  };
  // В данную функцию мы будем передавать value нашей строки ввода поиска. К массиву данных применяем метод filter(), при каждой итерации извлекаем из него dataItem, а возвращать только те элементы dataItem, которые подходят к запросу поиска. Т.е. есть ли буквы из строки ввода в свойствах "title" & "description".
  // Чтобы получалось находить запросы любым регистром используем метод toLowerCase().
  // const searchFunc = (searchStr) => {
  //   fetch('./db.json')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const filteredData = data.filter((dataItem) => {
  //         return (
  //           dataItem.title.toLowerCase().includes(searchStr.toLowerCase()) ||
  //           dataItem.description.toLowerCase().includes(searchStr.toLowerCase())
  //         );
  //       });

  //       renderFunc(filteredData.slice(0, 5));
  //     });
  // };

  const searchFunc = (searchStr) => {
    fetch('https://anime-site-777-default-rtdb.firebaseio.com/anime.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.filter((dataItem) => {
          console.log(dataItem);
          return dataItem;
        });
      });
  };

  modalButton.addEventListener('click', () => {
    modal.classList.add('active');
    searchInput.focus();
  });

  modalCloseButton.addEventListener('click', () => {
    modal.classList.remove('active');
    searchInput.value = '';
    wrapper.innerHTML = '';
  });
  // При вводе информации в строку ввода нам необходимо делать запрос
  // searchInput.addEventListener('input', (evt) => searchFunc(evt.target.value));
  searchInput.addEventListener('input', (evt) => searchFunc(evt.target.value));
};

modal();
