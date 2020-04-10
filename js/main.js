'use strict'

const books = document.querySelectorAll('.book');

books[0].before(books[1]);
books[5].after(books[2]);
books[3].before(books[4]);

console.log(books);

//изменения картинки
const removeBg = document.querySelector('body');
  removeBg.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

//изменения заголовка в 3 книге
const rename = books[4].querySelector('a');
  rename.textContent = 'Книга 3. this и Прототипы Объектов';

// Удаление рекламы
const removeAd = document.querySelector('.adv');
  removeAd.remove();

//Восстановление порядка в книгах  2 и 5

const listBookTwo = books[0].querySelectorAll('li');
  listBookTwo[3].after(listBookTwo[6]);
  listBookTwo[6].after(listBookTwo[8]);
  listBookTwo[9].after(listBookTwo[2]);

const listBookFive = books[5].querySelectorAll('li');
  listBookFive[1].after(listBookFive[9]);
  listBookFive[4].after(listBookFive[2]);
  listBookFive[10].after(listBookFive[5]);

console.log(listBookFive);



//Добовления элемента в 6 книгу
const listBookSix = books[2].querySelector('ul');
const itemBookSix = listBookSix.querySelectorAll('li');

const newElement = document.createElement('li');
  newElement.textContent = 'Глава 8: За пределами ES6';
  itemBookSix[8].insertAdjacentElement('beforeend', newElement);