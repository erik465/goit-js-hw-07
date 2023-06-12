import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector('.gallery')

galleryItems.forEach(galleryItem => {
    galleryEl.insertAdjacentHTML("afterbegin", `<li class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
      <img
        class="gallery__image"
        src="${galleryItem.preview}"
        data-source="${galleryItem.original}"
        alt="${galleryItem.description}"
      />
    </a>
  </li>`)
})

galleryEl.addEventListener("click", (e) =>{
    e.preventDefault()
    if(e.target.nodeName !== "IMG"){
        return
    }

    const instance = basicLightbox.create(`
    <img src="${e.target.src}" width="800" height="600">
`)

    instance.show()
    
})