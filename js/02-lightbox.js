// Change code below this line

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listGalleryNode = document.querySelector(".gallery");

const galleryAdd = () => {
    const galleryReturn = galleryItems
        .map(({ preview, original, description }) => {
            return `
          <li class="gallery__item">
            <a class="gallery__item" href="${original}">
             <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
            </li>
                    
                    `;
        })
        .join("");

    listGalleryNode.insertAdjacentHTML("afterbegin", galleryReturn);
};

listGalleryNode.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.tagName !== "IMG") return;
    const lightbox = new SimpleLightbox(".gallery a", {
        /* options */
    });
    lightbox.options.captionsData = "alt";
    lightbox.options.captionDelay = 250;
    // listGalleryNode.removeEventListener("click", e);
});

galleryAdd();