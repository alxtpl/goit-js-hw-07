import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listGalleryNode = document.querySelector(".gallery");

const galleryAdd = () => {
    const galleryReturn = galleryItems
        .map(({ preview, original, description }) => {
            return `<li class="gallery__item">
                         <a class="gallery__link" href="${original}">
                            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/> </a>
                    </li>`;
        })
        .join("");

    listGalleryNode.insertAdjacentHTML("afterbegin", galleryReturn);
};

listGalleryNode.addEventListener("click", bigImageXtr);

function bigImageXtr(e) {
    const dataSource = e.target.dataset.source;
    e.preventDefault();
    if (e.target.tagName !== "IMG") return;
    console.log(dataSource);
}

galleryAdd();