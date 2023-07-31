// * ==| Подставляет пути к картинкам фильмов из дата-атрибутов в виде фона inline-CSS свойством background-image. |== * \\

'use strict';

const bgElements = () => {
  const bgElementsPics = document.querySelectorAll('.set-bg');

  /*   for (let index = 0; index < bgElementPics.length; index++) {
    const src = bgElementPics[index].dataset.setbg; // таким образом мы получаем путь к картинке каждого элемента массива bgElementPics, что лежит в data-атрибуте "setbg"

    // Запишем в свойство каждой картинки background-image данный путь:
    // bgElementPics[index].style.backgroundImage = 'url(' + src + ')';

    // Однако можно записать проще, пользуясь интерполяцией:
    bgElementPics[index].style.backgroundImage = `url('${src}')`; // стоит отметить, что все свойства, указываемые подобный образом записываются в виде inline-CSS.
  } */
  // Запись перебора c помощью специального метода массивов forEach() является более лаконичной и современной версией.
  bgElementsPics.forEach(
    (element) =>
      (element.style.backgroundImage = `url('${element.dataset.setbg}')`)
  );

  // * = Тренировка = *
  // Создадим некий абстрактный массив с числами и отфильтруем его, оставив только те элементы, которые равны или больше 3.
  const array = [1, 2, 3, 4, 5];

  // Создадим новую переменную, куда будем заносить фильтрацию значения array. Для этого применим метод filter(). Он немного похож по своему действию на forEach и также принимает callback-функцию, перебирает весь массив и для каждого элемента массива применяет данную callback-функцию.
  /*   const newArray = array.filter((item) => {
    return item <= 3;
  }); */
  // Т.к. в callback всего одна строчка, то можем её записать упрощённо.
  // Стоит также добавить, что метод перебора filter() всегда вернёт новый массив и потому результат выполнения данного метода мы записали в новую переменную. Без новой переменной мы бы просто не получили бы результат, ведь исходный массив никак не меняется.
  const newArray = array.filter((item) => item <= 3);

  // console.log(newArray);

  // * = Работа с методом sort() = *
  const array2 = [5, 3, 4, 2, 1];

  const newArray2 = array2.sort();

  // console.log(newArray2);

  // * А что если у нас не массив чисел, а массив объектов? *
  const array3 = [
    { id: 0, value: 100 },
    { id: 2, value: 900 },
    { id: 1, value: 400 },
    { id: 3, value: 200 },
  ];

  // const newArray3 = array3.sort(); - массив не отсортировался.
  // Для сортировки массива с объектами нужно чуточку улучшить метод sort(). Передадим ему callback-функцию. Метод sort() здесь будет принимать аргументами в callback несколько значений a и b. И чтобы нам отсортировать подобный массив объектов требуется возвращать значение a - b. Но этого мало и требуется также указать то свойство, по которому будет идти сортировка, например если это будет value.
  const newArray3 = array3.sort((a, b) => {
    return a.value - b.value; // - в порядке возрастания по значению value
    // return b.value - a.value; - если мы хотим сортировать в порядке убывания по значению "value"
  });

  // console.log(newArray3);
};

bgElements();
