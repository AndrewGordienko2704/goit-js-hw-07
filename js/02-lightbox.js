import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const divRef = document.querySelector('.gallery');


function createGalleryMarkup(items) {
  return items.map(
    (item) => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
  ).join('');
 
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);

divRef.innerHTML = addGalleryMarkup;


new SimpleLightbox('.gallery a', {
  disableRightClick: true,
  scrollZoom: false,
  captionDelay: 250,
  captionsData: 'alt',
});