import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

//! Завдання 2 - бібліотека SimpleLightbox
//todo Зроби таку саму галерею як в першому завданні, але використовуючи бібліотеку SimpleLightbox, яка візьме на себе обробку кліків по зображеннях, відкриття і закриття модального вікна, а також гортання зображень за допомогою клавіатури.

// Необхідно трохи змінити розмітку картки галереї, використовуй цей шаблон.

// <a class="gallery__item" href="large-image.jpg">
//   <img class="gallery__image" src="small-image.jpg" alt="Image description" />
// </a>

// Виконуй це завдання у файлах 02-lightbox.html і 02-lightbox.js. Розбий його на декілька підзавдань:

//todo 1) Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
//todo Використовуй готовий код з першого завдання.

//todo 2) Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs.
//todo Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.

//todo 3) Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery.
//todo Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».

//todo 4) Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt.
//todo Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.

const gallery = document.querySelector(".gallery");
const cardMarkup = createCardoxImg(galleryItems);

//* привязуємо до Галлері розмітку
gallery.insertAdjacentHTML("beforeend", cardMarkup);

//* функція для перебору масива і додавання розмітки для кожного елемента
function createCardoxImg(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

//*==================================
// При використанні окремого варіанту (`simple-lightbox(.min).js`)

// var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
// При використанні окремого варіанту (`simple-lightbox(.min).js`)

// var lightbox = $('.gallery a').simpleLightbox({ /* options */ });
//

// captionDelay	0	внутр	додає затримку перед показом підпису (у мс)
//

// captionsData	title	string	отримати заголовок із заданого атрибута

// captionType	'attr'	string	як отримати підпис. Ви можете вибрати атрибут, дані або текст

// captions	true	bool показати підписи, якщо вони доступні чи ні

// close.simplelightbox	ця подія запускається перед закриттям лайтбокса
// closed.simplelightbox	ця подія запускається після закриття лайтбокса
// close	true	bool	показувати кнопку закриття чи ні
