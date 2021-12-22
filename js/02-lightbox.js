// Change code below this line

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listGalleryNode = document.querySelector(".gallery");

const galleryAdd = () => {
    const galleryReturn = galleryItems
        .map(({ preview, original, description }) => {
            return `
          <li class="gallery__item">
            <a href="${original}">
             <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
            </li>
                    
                    `;
        })
        .join("");

    listGalleryNode.insertAdjacentHTML("afterbegin", galleryReturn);
};
galleryAdd();

// listGalleryNode.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (e.target.tagName !== "IMG") return;
console.log(SimpleLightbox);
const lightbox = new SimpleLightbox(".gallery a", {
    /* options */
    captionsData: "alt",
    captionDelay: 250,
});
// lightbox.options.captionsData = "alt";
// lightbox.options.captionDelay = 250;

// listGalleryNode.removeEventListener("click", e);
// });