import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listGalleryNode = document.querySelector(".gallery");

const galleryAdd = () => {
    const galleryReturn = galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
                         <a class="gallery__link" href="${original}">
                            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/> </a>
                    </div>`;
        })
        .join("");

    listGalleryNode.insertAdjacentHTML("afterbegin", galleryReturn);
};

listGalleryNode.addEventListener("click", bigImageXtr);

function bigImageXtr(e) {
    const dataSource = e.target.dataset.source;
    e.preventDefault();
    if (e.target.tagName !== "IMG") return;

    const instance = basicLightbox.create(
        `
    <div class="modal">
       <img width="1400" height="900" src="${e.target.dataset.source}">
    </div>
`, {
            onClose: () => {
                document.removeEventListener("keydown", escButton);
            },
        }
    );

    instance.show();

    document.addEventListener("keydown", escButton);

    function escButton(e) {
        if (e.code === "Escape") {
            instance.close();
        }
    }
}
galleryAdd();