import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector('.gallery')



galleryItems.forEach(galleryItem => {
    galleryEl.insertAdjacentHTML("afterbegin", `<li class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
       <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
    </a>
 </li>`)
})

galleryEl.addEventListener("click", (e) =>{
    if(e.target.nodeName == "IMG"){
        e.preventDefault()
        const lightbox = new SimpleLightbox('.gallery a', {
            captions : true,
            captionSelector  : 'self',
            captionType: 'attr',
            captionsData : e.target.alt, 
            captionPosition : 'bottom',
            captionDelay : 0,
            captionClass : "caption"
        });
    }

    
})
