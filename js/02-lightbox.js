import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector('.gallery')

const galleryMarkup = galleryItems.map(({preview, original, description}) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
  })

galleryEl.insertAdjacentHTML('afterbegin', galleryMarkup.join(""))

galleryEl.addEventListener("click", handleGallery)


function handleGallery (e){
    e.preventDefault()
    if(e.target.tagName !== 'IMG'){
        return
    }
}
new SimpleLightbox('.gallery a', {
    captionsData : 'alt', 
    captionDelay : 250,
});



