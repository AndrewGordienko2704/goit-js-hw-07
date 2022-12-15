import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divRef = document.querySelector('.gallery');


function createGalleryMarkup(items) {
  return items.map(
    (item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  ).join('');

  
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);

divRef.innerHTML = addGalleryMarkup;

divRef.addEventListener('click', onImageClick);

function onImageClick (evt) {
  blockStandartAction(evt);
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`<img src = "${evt.target.dataset.source}" width = "800" height "600"/>`);
  instance.show();

  divRef.addEventListener("keydown", (evt) => {
    if (evt.code === 'Escape') {
      instance.close();
    }
  });
}

function blockStandartAction (evt) {
  evt.preventDefault();
}


















































































// const ulRef = document.querySelector('.js-gallery');
// const modalRef = document.querySelector('.js-lightbox');
// const backdropRef = document.querySelector('.lightbox__overlay');
// const imageRef = document.querySelector('.lightbox__image');


// const closeBtn = document.querySelector('[data-action="close-lightbox"]');


// const cartMarkup = createPictureCartMarkup(galleryItems);
// ulRef.insertAdjacentHTML('beforeend', cartMarkup);

// ulRef.addEventListener('click', onPictureClick);
// closeBtn.addEventListener('click', onCloseBtnClick)
// modalRef.addEventListener('click', onBackdropClick);
 


// function createPictureCartMarkup(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `
//     <li class="gallery__item">
//       <a
//         class="gallery__link"
//         href = '${original}';
//       >
//         <img
//           class="gallery__image"
//           src="${preview}"
//           data-source="${original}"
//           alt="${description}"
//         />
//       </a>
//     </li>
//     `;
//     })
//     .join('');
// };

// function onPictureClick(event) {
//   event.preventDefault();
//   if (!event.target.classList.contains('gallery__image')) {
//     return;
//   }
//   // console.log(event.target);
//   window.addEventListener('keydown', onEscBtnPress);
//   modalRef.classList.add('is-open');
//   imageRef.src = event.target.dataset.source;
// }

// function onCloseBtnClick() {
//   modalRef.classList.remove('is-open');
//   window.removeEventListener('keydown', onEscBtnPress);
//   imageRef.src = '';
// }

// function onBackdropClick(event) {
//   if (backdropRef === event.target) {
//     onCloseBtnClick();
//   }
// }
// function onEscBtnPress(event) {
//   console.log(event);
//   if (event.code === 'Escape') {
//     onCloseBtnClick();
//   }
// }















// const refs = {
//   galleryList: document.querySelector('ul.gallery'),
//   lightbox: document.querySelector('.lightbox'),
//   btn: document.querySelector('[data-action="close-lightbox"]')
// };


   

// const createImage = (item, parent) => {
//   const { preview, original, description } = item;
//   const img = document.createElement('img');
  
//   img.classList.add('gallery__image');
//   img.dataset.source = original;
//   img.src = preview;
//   img.alt = description;
  
//   parent.appendChild(img);
// };

// const createLink = (item, parent) => {
//   const { original } = item;
//   const a = document.createElement('a');
  
//   a.classList.add('gallery__link');
//   a.href = original;
  
//   createImage(item, a);
  
//   parent.appendChild(a);
// };

// const createItem = (item) => {
//   const li = document.createElement('li');
//   li.classList.add('gallery__item');
  
//   createLink(item, li);
  
//   return li;
// };

// const renderListItems = (arr) => {
//   const items = arr.map( (item) => createItem(item));
  
//   refs.galleryList.append(...items);
// };

// renderListItems(images);




// function onClickHandler(e) {
//   e.preventDefault();
  
//   if(e.target.nodeName === 'IMG') {
//     refs.lightbox.classList.add('is-open');
//     refs.lightbox.querySelector('.lightbox__image').src = e.target.src;
//     refs.lightbox.querySelector('.lightbox__image').alt = e.target.alt;
//   }
// }

// function onCloseHandler(e) {
//   if(e.target.nodeName === "I" || e.target.nodeName === "BUTTON") {
//     refs.lightbox.classList.remove('is-open');
//   }
// }

// refs.galleryList.addEventListener('click', onClickHandler);
// refs.btn.addEventListener('click', onCloseHandler);
