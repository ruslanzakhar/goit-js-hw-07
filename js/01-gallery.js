import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(`.gallery`);


// *створює картинки по шаблону
function createCardMarkup (galleryItems){
    return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href ="${original}">
        <img class ="gallery__img" src="${preview}" data-source="${original}" 
        alt="${description}"></a></div>`;
    }).join(` `);
    return 
}
// *додає створені картинки до галереї
const cardsMarkup = (createCardMarkup(galleryItems));
galleryContainer.insertAdjacentHTML(`beforeend`, cardsMarkup);

// *додає слухача до галереї
galleryContainer.addEventListener(`click`, onImageClick);
// *заборона відкриття по посиланню, додає слухача на кнопку Esc 
// *коли модалка відкриється, відкриває модалку і додає велику картинку.
function onImageClick (event){

    event.preventDefault();

    document.addEventListener("keydown", onEscKeyClick);

    const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source} width="800" height="600">
`)

instance.show()


// * Перевірка чи натиснуто Esc, знімає слухача з модалки, закриває модалку.
  function onEscKeyClick(event){
    if(event.code === `Escape`){
        document.removeEventListener("keydown", onEscKeyClick);
        instance.close();
    }
  }

  
}