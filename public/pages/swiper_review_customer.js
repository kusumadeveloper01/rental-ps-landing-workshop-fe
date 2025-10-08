import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs'
var swiper = new Swiper('.card-review-customer', {
    slidesPerView: 4, // Jumlah slide default yang tampil
    direction: 'horizontal',
    spaceBetween: 20,
    loop: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragClass: 'swiper-scrollbar-drag-custom' // Kelas custom untuk drag handle
    },
    breakpoints: {
        // Ukuran layar >= 300px
        300: {
            slidesPerView: 1,
            spaceBetween: 16,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 16,
        },

        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        }

    }
});
