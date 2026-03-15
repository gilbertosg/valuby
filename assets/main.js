import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe/dist/photoswipe-lightbox.esm.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize Swiper.js
    const swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: { slidesPerView: 1 },
            768: { slidesPerView: 3 }
        }
    });

    // Initialize PhotoSwipe
    const lightbox = new PhotoSwipeLightbox({
        gallery: '.pswp-gallery',
        children: 'a',
        pswpModule: () => import('https://unpkg.com/photoswipe')
    });
    
    lightbox.init();
});