import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

galleryEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    }

    const imageAlt = e.target.alt;
    // console.log(e.target)
    var lightbox = new SimpleLightbox('.gallery a ', { captionDelay: 250, });
    
});

function galleryItem(galleryItems) {
    
    return galleryItems.map(({ description, original, preview }) => {
        return `<a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
                </a>`
    }).join('');


}

const listPictures = galleryItem(galleryItems);

galleryEl.innerHTML = listPictures;





// const isActive = btn.classList.contains('tags__btn--active')

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.

// 2.Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.

// 3. Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».

// 4. Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.

// var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

{/* <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a> */}