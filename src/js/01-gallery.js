// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.js";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(galleryItem => {
  return `
<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}" ">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      alt="${galleryItem.description}"
       //title="${galleryItem.description}"
    />
  </a>
</div>`
}).join('');
gallery.insertAdjacentHTML('beforeend', galleryMarkup);


const handleGallery = (evt) => {
  evt.preventDefault();
  let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
  });
}
gallery.addEventListener('click', handleGallery);