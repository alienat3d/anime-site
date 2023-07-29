// * ==| Подставляет пути к картинкам фильмов из дата-атрибутов в виде фона inline-CSS свойством background-image. |== * \\

'use strict';

const bgElementPics = document.querySelectorAll('.set-bg');

for (let index = 0; index < bgElementPics.length; index++) {
  const src = bgElementPics[index].dataset.setbg; // таким образом мы получаем путь к картинке каждого элемента массива bgElementPics, что лежит в data-атрибуте "setbg"

  // Запишем в свойство каждой картинки background-image данный путь:
  // bgElementPics[index].style.backgroundImage = 'url(' + src + ')';

  // Однако можно записать проще, пользуясь интерполяцией:
  bgElementPics[index].style.backgroundImage = `url('${src}')`; // стоит отметить, что все свойства, указываемые подобный образом записываются в виде inline-CSS.
}
