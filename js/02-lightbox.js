import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryContainer = document.querySelector(`.gallery`);


// *створює картинки по шаблону
function createCardMarkup (galleryItems){
    return galleryItems.map(({preview, original, description}) => {
        return `<li><a class="gallery__item" href ="${original}">
        <img class ="gallery__img" src="${preview}"  
        alt="${description}"></a></li>`;
    }).join(` `);
    return 
}
// *додає створені картинки до галереї
const cardsMarkup = (createCardMarkup(galleryItems));
galleryContainer.insertAdjacentHTML(`beforeend`, cardsMarkup);



const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: `alt`,
    captionDelay: 250 });