// * Задача №5: При переходе на страницу описания одного конкретного аниме фильма вся информация должна выводиться из объекта anime. * \\
'use strict';

const detailData = () => {
  const renderAnimeList = (array, genres) => {
    const wrapper = document.querySelector('.product-list');

    genres.forEach((genre) => {
      const productBlock = document.createElement('div');
      const listBlock = document.createElement('div');
      // const list = array.filter((item) => item.genre === genre);
      // Но т.к. мы хотим выводить не только жёстко закреплённые в свойстве genre фильмы, а искать все фильмы, у которых находится жанр в тегах, то нам следует чуточку изменить логику.
      // Нам нужно узнать есть ли в свойстве tags элемент, содержащий значение genre.
      // Итак ищем мы теперь в tags методом includes(). Данный метод пробежится по массиву tags и проверит, есть ли хоть один элемент схожий со значением genre.
      const list = array.filter((item) => item.tags.includes(genre));

      listBlock.classList.add('row');
      productBlock.classList.add('mb-5');

      productBlock.insertAdjacentHTML(
        'beforeend',
        `
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-8">
              <div class="section-title">
                <h4>${genre}</h4>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 btn__wrapper">
              <div class="btn__all">
                <a href="/categories.html?genre=${genre}" class="primary-btn">Посмотреть все <span class="arrow_right"></span></a>
              </div>
            </div>
          </div>
        `
      );

      list.forEach((item) => {
        const tagsBlock = document.createElement('ul');

        item.tags.forEach((tag) =>
          tagsBlock.insertAdjacentHTML(
            'beforeend',
            `
              <li>${tag}</li>
            `
          )
        );

        listBlock.insertAdjacentHTML(
          'beforeend',
          `
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="${item.image}">
                  <div class="ep">${item.rating} / 10</div>
                  <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
                </div>
                <div class="product__item__text">
                  ${tagsBlock.outerHTML}
                  <h5><a href="/anime-details.html?itemID=${item.id}">${item.title}</a></h5>
                </div>
              </div>
            </div>
          `
        );
      });

      productBlock.append(listBlock);
      wrapper.append(productBlock);

      wrapper
        .querySelectorAll('.set-bg')
        .forEach(
          (element) =>
            (element.style.backgroundImage = `url('${element.dataset.setbg}')`)
        );
    });
  };

  const renderGenresList = (genres) => {
    const dropdownMenu = document.querySelector('.header__menu .dropdown');

    genres.forEach((genre) =>
      dropdownMenu.insertAdjacentHTML(
        'beforeend',
        `<li><a href="./categories.html?genre=${genre}">${genre}</a></li>`
      )
    );
  };

  fetch('./db.json')
    .then((response) => response.json())
    .then((data) => {
      const genres = new Set();
      const genreParams = new URLSearchParams(window.location.search).get(
        'itemID'
      );

      data.anime.forEach((item) => genres.add(item.genre));

      if (genreParams) {
        renderAnimeList(data.anime, [genreParams]);
        const buttonAllWrapper = document.querySelector('.btn__wrapper');
        buttonAllWrapper.innerHTML = '';
      } else {
        renderAnimeList(data.anime, genres);
      }

      renderGenresList(genres);
    });
};

detailData();
