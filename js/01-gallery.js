import { galleryItems } from "./gallery-items.js";
// Change code below this line

//! Завдання 1 - галерея зображень
//todo Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. Подивися демо відео роботи галереї.

// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

//todo 1) Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
//todo 2) Реалізація делегування на div.gallery і отримання url великого зображення.
//todo 3) Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
//todo 4) Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
//todo 5) Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі <img>, і вказуватися в href посилання. Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

// <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>

// Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку. Заборони цю поведінку за замовчуванням.

// Закриття з клавіатури
// УВАГА
// Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.

// Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. Бібліотека basicLightbox містить метод для програмного закриття модального вікна.

// console.log(galleryItems);
//todo 1) Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

//* достукались до Дів з класом Галеррі
const gallery = document.querySelector(".gallery");

//* присвоюю змінну рядку (в якому до кожного елемента з масива добавлена розмітка)
const cardMarkup = createBoxImg(galleryItems);

//* привязуємо до Галлері розмітку
gallery.insertAdjacentHTML("beforeend", cardMarkup);

//* функція для перебору масива і додавання розмітки для кожного елемента
function createBoxImg(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

//todo 2) Реалізація делегування на div.gallery і отримання url великого зображення.
//todo 3) Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
//todo 4) Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
//todo 5) Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
gallery.addEventListener("click", urlBigImg);

//* функція для отримання url великого зображення + закриття зображення за допомогою "Escape"
function urlBigImg(evt) {
  evt.preventDefault();

  const isImgMini = evt.target.classList.contains("gallery__image");

  if (!isImgMini) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="1280" height="853">
`);
  console.log(instance.show());

  //* закриваємо по 'Escape'
  gallery.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}

//todo ===================================
// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// Показує екземпляр лайтбокса.
// instance.show(() => console.log('lightbox now visible'))

// Закриває екземпляр лайтбокса.
// instance.close(() => console.log('lightbox not visible anymore'))
