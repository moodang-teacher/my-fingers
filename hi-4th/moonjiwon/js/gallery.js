import PhotoSwipeLightbox from "https://unpkg.com/photoswipe/dist/photoswipe-lightbox.esm.js";

// 갤러리 초기화 함수
function initializeGallery(galleryId) {
    const lightbox = new PhotoSwipeLightbox({
        gallery: galleryId,
        children: "a",
        pswpModule: () => import("https://unpkg.com/photoswipe"),
    });
    lightbox.init();
}

// 첫 번째 갤러리 초기화
initializeGallery("#graphic-show");
