import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listGalleryNode = document.querySelector(".gallery");
const galleryImageNode = document.querySelector(".gallery__image");

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

    const instance = basicLightbox.create(`
    <div class="modal">
       <img width="1400" height="900" src="${e.target.dataset.source}">
    </div>
`);

    instance.show();
    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
            instance.close();
        }
    });
}

// function closeModalEscape(e) {
//     if (e.code === "Escape") {
//         instance.close();
//     }
// }

galleryAdd();