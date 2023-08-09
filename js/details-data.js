// * Задача №5: При переходе на страницу описания одного конкретного аниме фильма вся информация должна выводиться из объекта anime. * \\
'use strict';

const detailData = () => {
  // Чтобы прелоадер включался в начале получения запроса, а выключался после получения и отрисовки страницы. Сперва получим его.
  const preloader = document.querySelector('.preloader');

  const renderAnimeDetails = (array, itemID) => {
    // Нам необходимо найти объект с ID совпадающим с нашим URL-параметром и вывести его на страницу. И поможет нам в этом метод find(). Т.е. мы ищем в массиве объект (item), у которого есть свойство id, которое равно нашему id'шнику в URL. Но т.к. itemID - это строка, что мы достали из query-параметра URL, а в свойстве item.id у нас находится числовое значение, поэтому использовать нужно нестрогое неравенство.
    const animeObject = array.find((item) => item.id == itemID);
    // Теперь в animeObject лежит один нужный нам объект, информацию из которого мы можем теперь извлекать и помещать в вёрстку. Но также необходимо учесть случай, когда объект не будет найден.
    // Получаем необходимые для заполнения блоки страницы. Сперва получим главный блок со всеми другими нужными нам элементами, чтобы впоследствии сэкономить обращение к другим блокам
    const mainBlock = document.querySelector('.anime__details__content');
    // Также получим картинку обложки фильма уже из главного блока. Нам нужно заполнить его дата-атрибут.
    const imageBlock = mainBlock.querySelector('.anime__details__pic');
    // Далее получаем блок с просмотрами.
    const viewsBlock = imageBlock.querySelector('.view');
    // Теперь сделаем так, чтобы картинка появилась, для этого возьмём функцию ### из categories-data.js, только заменим wrapper на document.
    // Также займёмся названием. Для локализированного и оригинального названий у нас есть общий блок с классом "anime__details__title", его мы и получим.
    const titleBlock = mainBlock.querySelector('.anime__details__title h3');
    const subtitleBlock = mainBlock.querySelector(
      '.anime__details__title span'
    );
    // Также получаем и текст описания фильма.
    const descriptionBlock = mainBlock.querySelector('.anime__details__text p');
    // Получим список информации о фильме. Точнее все пункты списка из него в виде массива.
    const widgetList = mainBlock.querySelectorAll(
      '.anime__details__widget ul li'
    );
    // Теперь мы можем заполнить их либо текстом, либо вёрсткой. На самом деле лучше будет вёрсткой. И обращаться мы будем по индексу к каждому элементу массива.

    // Также заполним и хлебные крошки, сперва получим их.
    const breadcrumbs = document.querySelector('.breadcrumb__links span');

    if (animeObject) {
      imageBlock.dataset.setbg = animeObject.image;

      document
        .querySelectorAll('.set-bg')
        .forEach(
          (element) =>
            (element.style.backgroundImage = `url('${element.dataset.setbg}')`)
        );

      viewsBlock.insertAdjacentHTML(
        'beforeend',
        `
          <i class="fa fa-eye"></i> ${animeObject.views}
        `
      );

      titleBlock.textContent = animeObject.title;
      // Т.к. свойство оригинального названия в объекте animeObject и разделено дефисом, то мы можем применить обращение к свойству через квадратные скобки.
      subtitleBlock.textContent = animeObject['original-title'];
      descriptionBlock.textContent = animeObject.description;
      widgetList[0].insertAdjacentHTML(
        'beforeend',
        `
          <span>Дата выпуска:</span> ${animeObject.date}
        `
      );
      widgetList[1].insertAdjacentHTML(
        'beforeend',
        `
          <span>Рейтинг:</span> ${animeObject.rating}
        `
      );
      // Так как жанров у нас несколько, то обратимся к массиву tags и выведем все его элементы в виде строки методом join().
      widgetList[2].insertAdjacentHTML(
        'beforeend',
        `
          <span>Жанр:</span> ${animeObject.tags.join(', ')}
        `
      );
      // Меняем и в «хлебных крошках» на нужный жанр
      breadcrumbs.textContent = animeObject.genre;

      // Отключаем прелоадер, когда все данные поменяются.
      setTimeout(() => {
        preloader.classList.remove('active');
      }, 200);
    } else {
      console.log('Фильм отсутствует!');
    }
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

  fetch('https://anime-site-777-default-rtdb.firebaseio.com/anime.json')
    .then((response) => response.json())
    .then((data) => {
      const genres = new Set();
      const genreParams = new URLSearchParams(window.location.search).get(
        'itemID'
      );

      data.forEach((item) => genres.add(item.genre));

      if (genreParams) {
        renderAnimeDetails(data, genreParams);
      } else {
        console.log('Фильм отсутствует!');
      }

      renderGenresList(genres);
    });
};

detailData();
