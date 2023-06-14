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

const handleGalleryClick = (e) => {
  e.preventDefault()

    const instance = basicLightbox.create(`
    <img src="${e.target.src}" width="800" height="600">`, {
      onClose: () => {
      galleryEl.removeEventListener("click", handleGalleryClick)
    }
	})

    instance.show()
}

galleryEl.addEventListener("click", handleGalleryClick)